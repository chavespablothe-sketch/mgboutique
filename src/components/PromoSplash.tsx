import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, X } from "lucide-react";
import packages from "@/data/packages";
import { isPackageActive, resolvePackageDates } from "@/lib/packageStatus";

const STORAGE_KEY = "promoSplashDismissed";

function parseCheckIn(ddmmyyyy: string): Date {
  const d = parseInt(ddmmyyyy.slice(0, 2), 10);
  const m = parseInt(ddmmyyyy.slice(2, 4), 10) - 1;
  const y = parseInt(ddmmyyyy.slice(4, 8), 10);
  return new Date(y, m, d);
}

function formatDateRange(checkIn: string, checkOut?: string): string {
  const ci = parseCheckIn(checkIn);
  const meses = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
  if (!checkOut) return `${ci.getDate()} de ${meses[ci.getMonth()]}`;
  const co = parseCheckIn(checkOut);
  if (ci.getMonth() === co.getMonth()) {
    return `${ci.getDate()}–${co.getDate()} de ${meses[ci.getMonth()]}`;
  }
  return `${ci.getDate()} ${meses[ci.getMonth()]} – ${co.getDate()} ${meses[co.getMonth()]}`;
}

function getNextPackage() {
  const now = new Date();
  const list = packages
    .filter((p) => isPackageActive(p, now))
    .map((p) => ({ pkg: p, dates: resolvePackageDates(p, now) }))
    .filter((x) => !!x.dates.checkIn)
    .sort((a, b) => parseCheckIn(a.dates.checkIn!).getTime() - parseCheckIn(b.dates.checkIn!).getTime());
  return list[0] || null;
}

const PromoSplash = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const next = useMemo(() => getNextPackage(), []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setDismissed(true);
      return;
    }
    const onScroll = () => {
      if (window.scrollY > 300) setVisible(true);
    };
    // fallback timer for mobile/pages sem scroll suficiente
    const timer = window.setTimeout(() => setVisible(true), 2500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    sessionStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  };

  if (dismissed || !visible || !next) return null;

  const { pkg, dates } = next;
  const period = dates.checkIn ? formatDateRange(dates.checkIn, dates.checkOut) : pkg.period;
  const href = `/ofertas/${pkg.slug}`;

  return (
    <div
      className="fixed z-40 bottom-24 inset-x-4 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs animate-fade-in"
      role="complementary"
      aria-label="Próximo fim de semana em destaque"
    >
      <Link
        to={href}
        className="group relative block overflow-hidden rounded-xl bg-primary/90 backdrop-blur-md text-primary-foreground border border-yellow-300/30 shadow-xl hover:border-yellow-300/60 hover:shadow-yellow-300/20 transition-all duration-500"
      >
        {/* Subtle shimmer sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] ease-out bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent"
        />

        <div className="relative flex items-center gap-3 p-3.5 pr-9">
          {/* Delicate pulsing dot */}
          <span className="relative flex-shrink-0 mt-0.5">
            <span className="absolute inset-0 rounded-full bg-yellow-300/50 animate-ping [animation-duration:2.4s]" />
            <span className="relative flex h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_10px_rgba(253,224,71,0.7)]" />
          </span>

          <div className="flex-1 min-w-0">
            <span className="block text-[9px] font-semibold tracking-[0.22em] uppercase text-yellow-300/90 mb-1">
              Próximo fim de semana · {period}
            </span>
            <p className="font-display text-[13px] leading-snug text-primary-foreground/95 mb-2">
              {pkg.shortTitle}
            </p>
            <span className="inline-flex items-center gap-1.5 text-yellow-300 font-body text-[10px] font-semibold uppercase tracking-[0.18em] group-hover:gap-2 transition-all">
              Garantir minha vaga <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>

        <button
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute top-1.5 right-1.5 z-10 rounded-full p-1 text-primary-foreground/40 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
        >
          <X size={12} />
        </button>
      </Link>
    </div>
  );
};

export default PromoSplash;

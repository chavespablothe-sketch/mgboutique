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
      className="fixed z-40 bottom-24 inset-x-4 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-sm animate-fade-in"
      role="complementary"
      aria-label="Próximo fim de semana em destaque"
    >
      <Link
        to={href}
        className="group relative block overflow-hidden rounded-2xl bg-primary text-primary-foreground border border-secondary/40 shadow-2xl shadow-primary/40 hover:shadow-secondary/40 transition-all duration-500"
      >
        {/* Soft pulsing border glow */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-secondary/40 animate-pulse [animation-duration:3s]" />
        {/* Shimmer sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out bg-gradient-to-r from-transparent via-secondary/25 to-transparent"
        />

        <div className="relative flex items-center gap-3 p-4 pr-10">
          <span className="relative flex-shrink-0">
            <span className="absolute inset-0 rounded-full bg-secondary/40 animate-ping" />
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary shadow-lg">
              <Sparkles size={18} />
            </span>
          </span>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-80 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">
                Próximo fim de semana · {period}
              </span>
            </div>
            <p className="font-display text-sm sm:text-base leading-snug text-primary-foreground">
              {pkg.shortTitle}
            </p>
            <span className="mt-2 inline-flex items-center gap-1.5 bg-secondary text-primary font-body text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md group-hover:brightness-110 transition-all">
              Garantir minha vaga <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>

        <button
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute top-2 right-2 z-10 rounded-full p-1 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
        >
          <X size={14} />
        </button>
      </Link>
    </div>
  );
};

export default PromoSplash;

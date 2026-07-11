import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
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

function getPaisPackage() {
  const pkg = packages.find((p) => p.slug === "dia-dos-pais-2026");
  if (!pkg) return null;
  return { pkg, dates: resolvePackageDates(pkg, new Date()) };
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
      className="fixed z-40 bottom-24 inset-x-4 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px] animate-fade-in"
      role="complementary"
      aria-label="Próximo fim de semana em destaque"
    >
      <Link
        to={href}
        className="group relative flex items-stretch overflow-hidden rounded-md bg-[#f6f1e6] text-primary border border-primary/10 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] transition-all duration-500"
      >
        {/* Vertical yellow ribbon */}
        <span aria-hidden className="w-[6px] shrink-0 bg-yellow-400" />

        <div className="flex-1 min-w-0 pl-4 pr-9 py-3.5">
          <span className="block text-[9px] font-semibold tracking-[0.28em] uppercase text-primary/50 mb-1.5">
            Próximo fim de semana
          </span>
          <p className="font-display text-[15px] leading-snug text-primary mb-0.5">
            {pkg.shortTitle}
          </p>
          <p className="font-body text-[11px] text-primary/60 italic mb-2.5">
            {period}
          </p>
          <span className="inline-flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-primary font-body text-[10px] font-bold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full shadow-sm transition-all group-hover:gap-2">
            Garantir minha vaga <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>

        <button
          onClick={handleClose}
          aria-label="Fechar"
          className="absolute top-1.5 right-1.5 z-10 rounded-full p-1 text-primary/35 hover:text-primary hover:bg-primary/10 transition-colors"
        >
          <X size={12} />
        </button>
      </Link>
    </div>
  );
};

export default PromoSplash;

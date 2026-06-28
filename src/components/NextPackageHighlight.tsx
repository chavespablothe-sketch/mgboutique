import { motion } from "framer-motion";
import { Heart, ArrowRight, Sparkles, Clock, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import packages from "@/data/packages";
import { isPackageActive, resolvePackageDates } from "@/lib/packageStatus";
import { buildOmnibeesUrl } from "@/lib/omnibees";

function parseCheckIn(ddmmyyyy: string): Date {
  const d = parseInt(ddmmyyyy.slice(0, 2), 10);
  const m = parseInt(ddmmyyyy.slice(2, 4), 10) - 1;
  const y = parseInt(ddmmyyyy.slice(4, 8), 10);
  return new Date(y, m, d);
}

function getDaysUntil(ddmmyyyy: string): number {
  const target = parseCheckIn(ddmmyyyy);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function getNextPackage() {
  const now = new Date();
  const list = packages
    .filter((p) => isPackageActive(p, now))
    .map((p) => ({ pkg: p, dates: resolvePackageDates(p, now) }))
    .filter((x) => !!x.dates.checkIn)
    .sort((a, b) => getDaysUntil(a.dates.checkIn!) - getDaysUntil(b.dates.checkIn!));
  return list[0] || null;
}

interface Theme {
  ribbon: string;
  ribbonText: string;
  icon: typeof Heart;
  iconColor: string;
  glow: string;
  border: string;
  badge: string;
  italicWord: string;
}

function getTheme(slug: string): Theme {
  if (slug === "dia-dos-namorados-2026") {
    return {
      ribbon: "bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600",
      ribbonText: "Dia dos Namorados",
      icon: Heart,
      iconColor: "text-pink-300 fill-pink-400/70",
      glow: "from-pink-500/40 via-rose-400/20 to-transparent",
      border: "border-pink-300/50",
      badge: "bg-pink-500/20 text-pink-100 border-pink-300/50",
      italicWord: "romântico",
    };
  }
  if (slug === "arraia-inverno-2026") {
    return {
      ribbon: "bg-gradient-to-r from-[#c94f4f] via-[#d97a3c] to-[#e8b94a]",
      ribbonText: "Arraiá de Inverno",
      icon: Flame,
      iconColor: "text-amber-200",
      glow: "from-amber-500/25 via-orange-400/10 to-transparent",
      border: "border-amber-200/40",
      badge: "bg-amber-500/15 text-amber-100 border-amber-300/40",
      italicWord: "junino",
    };
  }
  return {
    ribbon: "bg-gradient-to-r from-secondary to-secondary/80",
    ribbonText: "Próximo pacote",
    icon: Sparkles,
    iconColor: "text-secondary",
    glow: "from-secondary/25 via-secondary/10 to-transparent",
    border: "border-secondary/40",
    badge: "bg-secondary/15 text-secondary border-secondary/40",
    italicWord: "exclusivo",
  };
}

function urgencyLabel(days: number): string {
  if (days <= 0) return "Acontecendo agora";
  if (days < 7) return "Últimas vagas";
  if (days < 21) return "Últimos quartos";
  if (days < 45) return "Vagas limitadas";
  return `Faltam ${days} dias`;
}

const NextPackageHighlight = () => {
  const next = getNextPackage();
  if (!next) return null;
  const { pkg, dates } = next;
  const days = getDaysUntil(dates.checkIn!);
  const theme = getTheme(pkg.slug);
  const Icon = theme.icon;
  const period = dates.recurring ? dates.recurring.label : pkg.period;
  const showUrgency = days < 30;
  const isValentines = pkg.slug === "dia-dos-namorados-2026";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.6 }}
      className="relative max-w-xs mb-7"
    >
      {/* Themed glow */}
      <div className={`pointer-events-none absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br ${theme.glow} blur-2xl opacity-70 group-hover/card:opacity-100 transition-opacity duration-500`} aria-hidden />

      <Link
        to={`/ofertas/${pkg.slug}`}
        className={`group/card relative block rounded-2xl border ${theme.border} bg-primary/40 backdrop-blur-xl pl-4 pr-4 py-3 shadow-lg overflow-hidden hover:bg-primary/55 hover:border-secondary/70 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-300 ease-out`}
      >
        {/* Shimmer sweep on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-[1100ms] ease-out bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
        />

        {/* Themed floating icons */}
        <Icon className={`absolute -top-1 -right-1 ${theme.iconColor} opacity-70 animate-pulse group-hover/card:scale-125 group-hover/card:rotate-12 transition-transform duration-300`} size={20} aria-hidden />
        <Icon className={`absolute bottom-1.5 right-8 ${theme.iconColor} opacity-30 group-hover/card:opacity-60 transition-opacity`} size={11} aria-hidden />
        <Icon className={`absolute top-2 right-7 ${theme.iconColor} opacity-25 rotate-12 group-hover/card:opacity-50 transition-opacity`} size={9} aria-hidden />

        <div className="flex items-start gap-3">
          {/* Themed accent bar */}
          <div className={`w-0.5 self-stretch rounded-full ${theme.ribbon} opacity-80`} aria-hidden />

          <div className="flex-1 min-w-0">
            <h3 className="font-display text-base md:text-lg text-primary-foreground font-semibold leading-tight mb-0.5">
              {pkg.shortTitle} <span className="italic text-secondary">{theme.italicWord}</span>
            </h3>
            <p className="text-primary-foreground/60 font-body text-[11px] mb-2.5">
              {period}
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              {isValentines && (
                <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md">
                  <Heart size={8} className="fill-white" /> -10% últimos quartos
                </span>
              )}
              {showUrgency && !isValentines && (
                <span className={`inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border ${theme.badge}`}>
                  <span className="w-1 h-1 rounded-full bg-current" />
                  {days < 15 ? "Últimas vagas" : "Últimos quartos"}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-secondary font-body text-[10px] font-semibold uppercase tracking-[0.18em] group-hover:gap-1.5 transition-all">
                Ver detalhes <ArrowRight size={10} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NextPackageHighlight;

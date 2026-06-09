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
      ribbon: "bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700",
      ribbonText: "Dia dos Namorados",
      icon: Heart,
      iconColor: "text-rose-300 fill-rose-400/60",
      glow: "from-rose-500/25 via-rose-400/10 to-transparent",
      border: "border-rose-300/40",
      badge: "bg-rose-500/15 text-rose-100 border-rose-300/40",
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
  const bookingUrl = buildOmnibeesUrl({ checkIn: dates.checkIn, checkOut: dates.checkOut });
  const period = dates.recurring ? dates.recurring.label : pkg.period;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
      className="relative max-w-md mb-7"
    >
      {/* Themed glow */}
      <div className={`pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br ${theme.glow} blur-xl`} aria-hidden />

      <Link
        to={`/ofertas/${pkg.slug}`}
        className={`relative block rounded-2xl border ${theme.border} bg-primary/55 backdrop-blur-xl px-5 py-4 shadow-xl overflow-hidden group`}
      >
        {/* Floating decorative icons */}
        <Icon className={`absolute -top-1.5 -right-1.5 ${theme.iconColor} rotate-12 opacity-80 animate-pulse`} size={26} aria-hidden />
        <Icon className={`absolute bottom-1 right-10 ${theme.iconColor} opacity-40`} size={14} aria-hidden />

        {/* Ribbon */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1.5 ${theme.ribbon} text-white font-display italic text-[11px] px-3 py-1 rounded-full shadow-md`}>
            <Icon size={11} className="fill-white/60" /> {theme.ribbonText}
          </span>
          <span className="inline-flex items-center gap-1 text-secondary font-body text-[10px] uppercase tracking-[0.25em]">
            <Sparkles size={10} /> Próximo pacote
          </span>
        </div>

        <h3 className="font-display text-xl md:text-2xl text-primary-foreground font-semibold leading-tight mb-1.5">
          {pkg.shortTitle} <span className="italic text-secondary">{theme.italicWord}</span>
        </h3>
        <p className="text-primary-foreground/70 font-body text-xs md:text-sm mb-3">
          {period} · {pkg.nights}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border ${theme.badge}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {urgencyLabel(days)}
          </span>
          {days > 0 && (
            <span className="inline-flex items-center gap-1 text-primary-foreground/60 font-body text-[11px]">
              <Clock size={11} className="text-secondary" />
              em <strong className="text-secondary mx-1">{days} dias</strong>
            </span>
          )}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 bg-cta text-cta-foreground font-body text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full hover:brightness-110 transition-all shadow-md shadow-cta/30"
          >
            <Sparkles size={12} /> Reservar
          </a>
          <span className="inline-flex items-center gap-1 text-secondary font-body text-[11px] font-semibold uppercase tracking-[0.15em] group-hover:gap-2 transition-all">
            Ver detalhes <ArrowRight size={12} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default NextPackageHighlight;

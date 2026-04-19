import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import packages from "@/data/packages";
import { buildOmnibeesUrl } from "@/lib/omnibees";
import { monthPhrase } from "@/lib/monthPhrase";

/* ── helpers ─────────────────────────────────────────────── */

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

function getUrgencyBadge(days: number): { label: string; className: string; pulse: boolean } | null {
  if (days < 15)
    return {
      label: "Últimas vagas",
      className: "bg-primary text-primary-foreground",
      pulse: true,
    };
  if (days < 30)
    return {
      label: "Últimos quartos",
      className: "bg-secondary text-secondary-foreground",
      pulse: true,
    };
  if (days < 60)
    return {
      label: "Vagas limitadas",
      className: "bg-secondary/20 text-secondary border border-secondary/40",
      pulse: false,
    };
  return null;
}

/** Override images for the home section cards */
const homeImageOverrides: Record<string, string> = {
  "tiradentes-2026": "/images/pacotes-quadriciclo.png",
  "primeiro-de-maio-2026": "/images/pacotes-playground.png",
  "dia-das-maes-2026": "/images/pacotes-arara.png",
  "corpus-christi-2026": "/images/pacotes-inflavel.png",
};

function getHomeImage(pkg: (typeof packages)[0]): string {
  return homeImageOverrides[pkg.slug] || pkg.image;
}

function getNextPackages() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  return packages
    .filter((p) => p.checkIn)
    .filter((p) => {
      const days = getDaysUntil(p.checkIn!);
      if (days > 0) return true;
      // Keep packages from the current month even if already started/past
      const d = parseCheckIn(p.checkIn!);
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    })
    .sort((a, b) => {
      const da = getDaysUntil(a.checkIn!);
      const db = getDaysUntil(b.checkIn!);
      // Future first (smallest positive), then past (closest to today)
      if (da > 0 && db <= 0) return -1;
      if (db > 0 && da <= 0) return 1;
      if (da > 0 && db > 0) return da - db;
      return db - da;
    });
}

/* ── sub-components ──────────────────────────────────────── */

function UrgencyBanner({ pkg, days }: { pkg: (typeof packages)[0]; days: number }) {
  const badge = getUrgencyBadge(days);
  const bookingUrl = buildOmnibeesUrl({ checkIn: pkg.checkIn, checkOut: pkg.checkOut });

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-primary/5 border border-primary/15 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 mb-14"
    >
      <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
        <span className="flex items-center gap-1.5 text-foreground font-body text-sm font-semibold">
          <Clock size={15} className="text-secondary" />
          {pkg.shortTitle} em <strong className="text-secondary">{days} dias</strong>
        </span>
        {badge && (
          <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${badge.className}`}>
            {badge.label}
          </span>
        )}
      </div>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 bg-cta text-cta-foreground font-body text-sm font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition-all whitespace-nowrap shadow-sm"
      >
        Garantir minha vaga <ArrowRight size={14} />
      </a>
    </motion.div>
  );
}

function DiscountSeal() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary border border-secondary/25 text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide">
      <Tag size={11} />
      Desconto já aplicado
    </span>
  );
}

function FeaturedCard({ pkg, days }: { pkg: (typeof packages)[0]; days: number }) {
  const badge = getUrgencyBadge(days);
  const bookingUrl = buildOmnibeesUrl({ checkIn: pkg.checkIn, checkOut: pkg.checkOut });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 bg-card/60 rounded-3xl p-4 lg:p-6 border border-border/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
    >
      {/* Image */}
      <Link to={`/tarifas/${pkg.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
          <img
            src={getHomeImage(pkg)}
            alt={pkg.shortTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          {badge && (
            <span className="absolute top-4 left-4 z-10">
              {badge.pulse && (
                <span className={`absolute inset-0 rounded-full ${badge.className} animate-ping opacity-40`} />
              )}
              <span className={`relative text-[11px] font-semibold px-3.5 py-1.5 rounded-full shadow-lg ${badge.className} flex items-center gap-1.5`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 animate-pulse" />
                {badge.label}
              </span>
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col justify-center space-y-5 py-2 lg:pr-4">
        <div>
          <span className="text-secondary font-body text-[11px] tracking-[0.4em] uppercase block mb-3">
            Próximo feriado
          </span>
          <h3 className="font-display text-3xl md:text-4xl text-foreground font-semibold leading-tight">
            {pkg.shortTitle}
          </h3>
        </div>
        <p className="text-muted-foreground font-body text-base leading-relaxed">
          {pkg.period} · {pkg.nights}
        </p>
        <p className="text-muted-foreground font-body text-[15px] leading-relaxed line-clamp-3">
          {pkg.description}
        </p>
        <div className="flex flex-wrap gap-2 items-center">
          <DiscountSeal />
          {badge && (
            <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${badge.className}`}>
              {badge.label}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-cta-foreground font-body text-sm font-semibold px-7 py-3 rounded-full hover:brightness-110 transition-all shadow-md shadow-cta/20"
          >
            <Sparkles size={14} />
            Reservar agora
          </a>
          <Link
            to={`/tarifas/${pkg.slug}`}
            className="inline-flex items-center gap-1.5 border border-foreground/15 text-foreground font-body text-sm px-6 py-3 rounded-full hover:bg-muted transition-colors"
          >
            Ver detalhes <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function PackageCard({ pkg, i }: { pkg: (typeof packages)[0]; i: number }) {
  const days = getDaysUntil(pkg.checkIn!);
  const badge = getUrgencyBadge(days);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="hover:shadow-xl hover:-translate-y-1 transition-all duration-500 rounded-2xl"
    >
      <Link to={`/tarifas/${pkg.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
          <img
            src={getHomeImage(pkg)}
            alt={pkg.shortTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          {badge && (
            <span className="absolute top-3 left-3 z-10">
              {badge.pulse && (
                <span className={`absolute inset-0 rounded-full ${badge.className} animate-ping opacity-40`} />
              )}
              <span className={`relative text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-lg ${badge.className} flex items-center gap-1.5`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 animate-pulse" />
                {badge.label}
              </span>
            </span>
          )}
        </div>
        <div className="space-y-2.5">
          <h4 className="font-display text-xl text-foreground font-semibold group-hover:text-secondary transition-colors">
            {pkg.shortTitle}
          </h4>
          <p className="text-muted-foreground font-body text-sm">
            {pkg.period} · {pkg.nights}
          </p>
          <DiscountSeal />
          <span className="inline-flex items-center gap-1.5 text-cta font-body text-sm font-semibold group-hover:gap-2.5 transition-all border border-cta/30 rounded-full px-5 py-2 mt-1 hover:bg-cta/5">
            Ver tarifas especiais <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── main section ────────────────────────────────────────── */

const OffersSection = () => {
  const upcoming = getNextPackages();
  if (upcoming.length === 0) return null;

  const featured = upcoming[0];
  const featuredDays = getDaysUntil(featured.checkIn!);
  const secondary = upcoming.slice(1, 4);

  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-4">
        {/* Urgency banner */}
        <UrgencyBanner pkg={featured} days={featuredDays} />

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-4 block">
            Próximos feriados
          </span>
          <p className="font-display italic text-secondary text-xl md:text-2xl mb-3">
            {monthPhrase()}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6 leading-[1.05]">
            Pacotes <span className="italic text-secondary">2026</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Cada feriado, uma experiência única. Pensão completa, recreação e momentos inesquecíveis.
          </p>
        </motion.div>

        {/* Featured highlight */}
        <FeaturedCard pkg={featured} days={featuredDays} />

        {/* Secondary grid */}
        {secondary.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14">
            {secondary.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} i={i} />
            ))}
          </div>
        )}

        {/* View all */}
        <div className="text-center">
          <Link
            to="/tarifas"
            className="inline-flex items-center gap-2 border border-foreground/15 text-foreground hover:bg-muted font-body uppercase tracking-[0.15em] px-8 py-3 rounded-full text-sm transition-colors"
          >
            Ver todos os pacotes de 2026
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;

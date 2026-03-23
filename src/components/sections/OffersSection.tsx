import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import packages from "@/data/packages";

const OffersSection = () => {
  const featured = packages.slice(0, 3);

  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-4 block">
            Próximos feriados
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6 leading-[1.05]">
            Pacotes <span className="italic text-secondary">2026</span>
          </h2>
          <p className="text-editorial text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Cada feriado, uma experiência única. Pensão completa, recreação e momentos inesquecíveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featured.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{pkg.shortTitle}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-4">
                  <Calendar size={14} className="text-secondary" />
                  {pkg.period} · {pkg.nights}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="border-t border-border pt-4 mb-5">
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">a partir de</p>
                  <p className="text-2xl font-display font-semibold text-foreground">{pkg.price}</p>
                  <p className="text-secondary text-sm font-body font-semibold">{pkg.priceNote}</p>
                </div>

              <Button asChild size="lg" className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-body text-sm uppercase tracking-wider gap-2 rounded-full shadow-lg shadow-cta/20">
                  <Link to={`/tarifas/${pkg.slug}`}>
                    <CalendarDays size={14} />
                    Ver pacote <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-muted font-body uppercase tracking-[0.15em] px-8 rounded-full">
            <Link to="/pacotes">Ver todos os {packages.length} pacotes de 2026</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;

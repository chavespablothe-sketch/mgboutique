import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Check, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import packages from "@/data/packages";

const OffersSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Ofertas Especiais
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-4">
            Pacotes para toda a <span className="italic text-secondary">família</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Todos os pacotes incluem pensão completa, atividades recreativas e crianças até 6 anos não pagam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className={`absolute top-4 left-4 ${pkg.tagColor} text-primary-foreground text-xs font-body uppercase tracking-wider px-3 py-1 rounded`}>
                  {pkg.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{pkg.shortTitle}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-3">
                  <Calendar size={14} />
                  {pkg.period} · {pkg.nights}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 line-clamp-3">
                  {pkg.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pkg.highlights.slice(0, 3).map((h, j) => (
                    <span key={j} className="flex items-center gap-1 text-xs font-body text-foreground bg-muted px-2 py-1 rounded-full">
                      <Check size={8} className="text-secondary" /> {h}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground font-body mb-4">
                  <Baby size={12} className="text-secondary" /> Crianças até 6 anos: grátis
                </div>
                <div className="flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground font-body">a partir de</p>
                    <p className="text-2xl font-display font-semibold text-foreground">{pkg.price}</p>
                    <p className="text-secondary text-xs font-body font-semibold">{pkg.priceNote}</p>
                  </div>
                  <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body text-xs uppercase tracking-wider gap-1">
                    <Link to={`/pacotes/${pkg.slug}`}>
                      Ver detalhes <ArrowRight size={12} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted font-body uppercase tracking-wider">
            <Link to="/pacotes">Ver todos os pacotes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;

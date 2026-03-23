import { motion } from "framer-motion";
import { ArrowRight, Percent } from "lucide-react";
import { Link } from "react-router-dom";
import packages from "@/data/packages";

const OffersSection = () => {
  const featured = packages.slice(0, 3);

  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-4">
        {/* Consumer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 bg-cta rounded-2xl p-8 md:p-10 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-cta-foreground/10 px-4 py-1.5 rounded-full mb-4">
            <Percent size={14} className="text-cta-foreground" />
            <span className="text-cta-foreground font-body text-xs font-bold uppercase tracking-wider">Mês do Consumidor</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-cta-foreground font-bold mb-2">
            Até 30% OFF em pacotes selecionados
          </h3>
          <p className="text-cta-foreground/80 font-body text-sm">
            Os valores promocionais já estão aplicados nos pacotes abaixo. Vagas limitadas.
          </p>
        </motion.div>

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

        {/* Clean card layout matching TarifasPage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {featured.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/tarifas/${pkg.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                  <img
                    src={pkg.image}
                    alt={pkg.shortTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-secondary font-body text-sm">{pkg.period}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2">
                    {pkg.description.length > 100 ? pkg.description.slice(0, 100) + "…" : pkg.description}
                  </p>
                  <p className="font-display text-xl font-semibold text-foreground">
                    A partir de {pkg.price}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-secondary font-body text-sm font-semibold group-hover:gap-2.5 transition-all border border-secondary/30 rounded-full px-5 py-2 mt-2 hover:bg-secondary/5">
                    Reservar agora <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/tarifas"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground hover:bg-muted font-body uppercase tracking-[0.15em] px-8 py-3 rounded-full text-sm transition-colors"
          >
            Ver todos os pacotes de 2026
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Snowflake } from "lucide-react";
import { agostoImages, feriasJulhoImages } from "@/lib/siteImages";

const AgostoBanner = () => {
  return (
    <section className="py-12 lg:py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/agosto"
            className="group relative block overflow-hidden rounded-2xl border border-secondary/30 shadow-2xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${feriasJulhoImages.recreacao})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" aria-hidden />

            <div className="relative grid md:grid-cols-[1.4fr_1fr] items-center gap-6 px-6 py-10 md:px-12 md:py-14">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-secondary font-body text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4">
                  <Snowflake size={14} /> Agosto de 2026
                </span>
                <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-[1.1] mb-4">
                  Festival de Fondue e um agosto para a <span className="italic text-secondary">família toda</span>.
                </h2>
                <p className="text-primary-foreground/80 font-body text-sm md:text-base mb-6 leading-relaxed">
                  A partir de 08/08, todos os sábados têm fondue de queijo, carnes selecionadas e fondue de chocolate — enquanto as crianças aproveitam recreação monitorada, fazendinha e piscina aquecida.
                </p>
                <span className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground font-body uppercase tracking-[0.15em] text-xs md:text-sm px-6 py-3 rounded-md shadow-lg group-hover:gap-4 transition-all">
                  Ver pacotes de agosto <ArrowRight size={16} />
                </span>
              </div>

              <div className="hidden md:grid grid-cols-2 gap-3">
                <img
                  src={agostoImages.fondueCarne}
                  alt="Fondue de queijo com carnes selecionadas"
                  className="rounded-xl object-cover w-full h-32 lg:h-40 shadow-lg"
                  loading="lazy"
                />
                <img
                  src={agostoImages.fondueChocolate}
                  alt="Fondue de chocolate com morangos"
                  className="rounded-xl object-cover w-full h-32 lg:h-40 shadow-lg mt-6"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AgostoBanner;

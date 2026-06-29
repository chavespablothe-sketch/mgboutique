import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sun } from "lucide-react";
import { feriasJulhoImages } from "@/lib/siteImages";

const FeriasJulhoBanner = () => {
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
            to="/ferias-de-julho"
            className="group relative block overflow-hidden rounded-2xl border border-secondary/30 shadow-2xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${feriasJulhoImages.bolhas})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" aria-hidden />

            <div className="relative px-6 py-10 md:px-12 md:py-14 lg:py-16 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-secondary font-body text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4">
                <Sun size={14} /> Férias de Julho 2026
              </span>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-[1.1] mb-4">
                Um julho inteiro para as crianças <span className="italic text-secondary">amarem</span>.
              </h2>
              <p className="text-primary-foreground/80 font-body text-sm md:text-base mb-6 leading-relaxed">
                Programação recreativa completa, de segunda a domingo: fazendinha, oficinas, gincanas, skibunda e muito mais.
              </p>
              <span className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground font-body uppercase tracking-[0.15em] text-xs md:text-sm px-6 py-3 rounded-md shadow-lg group-hover:gap-4 transition-all">
                Conheça a programação <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeriasJulhoBanner;

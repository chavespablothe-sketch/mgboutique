import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, UtensilsCrossed, Sparkles } from "lucide-react";

const AmenitiesSection = () => {
  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-4 block">
            Experiências que marcam
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold leading-[1.05]">
            Para <span className="italic text-secondary">descobrir</span>
          </h2>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 max-w-6xl mx-auto">
          {/* Spa - large left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 md:row-span-2"
          >
            <Link to="/experiencias" className="group block relative overflow-hidden rounded-2xl h-[420px] md:h-full">
              <img
                src="https://www.minhagloria.com.br/lovable-uploads/04460747-2a8e-4012-a6be-1b1819ad5997.png"
                alt="Spa e Bem-estar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles size={18} className="text-secondary" />
                  </div>
                  <span className="text-secondary/80 font-body text-xs uppercase tracking-widest">Bem-estar</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-primary-foreground font-semibold hero-text-shadow">
                  Spa & Massagem
                </h3>
                <p className="text-primary-foreground/70 font-body text-sm mt-2 max-w-sm">
                  Momentos de relaxamento profundo com tratamentos exclusivos em meio à natureza.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Trilhas - top right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="md:col-span-5"
          >
            <Link to="/experiencias" className="group block relative overflow-hidden rounded-2xl h-[240px] md:h-[280px]">
              <img
                src="https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png"
                alt="Trilhas e passeios"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf size={16} className="text-secondary" />
                  <span className="text-secondary/80 font-body text-[10px] uppercase tracking-widest">Aventura</span>
                </div>
                <h3 className="font-display text-2xl text-primary-foreground font-semibold hero-text-shadow">
                  Trilhas & Passeios
                </h3>
              </div>
            </Link>
          </motion.div>

          {/* Gastronomia - bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="md:col-span-5"
          >
            <Link to="/gastronomia" className="group block relative overflow-hidden rounded-2xl h-[240px] md:h-[280px]">
              <img
                src="https://www.minhagloria.com.br/lovable-uploads/fdf9bc84-d84a-4376-8178-95e596cf51c4.png"
                alt="Gastronomia do Chef"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <UtensilsCrossed size={16} className="text-secondary" />
                  <span className="text-secondary/80 font-body text-[10px] uppercase tracking-widest">Sabores</span>
                </div>
                <h3 className="font-display text-2xl text-primary-foreground font-semibold hero-text-shadow">
                  Gastronomia
                </h3>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;

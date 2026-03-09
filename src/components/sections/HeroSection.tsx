import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-1.jpg')`,
            animation: 'subtle-zoom 20s ease-in-out infinite alternate',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-8"
        >
          <span className="text-secondary/80 font-body text-xs tracking-[0.5em] uppercase">
            Hotel Boutique · Bom Jardim, RJ
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary-foreground font-semibold mb-8 leading-[0.9] tracking-tight"
        >
          Onde a natureza
          <br />
          <span className="italic text-secondary">abraça</span> você
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-editorial text-primary-foreground/80 text-xl md:text-2xl lg:text-3xl max-w-3xl mb-12 leading-relaxed"
        >
          Em meio à Mata Atlântica, um refúgio exclusivo para famílias 
          que buscam memórias inesquecíveis, natureza exuberante e 
          o conforto de um hotel boutique
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body uppercase tracking-[0.2em] gap-3 px-10 py-6 text-sm rounded-full shadow-xl">
            <a href="https://wa.me/5522997792023?text=Olá! Gostaria de fazer uma reserva no Minha Glória." target="_blank" rel="noopener noreferrer">
              <CalendarDays size={16} />
              Reservar sua estadia <ArrowRight size={16} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-secondary/60 text-secondary hover:bg-secondary/10 font-body uppercase tracking-[0.2em] px-10 py-6 text-sm rounded-full">
            <Link to="/pacotes">
              Ver pacotes 2026
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-foreground/40 font-body text-[10px] tracking-[0.3em] uppercase">Descubra</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
        </div>
      </motion.div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.12); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

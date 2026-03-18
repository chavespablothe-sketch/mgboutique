import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DateSearchBar from "@/components/DateSearchBar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-32 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-1.jpg')`,
            animation: 'subtle-zoom 25s ease-in-out infinite alternate',
          }}
        />
        {/* Gentle cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="mb-6"
          >
            <span className="text-secondary/80 font-body text-[10px] tracking-[0.5em] uppercase">
              Hotel Boutique · Bom Jardim, RJ
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold mb-8 leading-[1.05] tracking-tight"
          >
            Seu refúgio exclusivo
            <br />
            <span className="italic text-secondary">no campo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
          >
            Um hotel boutique onde a natureza encontra o luxo
            em perfeita harmonia
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Button asChild variant="outline" size="lg" className="border-secondary/50 text-secondary hover:bg-secondary/10 font-body uppercase tracking-[0.15em] px-8 py-5 text-sm rounded-full backdrop-blur-sm">
              <Link to="/pacotes">
                Ver pacotes 2026 <ArrowRight size={14} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Booking bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary/80 backdrop-blur-xl rounded-t-2xl p-5 border-t border-x border-secondary/10 shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.3)]">
            <DateSearchBar />
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

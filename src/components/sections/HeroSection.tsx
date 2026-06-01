import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import DateSearchBar from "@/components/DateSearchBar";

const VIDEO_URL = "https://minha-gloria.b-cdn.net/hotel_fazenda_minha_gl%C3%B3ria_-_apresenta%C3%A7%C3%A3o_fev%E2%A7%B82022_-_2_v3%20(1080p).mp4";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom-bg"
            style={{ backgroundImage: `url('/images/hero-aerial.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/15 to-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <div className="max-w-2xl">
            

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-6 leading-[1.08] tracking-tight drop-shadow-lg"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}
            >
              Um hotel boutique com alma,
              <br />
              <span className="italic text-secondary drop-shadow-lg">cercado de verde,</span>
              <br />
              feito pra casais e famílias
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-primary-foreground/70 font-body text-base md:text-lg max-w-md mb-6 leading-relaxed"
            >
            </motion.p>

            {/* Corpus Christi highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mb-8"
            >
              <Link
                to="/ofertas/corpus-christi-2026"
                className="group relative inline-flex items-stretch gap-0 overflow-hidden rounded-2xl bg-gradient-to-r from-secondary via-amber-400 to-secondary text-primary shadow-2xl shadow-secondary/40 hover:shadow-secondary/60 hover:scale-[1.02] transition-all duration-500 ring-1 ring-secondary/60"
              >
                {/* shimmer */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* OFF badge */}
                <span className="relative flex flex-col items-center justify-center px-4 py-2 bg-primary text-secondary">
                  <span className="font-display text-2xl leading-none font-bold">10%</span>
                  <span className="text-[9px] font-body font-bold tracking-[0.2em] uppercase mt-0.5">OFF</span>
                </span>

                <span className="relative flex items-center gap-3 pl-4 pr-5 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-body font-bold tracking-[0.18em] uppercase text-primary/80">
                      Corpus Christi · Últimos quartos
                    </span>
                    <span className="font-display text-sm md:text-base text-primary font-semibold">
                      4 a 6 de junho 2026
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button asChild variant="outline" size="lg" className="border-secondary/50 text-secondary hover:bg-secondary/10 font-body uppercase tracking-[0.15em] px-8 py-5 text-xs rounded-full backdrop-blur-sm">
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
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-0 left-0 right-0 z-20 hidden lg:block"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-primary/80 backdrop-blur-xl rounded-t-2xl p-5 border-t border-x border-secondary/10 shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.3)]">
              <DateSearchBar />
            </div>
          </div>
        </motion.div>

        {/* zoom animation now in index.css */}
      </section>

      {/* Video Section */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
                poster="/images/welcome-aerial.webp"
              >
                <source src={VIDEO_URL} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

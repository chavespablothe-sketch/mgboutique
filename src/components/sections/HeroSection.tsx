import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5"
            >
              <Link
                to="/pacotes/dia-das-maes-2026"
                className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-md transition-all overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(340 82% 52% / 0.92), hsl(335 75% 45% / 0.92))",
                  boxShadow: "0 0 0 1px hsl(340 90% 70% / 0.5), 0 8px 30px -8px hsl(340 80% 50% / 0.6)",
                }}
              >
                <span
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: "hsl(340 82% 60% / 0.5)", animationDuration: "2.2s" }}
                />
                <span className="relative w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                <span className="relative font-display text-white text-sm sm:text-base font-bold tracking-wide" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}>
                  Dia das Mães · 15% OFF
                </span>
                <span className="relative hidden sm:inline text-white/90 text-xs font-body tracking-wide">
                  últimos quartos
                </span>
                <ArrowRight size={13} className="relative text-white group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

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
              className="text-primary-foreground/70 font-body text-base md:text-lg max-w-md mb-10 leading-relaxed"
            >
              
            </motion.p>

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

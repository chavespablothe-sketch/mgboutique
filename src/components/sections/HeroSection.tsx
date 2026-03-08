import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, Users, Tag } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-secondary font-body text-sm tracking-[0.4em] uppercase mb-4">
            Bem-vindo ao
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-semibold mb-6 leading-tight">
            Seu refúgio exclusivo
            <br />
            <span className="italic text-secondary">no campo</span>
          </h1>
          <p className="text-white/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Descubra o equilíbrio perfeito entre luxo e natureza em meio à 
            Mata Atlântica da região serrana do Rio de Janeiro.
          </p>
        </motion.div>

        {/* Booking bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
            <div className="space-y-1">
              <label className="text-white/70 text-xs font-body uppercase tracking-wider flex items-center gap-1">
                <CalendarDays size={12} /> Check-in
              </label>
              <Input type="date" className="bg-white/20 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <div className="space-y-1">
              <label className="text-white/70 text-xs font-body uppercase tracking-wider flex items-center gap-1">
                <CalendarDays size={12} /> Check-out
              </label>
              <Input type="date" className="bg-white/20 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <div className="space-y-1">
              <label className="text-white/70 text-xs font-body uppercase tracking-wider flex items-center gap-1">
                <Users size={12} /> Hóspedes
              </label>
              <Input type="number" min={1} max={10} defaultValue={2} className="bg-white/20 border-white/20 text-white" />
            </div>
            <div className="space-y-1">
              <label className="text-white/70 text-xs font-body uppercase tracking-wider flex items-center gap-1">
                <Tag size={12} /> Cupom
              </label>
              <Input placeholder="Código" className="bg-white/20 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-wider h-10">
              Reservar
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

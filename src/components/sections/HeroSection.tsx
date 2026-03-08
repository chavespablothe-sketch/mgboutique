import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, Users, Tag } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-semibold mb-6 leading-tight">
            Seu refúgio
            <br />
            exclusivo
            <br />
            <span className="italic text-secondary">no campo</span>
          </h1>
          <p className="text-white/80 font-body text-lg md:text-xl mb-12 italic">
            Um hotel boutique onde a natureza encontra o luxo
            <br />em perfeita harmonia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-5xl bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
            <div className="space-y-1 md:col-span-1">
              <label className="text-white/70 text-xs font-body uppercase tracking-wider flex items-center gap-1">
                <CalendarDays size={12} /> Check-in / Check-out
              </label>
              <Input type="text" placeholder="CHECK-IN / CHECK-OUT" className="bg-white/20 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <div className="space-y-1">
              <label className="text-white/70 text-xs font-body uppercase tracking-wider flex items-center gap-1">
                <Users size={12} /> Hóspedes
              </label>
              <Input type="text" defaultValue="2 adultos" className="bg-white/20 border-white/20 text-white" />
            </div>
            <div className="space-y-1">
              <label className="text-white/70 text-xs font-body uppercase tracking-wider flex items-center gap-1">
                <Tag size={12} /> Cupom (opcional)
              </label>
              <Input placeholder="CUPOM (OPCIONAL)" className="bg-white/20 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-wider h-10 md:col-span-2">
              Quero reservar
            </Button>
          </div>
        </motion.div>
      </div>

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

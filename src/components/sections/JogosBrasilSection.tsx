import { motion } from "framer-motion";
import { Tv, Users, Trophy } from "lucide-react";

const JogosBrasilSection = () => {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl border border-secondary/30 bg-card overflow-hidden shadow-sm">
            {/* Subtle accent stripe */}
            <div
              className="absolute inset-x-0 top-0 h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--secondary)) 30%, hsl(var(--secondary)) 70%, transparent)",
              }}
              aria-hidden
            />

            <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row md:items-center gap-8">
              <div className="shrink-0 flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                <div className="w-14 h-14 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                  <Trophy className="text-secondary" size={22} aria-hidden />
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-secondary font-body font-semibold">
                  Especial · Seleção
                </span>
              </div>

              <div className="flex-1">
                <h2 className="font-display text-2xl md:text-3xl text-foreground font-semibold leading-tight mb-3">
                  Torça com a gente nos{" "}
                  <span className="italic text-secondary">jogos do Brasil</span>
                </h2>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  Preparamos um espaço reservado no salão para você assistir aos
                  jogos da seleção — com a gastronomia, o aconchego e o clima de
                  hotel boutique que você já conhece.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm font-body text-foreground/70">
                  <span className="inline-flex items-center gap-2">
                    <Tv size={14} className="text-secondary" aria-hidden />
                    Espaço reservado para assistir
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Users size={14} className="text-secondary" aria-hidden />
                    Recepção atenta para receber você
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JogosBrasilSection;

import { Tv, Users, Trophy } from "lucide-react";
import jogosFoto from "@/assets/jogos-brasil.jpg";

const JogosBrasilSection = () => {
  return (
    <section className="bg-background py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl border border-secondary/30 bg-card overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Texto */}
            <div className="min-w-0 p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-5 order-2 md:order-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0">
                  <Trophy className="text-secondary" size={20} aria-hidden />
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-secondary font-body font-semibold">
                  Especial · Seleção
                </span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl text-foreground font-semibold leading-tight">
                Torça com a gente nos{" "}
                <span className="italic text-secondary">jogos do Brasil</span>
              </h2>

              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                Preparamos um espaço reservado no salão para você assistir aos
                jogos da seleção — com a gastronomia, o aconchego e o clima de
                hotel boutique que você já conhece.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm font-body text-foreground/70">
                <span className="inline-flex items-center gap-2">
                  <Tv size={14} className="text-secondary shrink-0" aria-hidden />
                  Espaço reservado para assistir
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users size={14} className="text-secondary shrink-0" aria-hidden />
                  Recepção atenta para receber você
                </span>
              </div>
            </div>

            {/* Imagem */}
            <div className="min-w-0 order-1 md:order-2 aspect-[4/3] md:aspect-auto md:h-full">
              <img
                src={jogosFoto}
                alt="Salão do Minha Glória Hotel Boutique decorado para os jogos da seleção brasileira"
                className="w-full h-full object-cover block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JogosBrasilSection;

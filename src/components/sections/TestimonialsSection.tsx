import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Fernanda S.",
    text: "Uma experiência inesquecível! O chalé era perfeito, a comida divina e o atendimento impecável. Já estamos planejando a volta.",
    rating: 5,
    origin: "São Paulo, SP",
  },
  {
    name: "Ricardo & Ana",
    text: "Comemoramos nosso aniversário de casamento e foi mágico. O spa é maravilhoso e a vista das montanhas é de tirar o fôlego.",
    rating: 5,
    origin: "Rio de Janeiro, RJ",
  },
  {
    name: "Família Santos",
    text: "Levamos as crianças e todos adoraram! As trilhas, a piscina e a programação infantil fizeram da viagem algo especial.",
    rating: 5,
    origin: "Belo Horizonte, MG",
  },
  {
    name: "Carla M.",
    text: "O lugar mais bonito e acolhedor que já conheci. Cada detalhe é pensado com carinho. Recomendo de olhos fechados!",
    rating: 5,
    origin: "Niterói, RJ",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold">
            O que dizem nossos hóspedes
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-none w-full px-4">
                  <div className="text-center">
                    <Quote className="mx-auto text-secondary/30 mb-6" size={48} />
                    <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                      "{t.text}"
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={16} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="font-display text-lg font-semibold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground font-body text-sm">{t.origin}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

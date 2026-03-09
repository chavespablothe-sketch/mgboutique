import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Silva",
    text: "Uma experiência absolutamente inesquecível! O Minha Glória Hotel Boutique superou todas as nossas expectativas. A vista da floresta, o atendimento impecável e as acomodações luxuosas tornaram nossa lua de mel perfeita. Cada detalhe, da decoração do chalé ao café da manhã artesanal, demonstra um cuidado que é raro encontrar.",
    rating: 5,
    origin: "São Paulo, SP",
    occasion: "Lua de Mel",
  },
  {
    name: "Ricardo & Ana",
    text: "Comemoramos nosso aniversário de casamento e foi mágico. O spa é maravilhoso, a comida é excepcional e a vista das montanhas é de tirar o fôlego. Mas o que mais nos marcou foi o atendimento — todos nos chamavam pelo nome, sabiam nossas preferências. É a essência de um hotel boutique de verdade. Voltaremos muitas vezes!",
    rating: 5,
    origin: "Rio de Janeiro, RJ",
    occasion: "Aniversário de Casamento",
  },
  {
    name: "Família Santos",
    text: "Levamos nossas três crianças e todos adoraram! Os pequenos não queriam ir embora da fazendinha — ficaram apaixonados pelas lhamas. A recreação é impecável, as trilhas são seguras e a programação infantil é pensada com muito carinho. Enquanto eles se divertiam, aproveitamos o spa sem preocupação. Hotel perfeito para famílias!",
    rating: 5,
    origin: "Belo Horizonte, MG",
    occasion: "Férias em Família",
  },
  {
    name: "Carla M.",
    text: "O lugar mais bonito e acolhedor que já conheci na vida. Fui para o pacote de Dia das Mães com minha filha e foi transformador. A natureza, o silêncio, a comida preparada com tanto amor... Chorei de emoção no café da manhã quando vi o sol nascer entre as montanhas. Cada momento lá é uma pausa que a gente precisa.",
    rating: 5,
    origin: "Niterói, RJ",
    occasion: "Dia das Mães",
  },
  {
    name: "Pedro Almeida",
    text: "Já me hospedei em hotéis do mundo inteiro e posso dizer: o Minha Glória é especial. Não é sobre luxo ostensivo — é sobre cuidado genuíno. O jantar com lareira acesa, o vinho harmonizado, o som da natureza... Tudo orquestrado com uma elegância que parece natural. Nota 10 absoluto.",
    rating: 5,
    origin: "Campinas, SP",
    occasion: "Dia dos Namorados",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 lg:py-40 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-8">
            Depoimentos
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold leading-[1.1]">
            Histórias de quem <span className="italic text-secondary">viveu</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-none w-full px-4 md:px-12">
                  <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center gap-1.5 mb-8">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={20} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="editorial-quote text-2xl md:text-3xl lg:text-4xl text-foreground/90 leading-snug mb-10">
                      "{t.text}"
                    </p>
                    <div>
                      <p className="font-display text-xl font-semibold text-foreground">{t.name}</p>
                      <p className="text-secondary font-body text-sm tracking-wider uppercase mt-1">{t.occasion}</p>
                      <p className="text-muted-foreground font-body text-sm mt-1">{t.origin}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={scrollPrev} className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:bg-muted transition-colors shadow-sm">
            <ChevronLeft size={22} />
          </button>
          <button onClick={scrollNext} className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border text-foreground flex items-center justify-center hover:bg-muted transition-colors shadow-sm">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

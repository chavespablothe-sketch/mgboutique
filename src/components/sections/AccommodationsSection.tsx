import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Users, Maximize, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";

const chalets = [
  {
    name: "Chalé Imperial",
    description: "Suíte luxuosa com banheira de hidromassagem, lareira e vista panorâmica para as montanhas.",
    capacity: "2 hóspedes",
    size: "65m²",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chalé Real",
    description: "Espaço generoso com varanda privativa, sala de estar e banheira externa com vista para o vale.",
    capacity: "4 hóspedes",
    size: "90m²",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chalé Nobre",
    description: "Chalé aconchegante com decoração rústica sofisticada, perfeito para casais em busca de privacidade.",
    capacity: "2 hóspedes",
    size: "50m²",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chalé Família",
    description: "Amplo e confortável, com dois quartos, cozinha completa e área de convivência integrada à natureza.",
    capacity: "6 hóspedes",
    size: "120m²",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
  },
];

const AccommodationsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="acomodacoes" className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Acomodações
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold">
            Nossos Chalés
          </h2>
        </motion.div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {chalets.map((chalet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-none w-[85%] md:w-[45%] lg:w-[30%]"
                >
                  <div className="bg-primary-foreground/5 rounded-lg overflow-hidden group">
                    <div className="overflow-hidden">
                      <img
                        src={chalet.image}
                        alt={chalet.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl text-primary-foreground font-semibold mb-2">
                        {chalet.name}
                      </h3>
                      <p className="text-primary-foreground/60 font-body text-sm mb-4 leading-relaxed">
                        {chalet.description}
                      </p>
                      <div className="flex gap-4 text-primary-foreground/50 text-xs font-body">
                        <span className="flex items-center gap-1"><Users size={12} /> {chalet.capacity}</span>
                        <span className="flex items-center gap-1"><Maximize size={12} /> {chalet.size}</span>
                        <span className="flex items-center gap-1"><Bath size={12} /> Hidro</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/80 transition-colors hidden md:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/80 transition-colors hidden md:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-body uppercase tracking-wider">
            Ver Todos os Chalés
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;

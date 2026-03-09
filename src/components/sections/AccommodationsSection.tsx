import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const chaletImages = [
  { src: "https://www.minhagloria.com.br/lovable-uploads/d853d202-1c9d-4cd8-8f3b-d89a257c4ee7.png", label: "Chalé Tradicional" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/2e4a3772-1627-445c-ad0a-bc144dd8a4d5.png", label: "Interior aconchegante" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/042a304b-19fc-4d61-a524-f78eac0368a9.png", label: "Chalé Superior" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/a6a3395d-5965-482b-b1a6-543cb7840e0f.png", label: "Vista panorâmica" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/44683466-44b0-4f6e-896a-51a9ae1249fc.png", label: "Chalé Master" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/85379e6d-f1dc-433a-bc75-77c926ac6d9b.png", label: "Detalhes premium" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/28329729-31a6-47f7-b501-4427f2f9c84a.png", label: "Chalé Família" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/beaeb973-0a83-4d4d-9bc1-a47ccc40cd59.png", label: "Espaço integrado" },
];

const AccommodationsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 lg:py-40 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-8 justify-start" style={{ '--tw-text-opacity': 1 } as any}>
              <span className="pr-4">Acomodações</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-8 leading-[1.1]">
              Chalés que contam <br className="hidden md:block" />
              <span className="italic">uma história</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-editorial text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-8">
              Cada um dos nossos 20 chalés foi pensado como um refúgio individual — onde madeira, 
              pedra e vidro se encontram para criar espaços que respiram natureza. De manhã, a luz 
              filtra pelas árvores e entra pela janela. À noite, a lareira aquece as conversas 
              e o silêncio da serra embala o sono. Aqui, seu chalé não é apenas onde você dorme. 
              É onde você vive.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] gap-3 text-sm">
              <Link to="/chales">
                Conheça nossos chalés <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-5">
              {chaletImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex-none w-[80%] md:w-[40%] lg:w-[30%]"
                >
                  <div className="overflow-hidden rounded-lg relative group">
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-1000"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute bottom-4 left-4 text-primary-foreground font-body text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <button onClick={scrollPrev} className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary text-secondary-foreground hidden md:flex items-center justify-center hover:bg-secondary/80 transition-colors shadow-lg">
            <ChevronLeft size={22} />
          </button>
          <button onClick={scrollNext} className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary text-secondary-foreground hidden md:flex items-center justify-center hover:bg-secondary/80 transition-colors shadow-lg">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;

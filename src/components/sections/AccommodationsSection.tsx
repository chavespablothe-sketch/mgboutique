import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const chaletImages = [
  "https://www.minhagloria.com.br/lovable-uploads/d853d202-1c9d-4cd8-8f3b-d89a257c4ee7.png",
  "https://www.minhagloria.com.br/lovable-uploads/2e4a3772-1627-445c-ad0a-bc144dd8a4d5.png",
  "https://www.minhagloria.com.br/lovable-uploads/042a304b-19fc-4d61-a524-f78eac0368a9.png",
  "https://www.minhagloria.com.br/lovable-uploads/a6a3395d-5965-482b-b1a6-543cb7840e0f.png",
  "https://www.minhagloria.com.br/lovable-uploads/44683466-44b0-4f6e-896a-51a9ae1249fc.png",
  "https://www.minhagloria.com.br/lovable-uploads/85379e6d-f1dc-433a-bc75-77c926ac6d9b.png",
  "https://www.minhagloria.com.br/lovable-uploads/28329729-31a6-47f7-b501-4427f2f9c84a.png",
  "https://www.minhagloria.com.br/lovable-uploads/beaeb973-0a83-4d4d-9bc1-a47ccc40cd59.png",
];

const AccommodationsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Acomodações
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-4">
            Acomodações <span className="italic">excepcionais</span>
          </h2>
          <p className="text-primary-foreground/70 font-body max-w-2xl mx-auto leading-relaxed">
            Nossos chalés oferecem uma experiência autêntica de hospedagem na montanha. 
            Cada acomodação foi cuidadosamente projetada para combinar o charme rústico com o conforto moderno.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4">
              {chaletImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex-none w-[80%] md:w-[40%] lg:w-[30%]"
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={src}
                      alt={`Chalé Tradicional ${i + 1}`}
                      className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <button onClick={scrollPrev} className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-secondary-foreground hidden md:flex items-center justify-center hover:bg-secondary/80 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={scrollNext} className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-secondary-foreground hidden md:flex items-center justify-center hover:bg-secondary/80 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-body uppercase tracking-wider">
            <Link to="/chales">Ver Todos os Chalés</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;

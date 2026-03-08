import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "https://www.minhagloria.com.br/images/carousel-new-1.jpg", alt: "Vista panorâmica da fazenda com lago natural e paisagismo" },
  { src: "https://www.minhagloria.com.br/images/carousel-new-2.webp", alt: "Vista aérea completa do Minha Glória Hotel Boutique" },
  { src: "https://www.minhagloria.com.br/images/carousel-new-3.webp", alt: "Cavalos pastando livremente na fazenda" },
  { src: "https://www.minhagloria.com.br/images/carousel-new-4.webp", alt: "Chalés aconchegantes de madeira em meio à natureza" },
  { src: "https://www.minhagloria.com.br/images/carousel-new-5.webp", alt: "Famílias desfrutando atividades junto ao lago natural" },
  { src: "https://www.minhagloria.com.br/images/carousel-new-6.webp", alt: "Crianças participando de atividades educativas ao ar livre" },
];

const WelcomeSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Bem-vindos
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6 leading-tight">
              Reconecte-se com a natureza <br />
              <span className="italic text-secondary">em um ambiente exclusivo</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Situado em meio à exuberante Mata Atlântica do Rio de Janeiro, o Minha Glória 
                Hotel Boutique oferece uma experiência boutique única. Nossa propriedade combina 
                conforto exclusivo com a biodiversidade da floresta tropical, criando um refúgio 
                perfeito para quem busca reconexão com a natureza sem abrir mão do luxo e sofisticação.
              </p>
              <p>
                Localizado a 18km do centro de Nova Friburgo, no distrito de Banquete, 
                em Bom Jardim-RJ, o hotel é um paraíso em meio à natureza para momentos inesquecíveis.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div ref={emblaRef} className="overflow-hidden rounded-lg">
              <div className="flex">
                {images.map((img, i) => (
                  <div key={i} className="flex-none w-full">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button onClick={scrollPrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={scrollNext} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors">
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png", alt: "Área dos animais da fazenda com lhamas e alpacas" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/ad12c7f5-022c-4892-91f8-b68993394270.png", alt: "Chalés em meio ao paisagismo tropical" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png", alt: "Lago natural e área de recreação da fazenda" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/5de7a725-ff58-4211-b5e2-cf47d5d99ba7.png", alt: "Vista panorâmica da fazenda com formação rochosa" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/dd9b430b-970f-407a-9a4f-952850e9d8b7.png", alt: "Chalés de madeira em ambiente preservado" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png", alt: "Atividades de quadriciclo na fazenda" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png", alt: "Vista da montanha com flores e lago natural" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png", alt: "Área da piscina com vista para as montanhas" },
];

const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Galeria
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold">
            Momentos & Espaços
          </h2>
        </motion.div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="flex-none w-[85%] md:w-[45%] lg:w-[30%]">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
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
      </div>
    </section>
  );
};

export default GallerySection;

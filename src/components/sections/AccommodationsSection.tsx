import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const chaletImages = [
  { src: "/images/chale-delano.jpg", label: "Chalé com banheira" },
  { src: "/images/chale-marianna.jpg", label: "Chalé aconchegante" },
  { src: "/images/chale-banheira.jpg", label: "Banheira com vista" },
  { src: "/images/chale-quarto.jpg", label: "Suíte acolhedora" },
  { src: "/images/chale-chandon.jpg", label: "Detalhes premium" },
  { src: "/images/igreja.jpg", label: "Capela" },
];

const AccommodationsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 lg:py-32 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary/70 font-body text-[10px] tracking-[0.5em] uppercase mb-4 block">
              Acomodações
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-[1.1]">
              20 suítes exclusivas
              <br className="hidden md:block" />
              <span className="italic text-secondary/80"> em meio à mata</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-end justify-between gap-6"
          >
            <p className="text-primary-foreground/60 font-body text-sm md:text-base leading-relaxed max-w-sm">
              Madeira, pedra e vidro — chalés que respiram natureza
              com o conforto que sua família merece.
            </p>
            <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] gap-2 text-[10px] rounded-full shrink-0">
              <Link to="/chales">
                Ver chalés <ArrowRight size={13} />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4">
              {chaletImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex-none w-[75%] md:w-[38%] lg:w-[28%]"
                >
                  <div className="overflow-hidden rounded-lg relative group cursor-pointer">
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-64 md:h-72 lg:h-80 object-cover group-hover:scale-110 group-hover:h-[22rem] transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute bottom-3 left-4 text-primary-foreground font-body text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <button onClick={scrollPrev} className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/90 text-secondary-foreground hidden md:flex items-center justify-center hover:bg-secondary transition-colors shadow-lg">
            <ChevronLeft size={18} />
          </button>
          <button onClick={scrollNext} className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/90 text-secondary-foreground hidden md:flex items-center justify-center hover:bg-secondary transition-colors shadow-lg">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
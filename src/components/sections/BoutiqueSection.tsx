import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { X } from "lucide-react";

const pillars = [
  {
    id: "exclusividade",
    title: "Exclusividade real",
    desc: "Apenas 20 suítes. Sem filas, sem multidões. Cada hóspede é chamado pelo nome e recebe atenção genuína da nossa equipe.",
    image: "/images/welcome-aerial.webp",
  },
  {
    id: "familias",
    title: "Pensado para famílias",
    desc: "Recreação monitorada com atividades lúdicas para todas as idades — oficinas de plantio, pintura ao ar livre e muito contato com a natureza. 1 criança até 12 anos se hospeda gratuitamente nos fins de semana. Menu kids, berço e cadeirão inclusos.",
    image: "/images/recreacao-plantio.jpg",
  },
  {
    id: "experiencias",
    title: "Curadoria de experiências",
    desc: "Cada feriado tem uma programação única: oficinas, cavalgadas, fogueiras, jantares temáticos. Nada é genérico.",
    image: "/images/chale-chandon.jpg",
  },
  {
    id: "natureza",
    title: "Natureza preservada",
    desc: "Hectares de Mata Atlântica, trilhas, cachoeiras, lago natural e uma fazendinha com lhamas, alpacas e cavalos.",
    image: "/images/vista-hotel.jpg",
  },
];

const gridImages = [
  { src: "/images/barbara-iran-jeep.jpg", alt: "Família Bárbara e Iran no jeep" },
  { src: "/images/tucano.jpg", alt: "Hóspede com tucano no Minha Glória" },
  { src: "/images/mini-chef.jpg", alt: "Mini chef no Minha Glória" },
];

const BoutiqueSection = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className="py-24 lg:py-36 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left — text + accordion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block">
                Hotel Boutique
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground font-semibold mb-6 leading-[1.05]">
                Por que somos um <br className="hidden md:block" />
                <span className="italic">hotel boutique</span>
              </h2>
              <p className="text-primary-foreground/60 font-body text-base leading-relaxed mb-10 max-w-lg">
                Boutique não é apenas um estilo — é uma filosofia. Cada detalhe é intencional,
                cada momento é curado e cada hóspede é especial.
              </p>

              <Accordion type="single" collapsible defaultValue="exclusividade" className="w-full">
                {pillars.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border-primary-foreground/10">
                    <AccordionTrigger className="text-primary-foreground font-display text-lg font-semibold hover:text-secondary hover:no-underline py-5 [&[data-state=open]]:text-secondary">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-primary-foreground/60 font-body text-base leading-relaxed pb-6">
                      {item.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Mobile grid images */}
              <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
                {gridImages.map((img, i) => (
                  <div
                    key={i}
                    className={`rounded-xl overflow-hidden cursor-pointer ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
                    onClick={() => setLightbox(img)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — images grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4 h-[600px]"
            >
              <div
                className="rounded-2xl overflow-hidden row-span-2 cursor-pointer"
                onClick={() => setLightbox(gridImages[0])}
              >
                <img
                  src={gridImages[0].src}
                  alt={gridImages[0].alt}
                  className="w-full h-full object-cover object-[50%_70%] transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div
                  className="rounded-2xl overflow-hidden flex-1 cursor-pointer"
                  onClick={() => setLightbox(gridImages[1])}
                >
                  <img
                    src={gridImages[1].src}
                    alt={gridImages[1].alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div
                  className="rounded-2xl overflow-hidden flex-1 cursor-pointer"
                  onClick={() => setLightbox(gridImages[2])}
                >
                  <img
                    src={gridImages[2].src}
                    alt={gridImages[2].alt}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BoutiqueSection;

import { motion } from "framer-motion";

const galleryImages = [
  { src: "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png", alt: "Lhamas e alpacas da fazenda", span: "col-span-6 md:col-span-4 row-span-2" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/ad12c7f5-022c-4892-91f8-b68993394270.png", alt: "Chalés em meio ao paisagismo tropical", span: "col-span-6 md:col-span-4" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png", alt: "Lago natural e área de recreação", span: "col-span-6 md:col-span-4" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/5de7a725-ff58-4211-b5e2-cf47d5d99ba7.png", alt: "Vista panorâmica com formação rochosa", span: "col-span-6 md:col-span-4" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png", alt: "Quadriciclo pela fazenda", span: "col-span-6 md:col-span-4" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png", alt: "Vista da montanha com flores", span: "col-span-12 md:col-span-4 row-span-2" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png", alt: "Piscina com vista para montanhas", span: "col-span-6 md:col-span-4" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/dd9b430b-970f-407a-9a4f-952850e9d8b7.png", alt: "Chalés de madeira preservados", span: "col-span-6 md:col-span-4" },
];

const GallerySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-8">
            Galeria
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-[1.1]">
            Fragmentos de um <span className="italic">paraíso</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className={`${img.span} overflow-hidden rounded-lg group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[200px] md:min-h-[250px] object-cover group-hover:scale-110 transition-transform duration-1000"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const pillars = [
  {
    id: "exclusividade",
    title: "Exclusividade real",
    desc: "Apenas 20 suítes. Sem filas, sem multidões. Cada hóspede é chamado pelo nome e recebe atenção genuína da nossa equipe.",
    image: "https://www.minhagloria.com.br/images/carousel-new-2.webp",
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
    image: "https://www.minhagloria.com.br/images/carousel-new-5.webp",
  },
  {
    id: "natureza",
    title: "Natureza preservada",
    desc: "Hectares de Mata Atlântica, trilhas, cachoeiras, lago natural e uma fazendinha com lhamas, alpacas e cavalos.",
    image: "https://www.minhagloria.com.br/images/carousel-new-3.webp",
  },
];

const BoutiqueSection = () => {
  return (
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
                    <div className="lg:hidden mt-4 rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" loading="lazy" />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right — images grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4 h-[600px]"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://www.minhagloria.com.br/images/carousel-new-2.webp"
                alt="Vista aérea Minha Glória"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden flex-1">
                <img
                  src="/images/recreacao-plantio.jpg"
                  alt="Recreação com crianças"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden flex-1">
                <img
                  src="https://www.minhagloria.com.br/images/carousel-new-5.webp"
                  alt="Famílias no lago"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 md:gap-20 mt-20 pt-12 border-t border-primary-foreground/10"
        >
          {[
            { value: "20", label: "suítes exclusivas" },
            { value: "4.7", label: "nota no Google" },
            { value: "9.3", label: "Fantástico · Booking" },
            { value: "10+", label: "anos de história" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-semibold text-secondary mb-2">{stat.value}</p>
              <p className="text-primary-foreground/50 font-body text-sm tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BoutiqueSection;
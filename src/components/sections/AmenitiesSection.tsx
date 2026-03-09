import { motion } from "framer-motion";
import { Flower2, TreePine, UtensilsCrossed, Baby, Dog, Waves } from "lucide-react";

const experiences = [
  {
    icon: Flower2,
    title: "Spa & Bem-estar",
    description: "Massagens relaxantes com óleos essenciais, sauna seca, ofurô ao ar livre com vista para as montanhas e tratamentos corporais com produtos naturais da serra. Um convite para desacelerar corpo e mente.",
    image: "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png",
  },
  {
    icon: Dog,
    title: "Fazendinha & Animais",
    description: "Lhamas, alpacas, cavalos, galinhas, coelhos — um mundo de descobertas para crianças e adultos. Alimentar os animais pela manhã se torna um ritual de conexão com a natureza que encanta todas as idades.",
    image: "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png",
  },
  {
    icon: TreePine,
    title: "Trilhas & Aventuras",
    description: "Trilhas guiadas pela Mata Atlântica, passeios de quadriciclo, cavalgadas e mirantes panorâmicos. Para quem busca adrenalina ou contemplação — a serra oferece os dois com generosidade.",
    image: "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png",
  },
];

const AmenitiesSection = () => {
  return (
    <section className="py-24 lg:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-8">
            Experiências
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-8 leading-[1.1]">
            Momentos que se tornam <span className="italic text-secondary">memórias</span>
          </h2>
          <p className="text-editorial text-muted-foreground text-xl leading-relaxed">
            Aqui, cada dia traz uma nova possibilidade. Do amanhecer ao anoitecer, 
            experiências cuidadosamente curadas para todas as idades transformam 
            sua estadia em algo verdadeiramente extraordinário.
          </p>
        </motion.div>

        <div className="space-y-24">
          {experiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
            >
              <div className={`overflow-hidden rounded-xl ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[350px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
              <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-secondary" size={28} />
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">{item.title}</h3>
                <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;

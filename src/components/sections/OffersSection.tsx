import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const offers = [
  {
    title: "Páscoa 2026 no Minha Glória Hotel Boutique",
    period: "3 a 5 de abril de 2026",
    price: "R$ 2.268,00",
    priceNote: "em até 10x de R$ 226,80 sem juros",
    description: "No feriado de Páscoa 2026, o Hotel Boutique Minha Glória preparou uma programação especial, pensada para quem busca conforto, boa gastronomia e experiências únicas em um ambiente acolhedor.",
    highlights: ["Welcome drink de Páscoa", "Mimo no quarto com chocolate artesanal", "Jantares especiais com música ao vivo", "Experiências de wellness (yoga, meditação e massagem)"],
    image: "https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/rv6jyv97zg-1770309523978.webp",
    tag: "família",
  },
  {
    title: "Feriado de Tiradentes no Minha Glória Hotel Boutique",
    period: "17 a 21 de abril de 2026",
    price: "R$ 2.268,00",
    priceNote: "em até 10x de R$ 226,80 sem juros",
    description: "O Glória Hotel Boutique convida você a viver dias de descanso, cultura e experiências cuidadosamente pensadas para adultos e crianças — sempre com o conforto, a elegância e o atendimento personalizado.",
    highlights: ["Welcome drink para adultos", "Bebida especial para crianças", "Mimo de boas-vindas no quarto", "Café da manhã estendido"],
    image: "https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/oe8dp4nznk-1770310040271.jpg",
    tag: "bem-estar",
  },
  {
    title: "Feriado de 1º de Maio no Minha Glória Hotel Boutique",
    period: "1 a 3 de maio de 2026",
    price: "R$ 2.268,00",
    priceNote: "em até 10x de R$ 226,80 sem juros",
    description: "O Glória Hotel Boutique convida você e sua família para viver um feriado tranquilo, acolhedor e cheio de boas memórias. Pensão Completa incluída.",
    highlights: ["Café da manhã diário", "Almoço diário", "Jantar diário", "Welcome drink na chegada"],
    image: "https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/xb2vhb4dm2l-1770315436578.jpg",
    tag: "bem-estar",
  },
];

const OffersSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Ofertas Especiais
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold">
            Experiências únicas para sua estadia
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-body uppercase tracking-wider px-3 py-1 rounded">
                  {offer.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{offer.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-3">
                  <Calendar size={14} />
                  {offer.period}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {offer.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {offer.highlights.map((h, j) => (
                    <li key={j} className="text-muted-foreground font-body text-xs flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground font-body">a partir de</p>
                    <p className="text-xl font-display font-semibold text-foreground">{offer.price}</p>
                    <p className="text-muted-foreground text-xs font-body">{offer.priceNote}</p>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-body text-xs uppercase tracking-wider gap-1">
                    Detalhes <ArrowRight size={12} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;

import { motion } from "framer-motion";
import { CreditCard, Baby, Sparkles, UtensilsCrossed } from "lucide-react";

const benefits = [
  {
    icon: UtensilsCrossed,
    title: "Pensão Completa",
    description: "Café da manhã artesanal, almoço regional e jantar especial — três refeições diárias inclusas em todos os pacotes. Menu kids com opções balanceadas e apresentação divertida.",
  },
  {
    icon: CreditCard,
    title: "10x sem juros",
    description: "Planeje sem preocupação. Parcelamos sua estadia em até 10 vezes no cartão de crédito, sem juros. O sonho da viagem em família cabe no seu orçamento.",
  },
  {
    icon: Baby,
    title: "Crianças até 6 anos grátis",
    description: "Nossos pequenos hóspedes são VIP. Crianças até 6 anos se hospedam gratuitamente, com berço, cadeirão, menu infantil e recreação monitorada inclusos.",
  },
  {
    icon: Sparkles,
    title: "Apenas 20 suítes",
    description: "A exclusividade de um hotel boutique de verdade. Poucos hóspedes, máximo conforto. Atendimento personalizado — aqui, todos são chamados pelo nome.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-hotel-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold">
            Por que escolher o <span className="italic text-secondary">Minha Glória</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="text-secondary" size={32} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground font-body text-base leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

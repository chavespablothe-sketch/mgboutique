import { motion } from "framer-motion";
import { CreditCard, Baby, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "Parcele em até 10x",
    description: "Facilidade de pagamento sem juros no cartão de crédito para você planejar sua viagem com tranquilidade.",
  },
  {
    icon: Baby,
    title: "Crianças até 6 anos grátis",
    description: "As crianças são nossos hóspedes especiais. Até 6 anos, a hospedagem é por nossa conta.",
  },
  {
    icon: Sparkles,
    title: "Experiências exclusivas",
    description: "Trilhas, degustações, spa e muito mais. Momentos únicos inclusos em todas as estadias.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-hotel-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center px-6"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="text-secondary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

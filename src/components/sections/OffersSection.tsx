import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const offers = [
  {
    title: "Páscoa no Campo",
    period: "17 a 21 de Abril",
    nights: "4 noites",
    price: "R$ 3.890",
    priceNote: "por casal",
    description: "Celebre a Páscoa em meio à natureza com programação especial, caça aos ovos e jantar temático.",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=600&q=80",
    tag: "Especial",
  },
  {
    title: "Feriado de Tiradentes",
    period: "18 a 22 de Abril",
    nights: "4 noites",
    price: "R$ 3.490",
    priceNote: "por casal",
    description: "Aproveite o feriadão com trilhas guiadas, degustação de vinhos e spa day inclusos.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
    tag: "Popular",
  },
  {
    title: "1º de Maio Relaxante",
    period: "1 a 4 de Maio",
    nights: "3 noites",
    price: "R$ 2.990",
    priceNote: "por casal",
    description: "Fuja da rotina com um final de semana prolongado de puro descanso e bem-estar.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    tag: "Novo",
  },
];

const OffersSection = () => {
  return (
    <section id="ofertas" className="py-20 lg:py-32 bg-background">
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
            Pacotes & Experiências
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
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{offer.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-3">
                  <Calendar size={14} />
                  {offer.period} · {offer.nights}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {offer.description}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-display font-semibold text-foreground">{offer.price}</p>
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

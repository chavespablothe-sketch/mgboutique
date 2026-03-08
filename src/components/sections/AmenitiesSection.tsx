import { motion } from "framer-motion";
import { Flower2, TreePine, UtensilsCrossed, Dumbbell, Wifi, Car } from "lucide-react";

const amenities = [
  { icon: Flower2, title: "Spa & Bem-estar", description: "Massagens, sauna, piscina aquecida e tratamentos relaxantes." },
  { icon: TreePine, title: "Passeios Ecológicos", description: "Trilhas guiadas, observação de aves e cachoeiras." },
  { icon: UtensilsCrossed, title: "Gastronomia", description: "Restaurante com culinária regional e ingredientes orgânicos." },
  { icon: Dumbbell, title: "Academia", description: "Equipamentos modernos com vista para as montanhas." },
  { icon: Wifi, title: "Wi-Fi Gratuito", description: "Conexão de alta velocidade em toda a propriedade." },
  { icon: Car, title: "Estacionamento", description: "Estacionamento privativo e gratuito para hóspedes." },
];

const AmenitiesSection = () => {
  return (
    <section id="comodidades" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Comodidades
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold">
            Tudo para seu conforto
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-lg border border-border hover:border-secondary/30 hover:bg-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <item.icon className="text-secondary" size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;

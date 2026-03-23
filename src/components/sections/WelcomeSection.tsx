import { motion } from "framer-motion";
import { TreePine, Users, Utensils, Heart } from "lucide-react";

const highlights = [
  { icon: TreePine, label: "Mata Atlântica preservada" },
  { icon: Users, label: "Apenas 20 suítes" },
  { icon: Utensils, label: "Pensão completa" },
  { icon: Heart, label: "1 criança até 12 anos grátis" },
];

const WelcomeSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Compact editorial opener */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-6">
            Bem-vindos
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold mb-6 leading-[1.1]">
            Um lugar onde o tempo 
            <br className="hidden md:block" />
            <span className="italic text-secondary">desacelera</span>
          </h2>
          <p className="text-editorial text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Acordar com o canto dos pássaros, ver as montanhas banhadas pela luz da manhã 
            enquanto as crianças correm livres pela fazenda. Aqui, cada momento é uma pausa.
          </p>
        </motion.div>

        {/* Quick highlights */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground font-body text-sm"
            >
              <item.icon size={16} className="text-secondary" />
              {item.label}
            </motion.div>
          ))}
        </div>

        {/* Photo mosaic — clean grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-3 lg:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-7 overflow-hidden rounded-lg"
          >
            <img
              src="https://www.minhagloria.com.br/images/carousel-new-2.webp"
              alt="Vista aérea do Minha Glória Hotel Boutique"
              className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-6 md:col-span-5 overflow-hidden rounded-lg"
          >
            <img
              src="https://www.minhagloria.com.br/images/carousel-new-4.webp"
              alt="Chalés em meio à natureza"
              className="w-full h-[200px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-6 md:col-span-4 overflow-hidden rounded-lg"
          >
            <img
              src="https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png"
              alt="Animais da fazenda"
              className="w-full h-[200px] md:h-[280px] object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-6 md:col-span-4 overflow-hidden rounded-lg"
          >
            <img
              src="/images/igreja.jpg"
              alt="Igreja do Minha Glória"
              className="w-full h-[200px] md:h-[280px] object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 md:col-span-4 overflow-hidden rounded-lg"
          >
            <img
              src="https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png"
              alt="Lago natural da fazenda"
              className="w-full h-[200px] md:h-[280px] object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-center mt-16 pt-10 border-t border-border"
        >
          <p className="editorial-quote text-2xl md:text-3xl text-foreground/80 leading-snug">
            "O lugar mais bonito e acolhedor que já conheci."
          </p>
          <p className="text-secondary font-body text-xs tracking-[0.2em] uppercase mt-4">— Hóspede · Google Reviews · 4.7 ★</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;

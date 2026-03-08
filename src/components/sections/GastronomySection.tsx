import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Coffee } from "lucide-react";

const GastronomySection = () => {
  return (
    <section id="gastronomia" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Gastronomia
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6">
            Sabores da Serra
          </h2>
          <p className="text-primary-foreground/70 font-body max-w-2xl mx-auto leading-relaxed">
            Nossa cozinha celebra os ingredientes regionais com técnicas contemporâneas, 
            criando uma experiência gastronômica que honra a tradição com um toque de sofisticação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Coffee, title: "Café da Manhã", desc: "Buffet completo com pães artesanais, frutas da estação e opções quentes preparadas na hora." },
            { icon: UtensilsCrossed, title: "Almoço & Jantar", desc: "Menu sazonal com pratos autorais utilizando ingredientes orgânicos da nossa horta e produtores locais." },
            { icon: Wine, title: "Carta de Vinhos", desc: "Seleção curada de rótulos nacionais e internacionais, harmonizados especialmente com nosso menu." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                <item.icon className="text-secondary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">{item.title}</h3>
              <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GastronomySection;

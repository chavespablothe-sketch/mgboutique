import { motion } from "framer-motion";
import { Crown, Users, Heart, Leaf } from "lucide-react";

const pillars = [
  {
    icon: Crown,
    title: "Exclusividade real",
    desc: "Apenas 20 suítes. Sem filas, sem multidões. Cada hóspede é chamado pelo nome e recebe atenção genuína da nossa equipe.",
  },
  {
    icon: Users,
    title: "Pensado para famílias",
    desc: "Crianças até 6 anos grátis, recreação monitorada, menu kids, berço e cadeirão — tudo incluso. Aqui, família é prioridade.",
  },
  {
    icon: Heart,
    title: "Curadoria de experiências",
    desc: "Cada feriado tem uma programação única: oficinas, cavalgadas, fogueiras, jantares temáticos. Nada é genérico.",
  },
  {
    icon: Leaf,
    title: "Natureza preservada",
    desc: "Hectares de Mata Atlântica, trilhas, cachoeiras, lago natural e uma fazendinha com lhamas, alpacas e cavalos.",
  },
];

const BoutiqueSection = () => {
  return (
    <section className="py-24 lg:py-36 bg-primary relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block">
            O que nos torna únicos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-8 leading-[1.05]">
            Por que somos um <br className="hidden md:block" />
            <span className="italic">hotel boutique</span>
          </h2>
          <p className="text-editorial text-primary-foreground/60 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Boutique não é apenas um estilo — é uma filosofia. Significa que cada detalhe é intencional, 
            cada momento é curado e cada hóspede é especial. Não somos um resort de massa. 
            Somos um refúgio onde qualidade supera quantidade, sempre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-secondary/30 transition-colors duration-500"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-secondary/15 flex items-center justify-center">
                <item.icon className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">{item.title}</h3>
                <p className="text-primary-foreground/60 font-body text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
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
            { value: "4.9", label: "nota no Google" },
            { value: "9.4", label: "nota no Booking" },
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

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Leaf, Heart, ArrowRight } from "lucide-react";
import kidsPortrait from "@/assets/kids-portrait.jpg";
import kidsLake from "@/assets/kids-lake.jpg";
import kidsPainting from "@/assets/kids-painting.jpg";
import kidsGarden from "@/assets/kids-garden.jpg";
import kidsPlayground from "@/assets/kids-playground.jpg";
import kidsBunny from "@/assets/kids-bunny.jpg";

const pillars = [
  {
    icon: Leaf,
    title: "Natureza viva",
    text: "Lagos, mata atlântica e fazendinha com lhamas, coelhos e araras — descobertas reais, longe das telas.",
  },
  {
    icon: Sparkles,
    title: "Recreação dedicada",
    text: "Equipe especializada com oficinas criativas, plantio, pintura e brincadeiras monitoradas todos os dias.",
  },
  {
    icon: Heart,
    title: "Pensado para famílias",
    text: "Espaços seguros, baby care completo e 1 criança até 06 anos cortesia nos fins de semana.",
  },
];

const KidsSection = () => {
  return (
    <section className="relative py-24 lg:py-36 bg-hotel-cream overflow-hidden">
      {/* Decorative golden line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-secondary/40" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block">
            Para os pequenos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold leading-[1.05] mb-6">
            Um refúgio onde a infância <span className="italic text-secondary">floresce</span>
          </h2>
          <p className="text-editorial text-muted-foreground text-lg md:text-xl leading-relaxed">
            Mais do que um hotel, um cenário de aventuras autênticas. Aqui, suas crianças crescem
            em contato com a natureza, com cuidado e elegância em cada detalhe.
          </p>
        </motion.div>

        {/* Banner mosaic */}
        <div className="grid grid-cols-12 grid-rows-2 gap-3 md:gap-4 mb-16 lg:mb-20 h-[560px] md:h-[640px]">
          {/* Large hero - portrait girl */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-6 row-span-2 relative overflow-hidden rounded-2xl group"
          >
            <img
              src={kidsPortrait}
              alt="Menina sorrindo no jardim do Minha Glória"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="text-secondary font-body text-[10px] tracking-[0.4em] uppercase mb-3 block">
                Memórias para sempre
              </span>
              <h3 className="font-display text-2xl md:text-4xl text-primary-foreground font-semibold leading-tight">
                Sorrisos que <span className="italic text-secondary">duram a vida toda</span>
              </h3>
            </div>
          </motion.div>

          {/* Top right - garden */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-2xl group"
          >
            <img
              src={kidsGarden}
              alt="Crianças plantando suculentas"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              loading="lazy"
            />
          </motion.div>

          {/* Top right far - painting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-2xl group"
          >
            <img
              src={kidsPainting}
              alt="Oficina de pintura para crianças"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              loading="lazy"
            />
          </motion.div>

          {/* Bottom right - lake */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-2xl group"
          >
            <img
              src={kidsLake}
              alt="Família observando o lago natural"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              loading="lazy"
            />
          </motion.div>

          {/* Bottom right far - bunny */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-2xl group"
          >
            <img
              src={kidsBunny}
              alt="Crianças conhecendo coelho na fazendinha"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background border border-border/60 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 mb-5 rounded-full bg-secondary/15 flex items-center justify-center">
                <p.icon className="text-secondary" size={20} />
              </div>
              <h3 className="font-display text-xl text-foreground font-semibold mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground font-body text-base leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/experiencias"
            className="inline-flex items-center gap-3 text-secondary font-body uppercase tracking-[0.25em] text-xs hover:gap-5 transition-all duration-500 border-b border-secondary/40 pb-1"
          >
            Conheça todas as experiências para crianças
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default KidsSection;

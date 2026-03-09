import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed, Leaf, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ChefSection = () => {
  return (
    <section className="py-24 lg:py-36 bg-hotel-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block">
            Gastronomia
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6 leading-[1.05]">
            Pensão completa — <span className="italic text-secondary">da horta à mesa</span>
          </h2>
          <p className="text-editorial text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Três refeições diárias preparadas com ingredientes orgânicos da nossa horta, 
            carnes de produtores locais e a criatividade de um chef apaixonado pela serra fluminense.
          </p>
        </motion.div>

        {/* Meals grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Café da manhã",
              time: "7h às 10h",
              desc: "Buffet artesanal com pães caseiros saindo do forno, bolos de milho, geleias feitas na propriedade, frutas frescas, ovos caipiras, queijos e embutidos regionais. Café coado na hora e sucos naturais.",
              image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Almoço regional",
              time: "12h às 14h",
              desc: "Pratos da culinária serrana com toque autoral: carnes assadas lentamente, massas artesanais, legumes grelhados da horta, saladas criativas e sobremesas que homenageiam receitas de família.",
              image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Jantar especial",
              time: "19h às 21h",
              desc: "Experiência gastronômica completa com entrada, prato principal e sobremesa. Nos feriados, jantares temáticos com harmonização de vinhos e música ao vivo. Menu kids com apresentação lúdica.",
              image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
            },
          ].map((meal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
              <span className="text-secondary font-body text-xs tracking-[0.3em] uppercase mb-2 block">{meal.time}</span>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{meal.title}</h3>
              <p className="text-muted-foreground font-body text-base leading-relaxed">{meal.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Chef spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-background rounded-2xl overflow-hidden border border-border"
        >
          <div className="relative h-[400px] lg:h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
              alt="Chef do Minha Glória preparando prato"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
          <div className="p-8 md:p-12 lg:p-16">
            <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-4 block">Nosso Chef</span>
            <h3 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
              A alma por trás <br />de cada <span className="italic text-secondary">sabor</span>
            </h3>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Nosso chef traz a experiência de anos na alta gastronomia brasileira, 
              combinada com a paixão pelos ingredientes da serra fluminense. Cada prato 
              é uma homenagem à terra, aos produtores locais e às receitas que atravessam gerações.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Leaf, text: "Ingredientes orgânicos" },
                { icon: Award, text: "Receitas autorais" },
                { icon: UtensilsCrossed, text: "Menu kids especial" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm font-body text-foreground bg-hotel-cream px-4 py-2 rounded-full">
                  <item.icon size={14} className="text-secondary" /> {item.text}
                </span>
              ))}
            </div>

            {/* Instagram video embed placeholder */}
            <div className="rounded-xl overflow-hidden bg-muted aspect-video mb-6 flex items-center justify-center">
              <iframe
                src="https://www.instagram.com/reel/embed/"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Vídeo do Chef no Instagram"
                loading="lazy"
              />
            </div>

            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] gap-3 text-sm">
              <Link to="/gastronomia">
                Conheça nosso menu completo <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChefSection;

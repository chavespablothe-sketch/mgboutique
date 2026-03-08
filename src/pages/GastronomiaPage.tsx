import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Coffee, Leaf, Baby, Cake, Clock } from "lucide-react";

const meals = [
  {
    icon: Coffee,
    title: "Café da Manhã",
    time: "7h às 10h30 (estendido nos feriados)",
    description: "Um despertar especial com buffet completo: pães artesanais assados na hora, bolos caseiros, frutas frescas da estação, geleias de produtores locais, queijos da serra, ovos preparados ao seu gosto e café coado de grãos selecionados.",
    kids: "Cantinho kids com achocolatado, sucos naturais, panquecas e frutas cortadas.",
  },
  {
    icon: UtensilsCrossed,
    title: "Almoço",
    time: "12h30 às 14h30",
    description: "Menu sazonal inspirado na culinária da serra fluminense. Pratos autorais com ingredientes orgânicos da nossa horta e de produtores locais. Carnes assadas, massas frescas, saladas do jardim e sobremesas artesanais.",
    kids: "Menu kids com opções balanceadas e apresentação divertida que encanta os pequenos.",
  },
  {
    icon: Wine,
    title: "Jantar",
    time: "19h30 às 21h30",
    description: "Experiência gastronômica completa com entrada, prato principal e sobremesa. Harmonização com nossa carta de vinhos selecionados. Nos feriados, jantares temáticos com música ao vivo.",
    kids: "Jantar servido em horário especial para crianças (18h30) com cardápio dedicado.",
  },
];

const GastronomiaPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')` }}
        >
          <div className="absolute inset-0 bg-primary/75" />
          <div className="relative z-10 text-center">
            <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Sabores da Serra</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold">Gastronomia</h1>
            <p className="text-primary-foreground/70 font-body mt-4 text-lg">Da horta à mesa, com amor e sofisticação</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Pensão Completa</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Três refeições diárias <span className="italic text-secondary">inclusas em sua estadia</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
                Nossa cozinha celebra os ingredientes regionais com técnicas contemporâneas, criando uma experiência 
                gastronômica que honra a tradição da serra fluminense com um toque de sofisticação. Tudo preparado 
                com ingredientes frescos, muitos vindos da nossa própria horta orgânica.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meals */}
        <section className="py-16 bg-hotel-cream">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-12">
              {meals.map((meal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl border border-border p-8 md:p-10"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <meal.icon className="text-secondary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="font-display text-2xl font-semibold text-foreground">{meal.title}</h3>
                        <span className="flex items-center gap-1 text-muted-foreground font-body text-sm mt-1 sm:mt-0">
                          <Clock size={14} /> {meal.time}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-body leading-relaxed mb-4">{meal.description}</p>
                      <div className="bg-hotel-cream rounded-lg p-4 flex items-start gap-3">
                        <Baby size={18} className="text-secondary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-body text-sm font-semibold text-foreground mb-1">Para as crianças</p>
                          <p className="text-muted-foreground font-body text-sm">{meal.kids}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold">Nossos diferenciais</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Leaf, title: "Horta Orgânica", desc: "Ervas, temperos e vegetais frescos colhidos diariamente para nossos pratos." },
                { icon: Wine, title: "Carta de Vinhos", desc: "Rótulos nacionais e internacionais selecionados e harmonizados com o menu." },
                { icon: Cake, title: "Confeitaria Artesanal", desc: "Bolos, tortas e doces preparados diariamente com ingredientes da região." },
                { icon: Baby, title: "Menu Infantil", desc: "Opções saudáveis e saborosas para os pequenos em todas as refeições." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Sabores que encantam toda a família" subtitle="Reserve sua estadia com pensão completa e descubra o melhor da gastronomia da serra." bgImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GastronomiaPage;

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Coffee, Leaf, Baby, Cake, Clock, Award } from "lucide-react";

const meals = [
  {
    icon: Coffee,
    title: "Café da Manhã",
    time: "7h às 10h30 · estendido nos feriados",
    description: "Um despertar que merece ser saboreado. Buffet completo com pães artesanais saindo do forno — bolos caseiros, frutas frescas, geleias de produtores da serra, queijos regionais, ovos preparados ao seu gosto e café coado de grãos selecionados. Cada mesa tem vista para as montanhas.",
    kids: "Cantinho kids com achocolatado, sucos naturais, panquecas com frutas e iogurte com granola.",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: UtensilsCrossed,
    title: "Almoço Regional",
    time: "12h30 às 14h30",
    description: "A mesa é uma celebração da serra fluminense. Menu sazonal com ingredientes orgânicos da nossa horta, colhidos minutos antes de chegar ao prato. Carnes assadas lentamente, massas frescas, saladas vibrantes e sobremesas que encerram a refeição como um suspiro.",
    kids: "Menu kids pensado por nutricionista: opções balanceadas, saborosas e com apresentação divertida.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wine,
    title: "Jantar Especial",
    time: "19h30 às 21h30",
    description: "Jantar em três tempos: entrada, prato principal e sobremesa, com harmonização sugerida. Nos feriados, jantares temáticos com música ao vivo — fondue, massas, churrascos especiais. Cada noite é uma experiência diferente.",
    kids: "Jantar kids servido às 18h30 com cardápio dedicado. Para que os pais aproveitem o jantar sem pressa.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
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
          className="relative h-[75vh] flex items-center justify-center bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')` }}
        >
          <div className="absolute inset-0 bg-primary/75" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block">Sabores da Serra</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6">
                Da horta à mesa, <span className="italic text-secondary">com alma</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                Pensão completa em todos os pacotes: três refeições diárias que celebram 
                os ingredientes da serra com técnica e tradição
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Intro */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-editorial text-muted-foreground text-xl md:text-2xl leading-relaxed">
                Nossa cozinha é um ato de amor pela serra fluminense. As ervas vêm da nossa horta orgânica. 
                Os queijos, das fazendas vizinhas. As frutas, dos pomares da região. Cozinhar aqui 
                não é apenas preparar alimento — é celebrar a terra onde pisamos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meals - alternating layout */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-24 max-w-6xl mx-auto">
              {meals.map((meal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
                >
                  <div className={`overflow-hidden rounded-xl ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <img src={meal.image} alt={meal.title} className="w-full h-[350px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
                  </div>
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <meal.icon className="text-secondary" size={22} />
                      </div>
                      <span className="text-muted-foreground font-body text-sm flex items-center gap-2">
                        <Clock size={14} /> {meal.time}
                      </span>
                    </div>
                    <h3 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-5">{meal.title}</h3>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">{meal.description}</p>
                    <div className="bg-hotel-cream rounded-xl p-5 flex items-start gap-3">
                      <Baby size={20} className="text-secondary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground mb-1">Para os pequenos</p>
                        <p className="text-muted-foreground font-body text-sm leading-relaxed">{meal.kids}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-20 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold">
                Nossos <span className="italic text-secondary">diferenciais</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Leaf, title: "Horta Orgânica", desc: "Ervas e vegetais frescos colhidos diariamente para nossos pratos." },
                { icon: Wine, title: "Carta de Vinhos", desc: "Rótulos nacionais e internacionais selecionados por sommelier." },
                { icon: Cake, title: "Confeitaria Artesanal", desc: "Bolos, tortas e doces preparados diariamente com receitas autorais." },
                { icon: Award, title: "Chef Dedicado", desc: "Gastronomia autoral que celebra os ingredientes da serra fluminense." },
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

        {/* Pull quote */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
              <p className="editorial-quote text-3xl md:text-4xl text-foreground/80 leading-snug">
                "A gastronomia é excepcional. Os pães artesanais e os jantares temáticos são inesquecíveis."
              </p>
              <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mt-6">— Hóspede, Booking.com</p>
            </motion.div>
          </div>
        </section>

        <CTASection 
          title="Sabores que encantam toda a família" 
          subtitle="Reserve sua estadia com pensão completa e descubra o melhor da gastronomia da serra fluminense." 
          bgImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" 
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GastronomiaPage;

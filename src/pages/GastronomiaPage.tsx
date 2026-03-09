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
    time: "7h às 10h30 · estendido nos feriados",
    description: "Um despertar que merece ser saboreado. Buffet completo com pães artesanais que acabaram de sair do forno — o aroma se espalha pelo restaurante e já dá vontade de ficar mais um dia. Bolos caseiros, frutas frescas da estação colhidas de manhã, geleias de produtores da serra, queijos regionais curados e maturados, ovos preparados ao seu gosto e café coado de grãos selecionados que acordam todos os sentidos. Cada mesa tem vista para as montanhas. Cada mordida tem alma.",
    kids: "Cantinho kids com achocolatado cremoso, sucos naturais, panquecas com frutas, iogurte com granola e frutas cortadas em formatos divertidos. Porque o café da manhã também pode ser uma aventura.",
  },
  {
    icon: UtensilsCrossed,
    title: "Almoço",
    time: "12h30 às 14h30",
    description: "A mesa é uma celebração da serra fluminense. Menu sazonal que muda com o que a terra oferece — pratos autorais com ingredientes orgânicos da nossa horta, colhidos minutos antes de chegar ao prato. Carnes assadas lentamente, massas frescas feitas à mão, saladas vibrantes do jardim, legumes grelhados com ervas aromáticas e sobremesas que encerram a refeição como um suspiro. Aqui, comer é um ato de presença.",
    kids: "Menu kids pensado por nutricionista: opções balanceadas, saborosas e com apresentação divertida que transforma a refeição em brincadeira. Massas, proteínas grelhadas, legumes coloridos.",
  },
  {
    icon: Wine,
    title: "Jantar",
    time: "19h30 às 21h30",
    description: "Quando o sol se despede atrás das montanhas e a serra ganha tons dourados, nosso restaurante se transforma. Jantar em três tempos: entrada, prato principal e sobremesa, com harmonização sugerida da nossa carta de vinhos selecionados. Nos feriados, jantares temáticos com música ao vivo ao lado da lareira — fondue, massas, churrascos especiais. Cada noite é uma experiência diferente.",
    kids: "Jantar kids servido em horário especial (18h30) com cardápio dedicado. Para que os pequenos jantem tranquilos e os pais aproveitem o jantar dos adultos depois, sem pressa.",
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
                os ingredientes da serra com técnica, carinho e tradição
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Intro */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-10">
                Pensão Completa
              </div>
              <p className="text-editorial text-muted-foreground text-xl md:text-2xl leading-relaxed text-center">
                Nossa cozinha é um ato de amor pela serra fluminense. Cada ingrediente tem origem, 
                história e propósito. As ervas vêm da nossa horta orgânica, colhidas pela manhã. 
                Os queijos, das fazendas vizinhas. As frutas, dos pomares da região. Aqui, 
                cozinhar não é apenas preparar alimento — é celebrar a terra onde pisamos 
                e as mãos que cultivam o que nos nutre.
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
                  className="bg-background rounded-xl border border-border p-8 md:p-12"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <meal.icon className="text-secondary" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <h3 className="font-display text-3xl font-semibold text-foreground">{meal.title}</h3>
                        <span className="flex items-center gap-2 text-muted-foreground font-body text-sm mt-2 sm:mt-0">
                          <Clock size={14} /> {meal.time}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-6">{meal.description}</p>
                      <div className="bg-hotel-cream rounded-lg p-6 flex items-start gap-4">
                        <Baby size={22} className="text-secondary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-body text-base font-semibold text-foreground mb-2">Para os pequenos</p>
                          <p className="text-muted-foreground font-body text-base leading-relaxed">{meal.kids}</p>
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
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold">
                Nossos <span className="italic text-secondary">diferenciais</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { icon: Leaf, title: "Horta Orgânica", desc: "Ervas, temperos e vegetais frescos colhidos diariamente para nossos pratos. Do canteiro ao prato em minutos — frescor que se sente no sabor." },
                { icon: Wine, title: "Carta de Vinhos", desc: "Rótulos nacionais e internacionais selecionados por sommelier. Harmonizações sugeridas que elevam cada jantar a uma experiência gastronômica completa." },
                { icon: Cake, title: "Confeitaria Artesanal", desc: "Bolos, tortas, pães de mel e doces preparados diariamente. Cada sobremesa é uma obra de arte que encerra a refeição com a doçura da serra." },
                { icon: Baby, title: "Menu Infantil", desc: "Opções saudáveis, saborosas e visualmente divertidas em todas as refeições. Pensado por nutricionista para nutrir e encantar os pequenos." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-center p-8"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="py-16 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
              <p className="editorial-quote text-3xl md:text-4xl text-foreground/80 leading-snug">
                "A gastronomia é excepcional. Os pães artesanais do café da manhã e os jantares temáticos são inesquecíveis."
              </p>
              <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mt-6">— Hóspede, Booking.com</p>
            </motion.div>
          </div>
        </section>

        <CTASection 
          title="Sabores que encantam toda a família" 
          subtitle="Reserve sua estadia com pensão completa e descubra o melhor da gastronomia da serra fluminense. Café, almoço e jantar inclusos em todos os pacotes." 
          bgImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" 
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GastronomiaPage;

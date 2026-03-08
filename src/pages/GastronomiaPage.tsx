import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Coffee, Leaf } from "lucide-react";

const GastronomiaPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section
          className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative z-10 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">Gastronomia</h1>
            <p className="text-white/70 font-body mt-4">Sabores da serra com ingredientes locais frescos</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Gastronomia Gourmet</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Restaurante com ingredientes <span className="italic text-secondary">locais frescos</span>
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
                Nossa cozinha celebra os ingredientes regionais com técnicas contemporâneas, 
                criando uma experiência gastronômica que honra a tradição com um toque de sofisticação.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Coffee, title: "Café da Manhã", desc: "Buffet completo com pães artesanais, frutas da estação, geleias caseiras e opções quentes preparadas na hora." },
                { icon: UtensilsCrossed, title: "Almoço & Jantar", desc: "Menu sazonal com pratos autorais utilizando ingredientes orgânicos da nossa horta e de produtores locais." },
                { icon: Wine, title: "Carta de Vinhos", desc: "Seleção curada de rótulos nacionais e internacionais, harmonizados especialmente com nosso menu." },
                { icon: Leaf, title: "Ingredientes Orgânicos", desc: "Nossa horta própria fornece ervas e vegetais frescos diariamente para a cozinha do hotel." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-6 rounded-lg border border-border hover:border-secondary/30 transition-all"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default GastronomiaPage;

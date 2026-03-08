import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Flower2, TreePine, Bike, Dumbbell, Waves, Mountain, Baby, Palette, Dog, Footprints, Music, Gamepad2 } from "lucide-react";

const adultActivities = [
  { icon: Flower2, title: "Spa & Wellness", description: "Massagens relaxantes, sauna seca, ofurô ao ar livre e tratamentos corporais com produtos naturais da serra.", image: "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png" },
  { icon: TreePine, title: "Trilhas Ecológicas", description: "Trilhas guiadas pela Mata Atlântica com observação de aves, cachoeiras e mirantes panorâmicos.", image: "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png" },
  { icon: Mountain, title: "Quadriciclo", description: "Aventuras de quadriciclo pelas trilhas da fazenda com paisagens deslumbrantes da serra fluminense.", image: "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png" },
  { icon: Waves, title: "Piscina & Lago", description: "Piscina com vista para as montanhas e lago natural para momentos de contemplação e relaxamento.", image: "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png" },
  { icon: Bike, title: "Cavalgadas", description: "Passeios a cavalo pelas trilhas da fazenda, uma experiência única para todas as idades.", image: "https://www.minhagloria.com.br/images/carousel-new-3.webp" },
  { icon: Dumbbell, title: "Academia", description: "Equipamentos modernos para seu exercício com vista para as montanhas e natureza.", image: "https://www.minhagloria.com.br/lovable-uploads/dd9b430b-970f-407a-9a4f-952850e9d8b7.png" },
];

const kidsActivities = [
  { icon: Dog, title: "Fazendinha", description: "Contato direto com animais: lhamas, alpacas, cavalos, galinhas e coelhos." },
  { icon: Palette, title: "Oficinas Criativas", description: "Oficinas de artes com materiais naturais, pintura e atividades lúdicas." },
  { icon: Footprints, title: "Trilha Kids", description: "Trilha adaptada para crianças com atividades educativas sobre a natureza." },
  { icon: Gamepad2, title: "Recreação Monitorada", description: "Equipe de recreação com atividades programadas para todas as idades." },
  { icon: Music, title: "Música & Histórias", description: "Contação de histórias e música ao ar livre em meio à natureza." },
  { icon: Baby, title: "Baby Care", description: "Fraldário, berço disponível e cardápio especial para os menores." },
];

const LazerPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/70" />
          <div className="relative z-10 text-center">
            <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Experiências</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold">Lazer & Aventura</h1>
            <p className="text-primary-foreground/70 font-body mt-4 text-lg">Diversão para todas as idades em meio à Mata Atlântica</p>
          </div>
        </section>

        {/* Adult Activities */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Para Adultos</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold">
                Relaxe, explore, <span className="italic text-secondary">se aventure</span>
              </h2>
            </motion.div>

            <div className="space-y-16">
              {adultActivities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
                >
                  <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                    <img src={item.image} alt={item.title} className="w-full h-72 lg:h-96 object-cover rounded-xl shadow-lg" loading="lazy" />
                  </div>
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <div className="w-14 h-14 mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="text-secondary" size={24} />
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kids Section */}
        <section className="py-20 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                <Baby className="text-secondary" size={28} />
              </div>
              <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Para os Pequenos</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-4">
                Um mundo de <span className="italic text-secondary">diversão</span> para as crianças
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                No Minha Glória, as crianças são hóspedes VIP. Temos atividades pensadas para todas as idades — 
                e crianças até 6 anos se hospedam gratuitamente!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {kidsActivities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background p-8 rounded-xl border border-border text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png",
                "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png",
                "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png",
                "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png",
              ].map((src, i) => (
                <img key={i} src={src} alt={`Atividade ${i + 1}`} className="rounded-lg w-full h-48 md:h-56 object-cover" loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Pronto para a aventura?" subtitle="Reserve agora e viva experiências inesquecíveis com toda a família." />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LazerPage;

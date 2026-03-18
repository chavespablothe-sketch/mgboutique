import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Flower2, TreePine, Mountain, Waves, Bike, Dog, Palette, Footprints, Music, Gamepad2, Heart, Baby } from "lucide-react";

const experiences = [
  {
    icon: Flower2,
    title: "Spa & Bem-estar",
    description: "Massagens relaxantes, sauna seca, ofurô ao ar livre com vista para as montanhas.",
    image: "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png",
  },
  {
    icon: TreePine,
    title: "Trilhas pela Mata Atlântica",
    description: "Trilhas guiadas com cachoeiras escondidas e mirantes panorâmicos.",
    image: "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png",
  },
  {
    icon: Mountain,
    title: "Quadriciclo & Aventura",
    description: "Adrenalina com paisagem de cinema pelas trilhas da fazenda.",
    image: "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png",
  },
  {
    icon: Waves,
    title: "Piscina & Lago Natural",
    description: "Piscina com vista para as montanhas e lago natural que reflete o céu da serra.",
    image: "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png",
  },
  {
    icon: Bike,
    title: "Cavalgadas",
    description: "Passeios a cavalo guiados pelas trilhas da fazenda.",
    image: "https://www.minhagloria.com.br/images/carousel-new-3.webp",
  },
  {
    icon: Dog,
    title: "Fazendinha",
    description: "Lhamas, alpacas, cavalos e coelhos — um mundo para descobrir.",
    image: "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png",
  },
];

const kidsFeatures = [
  { icon: Palette, title: "Oficinas Criativas", description: "Artes com materiais naturais, pintura e colagens com folhas." },
  { icon: Footprints, title: "Trilha Kids", description: "Trilha adaptada com atividades educativas e sons da floresta." },
  { icon: Gamepad2, title: "Recreação Monitorada", description: "Gincanas, jogos em grupo e brincadeiras tradicionais." },
  { icon: Music, title: "Música & Histórias", description: "Contação de histórias ao redor da fogueira." },
  { icon: Heart, title: "Baby Care", description: "Fraldário completo, berço no chalé e cardápio para bebês." },
  { icon: Baby, title: "Kids Free", description: "Crianças até 6 anos hospedadas gratuitamente." },
];

const ExperienciasPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <img src="https://www.minhagloria.com.br/images/carousel-new-2.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-secondary font-body text-[10px] tracking-[0.5em] uppercase mb-3 block">Lazer & Bem-estar</span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-[1.08] mb-4">
                Experiências que ficam <span className="italic text-secondary">na memória</span>
              </h1>
              <p className="text-primary-foreground/60 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                Spa, trilhas, fazendinha, cavalgadas e piscina — tudo pensado para famílias e casais que buscam descanso e aventura.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experiences Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-xl h-72 md:h-80"
                >
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <exp.icon size={16} className="text-secondary" />
                      <h3 className="font-display text-xl text-primary-foreground font-semibold">{exp.title}</h3>
                    </div>
                    <p className="text-primary-foreground/70 font-body text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kids Section */}
        <section className="py-16 lg:py-20 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Para os pequenos</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold leading-[1.1]">
                As crianças vivem <span className="italic text-secondary">aventuras</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {kidsFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-background rounded-xl p-6 border border-border"
                >
                  <item.icon size={20} className="text-secondary mb-3" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Viva essas experiências"
          subtitle="Reserve seu pacote e descubra tudo que o Minha Glória tem a oferecer."
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ExperienciasPage;

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Flower2, TreePine, Mountain, Waves, Bike, Dog, Palette, Footprints, Music, Gamepad2, Heart, Baby } from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  { icon: Flower2, title: "Spa & Bem-estar", description: "Massagens relaxantes, sauna seca, ofurô ao ar livre com vista para as montanhas e tratamentos corporais com produtos naturais da serra.", image: "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png", audience: "Todos" },
  { icon: Bike, title: "Passeio a Cavalo e Charrete", description: "Cavalgadas guiadas pelas trilhas da propriedade, com paradas em mirantes. Para quem busca conexão com a natureza no ritmo dos cavalos.", image: "https://www.minhagloria.com.br/images/carousel-new-3.webp", audience: "Famílias" },
  { icon: Mountain, title: "Quadriciclo e Jipe", description: "Adrenalina com paisagem de cinema pelas trilhas da fazenda. Aventura segura para adultos e adolescentes.", image: "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png", audience: "Todos" },
  { icon: Dog, title: "Fazendinha e Animais", description: "Lhamas, alpacas, cavalos, coelhos — um mundo de descobertas. Alimentar os animais pela manhã se torna um ritual inesquecível.", image: "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png", audience: "Famílias" },
  { icon: TreePine, title: "Trilhas na Mata Atlântica", description: "Trilhas guiadas com cachoeiras escondidas, mirantes panorâmicos e observação de aves. Cada caminhada é uma aula silenciosa.", image: "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png", audience: "Todos" },
  { icon: Waves, title: "Piscina Aquecida", description: "Piscina com vista para as montanhas, espreguiçadeiras à sombra das árvores e drinks servidos à beira d'água.", image: "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png", audience: "Todos" },
];

const kidsFeatures = [
  { icon: Dog, title: "Fazendinha", description: "Lhamas, alpacas, cavalos e coelhos — alimentar os animais pela manhã é o momento favorito das crianças." },
  { icon: Palette, title: "Oficinas Criativas", description: "Artes com materiais naturais, pintura em tela e colagens com folhas da Mata Atlântica." },
  { icon: Footprints, title: "Trilha Kids", description: "Trilha adaptada com atividades educativas: identificação de plantas, sons da floresta e pegadas de animais." },
  { icon: Gamepad2, title: "Recreação Monitorada", description: "Equipe dedicada com programação diária: gincanas, jogos e brincadeiras tradicionais." },
  { icon: Music, title: "Música & Histórias", description: "Contação de histórias ao redor da fogueira, músicas com violão e brincadeiras noturnas." },
  { icon: Heart, title: "Baby Care", description: "Fraldário completo, berço no chalé, cadeirão no restaurante e cardápio especial para bebês." },
];

const ExperienciasPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block">Experiências & Atividades</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6">
                Aqui, o tempo se transforma em <span className="italic text-secondary">memória</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                Passeio a cavalo, animais exóticos, trilhas na Mata Atlântica, piscina e spa.
                Experiências para famílias e casais que buscam descanso e aventura.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Experiences Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold">
                Atividades para <span className="italic text-secondary">todos</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-xl h-80"
                >
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <span className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground text-[10px] font-body uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {exp.audience}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <exp.icon size={18} className="text-secondary" />
                      <h3 className="font-display text-xl text-primary-foreground font-semibold">{exp.title}</h3>
                    </div>
                    <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kids Section */}
        <section className="py-20 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                <Baby className="text-secondary" size={28} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-4 leading-[1.1]">
                Um mundo de <span className="italic text-secondary">encanto</span> para os pequenos
              </h2>
              <p className="text-editorial text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
                No Minha Glória, as crianças não ficam apenas "entretidas" — elas vivem aventuras.
                Crianças até 6 anos se hospedam gratuitamente.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {kidsFeatures.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-background p-8 rounded-xl border border-border hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="w-14 h-14 mb-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-display text-3xl text-primary-foreground font-semibold mb-4">
              Programações <span className="italic text-secondary">sazonais</span>
            </h2>
            <p className="text-primary-foreground/60 font-body text-base leading-relaxed mb-8">
              Cada feriado traz uma programação única: Páscoa com caça aos ovos, Festa Junina com
              comidas típicas, férias de julho com programação kids especial, Natal e Réveillon com
              celebrações inesquecíveis.
            </p>
            <Link to="/tarifas" className="text-secondary font-body text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all">
              Ver pacotes temáticos <motion.span>→</motion.span>
            </Link>
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

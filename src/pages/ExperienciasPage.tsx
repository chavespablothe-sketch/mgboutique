import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { TreePine, Mountain, Waves, Bike, Dog, Palette, Footprints, Music, Gamepad2, Heart, Baby, Bird, Sparkles, Car, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import quadriJeepImg from "@/assets/quadri-jeep.png";

const experiences = [
  { icon: Bike, title: "Passeio a Cavalo e Charrete", description: "Cavalgadas guiadas pelas trilhas da propriedade, com paradas em mirantes panorâmicos.", image: "https://www.minhagloria.com.br/images/carousel-new-3.webp", audience: "Famílias" },
  { icon: Mountain, title: "Quadriciclo & Jeep", description: "Adrenalina com paisagem de cinema pelas trilhas da fazenda. Experiências de 30 ou 60 minutos de quadriciclo ou jeep.", image: quadriJeepImg, audience: "Aventura" },
  { icon: TreePine, title: "Trilhas na Mata Atlântica", description: "Trilhas guiadas com cachoeiras escondidas, mirantes e observação de aves.", image: "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png", audience: "Todos" },
  { icon: Waves, title: "Piscina Aquecida", description: "Piscina climatizada com vista para as montanhas e espaço infantil de 60cm.", image: "https://www.minhagloria.com.br/lovable-uploads/f5b7fb42-f922-4170-a409-e216226108dd.png", audience: "Todos" },
  { icon: Gamepad2, title: "Sala de Jogos", description: "Sinuca, ping-pong, jogos de cartas e TV. Entretenimento para todas as gerações.", image: "https://www.minhagloria.com.br/lovable-uploads/0114d434-8ce2-46f6-8993-fbc616165aa6.png", audience: "Todos" },
];

// ... keep existing code for animals, animalImages, kidsFeatures arrays (lines 20-66)

const animals = [
  { name: "Arara Canindé", category: "aves" },
  { name: "Arara Vermelha", category: "aves" },
  { name: "Arara Juba", category: "aves" },
  { name: "Tucano", category: "aves" },
  { name: "Papagaio", category: "aves" },
  { name: "Maritacas", category: "aves" },
  { name: "Pavão", category: "aves" },
  { name: "Faisão", category: "aves" },
  { name: "Cisnes Negros", category: "aves" },
  { name: "Ganso do Egito", category: "aves" },
  { name: "Galinha d'Angola", category: "aves" },
  { name: "Diamante Mandarim", category: "aves" },
  { name: "Peru", category: "aves" },
  { name: "Galo", category: "aves" },
  { name: "Galinha", category: "aves" },
  { name: "Avestruz", category: "fazenda" },
  { name: "Emu", category: "fazenda" },
  { name: "Lhama", category: "fazenda" },
  { name: "Cavalos", category: "fazenda" },
  { name: "Cabras", category: "fazenda" },
  { name: "Mini Cabra", category: "fazenda" },
  { name: "Vaca", category: "fazenda" },
  { name: "Boi", category: "fazenda" },
  { name: "Porco", category: "fazenda" },
  { name: "Coelhos", category: "fazenda" },
  { name: "Porquinho da Índia", category: "fazenda" },
  { name: "Jabuti", category: "fazenda" },
  { name: "Cachorro", category: "fazenda" },
];

const animalImages = [
  { src: "https://www.minhagloria.com.br/lovable-uploads/7e908836-8970-467c-b270-a684eb943725.png", alt: "Arara Canindé" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/f12e0477-9067-4dc3-8393-6e4c75444879.png", alt: "Tucano" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/8b9ea58e-cf1a-4dd8-9279-e236fcb7b9f6.png", alt: "Lhamas" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/f4edea6d-af44-47f4-9503-ece5b09d6817.png", alt: "Coelhos" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/8c96f303-1a57-418e-8982-acb1503b8c1b.png", alt: "Papagaios" },
  { src: "https://www.minhagloria.com.br/lovable-uploads/f393e2d3-cdc2-4668-8888-a310d96bbbc9.png", alt: "Jabuti" },
];

const kidsFeatures = [
  { icon: Dog, title: "Fazendinha", description: "Alimentar os animais pela manhã é o momento favorito das crianças. Lhamas, cavalos, coelhos e muito mais." },
  { icon: Palette, title: "Oficinas Criativas", description: "Artes com materiais naturais, pintura em tela e colagens com folhas da Mata Atlântica." },
  { icon: Footprints, title: "Trilha Kids", description: "Trilha adaptada com atividades educativas: identificação de plantas, sons da floresta e pegadas de animais." },
  { icon: Music, title: "Fogueira & Histórias", description: "Contação de histórias ao redor da fogueira, músicas com violão e brincadeiras noturnas sob as estrelas." },
  { icon: Heart, title: "Baby Care", description: "Fraldário completo, berço no chalé, cadeirão no restaurante e cardápio especial para bebês." },
];

const services = [
  {
    icon: Mountain,
    title: "Quadriciclo",
    items: [
      { label: "30 min", price: "R$ 100" },
      { label: "1 hora", price: "R$ 150" },
      { label: "Garupa", price: "+ R$ 75" },
    ],
    schedule: "9h30 às 11h | 13h às 16h",
  },
  {
    icon: Car,
    title: "Passeio de Jeep",
    items: [
      { label: "30 min", price: "R$ 100" },
      { label: "1 hora (até 3 pessoas)", price: "R$ 150" },
    ],
    schedule: "9h30 às 11h | 13h às 16h",
  },
  {
    icon: Sparkles,
    title: "Massagem",
    items: [
      { label: "30 min", price: "R$ 100" },
      { label: "1 hora", price: "R$ 200" },
    ],
    schedule: "Verificar na recepção",
  },
  {
    icon: Bike,
    title: "Cavalo & Charrete",
    items: [
      { label: "Cavalo – 30 min (por pessoa)", price: "R$ 35" },
      { label: "Charrete – 10 min (até 4 pessoas)", price: "R$ 38" },
    ],
    schedule: "9h30 às 11h",
  },
];

const ExperienciasPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const aves = animals.filter(a => a.category === "aves");
  const fazenda = animals.filter(a => a.category === "fazenda");

  return (
    <div className="min-h-screen">
      <SEO
        title="Experiências | Aventura, Animais e Bem-estar na Serra"
        description="Spa, cavalgadas, quadriciclo, fazendinha com araras, tucanos, lhamas, avestruzes e mais de 25 espécies. Trilhas, piscina aquecida e recreação na natureza. Bom Jardim, RJ."
        canonical="/experiencias"
        schemas={[
          { "@context": "https://schema.org", "@type": "TouristAttraction", name: "Experiências no Minha Glória", description: "Atividades de lazer e aventura em meio à Mata Atlântica com mais de 25 espécies de animais.", isAccessibleForFree: false, touristType: "Famílias com crianças" },
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Experiências", url: "/experiencias" }]),
        ]}
      />
      <Header />
      <div className="pt-20">
        {/* Hero with zoom */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom-bg"
            style={{ backgroundImage: `url('https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block drop-shadow-lg">Experiências & Atividades</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6 hero-text-shadow drop-shadow-lg">
                Aqui, o tempo se transforma em <span className="italic text-secondary drop-shadow-lg">memória</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto hero-text-shadow">
                Mais de 25 espécies de animais, spa, trilhas na Mata Atlântica, piscina aquecida e recreação na natureza.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Activities — immersive horizontal scroll cards */}
        <section className="py-24 lg:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-6 block">O que te espera</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-4 leading-[1.05]">
                Experiências que <span className="italic text-secondary">marcam</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-6xl mx-auto">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group relative overflow-hidden"
                >
                  <div className="aspect-[4/5]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <div className="w-11 h-11 mb-4 rounded-full bg-secondary/20 flex items-center justify-center backdrop-blur-sm border border-secondary/30">
                        <exp.icon className="text-secondary" size={20} />
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2 hero-text-shadow">{exp.title}</h3>
                      <p className="text-primary-foreground/70 font-body text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Animals Section — vivid colors */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-[hsl(120,30%,18%)] to-[hsl(160,25%,20%)] overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[hsl(37,60%,55%)]/20 flex items-center justify-center border border-[hsl(37,60%,55%)]/30">
                <Bird className="text-[hsl(37,60%,55%)]" size={36} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-6 leading-[1.05]">
                Um mundo de <span className="italic text-[hsl(37,60%,55%)]">encanto</span> animal
              </h2>
              <p className="text-editorial text-primary-foreground/80 text-xl leading-relaxed max-w-2xl mx-auto">
                Encante-se e viva momentos especiais com mais de 25 espécies de animais. 
                Araras, tucanos, lhamas, avestruzes, pavões, cavalos e muito mais — 
                experiências únicas para todas as idades.
              </p>
            </motion.div>

            {/* Animal Photos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
              {animalImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`overflow-hidden rounded-2xl ring-2 ring-[hsl(37,60%,55%)]/20 photo-lift ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover hover:scale-110 transition-transform duration-1000 ${i === 0 ? 'h-[250px] md:h-full' : 'h-[200px] md:h-[250px]'}`}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            {/* Animal Lists — vivid cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(37,60%,55%)]/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[hsl(0,70%,50%)]/15 flex items-center justify-center">
                    <Bird className="text-[hsl(0,70%,60%)]" size={20} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-primary-foreground">Aves Exóticas</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {aves.map((animal, i) => (
                    <span key={i} className="text-primary-foreground/70 font-body text-sm py-1.5 border-b border-primary-foreground/10 last:border-0">
                      {animal.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(37,60%,55%)]/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[hsl(37,60%,55%)]/15 flex items-center justify-center">
                    <Dog className="text-[hsl(37,60%,55%)]" size={20} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-primary-foreground">Fazenda & Companhia</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {fazenda.map((animal, i) => (
                    <span key={i} className="text-primary-foreground/70 font-body text-sm py-1.5 border-b border-primary-foreground/10 last:border-0">
                      {animal.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-primary-foreground/50 font-body text-sm mt-10 max-w-xl mx-auto"
            >
              Cada encontro com os animais é uma oportunidade de aprendizado e encantamento.
            </motion.p>
          </div>
        </section>

        {/* Spa & Wellness */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src="https://www.minhagloria.com.br/lovable-uploads/04460747-2a8e-4012-a6be-1b1819ad5997.png"
                  alt="Spa e massagem relaxante ao ar livre"
                  className="w-full h-[350px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="text-secondary" size={28} />
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                  Spa & <span className="italic text-secondary">Massagem</span>
                </h3>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
                  Nosso spa oferece um santuário de bem-estar onde cada toque é uma sinfonia de renovação. 
                  Ingredientes puros da natureza combinam-se em rituais terapêuticos únicos.
                </p>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  Massagens ao ar livre com vista para as montanhas, sauna seca e tratamentos com óleos 
                  essenciais e produtos naturais da serra.
                </p>
              </motion.div>
            </div>

            {/* Vintage Cars — using hotel photo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-2 overflow-hidden rounded-2xl">
                <img
                  src={quadriJeepImg}
                  alt="Coleção de carros antigos, quadriciclos e jeep"
                  className="w-full h-[350px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-1">
                <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Car className="text-secondary" size={28} />
                </div>
                <h3 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                  Carros Antigos & <span className="italic text-secondary">Relíquias</span>
                </h3>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-4">
                  Uma viagem no tempo através de relíquias automobilísticas. Kombis vintage, fuscas icônicos 
                  e uma motocicleta by side — cenários perfeitos para fotografias memoráveis.
                </p>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  Tesouros do passado que agregam charme nostálgico à sua experiência.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recreation - Weekend */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                <Baby className="text-secondary" size={28} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground font-semibold mb-4 leading-[1.1]">
                Recreação na <span className="italic text-secondary">natureza</span>
              </h2>
              <p className="text-primary-foreground/60 font-body text-sm uppercase tracking-widest mb-6">
                Aos fins de semana e feriados · Com monitores especializados
              </p>
              <p className="text-editorial text-primary-foreground/70 text-xl max-w-2xl mx-auto leading-relaxed">
                Não é uma recreação qualquer. Aqui, as crianças vivem aventuras de verdade — na terra, 
                entre animais, sob as árvores, com os pés descalços.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {kidsFeatures.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-primary-foreground/5 p-8 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-500"
                >
                  <div className="w-14 h-14 mb-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/60 font-body text-base leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
              {/* Kids free callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-secondary/20 p-8 rounded-xl border border-secondary/30 flex flex-col items-center justify-center text-center"
              >
                <span className="text-secondary font-display text-5xl font-semibold mb-3">Free</span>
                <p className="text-primary-foreground font-body text-base leading-relaxed">
                  1 criança até 12 anos se hospeda <strong className="text-secondary">gratuitamente</strong> nos fins de semana
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services & Pricing */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <DollarSign className="text-secondary" size={28} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-6 leading-[1.05]">
                Serviços & <span className="italic text-secondary">Passeios</span>
              </h2>
              <p className="text-editorial text-muted-foreground text-lg leading-relaxed">
                Valores e horários dos passeios e serviços disponíveis durante sua estadia.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-primary/5 rounded-2xl p-8 border border-primary/10 hover:shadow-lg transition-shadow duration-500"
                >
                  <div className="w-14 h-14 mb-5 rounded-full bg-secondary/15 flex items-center justify-center">
                    <service.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-5">{service.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    {service.items.map((item, j) => (
                      <div key={j} className="flex items-center justify-between gap-2 py-2 border-b border-primary/10 last:border-0">
                        <span className="text-muted-foreground font-body text-sm">{item.label}</span>
                        <span className="text-foreground font-body text-sm font-semibold whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={14} className="text-secondary" />
                    <span className="font-body text-xs">{service.schedule}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground font-body text-sm mt-10 max-w-xl mx-auto"
            >
              Valores sujeitos a alteração. Consulte a recepção para disponibilidade e agendamento.
            </motion.p>
          </div>
        </section>

        {/* Seasonal */}
        <section className="py-16 bg-hotel-cream">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-display text-3xl text-foreground font-semibold mb-4">
              Programações <span className="italic text-secondary">sazonais</span>
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
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

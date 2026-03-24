import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Flower2, Bike, Mountain, Waves, Baby, Dog, Palette, Footprints, Music, Gamepad2, Heart } from "lucide-react";

const adultActivities = [
  { icon: Flower2, title: "Spa & Bem-estar", description: "Massagens relaxantes com óleos essenciais da serra, sauna seca, ofurô ao ar livre com vista para as montanhas e tratamentos corporais com produtos naturais. Um convite para desacelerar corpo e mente.", image: "/images/amenities-spa.jpg" },
  { icon: Mountain, title: "Quadriciclo & Aventura", description: "Adrenalina com paisagem de cinema. Aventuras de quadriciclo pelas trilhas da fazenda, com paradas em mirantes deslumbrantes. Para quem busca emoção sem perder a vista.", image: "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png" },
  { icon: Waves, title: "Piscina & Lago Natural", description: "Piscina com vista para as montanhas e um lago natural que reflete o céu da serra. Espreguiçadeiras à sombra das árvores e drinks servidos à beira d'água.", image: "/images/lazer-piscina.webp" },
  { icon: Bike, title: "Cavalgadas", description: "Passeios a cavalo pelas trilhas da fazenda, guiados por profissionais experientes. Uma experiência sensorial completa: o vento no rosto, o som dos cascos e a paisagem se revelando a cada curva.", image: "/images/lazer-cavalos.jpg" },
  { icon: Gamepad2, title: "Jogos & Entretenimento", description: "Sala de jogos com mesa de poker, sinuca e diversão para todas as idades. Noites animadas com amigos e família em um ambiente acolhedor.", image: "/images/lazer-poker.jpg" },
];

const animalImages = [
  { src: "/images/lazer-lhamas.jpg", alt: "Lhamas na fazenda" },
  { src: "/images/lhama-branca.jpg", alt: "Lhama branca" },
  { src: "/images/faisao.jpg", alt: "Faisão colorido" },
  { src: "/images/porquinho.jpg", alt: "Porquinho da fazenda" },
  { src: "/images/cabra-marrom.jpg", alt: "Cabra marrom" },
  { src: "/images/cabra-preta.jpg", alt: "Cabra preta" },
  { src: "/images/lazer-arara.jpg", alt: "Arara azul e amarela" },
  { src: "/images/lazer-cisne.jpg", alt: "Criança observando cisne no lago" },
  { src: "/images/lazer-periquitos.jpg", alt: "Periquitos verdes" },
  { src: "/images/lazer-lhamas2.jpg", alt: "Lhamas no pasto" },
  { src: "/images/lazer-cavalos.jpg", alt: "Égua e potro" },
];

const kidsActivities = [
  { icon: Palette, title: "Oficinas Criativas", description: "Artes com materiais naturais, pintura em tela e colagens com folhas. As crianças criam e levam obras de arte únicas para casa." },
  { icon: Footprints, title: "Trilha Kids", description: "Trilha adaptada com atividades educativas: identificação de plantas, sons da floresta e pegadas de animais." },
  { icon: Gamepad2, title: "Recreação Monitorada", description: "Equipe dedicada com programação diária: gincanas, jogos em grupo e brincadeiras tradicionais." },
  { icon: Music, title: "Música & Histórias", description: "Contação de histórias ao redor da fogueira, músicas com violão e brincadeiras noturnas." },
  { icon: Heart, title: "Baby Care", description: "Fraldário completo, berço no chalé, cadeirão no restaurante e cardápio especial para bebês." },
];

const LazerPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom-bg"
            style={{ backgroundImage: `url('/images/lazer-piscina.webp')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block drop-shadow-lg">Experiências</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6 hero-text-shadow drop-shadow-lg">
                Cada dia, uma nova <span className="italic text-secondary drop-shadow-lg">descoberta</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto hero-text-shadow">
                Do amanhecer ao anoitecer, experiências que transformam uma estadia em memórias para toda a vida
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Adult Activities */}
        <section className="py-24 lg:py-36 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-20">
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-6 block">Para Adultos</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-6 leading-[1.1]">
                Relaxe, explore, <span className="italic text-secondary">se aventure</span>
              </h2>
              <p className="text-editorial text-muted-foreground text-xl leading-relaxed">
                Aqui, você escolhe o ritmo. Pode ser um dia inteiro no spa, uma aventura de quadriciclo com paisagem de cinema ou uma partida de poker com amigos.
              </p>
            </motion.div>

            <div className="space-y-24">
              {adultActivities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                >
                  <div className={`overflow-hidden rounded-xl photo-parallax photo-lift ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <img src={item.image} alt={item.title} className="w-full h-[350px] lg:h-[450px] object-cover" loading="lazy" />
                  </div>
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <div className="w-14 h-14 mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="text-secondary" size={24} />
                    </div>
                    <h3 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-5">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kids Section */}
        <section className="py-24 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                <Baby className="text-secondary" size={28} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-6 leading-[1.1]">
                Um mundo de <span className="italic text-secondary">encanto</span> para os pequenos
              </h2>
              <p className="text-editorial text-muted-foreground text-xl leading-relaxed">
                No Minha Glória, as crianças vivem aventuras de verdade. 
                1 criança até 12 anos se hospeda gratuitamente nos fins de semana.
              </p>
            </motion.div>

            {/* Fazendinha - Animal Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Dog className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold text-foreground">Fazendinha</h3>
                  <p className="text-muted-foreground font-body">Lhamas, araras, cisnes, cavalos — um mundo para descobrir</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5">
                {animalImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="overflow-hidden rounded-xl"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[200px] md:h-[280px] object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other Kids Activities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {kidsActivities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
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

        <CTASection 
          title="Pronto para a aventura?" 
          subtitle="Reserve agora e viva experiências inesquecíveis com toda a família. Pensão completa e 1 criança até 12 anos grátis nos fins de semana." 
        />
      </div>
      <Footer />
    </div>
  );
};

export default LazerPage;

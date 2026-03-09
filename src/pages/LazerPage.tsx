import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Flower2, TreePine, Bike, Mountain, Waves, Baby, Palette, Dog, Footprints, Music, Gamepad2, Heart } from "lucide-react";

const adultActivities = [
  { icon: Flower2, title: "Spa & Bem-estar", description: "Massagens relaxantes com óleos essenciais da serra, sauna seca, ofurô ao ar livre com vista para as montanhas e tratamentos corporais com produtos naturais. Um convite para desacelerar corpo e mente, respirar fundo e deixar a tensão da cidade se dissolver entre as montanhas.", image: "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png" },
  { icon: TreePine, title: "Trilhas pela Mata Atlântica", description: "Trilhas guiadas por especialistas que revelam os segredos da floresta tropical. Observação de aves raras, cachoeiras escondidas e mirantes panorâmicos onde o horizonte se perde entre montanhas. Cada caminhada é uma aula silenciosa de respeito pela natureza.", image: "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png" },
  { icon: Mountain, title: "Quadriciclo & Aventura", description: "Adrenalina com paisagem de cinema. Aventuras de quadriciclo pelas trilhas da fazenda, com paradas em mirantes deslumbrantes. Para quem busca emoção sem perder a vista — porque aqui até a aventura tem charme.", image: "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png" },
  { icon: Waves, title: "Piscina & Lago Natural", description: "Piscina com vista para as montanhas e um lago natural que reflete o céu da serra. Espreguiçadeiras à sombra das árvores, drinks servidos à beira d'água e aquele momento de contemplação que só a natureza oferece.", image: "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png" },
  { icon: Bike, title: "Cavalgadas", description: "Passeios a cavalo pelas trilhas da fazenda, guiados por profissionais experientes. Uma experiência sensorial completa: o vento no rosto, o som dos cascos na terra e a paisagem da serra fluminense se revelando a cada curva.", image: "https://www.minhagloria.com.br/images/carousel-new-3.webp" },
];

const kidsActivities = [
  { icon: Dog, title: "Fazendinha", description: "Lhamas, alpacas, cavalos, galinhas, coelhos — um mundo inteiro para descobrir. Alimentar os animais pela manhã se torna um ritual que as crianças nunca esquecem." },
  { icon: Palette, title: "Oficinas Criativas", description: "Artes com materiais naturais, pintura em tela, colagens com folhas e flores. As crianças criam, inventam e levam para casa obras de arte únicas." },
  { icon: Footprints, title: "Trilha Kids", description: "Trilha adaptada com atividades educativas: identificação de plantas, sons da floresta, pegadas de animais. Aprender brincando em meio à natureza." },
  { icon: Gamepad2, title: "Recreação Monitorada", description: "Equipe dedicada com programação diária: gincanas, jogos em grupo, brincadeiras tradicionais. Para que os pais relaxem sabendo que os filhos estão se divertindo." },
  { icon: Music, title: "Música & Histórias", description: "Contação de histórias ao redor da fogueira, músicas com violão e brincadeiras noturnas. Momentos mágicos que viram lembranças da infância." },
  { icon: Heart, title: "Baby Care", description: "Fraldário completo, berço disponível no chalé, cadeirão no restaurante e cardápio especial para bebês. Cada detalhe pensado para os menores." },
];

const LazerPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block">Experiências</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6">
                Cada dia, uma nova <span className="italic text-secondary">descoberta</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                Do amanhecer ao anoitecer, experiências que transformam uma estadia em memórias para toda a vida
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Adult Activities */}
        <section className="py-24 lg:py-40 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-24">
              <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-8">
                Para Adultos
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-8 leading-[1.1]">
                Relaxe, explore, <span className="italic text-secondary">se aventure</span>
              </h2>
              <p className="text-editorial text-muted-foreground text-xl leading-relaxed">
                Aqui, você escolhe o ritmo. Pode ser um dia inteiro no spa, uma trilha que 
                termina em cachoeira ou uma aventura de quadriciclo com paisagem de cinema. 
                O importante é: não há pressa. Apenas presença.
              </p>
            </motion.div>

            <div className="space-y-28">
              {adultActivities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                >
                  <div className={`overflow-hidden rounded-xl ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <img src={item.image} alt={item.title} className="w-full h-[350px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
                  </div>
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="text-secondary" size={28} />
                    </div>
                    <h3 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-6">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Kids Section */}
        <section className="py-24 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-20">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <Baby className="text-secondary" size={36} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-6 leading-[1.1]">
                Um mundo de <span className="italic text-secondary">encanto</span> para os pequenos
              </h2>
              <p className="text-editorial text-muted-foreground text-xl leading-relaxed">
                No Minha Glória, as crianças não ficam apenas "entretidas" — elas vivem aventuras de verdade. 
                Aqui, seus filhos descobrem a natureza com os olhos brilhando, fazem amizade com lhamas, 
                criam obras de arte com folhas e flores, e à noite pedem para ficar "só mais um pouquinho". 
                Crianças até 6 anos se hospedam gratuitamente.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {kidsActivities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-background p-10 rounded-xl border border-border hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="w-16 h-16 mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <item.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo strip */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png",
                "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png",
                "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png",
                "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png",
              ].map((src, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-lg">
                  <img src={src} alt={`Atividade ${i + 1}`} className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-1000" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Pronto para a aventura?" 
          subtitle="Reserve agora e viva experiências inesquecíveis com toda a família. Pensão completa, recreação monitorada e crianças até 6 anos grátis." 
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LazerPage;

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Users, Maximize, Bath, Wifi, Coffee, TreePine, ArrowRight, Baby, CreditCard, Check, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const chalets = [
  {
    name: "Chalé Tradicional",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/d853d202-1c9d-4cd8-8f3b-d89a257c4ee7.png",
      "https://www.minhagloria.com.br/lovable-uploads/2e4a3772-1627-445c-ad0a-bc144dd8a4d5.png",
    ],
    description: "Seu primeiro abraço da serra. Chalé aconchegante com decoração rústica sofisticada, onde madeira e pedra criam uma atmosfera de acolhimento. Pela manhã, a luz filtra pelas árvores e entra pela janela. À noite, o silêncio da montanha é a trilha sonora do seu descanso. Perfeito para casais ou famílias pequenas que buscam simplicidade com elegância.",
    capacity: "2-4 hóspedes",
    size: "55m²",
    amenities: ["Ar condicionado", "Frigobar", "TV Smart 50\"", "Varanda privativa", "Wi-Fi", "Café Nespresso", "Amenities naturais"],
    highlight: "Vista para o jardim",
    tagline: "Charme rústico, conforto moderno",
  },
  {
    name: "Chalé Superior",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/042a304b-19fc-4d61-a524-f78eac0368a9.png",
      "https://www.minhagloria.com.br/lovable-uploads/a6a3395d-5965-482b-b1a6-543cb7840e0f.png",
    ],
    description: "Para quem quer mais espaço, mais vista e mais momentos de contemplação. A varanda panorâmica emoldura as montanhas da Mata Atlântica como uma obra de arte que muda a cada hora. O interior amplo combina texturas naturais com acabamentos cuidadosos. Inclui roupão e chinelos para que você se sinta em casa — uma casa muito especial.",
    capacity: "2-4 hóspedes",
    size: "70m²",
    amenities: ["Ar condicionado", "Frigobar", "TV Smart 55\"", "Varanda panorâmica", "Wi-Fi", "Café Nespresso", "Roupão e chinelos", "Amenities premium"],
    highlight: "Vista panorâmica",
    tagline: "A experiência boutique elevada",
  },
  {
    name: "Chalé Master",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/44683466-44b0-4f6e-896a-51a9ae1249fc.png",
      "https://www.minhagloria.com.br/lovable-uploads/85379e6d-f1dc-433a-bc75-77c926ac6d9b.png",
    ],
    description: "O ápice da exclusividade no Minha Glória. Banheira de hidromassagem para mergulhar no relaxamento após um dia de trilhas. Lareira para aquecer conversas e criar aquele momento cinematográfico que você sempre quis viver. Decoração premium com peças artesanais da região. Para momentos que merecem ser inesquecíveis.",
    capacity: "2-6 hóspedes",
    size: "95m²",
    amenities: ["Hidromassagem", "Lareira", "Ar condicionado", "TV Smart 60\"", "Varanda privativa", "Wi-Fi", "Café Nespresso", "Roupão e chinelos", "Amenities premium", "Minibar selecionado"],
    highlight: "Hidromassagem + Lareira",
    tagline: "O ápice da exclusividade",
  },
  {
    name: "Chalé Família",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/28329729-31a6-47f7-b501-4427f2f9c84a.png",
      "https://www.minhagloria.com.br/lovable-uploads/beaeb973-0a83-4d4d-9bc1-a47ccc40cd59.png",
    ],
    description: "Projetado para o que realmente importa: estar junto. Dois quartos conectados por uma área de convivência ampla, onde as crianças podem brincar enquanto os pais relaxam. Espaço generoso para malas, carrinhos e toda a parafernália que viagem em família exige. Berço disponível, proteção nas tomadas e todo o cuidado que pais atentos procuram.",
    capacity: "4-6 hóspedes",
    size: "110m²",
    amenities: ["2 quartos", "Ar condicionado", "Frigobar", "TV Smart", "Varanda", "Wi-Fi", "Área de convivência", "Berço disponível", "Proteção tomadas"],
    highlight: "Perfeito para famílias",
    tagline: "Onde a família se reúne",
  },
];

const ChalesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom-bg"
            style={{ backgroundImage: `url('https://www.minhagloria.com.br/lovable-uploads/d853d202-1c9d-4cd8-8f3b-d89a257c4ee7.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block drop-shadow-lg">Acomodações Exclusivas</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6 hero-text-shadow drop-shadow-lg">
                Chalés que contam <span className="italic text-secondary drop-shadow-lg">histórias</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed hero-text-shadow">
                Apenas 20 suítes em meio à Mata Atlântica. Cada uma projetada para que madeira, 
                pedra e natureza criem o cenário perfeito para suas memórias
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Promise Bar */}
        <section className="bg-primary py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Star, text: "Decoração autoral" },
                { icon: Baby, text: "Kids free até 6 anos" },
                { icon: CreditCard, text: "10x sem juros" },
                { icon: Coffee, text: "Café artesanal incluso" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <item.icon size={20} className="text-secondary" />
                  <span className="text-primary-foreground font-body text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-editorial text-muted-foreground text-xl md:text-2xl leading-relaxed">
                No Minha Glória, cada acomodação é um refúgio individual. Não somos um hotel 
                de passagem — somos um destino. Os chalés não são apenas onde você dorme. 
                São onde você vive, respira e se reconecta com o que importa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Chalets */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-28">
              {chalets.map((chalet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                  {/* Images */}
                  <div className={`relative ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="grid grid-cols-5 gap-4">
                      <div className="col-span-3 photo-parallax rounded-xl overflow-hidden photo-glow">
                        <img src={chalet.images[0]} alt={`${chalet.name} - principal`} className="w-full h-80 lg:h-[450px] object-cover shadow-xl" loading="lazy" />
                      </div>
                      <div className="col-span-2 flex flex-col gap-4">
                        <div className="photo-parallax rounded-xl overflow-hidden">
                          <img src={chalet.images[1]} alt={`${chalet.name} - detalhe`} className="w-full h-40 lg:h-52 object-cover shadow-lg" loading="lazy" />
                        </div>
                        <div className="bg-primary rounded-xl p-5 flex flex-col items-center justify-center text-center flex-1 shadow-lg">
                          <Sparkles size={22} className="text-secondary mb-3" />
                          <span className="text-primary-foreground font-display text-base font-semibold leading-snug">{chalet.tagline}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-px bg-secondary" />
                      <span className="text-secondary text-xs font-body uppercase tracking-[0.3em]">{chalet.highlight}</span>
                    </div>
                    <h3 className="font-display text-3xl lg:text-5xl font-semibold text-foreground mb-5 leading-[1.1]">{chalet.name}</h3>
                    <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-6">{chalet.description}</p>

                    <div className="flex gap-6 text-muted-foreground text-sm font-body mb-6 pb-6 border-b border-border">
                      <span className="flex items-center gap-2"><Users size={16} className="text-secondary" /> {chalet.capacity}</span>
                      <span className="flex items-center gap-2"><Maximize size={16} className="text-secondary" /> {chalet.size}</span>
                      <span className="flex items-center gap-2"><Bath size={16} className="text-secondary" /> Banheiro privativo</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {chalet.amenities.map((amenity, j) => (
                        <span key={j} className="flex items-center gap-1.5 text-xs font-body text-foreground bg-muted px-3 py-1.5 rounded-full">
                          <Check size={10} className="text-secondary" /> {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body uppercase tracking-[0.15em] text-sm gap-2 rounded-full">
                        <a href={`https://wa.me/5522997792023?text=Olá! Gostaria de saber disponibilidade e valores do ${chalet.name}.`} target="_blank" rel="noopener noreferrer">
                          Reservar este chalé <ArrowRight size={14} />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-border text-foreground font-body text-sm gap-2 rounded-full">
                        <a href="tel:+5522997792023">Ligar: (22) 99779-2023</a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Amenities */}
        <section className="py-20 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold">
                Presente em <span className="italic text-secondary">todos</span> os chalés
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Wifi, label: "Wi-Fi gratuito" },
                { icon: Coffee, label: "Café Nespresso" },
                { icon: TreePine, label: "Vista para natureza" },
                { icon: Bath, label: "Amenities premium" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <span className="font-display text-lg font-semibold text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Reserve seu chalé boutique"
          subtitle="Apenas 20 suítes disponíveis. Pensão completa, crianças até 6 anos grátis e parcelamento em 10x sem juros."
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ChalesPage;

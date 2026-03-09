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
    description: "Chalé aconchegante em meio à natureza, com decoração rústica sofisticada e todo o conforto para sua estadia. Perfeito para casais ou famílias pequenas que buscam paz e tranquilidade.",
    capacity: "2-4 hóspedes",
    size: "55m²",
    amenities: ["Ar condicionado", "Frigobar", "TV Smart", "Varanda", "Wi-Fi", "Café Nespresso"],
    highlight: "Vista para o jardim",
    tagline: "Charme rústico com conforto moderno",
  },
  {
    name: "Chalé Superior",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/042a304b-19fc-4d61-a524-f78eac0368a9.png",
      "https://www.minhagloria.com.br/lovable-uploads/a6a3395d-5965-482b-b1a6-543cb7840e0f.png",
    ],
    description: "Espaço mais amplo com varanda privativa e vista privilegiada para as montanhas da Mata Atlântica. Ideal para quem deseja mais conforto e uma experiência boutique completa.",
    capacity: "2-4 hóspedes",
    size: "70m²",
    amenities: ["Ar condicionado", "Frigobar", "TV Smart", "Varanda panorâmica", "Wi-Fi", "Café Nespresso", "Roupão e chinelos"],
    highlight: "Vista para as montanhas",
    tagline: "A experiência boutique elevada",
  },
  {
    name: "Chalé Master",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/44683466-44b0-4f6e-896a-51a9ae1249fc.png",
      "https://www.minhagloria.com.br/lovable-uploads/85379e6d-f1dc-433a-bc75-77c926ac6d9b.png",
    ],
    description: "Nossa acomodação mais exclusiva, com banheira de hidromassagem, lareira e decoração premium. Para momentos especiais que merecem o máximo conforto e sofisticação.",
    capacity: "2-6 hóspedes",
    size: "95m²",
    amenities: ["Hidromassagem", "Lareira", "Ar condicionado", "TV Smart", "Varanda privativa", "Wi-Fi", "Café Nespresso", "Roupão e chinelos", "Amenities premium"],
    highlight: "Hidromassagem + Lareira",
    tagline: "O ápice da exclusividade",
  },
  {
    name: "Chalé Família",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/28329729-31a6-47f7-b501-4427f2f9c84a.png",
      "https://www.minhagloria.com.br/lovable-uploads/beaeb973-0a83-4d4d-9bc1-a47ccc40cd59.png",
    ],
    description: "Ideal para famílias, com espaço amplo, dois quartos e área de convivência integrada. As crianças têm espaço para brincar e os pais para relaxar — todos juntos com todo conforto.",
    capacity: "4-6 hóspedes",
    size: "110m²",
    amenities: ["2 quartos", "Ar condicionado", "Frigobar", "TV Smart", "Varanda", "Wi-Fi", "Área de convivência", "Berço disponível"],
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
        <section
          className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/lovable-uploads/d853d202-1c9d-4cd8-8f3b-d89a257c4ee7.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80" />
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="w-12 h-px bg-secondary" />
                <Sparkles size={16} className="text-secondary" />
                <span className="text-secondary font-body text-sm tracking-[0.4em] uppercase">Acomodações Exclusivas</span>
                <Sparkles size={16} className="text-secondary" />
                <span className="w-12 h-px bg-secondary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-4">
                Nossos Chalés <span className="italic text-secondary">Boutique</span>
              </h1>
              <p className="text-primary-foreground/80 font-body mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
                Cada chalé foi cuidadosamente projetado para oferecer uma experiência única de conforto e sofisticação,
                em perfeita harmonia com a natureza da Mata Atlântica
              </p>
            </motion.div>
          </div>
        </section>

        {/* Boutique Promise */}
        <section className="bg-primary py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Star, text: "Decoração autoral e sofisticada" },
                { icon: Baby, text: "Crianças até 6 anos: cortesia" },
                { icon: CreditCard, text: "Parcele em até 10x sem juros" },
                { icon: Coffee, text: "Café da manhã artesanal incluso" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-center gap-3 text-primary-foreground font-body text-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <item.icon size={14} className="text-secondary" />
                  </div>
                  {item.text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-6">
                A experiência <span className="italic text-secondary">boutique</span> começa no seu chalé
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed text-lg">
                No Minha Glória, cada acomodação é pensada como um refúgio individual. Não somos um hotel de passagem —
                somos um destino. Apenas 20 suítes garantem exclusividade, atendimento próximo e a atenção aos detalhes
                que só um hotel boutique pode oferecer. Aqui, cada hóspede é único e cada estadia é memorável.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Chalets */}
        <section className="py-8 pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-28">
              {chalets.map((chalet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                  {/* Images - alternate sides */}
                  <div className={`relative ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="grid grid-cols-5 gap-4">
                      <div className="col-span-3">
                        <img src={chalet.images[0]} alt={`${chalet.name} 1`} className="w-full h-72 lg:h-96 object-cover rounded-lg shadow-xl" loading="lazy" />
                      </div>
                      <div className="col-span-2 flex flex-col gap-4">
                        <img src={chalet.images[1]} alt={`${chalet.name} 2`} className="w-full h-34 lg:h-44 object-cover rounded-lg shadow-lg" loading="lazy" />
                        <div className="bg-primary rounded-lg p-4 flex flex-col items-center justify-center text-center flex-1 shadow-lg">
                          <Sparkles size={20} className="text-secondary mb-2" />
                          <span className="text-primary-foreground font-display text-sm font-semibold">{chalet.tagline}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-px bg-secondary" />
                      <span className="text-secondary text-xs font-body uppercase tracking-[0.3em]">{chalet.highlight}</span>
                    </div>
                    <h3 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">{chalet.name}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed mb-8 text-base">{chalet.description}</p>

                    <div className="flex gap-8 text-muted-foreground text-sm font-body mb-8 pb-8 border-b border-border">
                      <span className="flex items-center gap-2"><Users size={18} className="text-secondary" /> {chalet.capacity}</span>
                      <span className="flex items-center gap-2"><Maximize size={18} className="text-secondary" /> {chalet.size}</span>
                      <span className="flex items-center gap-2"><Bath size={18} className="text-secondary" /> Banheiro privativo</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {chalet.amenities.map((amenity, j) => (
                        <span key={j} className="flex items-center gap-1.5 text-xs font-body text-foreground bg-muted px-3 py-2 rounded-full">
                          <Check size={10} className="text-secondary" /> {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-wider text-sm gap-2">
                        <a href={`https://wa.me/5522997792023?text=Olá! Gostaria de saber disponibilidade e valores do ${chalet.name}.`} target="_blank" rel="noopener noreferrer">
                          Reservar este chalé <ArrowRight size={14} />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-border text-foreground font-body text-sm gap-2">
                        <a href="tel:+5522997792023">
                          Ligar agora
                        </a>
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
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-4">
                Presente em <span className="italic text-secondary">todos</span> os chalés
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto mb-12">
                Detalhes que fazem a diferença na sua experiência boutique
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { icon: Wifi, label: "Wi-Fi gratuito", desc: "Conexão de alta velocidade" },
                { icon: Coffee, label: "Café Nespresso", desc: "Máquina no quarto" },
                { icon: TreePine, label: "Vista para natureza", desc: "Mata Atlântica" },
                { icon: Bath, label: "Amenities premium", desc: "Produtos selecionados" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={22} />
                  </div>
                  <span className="font-display text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="font-body text-xs text-muted-foreground">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Reserve seu chalé boutique"
          subtitle="Apenas 20 suítes disponíveis. Garanta sua estadia exclusiva em meio à Mata Atlântica."
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ChalesPage;

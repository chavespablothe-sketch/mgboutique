import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Users, Maximize, Bath, Wifi, Coffee, TreePine, ArrowRight, Baby, CreditCard, Check } from "lucide-react";
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
          className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/lovable-uploads/d853d202-1c9d-4cd8-8f3b-d89a257c4ee7.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/70" />
          <div className="relative z-10 text-center">
            <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Acomodações</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold">Nossos Chalés</h1>
            <p className="text-primary-foreground/70 font-body mt-4 text-lg">Charme rústico com conforto moderno em meio à Mata Atlântica</p>
          </div>
        </section>

        {/* Info Bar */}
        <section className="bg-primary py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="flex items-center gap-2 text-primary-foreground font-body text-sm">
                <Baby size={16} className="text-secondary" /> Crianças até 6 anos: cortesia
              </div>
              <div className="flex items-center gap-2 text-primary-foreground font-body text-sm">
                <CreditCard size={16} className="text-secondary" /> Parcele em até 10x sem juros
              </div>
              <div className="flex items-center gap-2 text-primary-foreground font-body text-sm">
                <Coffee size={16} className="text-secondary" /> Café da manhã incluso
              </div>
            </div>
          </div>
        </section>

        {/* Chalets */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {chalets.map((chalet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Images - alternate sides */}
                  <div className={`grid grid-cols-2 gap-4 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    {chalet.images.map((img, j) => (
                      <img key={j} src={img} alt={`${chalet.name} ${j + 1}`} className="w-full h-56 lg:h-72 object-cover rounded-lg shadow-md" loading="lazy" />
                    ))}
                  </div>

                  {/* Content */}
                  <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                    <span className="inline-block bg-secondary/10 text-secondary text-xs font-body uppercase tracking-wider px-3 py-1 rounded mb-4">{chalet.highlight}</span>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">{chalet.name}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed mb-6">{chalet.description}</p>

                    <div className="flex gap-6 text-muted-foreground text-sm font-body mb-6">
                      <span className="flex items-center gap-2"><Users size={16} className="text-secondary" /> {chalet.capacity}</span>
                      <span className="flex items-center gap-2"><Maximize size={16} className="text-secondary" /> {chalet.size}</span>
                      <span className="flex items-center gap-2"><Bath size={16} className="text-secondary" /> Banheiro privativo</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {chalet.amenities.map((amenity, j) => (
                        <span key={j} className="flex items-center gap-1 text-xs font-body text-foreground bg-muted px-3 py-1.5 rounded-full">
                          <Check size={10} className="text-secondary" /> {amenity}
                        </span>
                      ))}
                    </div>

                    <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-wider text-sm gap-2">
                      <a href={`https://wa.me/5522997792023?text=Olá! Gostaria de saber disponibilidade do ${chalet.name}.`} target="_blank" rel="noopener noreferrer">
                        Consultar disponibilidade <ArrowRight size={14} />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Amenities */}
        <section className="py-16 bg-hotel-cream">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl text-foreground font-semibold mb-12">Presente em todos os chalés</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Wifi, label: "Wi-Fi gratuito" },
                { icon: Coffee, label: "Café Nespresso" },
                { icon: TreePine, label: "Vista para natureza" },
                { icon: Bath, label: "Amenities premium" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={20} />
                  </div>
                  <span className="font-body text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Encontre o chalé perfeito para você" subtitle="Fale com nossa equipe, consulte disponibilidade e reserve sua estadia." />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ChalesPage;

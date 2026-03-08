import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Maximize, Bath } from "lucide-react";

const chalets = [
  {
    name: "Chalé Tradicional",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/d853d202-1c9d-4cd8-8f3b-d89a257c4ee7.png",
      "https://www.minhagloria.com.br/lovable-uploads/2e4a3772-1627-445c-ad0a-bc144dd8a4d5.png",
    ],
    description: "Chalé aconchegante em meio à natureza, com decoração rústica sofisticada e todo o conforto para sua estadia.",
    capacity: "2-4 hóspedes",
    size: "55m²",
  },
  {
    name: "Chalé Superior",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/042a304b-19fc-4d61-a524-f78eac0368a9.png",
      "https://www.minhagloria.com.br/lovable-uploads/a6a3395d-5965-482b-b1a6-543cb7840e0f.png",
    ],
    description: "Espaço mais amplo com varanda privativa e vista privilegiada para as montanhas da Mata Atlântica.",
    capacity: "2-4 hóspedes",
    size: "70m²",
  },
  {
    name: "Chalé Master",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/44683466-44b0-4f6e-896a-51a9ae1249fc.png",
      "https://www.minhagloria.com.br/lovable-uploads/85379e6d-f1dc-433a-bc75-77c926ac6d9b.png",
    ],
    description: "Nossa acomodação mais exclusiva, com banheira de hidromassagem, lareira e decoração premium.",
    capacity: "2-6 hóspedes",
    size: "95m²",
  },
  {
    name: "Chalé Família",
    images: [
      "https://www.minhagloria.com.br/lovable-uploads/28329729-31a6-47f7-b501-4427f2f9c84a.png",
      "https://www.minhagloria.com.br/lovable-uploads/beaeb973-0a83-4d4d-9bc1-a47ccc40cd59.png",
    ],
    description: "Ideal para famílias, com espaço amplo, dois quartos e área de convivência integrada.",
    capacity: "4-6 hóspedes",
    size: "110m²",
  },
];

const ChalesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section
          className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/lovable-uploads/d853d202-1c9d-4cd8-8f3b-d89a257c4ee7.png')` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">Nossos Chalés</h1>
            <p className="text-white/70 font-body mt-4">Acomodações excepcionais em meio à natureza</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {chalets.map((chalet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  style={{ direction: i % 2 !== 0 ? 'rtl' : 'ltr' }}
                >
                  <div className="grid grid-cols-2 gap-4" style={{ direction: 'ltr' }}>
                    {chalet.images.map((img, j) => (
                      <img key={j} src={img} alt={`${chalet.name} ${j + 1}`} className="w-full h-56 lg:h-72 object-cover rounded-lg" loading="lazy" />
                    ))}
                  </div>
                  <div style={{ direction: 'ltr' }}>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">{chalet.name}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed mb-6">{chalet.description}</p>
                    <div className="flex gap-6 text-muted-foreground text-sm font-body">
                      <span className="flex items-center gap-2"><Users size={16} className="text-secondary" /> {chalet.capacity}</span>
                      <span className="flex items-center gap-2"><Maximize size={16} className="text-secondary" /> {chalet.size}</span>
                      <span className="flex items-center gap-2"><Bath size={16} className="text-secondary" /> Hidro</span>
                    </div>
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

export default ChalesPage;

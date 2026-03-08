import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Flower2, TreePine, Bike, Dumbbell, Wifi, Car, Waves, Mountain } from "lucide-react";

const activities = [
  { icon: Flower2, title: "Spa & Wellness", description: "Serviços de massagens e relaxamento com tratamentos exclusivos em ambiente natural." },
  { icon: TreePine, title: "Passeios Ecológicos", description: "Explore a natureza exuberante da Mata Atlântica com trilhas guiadas e observação de aves." },
  { icon: Waves, title: "Piscina & Lago", description: "Piscina com vista para as montanhas e lago natural para momentos de lazer." },
  { icon: Mountain, title: "Quadriciclo", description: "Aventuras de quadriciclo pelas trilhas da fazenda com paisagens deslumbrantes." },
  { icon: Bike, title: "Atividades ao Ar Livre", description: "Cavalgadas, passeios de bicicleta e atividades para toda a família." },
  { icon: Dumbbell, title: "Academia Completa", description: "Equipamentos modernos para seu exercício completo com vista para as montanhas." },
  { icon: Wifi, title: "Wi-Fi de Alta Velocidade", description: "Conexão rápida e estável em todas as áreas do hotel." },
  { icon: Car, title: "Estacionamento", description: "Vagas disponíveis para sua comodidade, gratuito para hóspedes." },
];

const LazerPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section
          className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png')` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">Lazer & Experiências</h1>
            <p className="text-white/70 font-body mt-4">Experiências únicas em meio à natureza</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Comodidades</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold">Experiências Únicas</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {activities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-lg border border-border hover:border-secondary/30 hover:bg-card transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              <img src="https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png" alt="Piscina" className="rounded-lg w-full h-48 object-cover" loading="lazy" />
              <img src="https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png" alt="Lago" className="rounded-lg w-full h-48 object-cover" loading="lazy" />
              <img src="https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png" alt="Animais" className="rounded-lg w-full h-48 object-cover" loading="lazy" />
              <img src="https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png" alt="Quadriciclo" className="rounded-lg w-full h-48 object-cover" loading="lazy" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LazerPage;

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const SobrePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-2.webp')` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">Sobre Nós</h1>
            <p className="text-white/70 font-body mt-4">Conheça o Minha Glória Hotel Boutique</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Bem-vindos</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-8 leading-tight">
                Reconecte-se com a natureza <span className="italic text-secondary">em um ambiente exclusivo</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg">
                <p>
                  Situado em meio à exuberante Mata Atlântica do Rio de Janeiro, o Minha Glória 
                  Hotel Boutique oferece uma experiência boutique única. Nossa propriedade combina 
                  conforto exclusivo com a biodiversidade da floresta tropical, criando um refúgio 
                  perfeito para quem busca reconexão com a natureza sem abrir mão do luxo e sofisticação.
                </p>
                <p>
                  Localizado a 18km do centro de Nova Friburgo, no distrito de Banquete, em Bom Jardim-RJ, 
                  nosso hotel é um paraíso em meio à natureza para momentos inesquecíveis. 
                </p>
                <p>
                  Nossos chalés foram cuidadosamente projetados para combinar o charme rústico com o 
                  conforto moderno, oferecendo uma experiência autêntica de hospedagem na montanha.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              <img src="https://www.minhagloria.com.br/images/carousel-new-1.jpg" alt="Vista da fazenda" className="rounded-lg w-full h-72 object-cover" />
              <img src="https://www.minhagloria.com.br/images/carousel-new-4.webp" alt="Chalés" className="rounded-lg w-full h-72 object-cover" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SobrePage;

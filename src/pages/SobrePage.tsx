import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Heart, Mountain, Leaf, Users, Star, Award } from "lucide-react";

const SobrePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-2.webp')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/70" />
          <div className="relative z-10 text-center">
            <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Nossa História</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold">Sobre o Minha Glória</h1>
            <p className="text-primary-foreground/70 font-body mt-4 text-lg">Hotel Boutique · Bom Jardim, RJ</p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Bem-vindos</p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-8 leading-tight">
                  Reconecte-se com a natureza <span className="italic text-secondary">em um ambiente exclusivo</span>
                </h2>
                <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
                  <p>
                    Situado em meio à exuberante Mata Atlântica do Rio de Janeiro, o Minha Glória Hotel Boutique 
                    oferece uma experiência boutique única. Nossa propriedade combina conforto exclusivo com a 
                    biodiversidade da floresta tropical, criando um refúgio perfeito para famílias, casais e 
                    viajantes que buscam reconexão com a natureza sem abrir mão do luxo e sofisticação.
                  </p>
                  <p>
                    Localizado a 18km do centro de Nova Friburgo, no distrito de Banquete, em Bom Jardim-RJ, 
                    nosso hotel é um paraíso para momentos inesquecíveis. Aqui, as crianças correm livres pela 
                    fazenda, alimentam os animais e descobrem a natureza, enquanto os pais relaxam em nosso 
                    spa ou apreciam a vista das montanhas da varanda de seus chalés.
                  </p>
                  <p>
                    Nossos chalés foram cuidadosamente projetados para combinar o charme rústico com o conforto 
                    moderno — cada detalhe pensado para que sua estadia seja memorável. Da gastronomia regional 
                    às trilhas guiadas, cada experiência é uma celebração da cultura e beleza da serra fluminense.
                  </p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
                <img src="https://www.minhagloria.com.br/images/carousel-new-1.jpg" alt="Vista panorâmica da fazenda" className="rounded-lg w-full h-64 object-cover" loading="lazy" />
                <img src="https://www.minhagloria.com.br/images/carousel-new-4.webp" alt="Chalés entre a natureza" className="rounded-lg w-full h-64 object-cover mt-8" loading="lazy" />
                <img src="https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png" alt="Lago natural" className="rounded-lg w-full h-64 object-cover" loading="lazy" />
                <img src="https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png" alt="Animais da fazenda" className="rounded-lg w-full h-64 object-cover mt-8" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold">O que nos torna <span className="italic text-secondary">únicos</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Atendimento Personalizado", desc: "Cada hóspede é único. Nossa equipe cuida de cada detalhe para que sua estadia seja perfeita, do check-in ao check-out." },
                { icon: Mountain, title: "Localização Privilegiada", desc: "Cercado pela Mata Atlântica, entre montanhas e cachoeiras, a apenas 2h30 do Rio de Janeiro." },
                { icon: Leaf, title: "Sustentabilidade", desc: "Práticas sustentáveis em toda a operação: horta orgânica, energia solar e preservação da fauna e flora local." },
                { icon: Users, title: "Família em Primeiro Lugar", desc: "Programação pensada para todas as idades. Crianças até 6 anos não pagam e temos recreação monitorada." },
                { icon: Star, title: "Nota 4.9 no Google", desc: "Reconhecidos pela excelência em hospitalidade e pela experiência transformadora que oferecemos." },
                { icon: Award, title: "Hotel Boutique", desc: "Poucos chalés, máximo conforto. A exclusividade de uma hospedagem intimista com serviço de alto padrão." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-center p-8 rounded-xl bg-background border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "4.9", label: "Nota Google" },
                { number: "9.4", label: "Nota Booking" },
                { number: "500+", label: "Famílias hospedadas" },
                { number: "100%", label: "Mata Atlântica" },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <p className="font-display text-4xl md:text-5xl font-semibold text-secondary mb-2">{stat.number}</p>
                  <p className="text-primary-foreground/70 font-body text-sm uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Venha viver a experiência Minha Glória" subtitle="Reserve agora e descubra por que somos o hotel boutique favorito das famílias na serra fluminense." />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobrePage;

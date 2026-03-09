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
          className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-2.webp')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block">Nossa História</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6">
                Um sonho que se tornou <span className="italic text-secondary">refúgio</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                A história de um lugar onde natureza, família e hospitalidade se encontram na serra fluminense
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Story */}
        <section className="py-24 lg:py-40 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-24">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-10">
                  Quem somos
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-10 leading-[1.1]">
                  Reconecte-se com a natureza <span className="italic text-secondary">em um ambiente exclusivo</span>
                </h2>
                <div className="space-y-6 text-muted-foreground font-body text-lg md:text-xl leading-relaxed">
                  <p>
                    Situado em meio à exuberante Mata Atlântica do Rio de Janeiro, o Minha Glória Hotel Boutique 
                    nasceu do desejo de criar algo raro: um lugar onde famílias pudessem se reconectar — entre si, 
                    com a natureza e consigo mesmas. Não queríamos ser mais um hotel. Queríamos ser o lugar que 
                    as pessoas lembram com saudade, contam para os amigos e voltam sempre.
                  </p>
                  <p>
                    Localizado a 18km do centro de Nova Friburgo, no distrito de Banquete, em Bom Jardim-RJ, 
                    nossa propriedade se estende por hectares de mata preservada, entre montanhas, cachoeiras 
                    e um lago natural que reflete o céu da serra. Aqui, as crianças correm livres pela fazenda, 
                    alimentam as lhamas e os cavalos, descobrem trilhas e constroem memórias que vão carregar 
                    para sempre. Os pais relaxam no spa, apreciam a vista das montanhas da varanda do chalé 
                    e redescobrem o prazer de estar presentes.
                  </p>
                  <p>
                    Nossos 20 chalés foram cuidadosamente projetados para combinar o charme rústico da serra 
                    com o conforto contemporâneo — madeira, pedra e vidro se encontram em espaços que respiram 
                    natureza. A gastronomia celebra os ingredientes regionais: pães artesanais do forno, ervas 
                    da horta orgânica, carnes assadas com técnica e alma. Cada refeição é um ato de amor 
                    pela terra onde estamos.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-12 gap-4 mb-20">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="col-span-12 md:col-span-7 overflow-hidden rounded-lg">
                <img src="https://www.minhagloria.com.br/images/carousel-new-1.jpg" alt="Vista panorâmica da fazenda" className="w-full h-[300px] md:h-[450px] object-cover" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="col-span-6 md:col-span-5 overflow-hidden rounded-lg">
                <img src="https://www.minhagloria.com.br/images/carousel-new-4.webp" alt="Chalés entre a natureza" className="w-full h-[250px] md:h-[450px] object-cover" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="col-span-6 md:col-span-5 overflow-hidden rounded-lg">
                <img src="https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png" alt="Lago natural" className="w-full h-[250px] md:h-[350px] object-cover" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="col-span-12 md:col-span-7 overflow-hidden rounded-lg">
                <img src="https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png" alt="Animais da fazenda" className="w-full h-[250px] md:h-[350px] object-cover" loading="lazy" />
              </motion.div>
            </div>

            {/* Editorial pull quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center py-12 border-y border-border"
            >
              <p className="editorial-quote text-3xl md:text-4xl text-foreground/80 leading-snug">
                "Não somos um hotel de passagem. Somos o lugar onde famílias criam as memórias mais bonitas de suas vidas."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold">
                O que nos torna <span className="italic text-secondary">únicos</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Heart, title: "Atendimento Genuíno", desc: "Cada hóspede é chamado pelo nome. Nossa equipe cuida de cada detalhe com carinho real — não protocolar. Do check-in ao check-out, você sente que é especial. Porque é." },
                { icon: Mountain, title: "Localização Privilegiada", desc: "Cercado pela Mata Atlântica, entre montanhas e cachoeiras, a apenas 2h30 do Rio de Janeiro. A natureza aqui não é cenário — é protagonista. Cada janela é uma moldura diferente." },
                { icon: Leaf, title: "Compromisso Sustentável", desc: "Horta orgânica que alimenta nosso restaurante. Preservação ativa da fauna e flora. Práticas responsáveis em toda a operação. O luxo e a consciência ambiental caminham juntos." },
                { icon: Users, title: "Família em Primeiro Lugar", desc: "Crianças até 6 anos não pagam. Recreação monitorada, fazendinha, trilhas kids, menu infantil. Aqui, os pequenos são hóspedes VIP — e os pais podem relaxar de verdade." },
                { icon: Star, title: "Nota 4.9 no Google", desc: "Mais de centenas de avaliações apaixonadas. Reconhecidos pela hospitalidade excepcional. A nota não é apenas um número — é o reflexo do carinho que colocamos em cada estadia." },
                { icon: Award, title: "Boutique de Verdade", desc: "Apenas 20 suítes. Isso não é uma limitação — é uma escolha. Poucos hóspedes significam máxima exclusividade, atenção integral e a intimidade que só um hotel boutique real oferece." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-10 rounded-xl bg-background border border-border hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { number: "4.9", label: "Nota Google" },
                { number: "9.4", label: "Nota Booking" },
                { number: "500+", label: "Famílias hospedadas" },
                { number: "20", label: "Suítes exclusivas" },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <p className="font-display text-5xl md:text-6xl font-semibold text-secondary mb-3">{stat.number}</p>
                  <p className="text-primary-foreground/60 font-body text-sm uppercase tracking-[0.2em]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Venha viver a experiência Minha Glória" 
          subtitle="Reserve agora e descubra por que somos o hotel boutique favorito das famílias na serra fluminense. Apenas 20 suítes, pensão completa e crianças até 6 anos grátis." 
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobrePage;

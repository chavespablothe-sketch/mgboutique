import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Heart, Mountain, Leaf, Users, Star, Award, MapPin, Clock, Utensils, Baby, TreePine, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const numbers = [
  { value: "20", label: "Suítes exclusivas", sub: "em meio à Mata Atlântica" },
  { value: "165mil", label: "m² de área verde", sub: "preservada e cuidada" },
  { value: "4.7", label: "Google Reviews", sub: "centenas de avaliações" },
  { value: "9.3", label: "Booking.com", sub: "classificação Fantástico" },
];

const pillars = [
  { icon: Heart, title: "Hospitalidade Genuína", desc: "Cada hóspede é chamado pelo nome. Nossa equipe cuida de cada detalhe com carinho real, do check-in ao check-out.", image: "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png" },
  { icon: TreePine, title: "Natureza Intocada", desc: "Cercado pela Mata Atlântica, entre montanhas e cachoeiras, a natureza aqui não é cenário — é protagonista.", image: "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png" },
  { icon: Utensils, title: "Gastronomia de Alma", desc: "Pães artesanais, ervas da horta orgânica, carnes assadas com técnica e amor. Cada refeição celebra a terra onde estamos.", image: "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png" },
  { icon: Users, title: "Feito para Famílias", desc: "1 criança até 12 anos grátis nos fins de semana. Recreação monitorada, fazendinha, trilhas kids e menu infantil.", image: "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png" },
];

const SobrePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Sobre o Hotel | Nossa História e Propósito"
        description="Conheça a história do Minha Glória Hotel Boutique. 165 mil m² de Mata Atlântica, 20 suítes exclusivas e uma equipe dedicada à hospitalidade genuína em Bom Jardim, RJ."
        canonical="/sobre"
        schemas={[breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Sobre", url: "/sobre" }])]}
      />
      <Header />
      <div className="pt-20">
        {/* Hero — full-screen immersive */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom-bg"
            style={{ backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-2.webp')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block drop-shadow-lg">Nossa Essência</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-8 hero-text-shadow drop-shadow-lg">
                Um sonho que se tornou <span className="italic text-secondary drop-shadow-lg">refúgio</span>
              </h1>
              <p className="text-editorial text-primary-foreground/80 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto hero-text-shadow">
                Onde natureza, família e hospitalidade se encontram num só lugar
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Numbers strip */}
        <section className="py-14 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              {numbers.map((n, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <p className="font-display text-4xl md:text-5xl font-bold text-secondary mb-1">{n.value}</p>
                  <p className="font-body text-sm font-semibold text-foreground uppercase tracking-wider">{n.label}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{n.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story — editorial two-column */}
        <section className="py-24 lg:py-36 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-6 block">Quem somos</span>
                <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-8 leading-[1.1]">
                  Reconecte-se com a natureza <span className="italic text-secondary">em um ambiente exclusivo</span>
                </h2>
                <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
                  <p>
                    Situado em meio à exuberante Mata Atlântica do Rio de Janeiro, o Minha Glória Hotel Boutique
                    nasceu do desejo de criar algo raro: um lugar onde famílias pudessem se reconectar — entre si,
                    com a natureza e consigo mesmas.
                  </p>
                  <p>
                    Localizado a 18km do centro de Nova Friburgo, no distrito de Banquete, em Bom Jardim-RJ,
                    nossa propriedade se estende por hectares de mata preservada, entre montanhas, cachoeiras
                    e um lago natural que reflete o céu da serra.
                  </p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <img src="https://www.minhagloria.com.br/images/carousel-new-1.jpg" alt="Vista panorâmica da fazenda" className="w-full h-[500px] object-cover rounded-2xl shadow-2xl" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Full-width quote */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-4.webp')` }}
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="editorial-quote text-3xl md:text-4xl lg:text-5xl text-primary-foreground/90 leading-snug font-display italic">
                "Não somos um hotel de passagem. Somos o lugar onde famílias criam as memórias mais bonitas de suas vidas."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pillars — alternating image+text like Clara */}
        <section className="bg-background">
          {pillars.map((pillar, i) => (
            <div key={i} className={`py-20 lg:py-28 ${i % 2 !== 0 ? "bg-hotel-cream" : ""}`}>
              <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-2xl"
                    style={{ direction: "ltr" }}
                  >
                    <img src={pillar.image} alt={pillar.title} className="w-full h-[400px] lg:h-[500px] object-cover" loading="lazy" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    style={{ direction: "ltr" }}
                  >
                    <div className="w-16 h-16 mb-6 rounded-full bg-secondary/15 flex items-center justify-center">
                      <pillar.icon className="text-secondary" size={28} />
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">{pillar.title}</h3>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Photo mosaic */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-3 max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="col-span-7 overflow-hidden rounded-2xl">
                <img src="https://www.minhagloria.com.br/images/carousel-new-4.webp" alt="Chalés entre a natureza" className="w-full h-[350px] md:h-[450px] object-cover" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="col-span-5 overflow-hidden rounded-2xl">
                <img src="https://www.minhagloria.com.br/images/carousel-new-3.webp" alt="Cavalos na fazenda" className="w-full h-[350px] md:h-[450px] object-cover" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="col-span-5 overflow-hidden rounded-2xl">
                <img src="https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png" alt="Lago natural" className="w-full h-[300px] object-cover" loading="lazy" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="col-span-7 overflow-hidden rounded-2xl">
                <img src="https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png" alt="Animais da fazenda" className="w-full h-[300px] object-cover" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practical info strip */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-4xl mx-auto">
              {[
                { icon: MapPin, label: "Bom Jardim, RJ", sub: "18km de Nova Friburgo" },
                { icon: Clock, label: "2h30 do Rio", sub: "Fácil acesso" },
                { icon: Star, label: "4.7 Google", sub: "9.3 Booking" },
                { icon: Users, label: "20 suítes", sub: "Exclusividade total" },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center">
                    <stat.icon className="text-secondary" size={22} />
                  </div>
                  <p className="text-primary-foreground font-display text-lg font-semibold">{stat.label}</p>
                  <p className="text-primary-foreground/50 font-body text-sm">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Venha viver a experiência Minha Glória"
          subtitle="Reserve agora e descubra por que somos o hotel boutique favorito das famílias na serra fluminense."
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobrePage;

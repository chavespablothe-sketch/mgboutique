import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import CTASection from "@/components/CTASection";

import { motion } from "framer-motion";
import { Heart, MapPin, Clock, Users, Star, Utensils, TreePine, Leaf, Wine, Cake, Award } from "lucide-react";
import { Link } from "react-router-dom";

const numbers = [
  { value: "20", label: "Suítes exclusivas", sub: "em meio à Mata Atlântica" },
  { value: "165mil", label: "m² de área verde", sub: "preservada e cuidada" },
  { value: "4.7", label: "Google Reviews", sub: "centenas de avaliações" },
  { value: "9.3", label: "Booking.com", sub: "classificação Fantástico" },
];

const pillars = [
  { icon: Heart, title: "Hospitalidade Genuína", desc: "Cada hóspede é chamado pelo nome. Nossa equipe cuida de cada detalhe com carinho real, do check-in ao check-out.", image: "/images/hospitalidade.jpg" },
  { icon: TreePine, title: "Natureza Intocada", desc: "Cercado pela Mata Atlântica, entre montanhas e cachoeiras, a natureza aqui não é cenário — é protagonista.", image: "/images/vista-aerea-pedra.jpg" },
  { icon: Utensils, title: "Gastronomia de Alma", desc: "Pães artesanais, doces finos, sobremesas com frutas frescas, ervas da horta orgânica e carnes assadas com técnica e amor. Cada refeição celebra a terra onde estamos.", image: "/images/gastronomia-doces.jpg" },
  { icon: Users, title: "Feito para Famílias", desc: "1 criança até 12 anos grátis nos fins de semana. Recreação monitorada, fazendinha, trilhas kids e menu infantil.", image: "/images/familia.jpg" },
];


const gastroHighlights = [
  { title: "Drinks & Bar", desc: "Coquetéis autorais, drinks clássicos e carta de vinhos selecionados. O bar é o ponto de encontro perfeito para brindar o pôr do sol na serra.", image: "/images/welcome-brunch.webp" },
  { title: "Pensão Completa", desc: "Café, almoço e jantar nos fins de semana e feriados. Ingredientes frescos, receitas regionais e menu kids.", image: "/images/amenities-gastronomia.jpg" },
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
            style={{ backgroundImage: `url('/images/welcome-aerial.webp')` }}
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
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="photo-parallax rounded-2xl overflow-hidden photo-glow"
              >
                <img src="/images/sobre-vista-pedra.jpg" alt="Vista panorâmica da fazenda com Pedra do Cônego" className="w-full h-[500px] object-cover" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== DARK GREEN SECTION — Clara style ===== */}
        <section className="relative py-28 lg:py-40 overflow-hidden bg-primary">
          {/* Subtle background texture */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url('/images/lazer-piscina.webp')` }}
          />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Title */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-[1.05]">
                  Um refúgio: <span className="italic text-secondary">um propósito.</span>
                </h2>
                <p className="text-editorial text-primary-foreground/60 text-xl mt-6 max-w-2xl mx-auto">
                  Elegância, natureza e hospitalidade genuína em um só destino.
                </p>
              </motion.div>

              {/* Overlapping images + text — Clara layout */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left image — large, bleeds slightly */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-5 photo-ken-burns rounded-2xl overflow-hidden"
                  >
                    <img
                      src="/images/vista-hotel.jpg"
                      alt="Vista aérea do hotel"
                      className="w-full h-[350px] lg:h-[550px] object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Center image — overlaps, elevated */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="lg:col-span-3 lg:-mx-4 lg:relative lg:z-10"
                  >
                    <div className="rounded-2xl overflow-hidden shadow-2xl photo-glow">
                      <img
                        src="/images/sobre-casa-historica.jpg"
                        alt="Casa histórica da fazenda"
                        className="w-full h-[280px] lg:h-[400px] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>

                  {/* Right — text block */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="lg:col-span-4"
                  >
                    <h3 className="font-display text-3xl lg:text-4xl text-primary-foreground font-semibold mb-6 leading-tight">
                      Minha Glória
                    </h3>
                    <p className="text-primary-foreground/70 font-body text-base leading-relaxed mb-6">
                      <strong className="text-primary-foreground">O Minha Glória oferece uma experiência única de conexão com a natureza e hospitalidade.</strong>
                    </p>
                    <p className="text-primary-foreground/60 font-body text-base leading-relaxed mb-8">
                      Com 165 mil m² de Mata Atlântica preservada e apenas 20 suítes exclusivas, este refúgio é perfeito para famílias e casais que buscam tranquilidade com sofisticação. Aqui, cada momento é dedicado ao seu bem-estar.
                    </p>
                    <Link
                      to="/acomodacoes"
                      className="inline-flex items-center gap-2 text-secondary font-body text-sm uppercase tracking-widest border border-secondary/40 px-6 py-3 rounded-full hover:bg-secondary/10 transition-colors"
                    >
                      Conheça os chalés
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width quote */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('/images/lazer-piscina.webp')` }}
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

        {/* Pillars — alternating image+text */}
        <section className="bg-background">
          {pillars.map((pillar, i) => (
            <div key={i} className={`py-20 lg:py-28 ${i % 2 !== 0 ? "bg-hotel-cream" : ""}`}>
              <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-2xl photo-parallax photo-lift"
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

        {/* ===== GASTRONOMIA — Circular images like Clara ===== */}
        <section className="py-24 lg:py-32 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold leading-[1.05]">
                O que torna nossa gastronomia tão <span className="italic text-secondary">única e especial</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {gastroHighlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-52 h-52 mx-auto mb-8 rounded-full overflow-hidden photo-circle-gold">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
              <Link
                to="/gastronomia"
                className="inline-flex items-center gap-2 text-secondary font-body text-sm uppercase tracking-widest hover:gap-3 transition-all"
              >
                Saiba mais sobre nossa gastronomia →
              </Link>
            </motion.div>
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
    </div>
  );
};

export default SobrePage;

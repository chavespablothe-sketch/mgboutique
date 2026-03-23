import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { MapPin, Clock, Car, Sun, Cloud, Snowflake, Leaf, Mountain, Waves, UtensilsCrossed, ShoppingBag, Camera } from "lucide-react";

const distances = [
  { from: "Rio de Janeiro", time: "2h30", km: "170km" },
  { from: "Niterói", time: "2h45", km: "185km" },
  { from: "Petrópolis", time: "1h30", km: "90km" },
  { from: "Nova Friburgo (centro)", time: "25min", km: "18km" },
  { from: "São Paulo", time: "6h", km: "480km" },
];

const attractions = [
  { icon: Waves, title: "Cachoeiras", desc: "Dezenas de cachoeiras na região, com trilhas de diferentes níveis de dificuldade." },
  { icon: Mountain, title: "Trilhas e mirantes", desc: "Trilhas pela Mata Atlântica com vistas panorâmicas da serra fluminense." },
  { icon: UtensilsCrossed, title: "Gastronomia local", desc: "Restaurantes de comida serrana, queijarias artesanais e cafés coloniais." },
  { icon: ShoppingBag, title: "Artesanato", desc: "Feiras e lojas de artesanato em Nova Friburgo e vilarejos da região." },
  { icon: Camera, title: "Mirantes", desc: "Pontos de observação com vistas que valem a viagem por si só." },
  { icon: Leaf, title: "Reservas ecológicas", desc: "Áreas de preservação ambiental e projetos de ecoturismo." },
];

const seasons = [
  { icon: Sun, season: "Verão (dez–mar)", desc: "Temperaturas agradáveis entre 18°C e 28°C. Ideal para trilhas, piscina e atividades ao ar livre. Chuvas pontuais à tarde." },
  { icon: Leaf, season: "Outono (abr–jun)", desc: "Clima ameno e seco. Temperaturas entre 12°C e 24°C. Cores douradas na mata, perfeito para caminhadas." },
  { icon: Snowflake, season: "Inverno (jul–set)", desc: "Frio gostoso: 5°C a 18°C. Noites geladas perfeitas para lareira e fondue. Alta temporada na serra." },
  { icon: Cloud, season: "Primavera (out–nov)", desc: "Floração da Mata Atlântica. Temperaturas entre 14°C e 26°C. Paisagens vibrantes e menor movimento." },
];

const RegiaoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="A Região | Bom Jardim e Serra Fluminense"
        description="A 2h30 do Rio de Janeiro, Bom Jardim é o destino ideal para famílias. Cachoeiras, trilhas, gastronomia serrana e clima ameno o ano todo."
        canonical="/regiao"
        schemas={[
          { "@context": "https://schema.org", "@type": "TouristDestination", name: "Bom Jardim, Serra Fluminense", description: "Destino de ecoturismo a 2h30 do Rio de Janeiro, com cachoeiras, trilhas e gastronomia serrana.", touristType: "Famílias" },
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "A Região", url: "/regiao" }]),
        ]}
      />
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom-bg"
            style={{ backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-2.webp')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block drop-shadow-lg">Bom Jardim & Serra Fluminense</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6 hero-text-shadow drop-shadow-lg">
                Um destino que encanta <span className="italic text-secondary drop-shadow-lg">por si só</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                A 18km de Nova Friburgo, no coração da serra fluminense, o Minha Glória
                é cercado por natureza, cultura e experiências únicas.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* How to get here */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-6">
                  Como <span className="italic text-secondary">chegar</span>
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                  O acesso é pela RJ-116, com estrada pavimentada até a entrada da propriedade.
                  Recomendamos carro próprio para maior comodidade, mas também é possível combinar
                  transfer particular.
                </p>
                <div className="space-y-4">
                  {distances.map((d, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        <Car size={16} className="text-secondary" />
                        <span className="font-body text-foreground text-sm">{d.from}</span>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground font-body text-sm">
                        <span className="flex items-center gap-1"><Clock size={12} /> {d.time}</span>
                        <span>{d.km}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="rounded-xl overflow-hidden h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d-42.43!3d-22.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQm9tIEphcmRpbQ!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Localização"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to do */}
        <section className="py-20 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-4">
                O que fazer na <span className="italic text-secondary">região</span>
              </h2>
              <p className="text-editorial text-muted-foreground text-xl max-w-2xl mx-auto">
                Bom Jardim e Nova Friburgo oferecem uma variedade de atrações para todos os gostos.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {attractions.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-background p-6 rounded-xl border border-border"
                >
                  <item.icon size={24} className="text-secondary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Tips */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl text-primary-foreground font-semibold text-center mb-10">
              Dicas <span className="italic text-secondary">práticas</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: "Precisa de carro?", a: "Recomendamos carro próprio. A estrada é pavimentada, mas ter veículo facilita para explorar a região." },
                { q: "Tem cobertura de celular?", a: "Cobertura limitada — operadoras Claro e Vivo funcionam melhor. Wi-Fi gratuito em todo o hotel." },
                { q: "O que levar?", a: "Roupas confortáveis para trilhas, agasalhos para a noite (inverno chega a 5°C), protetor solar e repelente." },
                { q: "Precisa de 4x4?", a: "Não. Carros comuns acessam normalmente. A estrada de acesso é pavimentada." },
              ].map((tip, i) => (
                <div key={i} className="bg-primary-foreground/5 rounded-xl p-5 border border-primary-foreground/10">
                  <h3 className="font-display text-base font-semibold text-primary-foreground mb-2">{tip.q}</h3>
                  <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">{tip.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Descubra a serra fluminense"
          subtitle="Reserve sua estadia no Minha Glória e use o hotel como base para explorar o melhor de Bom Jardim e Nova Friburgo."
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default RegiaoPage;

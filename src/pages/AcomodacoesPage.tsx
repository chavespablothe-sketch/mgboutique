import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { hotelSchema, breadcrumbSchema } from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Users, Maximize, ArrowRight, Baby, CreditCard, Star, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import chalets from "@/data/chalets";

const AcomodacoesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Acomodações | Chalés Exclusivos na Serra Fluminense"
        description="5 categorias de chalés em meio à Mata Atlântica: Tradicional, Premium, Superior, Romântico e Família. De 55m² a 110m², varanda privativa e vista para as montanhas."
        canonical="/acomodacoes"
        schemas={[
          { ...hotelSchema, "@type": "LodgingBusiness", makesOffer: chalets.map(c => ({ "@type": "Offer", name: c.name, description: c.description })) },
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Acomodações", url: "/acomodacoes" }]),
        ]}
      />
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom-bg"
            style={{ backgroundImage: `url('/images/chale-delano.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block drop-shadow-lg">Acomodações</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6 hero-text-shadow drop-shadow-lg">
                Chalés que contam <span className="italic text-secondary drop-shadow-lg">histórias</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed hero-text-shadow">
                Apenas 20 suítes independentes em meio à Mata Atlântica. Cada uma projetada
                para que madeira, pedra e natureza criem o cenário perfeito para suas memórias.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-editorial text-muted-foreground text-xl md:text-2xl leading-relaxed">
                Poucos chalés, independentes, inseridos na natureza. Rústico com conforto.
                A experiência é exclusiva justamente pela baixa quantidade de unidades.
                Aqui, cada acomodação é um refúgio individual onde você vive, respira e se reconecta.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Chalets Grid */}
        <section className="py-8 pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {chalets.map((chalet, i) => (
                <motion.div
                  key={chalet.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
                >
                  <Link to={`/acomodacoes/${chalet.slug}`} className="block relative overflow-hidden h-72">
                    <img
                      src={chalet.images[0]}
                      alt={chalet.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-2xl text-primary-foreground font-semibold mb-1 hero-text-shadow">{chalet.name}</h3>
                      <p className="text-primary-foreground/70 font-body text-sm italic hero-text-shadow">{chalet.tagline}</p>
                    </div>
                  </Link>
                  <div className="p-6">
                    <p className="text-muted-foreground font-body text-base leading-relaxed mb-5">
                      {chalet.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-body mb-5">
                      <span className="flex items-center gap-1.5"><Users size={14} className="text-secondary" /> {chalet.capacity}</span>
                      <span className="flex items-center gap-1.5"><Maximize size={14} className="text-secondary" /> {chalet.size}</span>
                    </div>
                    <Button asChild size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-xs uppercase tracking-wider gap-1.5 rounded-full">
                      <Link to={`/acomodacoes/${chalet.slug}`}>
                        Ver detalhes <ArrowRight size={12} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table - without prices */}
        <section className="py-16 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold">
                Compare os <span className="italic text-secondary">chalés</span>
              </h2>
            </motion.div>
            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-display font-semibold text-foreground">Chalé</th>
                    <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Capacidade</th>
                    <th className="text-center py-4 px-4 font-display font-semibold text-foreground">m²</th>
                    <th className="text-center py-4 px-4 font-display font-semibold text-foreground">Destaque</th>
                    <th className="text-center py-4 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {chalets.map((c) => (
                    <tr key={c.slug} className="border-b border-border/50 hover:bg-background/50 transition-colors">
                      <td className="py-4 px-4 font-display font-semibold text-foreground">{c.name}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{c.capacity}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{c.size}</td>
                      <td className="py-4 px-4 text-center text-secondary font-semibold">{c.highlight}</td>
                      <td className="py-4 px-4 text-center">
                        <Link to={`/acomodacoes/${c.slug}`} className="text-secondary text-xs font-semibold uppercase tracking-wider hover:underline">
                          Ver →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Promise Bar */}
        <section className="bg-primary py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Star, text: "Decoração autoral" },
                { icon: Baby, text: "Kid free até 06 anos (fim de semana)" },
                { icon: CreditCard, text: "10x sem juros" },
                { icon: Coffee, text: "Pensão completa nos fins de semana" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <item.icon size={20} className="text-secondary" />
                  <span className="text-primary-foreground font-body text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Reserve seu chalé boutique"
          subtitle="Apenas 20 suítes. Pensão completa nos finais de semana, crianças até 06 anos grátis (fim de semana) e parcelamento em 10x sem juros."
        />
      </div>
      <Footer />
    </div>
  );
};

export default AcomodacoesPage;

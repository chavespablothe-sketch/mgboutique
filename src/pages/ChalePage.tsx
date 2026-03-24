import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import { motion } from "framer-motion";
import { Users, Maximize, Check, ArrowLeft, ArrowRight, CreditCard, Baby, Shield, Bed, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import chalets from "@/data/chalets";

import { OMNIBEES_URL } from "@/lib/omnibees";

const ChalePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const chalet = chalets.find((c) => c.slug === slug);
  const otherChalets = chalets.filter((c) => c.slug !== slug).slice(0, 3);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!chalet) return <Navigate to="/acomodacoes" replace />;

  return (
    <div className="min-h-screen">
      <SEO
        title={`${chalet.name} | Acomodações`}
        description={`${chalet.description} ${chalet.capacity}, ${chalet.size}. A partir de ${chalet.priceFrom}/noite no Minha Glória Hotel Boutique.`}
        canonical={`/acomodacoes/${chalet.slug}`}
        ogImage={chalet.images[0]}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "HotelRoom",
            name: chalet.name,
            description: chalet.longDescription,
            occupancy: { "@type": "QuantitativeValue", value: chalet.capacity },
            floorSize: { "@type": "QuantitativeValue", value: chalet.size.replace("m²", ""), unitCode: "MTK" },
            bed: { "@type": "BedDetails", typeOfBed: chalet.beds },
            image: chalet.images,
            amenityFeature: chalet.amenities.map(a => ({ "@type": "LocationFeatureSpecification", name: a, value: true })),
            offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", price: chalet.priceFrom.replace(/[^\d]/g, ""), priceCurrency: "BRL", unitText: "noite" } },
          },
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Acomodações", url: "/acomodacoes" }, { name: chalet.name, url: `/acomodacoes/${chalet.slug}` }]),
        ]}
      />
      <Header />
      <div className="pt-20">
        {/* Gallery Hero */}
        <section className="relative">
          <div className={`grid gap-1 h-[50vh] md:h-[70vh] ${
            chalet.images.length >= 5
              ? "grid-cols-2 md:grid-cols-4 md:grid-rows-2"
              : chalet.images.length >= 3
              ? "grid-cols-2 md:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2"
          }`}>
            {chalet.images.slice(0, 5).map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${
                  i === 0 && chalet.images.length >= 5
                    ? "col-span-2 row-span-2"
                    : i === 0 && chalet.images.length >= 3
                    ? "row-span-2 md:row-span-1 md:col-span-2"
                    : ""
                }`}
              >
                <img src={img} alt={`${chalet.name} - foto ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
          <div className="absolute top-6 left-6 z-10">
            <Link to="/acomodacoes" className="inline-flex items-center gap-2 bg-primary/80 backdrop-blur-sm text-primary-foreground font-body text-sm px-4 py-2 rounded-full hover:bg-primary transition-colors">
              <ArrowLeft size={14} /> Acomodações
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Left - Info */}
              <div className="lg:col-span-2 space-y-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <span className="text-secondary font-body text-xs tracking-[0.3em] uppercase mb-3 block">{chalet.highlight}</span>
                  <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">{chalet.name}</h1>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed">{chalet.longDescription}</p>
                </motion.div>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-6 py-6 border-y border-border">
                  <div className="flex items-center gap-2 text-foreground font-body text-sm">
                    <Users size={16} className="text-secondary" /> {chalet.capacity}
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-body text-sm">
                    <Maximize size={16} className="text-secondary" /> {chalet.size}
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-body text-sm">
                    <Bed size={16} className="text-secondary" /> {chalet.beds}
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-body text-sm">
                    <Eye size={16} className="text-secondary" /> {chalet.view}
                  </div>
                </div>

                {/* Amenities by category */}
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Amenidades</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { title: "Quarto", items: chalet.amenitiesByCategory.quarto },
                      { title: "Banheiro", items: chalet.amenitiesByCategory.banheiro },
                      { title: "Área externa", items: chalet.amenitiesByCategory.areaExterna },
                    ].map((cat) => (
                      <div key={cat.title}>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-3">{cat.title}</h3>
                        <ul className="space-y-2">
                          {cat.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                              <Check size={12} className="text-secondary shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal for */}
                <div className="bg-hotel-cream rounded-xl p-6">
                  <p className="font-display text-lg font-semibold text-foreground mb-2">Ideal para</p>
                  <p className="text-muted-foreground font-body text-base">{chalet.idealFor}</p>
                </div>
              </div>

              {/* Right - Sticky CTA */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-xl border border-border p-8 shadow-xl"
                  >
                    <p className="font-display text-2xl font-semibold text-foreground mb-1">Consulte valores</p>
                    <p className="text-muted-foreground font-body text-sm mb-6">Tarifas variam por temporada</p>

                    <div className="space-y-3 mb-6 pb-6 border-b border-border">
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <CreditCard size={16} className="text-secondary" /> Parcele em até 10x sem juros
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <Baby size={16} className="text-secondary" /> 1 criança até 12 anos grátis nos fins de semana
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <Shield size={16} className="text-secondary" /> Melhor preço garantido
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-body uppercase tracking-[0.15em] gap-2 py-5 mb-3 rounded-full shadow-lg">
                      <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                        Reservar <ArrowRight size={16} />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full border-border text-foreground font-body text-sm py-4 rounded-full">
                      <a href="https://wa.me/5522997792023?text=Olá! Gostaria de saber sobre o ${chalet.name}." target="_blank" rel="noopener noreferrer">
                        Perguntar no WhatsApp
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related chalets */}
        <section className="py-16 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-foreground font-semibold text-center mb-10">Veja também</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {otherChalets.map((c) => (
                <Link key={c.slug} to={`/acomodacoes/${c.slug}`} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
                  <div className="relative overflow-hidden h-48">
                    <img src={c.images[0]} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{c.name}</h3>
                    <p className="text-muted-foreground font-body text-sm mb-3">{c.capacity} · {c.size}</p>
                    <span className="text-secondary font-body text-xs font-semibold uppercase tracking-wider">Ver detalhes →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ChalePage;

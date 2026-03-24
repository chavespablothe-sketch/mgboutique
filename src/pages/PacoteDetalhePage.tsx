import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Check, Baby, ArrowRight, ArrowLeft, Shield, CreditCard, Users, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import packages from "@/data/packages";

import { buildOmnibeesUrl, OMNIBEES_URL } from "@/lib/omnibees";

const PacoteDetalhePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = packages.find((p) => p.slug === slug);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!pkg) return <Navigate to="/tarifas" replace />;

  const allImages = pkg.gallery.length > 0 ? pkg.gallery : [pkg.image];

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const nextImage = () => setGalleryIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () => setGalleryIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

  return (
    <div className="min-h-screen">
      <SEO
        title={`${pkg.shortTitle} | Pacotes`}
        description={`${pkg.description} ${pkg.period}, ${pkg.nights}. Consulte tarifas especiais.`}
        canonical={`/tarifas/${pkg.slug}`}
        ogImage={pkg.image}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Offer",
            name: pkg.title,
            description: pkg.longDescription,
            availability: "https://schema.org/InStock",
            validFrom: pkg.period,
            image: pkg.image,
            seller: { "@type": "Hotel", name: "Minha Glória Hotel Boutique" },
          },
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tarifas", url: "/tarifas" }, { name: pkg.shortTitle, url: `/tarifas/${pkg.slug}` }]),
        ]}
      />
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[65vh] flex items-end overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-zoom-bg"
            style={{ backgroundImage: `url('${pkg.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-primary/20" />
          <div className="relative z-10 container mx-auto px-4 pb-14">
            <Link to="/tarifas" className="inline-flex items-center gap-2 text-secondary font-body text-sm mb-5 hover:text-secondary/80 transition-colors">
              <ArrowLeft size={14} /> Voltar às tarifas
            </Link>
            <span className={`inline-block ${pkg.tagColor} text-primary-foreground text-xs font-body uppercase tracking-wider px-4 py-1.5 rounded-full mb-4`}>
              {pkg.tag}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-4 leading-[1.05] hero-text-shadow">{pkg.title}</h1>
            <div className="flex flex-wrap gap-5 text-primary-foreground/70 font-body text-base hero-text-shadow">
              <span className="flex items-center gap-2"><Calendar size={16} /> {pkg.period}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {pkg.nights}</span>
            </div>
          </div>
        </section>

        {/* Photo Gallery Grid */}
        {allImages.length > 1 && (
          <section className="py-8 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
                {allImages.slice(0, 10).map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={`overflow-hidden rounded-xl cursor-pointer group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                    onClick={() => openGallery(i)}
                  >
                    <img
                      src={img}
                      alt={`${pkg.shortTitle} - foto ${i + 1}`}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${i === 0 ? "h-48 md:h-[340px]" : "h-28 md:h-[165px]"}`}
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-5">Sobre o pacote</h2>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed">{pkg.longDescription}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">O que está incluso</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.included.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                        <Check size={16} className="text-secondary mt-0.5 shrink-0" />
                        <span className="text-foreground font-body text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {pkg.kidsFeatures.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="bg-hotel-cream rounded-xl p-8 border border-border"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Baby className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-semibold text-foreground">Para os pequenos</h2>
                        <p className="text-muted-foreground font-body text-sm">Diversão para toda a família</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {pkg.kidsFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check size={14} className="text-secondary mt-1 shrink-0" />
                          <span className="text-foreground font-body text-sm leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Programação</h2>
                  <div className="space-y-6">
                    {pkg.schedule.map((day, i) => (
                      <div key={i} className="border-l-2 border-secondary pl-6 py-1">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-3">{day.day}</h3>
                        <ul className="space-y-2">
                          {day.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sticky Pricing Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-5">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-xl border border-border p-8 shadow-xl"
                  >
                    <p className="font-display text-2xl font-semibold text-foreground mb-1">Tarifas Especiais</p>
                    <p className="text-muted-foreground font-body text-sm mb-1">{pkg.nights} · por casal</p>
                    <p className="text-secondary font-body text-sm font-semibold mb-6">Consulte valores ao reservar</p>

                    <div className="space-y-3 mb-6 pb-6 border-b border-border">
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <CreditCard size={16} className="text-secondary" /> Parcele em até 10x sem juros
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <Baby size={16} className="text-secondary" /> 1 criança até 12 anos: grátis nos fins de semana
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <Shield size={16} className="text-secondary" /> Melhor preço garantido
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <Users size={16} className="text-secondary" /> Apenas 20 suítes
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-body uppercase tracking-[0.15em] gap-2 py-5 mb-3 rounded-full shadow-lg">
                      <a href={pkg.checkIn && pkg.checkOut ? buildOmnibeesUrl({ checkIn: pkg.checkIn, checkOut: pkg.checkOut }) : OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                        Reservar agora <ArrowRight size={16} />
                      </a>
                    </Button>
                  </motion.div>

                  <div className="bg-card rounded-xl border border-border p-6 text-center">
                    <p className="font-display text-lg font-semibold text-foreground mb-2">Ficou com dúvida?</p>
                    <p className="text-muted-foreground font-body text-sm mb-4">Nossa equipe está pronta para ajudar.</p>
                    <Button asChild variant="ghost" className="text-secondary font-body gap-2">
                      <Link to="/contato">Fale conosco <ArrowRight size={14} /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection title="Garanta sua vaga neste pacote" subtitle="Vagas limitadas — apenas 20 suítes. Pensão completa e 1 criança até 12 anos grátis nos fins de semana." showPhone={false} />
      </div>
      <Footer />

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setGalleryOpen(false)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setGalleryOpen(false); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.img
              key={galleryIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={allImages[galleryIndex]}
              alt={`${pkg.shortTitle} - foto ${galleryIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={36} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setGalleryIndex(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === galleryIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PacoteDetalhePage;

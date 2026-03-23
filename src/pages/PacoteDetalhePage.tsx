import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, Clock, Check, Baby, ArrowRight, ArrowLeft, Shield, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import packages from "@/data/packages";

const OMNIBEES_URL = "https://book.omnibees.com/hotel/19498";

const PacoteDetalhePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = packages.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!pkg) return <Navigate to="/tarifas" replace />;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[65vh] flex items-end bg-cover bg-center"
          style={{ backgroundImage: `url('${pkg.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-primary/20" />
          <div className="relative z-10 container mx-auto px-4 pb-14">
            <Link to="/tarifas" className="inline-flex items-center gap-2 text-secondary font-body text-sm mb-5 hover:text-secondary/80 transition-colors">
              <ArrowLeft size={14} /> Voltar às tarifas
            </Link>
            <span className={`inline-block ${pkg.tagColor} text-primary-foreground text-xs font-body uppercase tracking-wider px-4 py-1.5 rounded-full mb-4`}>
              {pkg.tag}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-4 leading-[1.05]">{pkg.title}</h1>
            <div className="flex flex-wrap gap-5 text-primary-foreground/70 font-body text-base">
              <span className="flex items-center gap-2"><Calendar size={16} /> {pkg.period}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {pkg.nights}</span>
            </div>
          </div>
        </section>

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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {pkg.gallery.map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-xl">
                      <img src={img} alt={`${pkg.shortTitle} ${i + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Sticky Pricing Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-5">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-xl border border-border p-8 shadow-xl"
                  >
                    <p className="text-muted-foreground font-body text-xs uppercase tracking-wider mb-1">A partir de</p>
                    <p className="font-display text-4xl font-semibold text-foreground mb-1">{pkg.price}</p>
                    <p className="text-muted-foreground font-body text-sm mb-1">por casal · {pkg.nights}</p>
                    <p className="text-secondary font-body text-sm font-semibold mb-6">{pkg.priceNote}</p>

                    <div className="space-y-3 mb-6 pb-6 border-b border-border">
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <CreditCard size={16} className="text-secondary" /> Parcele em até 10x sem juros
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <Baby size={16} className="text-secondary" /> Crianças até 6 anos: grátis
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <Shield size={16} className="text-secondary" /> Melhor preço garantido
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                        <Users size={16} className="text-secondary" /> Apenas 20 suítes
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-body uppercase tracking-[0.15em] gap-2 py-5 mb-3 rounded-full shadow-lg">
                      <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
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

        <CTASection title="Garanta sua vaga neste pacote" subtitle="Vagas limitadas — apenas 20 suítes. Pensão completa e crianças até 6 anos grátis." showPhone={false} />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PacoteDetalhePage;

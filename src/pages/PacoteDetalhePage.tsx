import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, Clock, Check, Baby, ArrowRight, ArrowLeft, Star, Shield, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import packages from "@/data/packages";

const PacoteDetalhePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = packages.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!pkg) return <Navigate to="/pacotes" replace />;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[70vh] flex items-end bg-cover bg-center"
          style={{ backgroundImage: `url('${pkg.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-primary/20" />
          <div className="relative z-10 container mx-auto px-4 pb-16">
            <Link to="/pacotes" className="inline-flex items-center gap-2 text-secondary font-body text-sm mb-6 hover:text-secondary/80 transition-colors">
              <ArrowLeft size={14} /> Voltar aos pacotes
            </Link>
            <span className={`inline-block ${pkg.tagColor} text-primary-foreground text-xs font-body uppercase tracking-wider px-4 py-1.5 rounded-full mb-4`}>
              {pkg.tag}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-4 leading-[1.05]">{pkg.title}</h1>
            <div className="flex flex-wrap gap-6 text-primary-foreground/70 font-body text-base">
              <span className="flex items-center gap-2"><Calendar size={16} /> {pkg.period}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {pkg.nights}</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Left - Content */}
              <div className="lg:col-span-2 space-y-16">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-6">Sobre o pacote</h2>
                  <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed">{pkg.longDescription}</p>
                </motion.div>

                {/* What's included */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-8">O que está incluso</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pkg.included.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border">
                        <Check size={18} className="text-secondary mt-0.5 shrink-0" />
                        <span className="text-foreground font-body text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Kids Section */}
                {pkg.kidsFeatures.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="bg-hotel-cream rounded-xl p-10 border border-border"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Baby className="text-secondary" size={28} />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-foreground">Para os pequenos</h2>
                        <p className="text-muted-foreground font-body text-base">Diversão garantida para toda a família</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {pkg.kidsFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Star size={16} className="text-secondary mt-1 shrink-0" />
                          <span className="text-foreground font-body text-base leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Schedule */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Programação</h2>
                  <div className="space-y-8">
                    {pkg.schedule.map((day, i) => (
                      <div key={i} className="border-l-3 border-secondary pl-8 py-2">
                        <h3 className="font-display text-xl font-semibold text-foreground mb-4">{day.day}</h3>
                        <ul className="space-y-3">
                          {day.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-3 text-muted-foreground font-body text-base">
                              <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {pkg.gallery.map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-lg">
                      <img src={img} alt={`${pkg.shortTitle} ${i + 1}`} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Sticky Pricing Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-xl border border-border p-10 shadow-xl"
                  >
                    <p className="text-muted-foreground font-body text-xs uppercase tracking-wider mb-2">A partir de</p>
                    <p className="font-display text-5xl font-semibold text-foreground mb-2">{pkg.price}</p>
                    <p className="text-muted-foreground font-body text-base mb-1">por casal · {pkg.nights}</p>
                    <p className="text-secondary font-body text-base font-semibold mb-8">{pkg.priceNote}</p>

                    <div className="space-y-4 mb-8 pb-8 border-b border-border">
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-base">
                        <CreditCard size={18} className="text-secondary" /> Parcele em até 10x sem juros
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-base">
                        <Baby size={18} className="text-secondary" /> Crianças até 6 anos: grátis
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-base">
                        <Shield size={18} className="text-secondary" /> Cancelamento flexível
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground font-body text-base">
                        <Users size={18} className="text-secondary" /> Apenas 20 suítes
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] gap-2 py-6 mb-3">
                      <a href={`https://wa.me/5522997792023?text=Olá! Tenho interesse no pacote ${pkg.shortTitle}. Gostaria de mais informações e disponibilidade.`} target="_blank" rel="noopener noreferrer">
                        Reservar agora <ArrowRight size={16} />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full border-border text-foreground font-body text-sm py-5">
                      <a href="tel:+5522997792023">Ligar: (22) 99779-2023</a>
                    </Button>
                  </motion.div>

                  <div className="bg-card rounded-xl border border-border p-8 text-center">
                    <p className="font-display text-xl font-semibold text-foreground mb-3">Ficou com dúvida?</p>
                    <p className="text-muted-foreground font-body text-base mb-6">Nossa equipe está pronta para ajudar você a planejar a estadia perfeita.</p>
                    <Button asChild variant="ghost" className="text-secondary font-body gap-2">
                      <Link to="/contato">Fale conosco <ArrowRight size={14} /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Garanta sua vaga neste pacote"
          subtitle="Vagas limitadas — apenas 20 suítes. Fale com nossa equipe e reserve o melhor feriado para sua família. Pensão completa e crianças até 6 anos grátis."
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PacoteDetalhePage;

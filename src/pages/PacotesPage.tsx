import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Baby, CreditCard, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import packages from "@/data/packages";

const PacotesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/rv6jyv97zg-1770309523978.webp')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
          <div className="relative z-10 text-center">
            <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Experiências Exclusivas</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-4">Pacotes & Ofertas</h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-xl mx-auto">
              Pacotes especiais pensados para famílias, casais e quem busca momentos únicos em meio à natureza
            </p>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="bg-primary py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="flex items-center gap-2 text-primary-foreground font-body text-sm">
                <CreditCard size={16} className="text-secondary" /> Parcele em até 10x sem juros
              </div>
              <div className="flex items-center gap-2 text-primary-foreground font-body text-sm">
                <Baby size={16} className="text-secondary" /> Crianças até 6 anos: cortesia
              </div>
              <div className="flex items-center gap-2 text-primary-foreground font-body text-sm">
                <Star size={16} className="text-secondary" /> Pensão completa incluída
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-4">
                Escolha o pacote ideal <span className="italic text-secondary">para sua família</span>
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Todos os pacotes incluem pensão completa, atividades recreativas e programação especial para crianças.
              </p>
            </motion.div>

            <div className="space-y-12">
              {packages.map((pkg, i) => (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-500"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Image */}
                    <div className="lg:col-span-2 relative overflow-hidden">
                      <img src={pkg.image} alt={pkg.title} className="w-full h-64 lg:h-full object-cover" loading="lazy" />
                      <span className={`absolute top-4 left-4 ${pkg.tagColor} text-primary-foreground text-xs font-body uppercase tracking-wider px-3 py-1 rounded`}>
                        {pkg.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{pkg.title}</h3>
                        <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-body mb-4">
                          <span className="flex items-center gap-1"><Calendar size={14} /> {pkg.period}</span>
                          <span className="flex items-center gap-1">· {pkg.nights}</span>
                        </div>
                        <p className="text-muted-foreground font-body leading-relaxed mb-4">{pkg.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {pkg.highlights.slice(0, 4).map((h, j) => (
                            <span key={j} className="flex items-center gap-1 text-xs font-body text-foreground bg-muted px-3 py-1.5 rounded-full">
                              <Check size={10} className="text-secondary" /> {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-4 border-t border-border">
                        <div>
                          <p className="text-xs text-muted-foreground font-body">a partir de</p>
                          <p className="text-3xl font-display font-semibold text-foreground">{pkg.price}</p>
                          <p className="text-secondary text-sm font-body font-semibold">{pkg.priceNote}</p>
                          <p className="text-muted-foreground text-xs font-body mt-1">por casal · {pkg.nights} · pensão completa</p>
                        </div>
                        <div className="flex gap-3">
                          <Button asChild variant="outline" className="border-border text-foreground font-body text-sm">
                            <Link to={`/pacotes/${pkg.slug}`}>Ver detalhes</Link>
                          </Button>
                          <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body text-sm gap-1">
                            <a href={`https://wa.me/5522997792023?text=Olá! Tenho interesse no pacote ${pkg.shortTitle}.`} target="_blank" rel="noopener noreferrer">
                              Reservar <ArrowRight size={14} />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book Section */}
        <section className="py-16 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-foreground font-semibold text-center mb-12">
              Por que reservar conosco?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: CreditCard, title: "10x sem juros", desc: "Parcele sua estadia no cartão de crédito sem juros." },
                { icon: Baby, title: "Kids free até 6 anos", desc: "Crianças até 6 anos se hospedam gratuitamente." },
                { icon: Star, title: "Pensão completa", desc: "Café, almoço e jantar inclusos em todos os pacotes." },
                { icon: Check, title: "Cancelamento flexível", desc: "Altere ou cancele sua reserva com flexibilidade." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Não encontrou o pacote ideal?" subtitle="Fale com nossa equipe e montamos uma experiência personalizada para você e sua família." />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PacotesPage;

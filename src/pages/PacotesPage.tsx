import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import DateSearchBar from "@/components/DateSearchBar";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, CalendarDays, CreditCard, Baby, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import packages from "@/data/packages";

const categories = [
  { label: "Todos", value: "all" },
  { label: "Família", value: "família" },
  { label: "Romântico", value: "romântico" },
  { label: "Bem-estar", value: "bem-estar" },
];

const PacotesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? packages : packages.filter(p => p.tag === filter);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-primary">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-4 block">Temporada 2026</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-[1.05] mb-6">
                Pacotes & <span className="italic text-secondary">Experiências</span>
              </h1>
              <p className="text-editorial text-primary-foreground/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                {packages.length} pacotes exclusivos — de Páscoa a Réveillon. 
                Pensão completa e crianças até 6 anos grátis em todos.
              </p>
            </motion.div>

            {/* Date Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary-foreground/5 rounded-2xl p-5 border border-primary-foreground/10 max-w-3xl mx-auto"
            >
              <DateSearchBar />
            </motion.div>

            {/* Benefit pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { icon: CreditCard, text: "10x sem juros" },
                { icon: Baby, text: "Kids free até 6 anos" },
                { icon: Star, text: "Pensão completa" },
                { icon: Users, text: "Apenas 20 suítes" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-primary-foreground/70 font-body text-sm bg-primary-foreground/5 px-4 py-2 rounded-full border border-primary-foreground/10">
                  <item.icon size={14} className="text-secondary" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Filter + Packages */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-6 py-2.5 rounded-full text-sm font-body transition-all ${
                    filter === cat.value
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Timeline-style layout */}
            <div className="max-w-5xl mx-auto space-y-8">
              {filtered.map((pkg, i) => (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    {/* Image */}
                    <div className="md:col-span-4 relative overflow-hidden h-56 md:h-auto">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20 hidden md:block" />
                      <span className={`absolute top-4 left-4 ${pkg.tagColor} text-primary-foreground text-[10px] font-body uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                        {pkg.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{pkg.shortTitle}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-4">
                        <Calendar size={14} className="text-secondary" />
                        <span>{pkg.period}</span>
                        <span className="text-border">·</span>
                        <span>{pkg.nights}</span>
                      </div>
                      <p className="text-muted-foreground font-body text-base leading-relaxed mb-4 line-clamp-3">
                        {pkg.description}
                      </p>
                      <Link to={`/pacotes/${pkg.slug}`} className="text-secondary font-body text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                        Ver detalhes <ArrowRight size={14} />
                      </Link>
                    </div>

                    {/* Price + CTA */}
                    <div className="md:col-span-3 p-6 md:p-8 bg-hotel-cream/50 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border">
                      <p className="text-[10px] text-muted-foreground font-body uppercase tracking-widest mb-1">a partir de</p>
                      <p className="text-3xl font-display font-semibold text-foreground mb-1">{pkg.price}</p>
                      <p className="text-secondary text-sm font-body font-semibold mb-1">{pkg.priceNote}</p>
                      <p className="text-muted-foreground text-[11px] font-body mb-5">por casal · pensão completa</p>

                      <Button asChild size="default" className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-body text-xs uppercase tracking-wider gap-2 rounded-full shadow-md">
                        <a href={`https://wa.me/5522997792023?text=Olá! Quero reservar o pacote ${pkg.shortTitle}. Qual a disponibilidade?`} target="_blank" rel="noopener noreferrer">
                          <CalendarDays size={13} />
                          Reservar
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Reserve agora sua experiência"
          subtitle="Vagas limitadas — apenas 20 suítes. Garanta a melhor data para sua família."
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PacotesPage;

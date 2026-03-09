import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Baby, CreditCard, Star, Check, Filter, Sparkles, Users } from "lucide-react";
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
        <section
          className="relative h-[65vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/rv6jyv97zg-1770309523978.webp')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80" />
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="w-12 h-px bg-secondary" />
                <Sparkles size={16} className="text-secondary" />
                <span className="text-secondary font-body text-sm tracking-[0.4em] uppercase">Temporada 2026</span>
                <Sparkles size={16} className="text-secondary" />
                <span className="w-12 h-px bg-secondary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-4">
                Pacotes & <span className="italic text-secondary">Experiências</span>
              </h1>
              <p className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto leading-relaxed">
                {packages.length} pacotes exclusivos para o ano todo — de Páscoa a Réveillon.
                Escolha a experiência perfeita para sua família.
              </p>
            </motion.div>
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
              <div className="flex items-center gap-2 text-primary-foreground font-body text-sm">
                <Users size={16} className="text-secondary" /> Apenas 20 suítes
              </div>
            </div>
          </div>
        </section>

        {/* Filter + Packages */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              <Filter size={16} className="text-muted-foreground" />
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-5 py-2 rounded-full text-sm font-body transition-all ${
                    filter === cat.value
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((pkg, i) => (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <span className={`absolute top-4 left-4 ${pkg.tagColor} text-primary-foreground text-xs font-body uppercase tracking-wider px-3 py-1 rounded`}>
                      {pkg.tag}
                    </span>
                    {pkg.capacity && (
                      <span className="absolute top-4 right-4 bg-primary/80 text-primary-foreground text-xs font-body px-3 py-1 rounded backdrop-blur-sm">
                        {pkg.capacity}
                      </span>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-xl font-semibold text-primary-foreground leading-tight">{pkg.shortTitle}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-muted-foreground text-xs font-body mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {pkg.period}</span>
                      <span>· {pkg.nights}</span>
                    </div>

                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {pkg.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {pkg.highlights.slice(0, 3).map((h, j) => (
                        <span key={j} className="flex items-center gap-1 text-[11px] font-body text-foreground bg-muted px-2 py-1 rounded-full">
                          <Check size={8} className="text-secondary" /> {h}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="border-t border-border pt-4 mb-4">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">a partir de</p>
                          <p className="text-2xl font-display font-semibold text-foreground">{pkg.price}</p>
                          <p className="text-secondary text-xs font-body font-semibold">{pkg.priceNote}</p>
                          <p className="text-muted-foreground text-[10px] font-body mt-0.5">por casal · {pkg.nights} · pensão completa</p>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body text-xs gap-1">
                        <a href={`https://wa.me/5522997792023?text=Olá! Quero reservar o pacote ${pkg.shortTitle}. Qual a disponibilidade?`} target="_blank" rel="noopener noreferrer">
                          Reservar <ArrowRight size={12} />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="border-border text-foreground font-body text-xs">
                        <Link to={`/pacotes/${pkg.slug}`}>Detalhes</Link>
                      </Button>
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
              Por que reservar <span className="italic text-secondary">conosco</span>?
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

        <CTASection
          title="Reserve agora sua experiência"
          subtitle="Vagas limitadas em cada pacote — apenas 20 suítes. Garanta a melhor data para sua família."
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PacotesPage;

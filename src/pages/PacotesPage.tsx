import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Baby, CreditCard, Star, Check, Filter, Users } from "lucide-react";
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
          className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/rv6jyv97zg-1770309523978.webp')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block">Temporada 2026</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6">
                Pacotes & <span className="italic text-secondary">Experiências</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                {packages.length} pacotes exclusivos para o ano todo — de Páscoa a Réveillon.
                Cada feriado é uma experiência única, pensada para famílias que buscam memórias inesquecíveis.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
        </section>

        {/* Benefits Bar */}
        <section className="bg-primary py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: CreditCard, text: "10x sem juros" },
                { icon: Baby, text: "Kids free até 6 anos" },
                { icon: Star, text: "Pensão completa" },
                { icon: Users, text: "Apenas 20 suítes" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <item.icon size={20} className="text-secondary" />
                  </div>
                  <span className="text-primary-foreground font-body text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter + Packages */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-20">
              <Filter size={18} className="text-muted-foreground" />
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-6 py-2.5 rounded-full text-sm font-body transition-all ${
                    filter === cat.value
                      ? "bg-secondary text-secondary-foreground shadow-lg"
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
                  className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                    <span className={`absolute top-4 left-4 ${pkg.tagColor} text-primary-foreground text-xs font-body uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                      {pkg.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-2xl font-semibold text-primary-foreground leading-tight">{pkg.shortTitle}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-muted-foreground text-sm font-body mb-4">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {pkg.period}</span>
                      <span className="text-secondary">·</span>
                      <span>{pkg.nights}</span>
                    </div>

                    <p className="text-muted-foreground font-body text-base leading-relaxed mb-6 flex-1">
                      {pkg.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.highlights.slice(0, 3).map((h, j) => (
                        <span key={j} className="flex items-center gap-1 text-xs font-body text-foreground bg-muted px-3 py-1.5 rounded-full">
                          <Check size={10} className="text-secondary" /> {h}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="border-t border-border pt-6 mb-6">
                      <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">a partir de</p>
                      <p className="text-3xl font-display font-semibold text-foreground">{pkg.price}</p>
                      <p className="text-secondary text-sm font-body font-semibold mt-1">{pkg.priceNote}</p>
                      <p className="text-muted-foreground text-xs font-body mt-1">por casal · {pkg.nights} · pensão completa</p>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">
                      <Button asChild size="lg" className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body text-sm uppercase tracking-wider gap-2">
                        <a href={`https://wa.me/5522997792023?text=Olá! Quero reservar o pacote ${pkg.shortTitle}. Qual a disponibilidade?`} target="_blank" rel="noopener noreferrer">
                          Reservar <ArrowRight size={14} />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-border text-foreground font-body text-sm">
                        <Link to={`/pacotes/${pkg.slug}`}>Detalhes</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book */}
        <section className="py-24 bg-hotel-cream">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold">
                Por que reservar <span className="italic text-secondary">conosco</span>?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: CreditCard, title: "Parcele em 10x sem juros", desc: "O sonho da viagem em família cabe no seu orçamento. Pagamento facilitado no cartão de crédito." },
                { icon: Baby, title: "Crianças até 6 anos grátis", desc: "Nossos pequenos hóspedes são VIP. Hospedagem, recreação e menu infantil inclusos — sem custo adicional." },
                { icon: Star, title: "Pensão completa em todos os pacotes", desc: "Café artesanal, almoço regional e jantar especial. Três refeições diárias que celebram a gastronomia da serra." },
                { icon: Check, title: "Cancelamento flexível", desc: "Imprevistos acontecem. Por isso oferecemos flexibilidade para alterar ou cancelar sua reserva com antecedência." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} 
                  className="flex gap-6 p-8 rounded-xl bg-background border border-border"
                >
                  <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Reserve agora sua experiência"
          subtitle="Vagas limitadas em cada pacote — apenas 20 suítes. Garanta a melhor data para sua família. Pensão completa e crianças até 6 anos grátis."
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PacotesPage;

import { useEffect, useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, CalendarDays, CreditCard, Baby, Star, Percent, Clock, Check, UtensilsCrossed, Sun, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import packages from "@/data/packages";

const OMNIBEES_URL = "https://book.omnibees.com/hotel/19498";

function getMonth(period: string): string {
  const monthMap: Record<string, string> = {
    "janeiro": "Janeiro", "fevereiro": "Fevereiro", "março": "Março",
    "abril": "Abril", "maio": "Maio", "junho": "Junho",
    "julho": "Julho", "agosto": "Agosto", "setembro": "Setembro",
    "outubro": "Outubro", "novembro": "Novembro", "dezembro": "Dezembro",
  };
  const lower = period.toLowerCase();
  for (const [key, val] of Object.entries(monthMap)) {
    if (lower.includes(key)) return val;
  }
  return "Outros";
}

const monthOrder = ["Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const TarifasPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selectedMonth, setSelectedMonth] = useState("Todos");

  const packagesByMonth = useMemo(() => {
    const groups: Record<string, typeof packages> = {};
    packages.forEach(pkg => {
      const month = getMonth(pkg.period);
      if (!groups[month]) groups[month] = [];
      groups[month].push(pkg);
    });
    return groups;
  }, []);

  const availableMonths = useMemo(() => monthOrder.filter(m => packagesByMonth[m]), [packagesByMonth]);
  const filtered = selectedMonth === "Todos" ? packages : (packagesByMonth[selectedMonth] || []);

  // Find mês do consumidor package
  const mesConsumidorPkg = packages.find(p => p.slug === "mes-do-consumidor-2026" || p.shortTitle.toLowerCase().includes("consumidor"));

  return (
    <div className="min-h-screen">
      <SEO
        title="Tarifas e Pacotes | Ofertas Especiais"
        description="Pacotes de fim de semana, feriados e datas especiais no Minha Glória Hotel Boutique. Pensão completa, 1 criança até 12 anos grátis. Parcele em até 10x."
        canonical="/tarifas"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "Pacotes Minha Glória Hotel Boutique",
            itemListElement: packages.map(p => ({
              "@type": "Offer",
              name: p.title,
              description: p.description,
              price: p.price.replace(/[^\d]/g, ""),
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
              url: `https://www.minhagloria.com.br/tarifas/${p.slug}`,
            })),
          },
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tarifas", url: "/tarifas" }]),
        ]}
      />
      <Header />
      <div className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://www.minhagloria.com.br/images/carousel-new-5.webp" alt="" className="w-full h-full object-cover hero-zoom-bg" />
          </div>
          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-secondary font-body text-[10px] tracking-[0.5em] uppercase mb-3 block">Temporada 2026</span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-[1.08] mb-4 hero-text-shadow drop-shadow-lg">
                Tarifas & <span className="italic text-secondary drop-shadow-lg">Pacotes</span>
              </h1>
              <p className="text-primary-foreground/60 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto hero-text-shadow">
                De Páscoa a Réveillon, experiências exclusivas para casais e famílias na serra fluminense.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                { icon: CreditCard, text: "10x sem juros" },
                { icon: Baby, text: "1 criança até 12 anos grátis" },
                { icon: Star, text: "Pensão completa" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-primary-foreground/70 font-body text-xs bg-primary-foreground/5 px-3 py-1.5 rounded-full border border-primary-foreground/10">
                  <item.icon size={12} className="text-secondary" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Mês do Consumidor - Special Highlight */}
        <section className="relative overflow-hidden">
          <div className="bg-gradient-to-br from-cta via-cta to-primary py-16 lg:py-20">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
              <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary-foreground/20">
                    <Percent size={16} className="text-secondary" />
                    <span className="text-primary-foreground font-body text-xs font-bold uppercase tracking-wider">Oferta Especial</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold leading-[0.95] mb-4">
                    Mês do<br />
                    <span className="italic text-secondary">Consumidor</span>
                  </h2>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="font-display text-7xl md:text-8xl font-bold text-primary-foreground">30%</span>
                    <span className="font-body text-xl text-primary-foreground/80 uppercase tracking-wider">OFF</span>
                  </div>
                  <p className="text-primary-foreground/70 font-body text-lg leading-relaxed max-w-md mb-8">
                    Em pacotes selecionados. Vagas limitadas — apenas 20 suítes disponíveis. Aproveite as melhores tarifas da temporada.
                  </p>
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body text-sm uppercase tracking-wider gap-2 rounded-full shadow-xl shadow-secondary/30">
                    <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                      <CalendarDays size={16} /> Garantir desconto <ArrowRight size={14} />
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/20">
                    <div className="space-y-4">
                      {[
                        "Pensão completa nos fins de semana e feriados",
                        "1 criança até 12 anos: grátis nos fins de semana",
                        "Parcelamento em até 10x sem juros",
                        "Recreação infantil monitorada",
                        "Acesso completo ao spa e lazer",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                            <Check size={12} className="text-secondary" />
                          </div>
                          <span className="text-primary-foreground font-body text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Meal Plan Info */}
        <section className="py-14 bg-hotel-cream">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <UtensilsCrossed size={28} className="text-secondary mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl text-foreground font-semibold mb-2">
                Regime de <span className="italic text-secondary">alimentação</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sun size={18} className="text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Segunda a quinta</h3>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Trabalhamos exclusivamente com <strong className="text-foreground">café da manhã</strong> — artesanal, com produtos frescos da serra.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-primary rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <UtensilsCrossed size={18} className="text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">Pensão completa</h3>
                </div>
                <p className="text-primary-foreground/70 font-body text-sm leading-relaxed mb-3">
                  Café da manhã, almoço e jantar inclusos em:
                </p>
                <ul className="space-y-2 text-primary-foreground/80 font-body text-sm">
                  {["Finais de semana", "Feriados", "Alta temporada — janeiro e julho"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={12} className="text-secondary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Month Filter + Packages */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-2">
                Pacotes <span className="italic text-secondary">temáticos</span>
              </h2>
              <p className="text-muted-foreground font-body text-sm">Selecione o mês e encontre a experiência ideal</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              <button
                onClick={() => setSelectedMonth("Todos")}
                className={`px-5 py-2 rounded-full text-xs font-body uppercase tracking-wider transition-all ${
                  selectedMonth === "Todos" ? "bg-primary text-primary-foreground shadow-lg" : "bg-card text-muted-foreground hover:bg-muted border border-border"
                }`}
              >
                Todos
              </button>
              {availableMonths.map((month) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-5 py-2 rounded-full text-xs font-body uppercase tracking-wider transition-all ${
                    selectedMonth === month ? "bg-primary text-primary-foreground shadow-lg" : "bg-card text-muted-foreground hover:bg-muted border border-border"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {filtered.map((pkg, i) => (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
                >
                  <Link to={`/tarifas/${pkg.slug}`} className="block relative overflow-hidden h-56 md:h-72">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                    <span className={`absolute top-4 left-4 ${pkg.tagColor} text-primary-foreground text-[10px] font-body uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                      {pkg.tag}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-1 hero-text-shadow">{pkg.shortTitle}</h3>
                      <div className="flex items-center gap-2 text-primary-foreground/80 text-sm font-body hero-text-shadow">
                        <Calendar size={14} className="text-secondary" />
                        <span>{pkg.period}</span>
                        <span className="text-primary-foreground/40">·</span>
                        <span>{pkg.nights}</span>
                      </div>
                    </div>
                  </Link>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    <div className="md:col-span-8 p-5 md:p-6">
                      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 line-clamp-2">{pkg.description}</p>
                      <Link to={`/tarifas/${pkg.slug}`} className="text-secondary font-body text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wider">
                        Ver detalhes <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div className="md:col-span-4 p-5 md:p-6 bg-hotel-cream/50 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border">
                      <p className="text-[9px] text-muted-foreground font-body uppercase tracking-widest mb-0.5">a partir de</p>
                      <p className="text-2xl font-display font-semibold text-foreground mb-0.5">{pkg.price}</p>
                      <p className="text-secondary text-xs font-body font-semibold mb-0.5">{pkg.priceNote}</p>
                      <p className="text-muted-foreground text-[10px] font-body mb-4">por casal · pensão completa</p>
                      <Button asChild size="sm" className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-body text-[10px] uppercase tracking-wider gap-1.5 rounded-full shadow-md">
                        <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                          <CalendarDays size={12} /> Reservar
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center mt-14 p-6 bg-card rounded-xl border border-border"
            >
              <p className="font-display text-xl font-semibold text-foreground mb-2">Não encontrou a data ideal?</p>
              <p className="text-muted-foreground font-body text-sm mb-4">Monte o pacote perfeito — reserve diretamente pelo site.</p>
              <Button asChild size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-xs uppercase tracking-wider gap-2 rounded-full">
                <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarDays size={14} /> Ver disponibilidade
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-14 bg-hotel-cream">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Check size={18} className="text-cta" /> Incluso na diária
                </h3>
                <ul className="space-y-2 text-muted-foreground font-body text-sm">
                  {["Café da manhã artesanal", "Pensão completa (finais de semana, feriados e alta temporada)", "Acesso à piscina e áreas de lazer", "Wi-Fi gratuito", "Estacionamento privativo", "Recreação infantil (datas programadas)", "Crianças até 6 anos: cortesia"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><Check size={12} className="text-cta mt-1 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Extras (sob consulta)</h3>
                <ul className="space-y-2 text-muted-foreground font-body text-sm">
                  {["Spa e massagens", "Passeios de quadriciclo", "Cavalgadas guiadas", "Transfer particular", "Decoração romântica no chalé"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-secondary mt-0.5">·</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl text-foreground font-semibold text-center mb-8">Políticas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-body text-muted-foreground">
              <div className="p-5 bg-card rounded-xl border border-border">
                <h3 className="font-display text-base font-semibold text-foreground mb-2">Check-in / Check-out</h3>
                <p>Check-in a partir das 15h. Check-out até 12h (extensível mediante consulta e disponibilidade).</p>
              </div>
              <div className="p-5 bg-card rounded-xl border border-border">
                <h3 className="font-display text-base font-semibold text-foreground mb-2">Cancelamento</h3>
                <p>Cancelamento gratuito até 7 dias antes da data de check-in. Após esse prazo, pode haver cobrança.</p>
              </div>
              <div className="p-5 bg-card rounded-xl border border-border">
                <h3 className="font-display text-base font-semibold text-foreground mb-2">Crianças</h3>
                <p>Crianças até 6 anos se hospedam gratuitamente. Acima de 6 anos, tarifa de criança.</p>
              </div>
              <div className="p-5 bg-card rounded-xl border border-border">
                <h3 className="font-display text-base font-semibold text-foreground mb-2">Pets</h3>
                <p>Hotel pet friendly! Animais de estimação são bem-vindos. Consulte regras e áreas permitidas.</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Reserve agora sua experiência"
          subtitle="Vagas limitadas — apenas 20 suítes. Garanta a melhor data para sua família."
          showPhone={false}
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TarifasPage;

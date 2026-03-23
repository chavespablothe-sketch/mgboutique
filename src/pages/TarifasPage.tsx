import { useEffect, useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, CalendarDays, CreditCard, Baby, Star, Percent, Check, UtensilsCrossed, Sun } from "lucide-react";
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

  // Group filtered packages by month for display
  const groupedFiltered = useMemo(() => {
    if (selectedMonth !== "Todos") {
      return [{ month: selectedMonth, pkgs: packagesByMonth[selectedMonth] || [] }];
    }
    return availableMonths.map(m => ({ month: m, pkgs: packagesByMonth[m] || [] }));
  }, [selectedMonth, packagesByMonth, availableMonths]);

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

        {/* Mês do Consumidor - Simplified */}
        <section className="relative overflow-hidden">
          <div className="bg-gradient-to-br from-cta via-cta to-primary py-16 lg:py-24">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl animate-pulse" />
              <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl animate-pulse" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary-foreground/20">
                    <Percent size={16} className="text-secondary animate-pulse" />
                    <span className="text-primary-foreground font-body text-xs font-bold uppercase tracking-wider">Oferta por tempo limitado</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold leading-[0.95] mb-4">
                    Mês do<br />
                    <span className="italic text-secondary">Consumidor</span>
                  </h2>
                  <div className="flex items-baseline justify-center gap-3 mb-4">
                    <span className="font-display text-7xl md:text-8xl font-bold text-primary-foreground">30%</span>
                    <span className="font-body text-xl text-primary-foreground/80 uppercase tracking-wider">OFF</span>
                  </div>
                  <p className="text-primary-foreground/70 font-body text-lg leading-relaxed max-w-md mx-auto mb-4">
                    Em pacotes selecionados. Vagas limitadas — apenas 20 suítes disponíveis.
                  </p>
                  <p className="text-secondary font-body text-sm font-bold uppercase tracking-wider mb-8">
                    ⚡ As melhores tarifas da temporada — reserve antes que esgote
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body text-sm uppercase tracking-wider gap-2 rounded-full shadow-xl shadow-secondary/30">
                      <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                        <CalendarDays size={16} /> Garantir desconto <ArrowRight size={14} />
                      </a>
                    </Button>
                    <a
                      href="https://wa.me/5522997792023?text=Olá! Quero saber mais sobre o desconto do Mês do Consumidor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-primary-foreground/80 font-body text-sm border border-primary-foreground/20 px-6 py-3 rounded-full hover:bg-primary-foreground/5 transition-colors"
                    >
                      Falar no WhatsApp
                    </a>
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

        {/* Month Filter + Packages - Clean layout like reference */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-2">
                Pacotes <span className="italic text-secondary">temáticos</span>
              </h2>
              <p className="text-muted-foreground font-body text-sm">Selecione o mês e encontre a experiência ideal</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
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

            <div className="max-w-6xl mx-auto space-y-16">
              {groupedFiltered.map(({ month, pkgs }) => (
                <div key={month}>
                  {/* Month header */}
                  <div className="mb-8">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground font-semibold">{month}</h3>
                    <div className="w-full h-px bg-border mt-3" />
                  </div>

                  {/* Cards grid - clean like reference */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pkgs.map((pkg, i) => (
                      <motion.div
                        key={pkg.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link to={`/tarifas/${pkg.slug}`} className="group block">
                          {/* Image */}
                          <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                            <img
                              src={pkg.image}
                              alt={pkg.shortTitle}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              loading="lazy"
                            />
                          </div>

                          {/* Info */}
                          <div className="space-y-2">
                            <p className="text-secondary font-body text-sm">{pkg.period}</p>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2">
                              {pkg.description.length > 100 ? pkg.description.slice(0, 100) + "…" : pkg.description}
                            </p>
                            <p className="font-display text-xl font-semibold text-foreground">
                              A partir de {pkg.price}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-secondary font-body text-sm font-semibold group-hover:gap-2.5 transition-all border border-secondary/30 rounded-full px-5 py-2 mt-2 hover:bg-secondary/5">
                              Reservar agora <ArrowRight size={14} />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
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
                <p>1 criança até 12 anos se hospeda gratuitamente nos fins de semana. Acima de 12 anos ou 2ª criança, tarifa adicional.</p>
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

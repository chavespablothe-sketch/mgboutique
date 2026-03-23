import { useEffect, useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, CalendarDays, CreditCard, Baby, Star, Users, Percent, Clock, Gift, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import packages from "@/data/packages";
import chalets from "@/data/chalets";

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

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 lg:pt-20">
        {/* Promo Banner */}
        <div className="bg-cta text-cta-foreground py-3">
          <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-center">
            <Percent size={16} className="shrink-0" />
            <p className="font-body text-sm font-bold uppercase tracking-wider">
              Mês do Consumidor — até 30% OFF em pacotes selecionados
            </p>
            <span className="hidden md:inline font-body text-xs opacity-80">| Vagas limitadas</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://www.minhagloria.com.br/images/carousel-new-5.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-secondary font-body text-[10px] tracking-[0.5em] uppercase mb-3 block">Temporada 2026</span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-[1.08] mb-4">
                Tarifas & <span className="italic text-secondary">Pacotes</span>
              </h1>
              <p className="text-primary-foreground/60 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                {packages.length} pacotes exclusivos de Páscoa a Réveillon.
                Pensão completa nos finais de semana e crianças até 6 anos grátis.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                { icon: CreditCard, text: "10x sem juros" },
                { icon: Baby, text: "Kids free até 6 anos" },
                { icon: Star, text: "Pensão completa" },
                { icon: Shield, text: "Melhor preço garantido" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-primary-foreground/70 font-body text-xs bg-primary-foreground/5 px-3 py-1.5 rounded-full border border-primary-foreground/10">
                  <item.icon size={12} className="text-secondary" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tariff Table */}
        <section className="py-14 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-foreground font-semibold">
                Tarifas por <span className="italic text-secondary">chalé</span>
              </h2>
              <p className="text-muted-foreground font-body text-sm mt-2">Diárias a partir de (por casal, por noite)</p>
            </motion.div>
            <div className="overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-display font-semibold text-foreground">Chalé</th>
                    <th className="text-center py-3 px-4 font-display font-semibold text-foreground">Capacidade</th>
                    <th className="text-center py-3 px-4 font-display font-semibold text-foreground">Diária (baixa)</th>
                    <th className="text-center py-3 px-4 font-display font-semibold text-foreground">Diária (alta)</th>
                  </tr>
                </thead>
                <tbody>
                  {chalets.map((c) => (
                    <tr key={c.slug} className="border-b border-border/50">
                      <td className="py-3 px-4 font-display font-semibold text-foreground">{c.name}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{c.capacity}</td>
                      <td className="py-3 px-4 text-center text-foreground font-semibold">{c.priceFrom}</td>
                      <td className="py-3 px-4 text-center text-foreground font-semibold">Consulte</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <Button asChild size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-xs uppercase tracking-wider gap-2 rounded-full">
                <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarDays size={14} /> Ver disponibilidade e preços
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Check size={18} className="text-cta" /> Incluso na diária
                </h3>
                <ul className="space-y-2 text-muted-foreground font-body text-sm">
                  {["Café da manhã artesanal", "Pensão completa (finais de semana e feriados)", "Acesso à piscina e áreas de lazer", "Wi-Fi gratuito", "Estacionamento privativo", "Recreação infantil (datas programadas)", "Crianças até 6 anos: cortesia"].map((item, i) => (
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

        {/* Month Filter + Packages */}
        <section className="py-14 lg:py-20 bg-hotel-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-2">
                Pacotes <span className="italic text-secondary">temáticos</span>
              </h2>
              <p className="text-muted-foreground font-body text-sm">Romântico, família, feriados prolongados — cada pacote é uma experiência única</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              <button
                onClick={() => setSelectedMonth("Todos")}
                className={`px-5 py-2 rounded-full text-xs font-body uppercase tracking-wider transition-all ${
                  selectedMonth === "Todos" ? "bg-primary text-primary-foreground shadow-lg" : "bg-background text-muted-foreground hover:bg-muted"
                }`}
              >
                Todos
              </button>
              {availableMonths.map((month) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-5 py-2 rounded-full text-xs font-body uppercase tracking-wider transition-all ${
                    selectedMonth === month ? "bg-primary text-primary-foreground shadow-lg" : "bg-background text-muted-foreground hover:bg-muted"
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
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-1">{pkg.shortTitle}</h3>
                      <div className="flex items-center gap-2 text-primary-foreground/80 text-sm font-body">
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
              className="max-w-2xl mx-auto text-center mt-14 p-6 bg-background rounded-xl border border-border"
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

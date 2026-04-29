import { useEffect, useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, CalendarDays, CreditCard, Baby, Star, Users, Percent, Clock, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import allPackages from "@/data/packages";
import { filterActivePackages, pickHoverMessage } from "@/lib/packageStatus";

const packages = filterActivePackages(allPackages);

// Derive month from period string
function getMonth(period: string): string {
  const monthMap: Record<string, string> = {
    "janeiro": "Janeiro", "fevereiro": "Fevereiro", "março": "Março",
    "abril": "Abril", "maio": "Maio", "junho": "Junho",
    "julho": "Julho", "agosto": "Agosto", "setembro": "Setembro",
    "outubro": "Outubro", "novembro": "Novembro", "dezembro": "Dezembro",
  };
  // Find first month mention in period
  const lower = period.toLowerCase();
  for (const [key, val] of Object.entries(monthMap)) {
    if (lower.includes(key)) return val;
  }
  return "Outros";
}

const monthOrder = ["Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const PacotesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selectedMonth, setSelectedMonth] = useState("Todos");

  // Group packages by month
  const packagesByMonth = useMemo(() => {
    const groups: Record<string, typeof packages> = {};
    packages.forEach(pkg => {
      const month = getMonth(pkg.period);
      if (!groups[month]) groups[month] = [];
      groups[month].push(pkg);
    });
    return groups;
  }, []);

  const availableMonths = useMemo(() => {
    return monthOrder.filter(m => packagesByMonth[m]);
  }, [packagesByMonth]);

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
              Dia das Mães — 15% OFF nos últimos quartos
            </p>
            <Link to="/pacotes/dia-das-maes-2026" className="hidden md:inline-flex items-center gap-1 font-body text-xs underline underline-offset-2 hover:opacity-80">
              Ver pacote <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://www.minhagloria.com.br/images/carousel-new-5.webp" 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-secondary font-body text-[10px] tracking-[0.5em] uppercase mb-3 block">Temporada 2026</span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-[1.08] mb-4">
                Pacotes & <span className="italic text-secondary">Experiências</span>
              </h1>
              <p className="text-primary-foreground/60 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                De Páscoa a Réveillon, experiências exclusivas para casais e famílias na serra fluminense.
              </p>
            </motion.div>

            {/* Benefit pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[
                { icon: CreditCard, text: "10x sem juros" },
                { icon: Baby, text: "1 criança até 06 anos grátis" },
                { icon: Star, text: "Pensão completa" },
                { icon: Users, text: "Apenas 20 suítes" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-primary-foreground/70 font-body text-xs bg-primary-foreground/5 px-3 py-1.5 rounded-full border border-primary-foreground/10">
                  <item.icon size={12} className="text-secondary" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Highlight Banner */}
        <section className="bg-secondary/10 border-y border-secondary/20">
          <div className="container mx-auto px-4 py-8 lg:py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center">
                  <Percent size={18} className="text-cta" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">15% OFF Dia das Mães</h3>
                <p className="text-muted-foreground font-body text-xs">Aplicado nos últimos quartos disponíveis</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center">
                  <Clock size={18} className="text-cta" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Vagas limitadas</h3>
                <p className="text-muted-foreground font-body text-xs">Apenas 20 suítes por temporada</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center">
                  <Gift size={18} className="text-cta" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Pensão completa</h3>
                <p className="text-muted-foreground font-body text-xs">Café, almoço e jantar nos finais de semana</p>
              </div>
            </div>
          </div>
        </section>

        {/* Month Filter + Packages */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Month filter */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              <button
                onClick={() => setSelectedMonth("Todos")}
                className={`px-5 py-2 rounded-full text-xs font-body uppercase tracking-wider transition-all ${
                  selectedMonth === "Todos"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Todos
              </button>
              {availableMonths.map((month) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-5 py-2 rounded-full text-xs font-body uppercase tracking-wider transition-all ${
                    selectedMonth === month
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>

            {/* Package cards — large photo focus */}
            <div className="max-w-5xl mx-auto space-y-8">
              {filtered.map((pkg, i) => (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Large image */}
                  <Link to={`/pacotes/${pkg.slug}`} className="block relative overflow-hidden h-64 md:h-80">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-1">{pkg.shortTitle}</h3>
                      <div className="flex items-center gap-2 text-primary-foreground/80 text-sm font-body">
                        <Calendar size={14} className="text-secondary" />
                        <span>{pkg.period}</span>
                        <span className="text-primary-foreground/40">·</span>
                        <span>{pkg.nights}</span>
                      </div>
                    </div>

                    {/* Hover whisper — light rotating message */}
                    <div className="pointer-events-none absolute top-4 right-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <div className="flex items-center gap-2 bg-background/95 backdrop-blur-md text-foreground text-xs font-body px-3.5 py-2 rounded-full shadow-lg border border-secondary/30">
                        <Sparkles size={12} className="text-secondary animate-pulse" />
                        <span className="italic">{pickHoverMessage(pkg.slug)}</span>
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                    <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1 line-clamp-2">
                      {pkg.description}
                    </p>
                    <div className="flex items-center gap-3 shrink-0">
                      <Link to={`/pacotes/${pkg.slug}`} className="text-secondary font-body text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wider">
                        Ver detalhes <ArrowRight size={12} />
                      </Link>
                      <Button asChild size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-[10px] uppercase tracking-wider gap-1.5 rounded-full shadow-md">
                        <Link to={`/pacotes/${pkg.slug}`}>
                          <CalendarDays size={12} />
                          Reservar
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom urgency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center mt-14 p-6 bg-primary/5 rounded-xl border border-primary/10"
            >
              <p className="font-display text-xl font-semibold text-foreground mb-2">
                Não encontrou a data ideal?
              </p>
              <p className="text-muted-foreground font-body text-sm mb-4">
                Monte o pacote perfeito para sua família — reserve diretamente pelo site.
              </p>
              <Button asChild size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body text-xs uppercase tracking-wider gap-2 rounded-full">
                <a href="https://book.omnibees.com/hotelresults?q=21954&NRooms=1&ad=2&ch=0" target="_blank" rel="noopener noreferrer">
                  <CalendarDays size={14} />
                  Ver disponibilidade
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <CTASection
          title="Reserve agora sua experiência"
          subtitle="Vagas limitadas — apenas 20 suítes. Garanta a melhor data para sua família."
        />
      </div>
      <Footer />
    </div>
  );
};

export default PacotesPage;

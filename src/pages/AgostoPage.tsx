import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import CouponBanner from "@/components/CouponBanner";
import FondueSection from "@/components/sections/FondueSection";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, UtensilsCrossed, Leaf, Heart } from "lucide-react";
import { buildOmnibeesUrl } from "@/lib/omnibees";
import { agostoImages, feriasJulhoImages, pacoteImages } from "@/lib/siteImages";
import packages from "@/data/packages";
import { isPackageActive } from "@/lib/packageStatus";

const pacotesAgosto = [
  packages.find((p) => p.slug === "dia-dos-pais-2026"),
  ...packages.filter((p) => p.slug.startsWith("festival-fondue-")),
  packages.find((p) => p.slug === "fim-de-semana"),
].filter(Boolean) as NonNullable<(typeof packages)[number]>[];


const experiencias = [
  { icon: Leaf, titulo: "Natureza & Bem-estar", texto: "Trilhas leves, spa com massagens, piscinas aquecidas e áreas de descanso em meio à Mata Atlântica." },
  { icon: Sparkles, titulo: "Momentos em família", texto: "Recreação monitorada, fazendinha, oficinas criativas e brincadeiras ao ar livre para os pequenos." },
  { icon: Heart, titulo: "Refúgio para casais", texto: "Chalés reservados, chá da tarde, ofurô, jantar à luz de velas e o silêncio raro da serra fluminense." },
];

const AgostoPage = () => {
  const heroCta = buildOmnibeesUrl({ checkIn: "07082026", checkOut: "09082026" });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Agosto no Minha Glória | Festival de Fondue & Dia dos Pais"
        description="Festival de Fondue aos sábados de agosto, pacote de Dia dos Pais e fins de semana com pensão completa na serra fluminense. Confira o cardápio e a carta de vinhos."

        canonical="/agosto"
        schemas={[breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Agosto", url: "/agosto" }])]}
      />
      <Header />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={agostoImages.hero}
          alt="Casal desconectando em chalé do Minha Glória Hotel Boutique"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/10" />

        <div className="relative container mx-auto px-4 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-secondary/95 text-secondary-foreground font-body text-[11px] tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6">
              <Calendar size={13} /> Agosto de 2026
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[1.05] mb-6">
              O refúgio que você <span className="text-secondary italic">merece</span> em agosto
            </h1>
            <p className="font-body text-primary-foreground/85 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Mês de céu limpo na serra, lareira acesa e tempo bom pra desacelerar. E, a partir de 08/08, todos os sábados têm <span className="text-secondary">Festival de Fondue</span> — fondue de queijo, carnes selecionadas e fondue de chocolate.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm">
                <a href={heroCta} target="_blank" rel="noopener noreferrer">Reservar agora <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-body uppercase tracking-[0.15em] text-sm">
                <a href="#fondue">Festival de Fondue</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-body uppercase tracking-[0.15em] text-sm">
                <a href="#pacotes">Ver pacotes</a>
              </Button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* CUPOM */}
      <section className="py-10 bg-[#f6f1e6]">
        <div className="container mx-auto px-4">
          <CouponBanner />
        </div>
      </section>

      {/* FESTIVAL DE FONDUE */}
      <FondueSection />

      {/* PACOTES */}
      <section id="pacotes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Escolha o seu</span>
            <h2 className="font-display text-3xl md:text-5xl text-primary font-semibold leading-tight">Pacotes de agosto</h2>
            <p className="font-body text-primary/70 mt-4">Do Dia dos Pais às noites de Festival de Fondue — convites diferentes para o mesmo desejo: pausar, respirar e voltar leve.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pacotesAgosto.filter((p) => isPackageActive(p)).map((pkg, i) => {
              const bookingUrl = pkg.checkIn && pkg.checkOut
                ? buildOmnibeesUrl({ checkIn: pkg.checkIn, checkOut: pkg.checkOut })
                : buildOmnibeesUrl();

              return (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-primary/5 flex flex-col"
                >
                  <Link to={`/ofertas/${pkg.slug}`} className="block">
                    <div className="relative h-64 overflow-hidden">
                      <img src={pkg.image} alt={pkg.shortTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                      <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground font-body text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">
                        {pkg.shortTitle}
                      </span>
                    </div>
                    <div className="p-6 pb-4">
                      <p className="font-body text-xs text-primary/50 uppercase tracking-widest mb-2">{pkg.period}</p>
                      <h3 className="font-display text-2xl text-primary mb-3 leading-tight">{pkg.title}</h3>
                      <p className="font-body text-primary/70 text-sm leading-relaxed line-clamp-3">{pkg.description}</p>
                    </div>
                  </Link>
                  <div className="px-6 pb-6 mt-auto flex flex-wrap items-center gap-3">
                    <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-xs">
                      <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Reservar agora <ArrowRight size={13} className="ml-1.5" /></a>
                    </Button>
                    <Link to={`/ofertas/${pkg.slug}`} className="inline-flex items-center gap-1.5 text-primary/70 hover:text-secondary font-body text-xs uppercase tracking-[0.15em] font-semibold transition-colors">
                      Ver detalhes <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* MOSAICO DE IMAGENS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { src: feriasJulhoImages.piscina, alt: "Piscina aquecida" },
                { src: feriasJulhoImages.cisne, alt: "Momentos em família" },
                { src: pacoteImages.fimDeSemana, alt: "Chalé na serra" },
                { src: feriasJulhoImages.cozinha, alt: "Gastronomia autoral" },
              ].map((img, i) => (
                <motion.div
                  key={img.alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative overflow-hidden rounded-lg group ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section className="py-20 bg-[#f6f1e6]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Experiências</span>
            <h2 className="font-display text-3xl md:text-5xl text-primary font-semibold leading-tight">Um agosto para viver devagar</h2>
            <p className="font-body text-primary/70 mt-4">Nossos dias são feitos de pequenos rituais — um chá quente, uma trilha curta, uma conversa longa.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {experiencias.map((e, i) => (
              <motion.div
                key={e.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-lg p-7 border border-primary/10 hover:border-secondary/40 transition-colors"
              >
                <e.icon className="text-secondary mb-4" size={28} />
                <h3 className="font-display text-xl text-primary mb-3">{e.titulo}</h3>
                <p className="font-body text-primary/70 text-sm leading-relaxed">{e.texto}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body uppercase tracking-[0.15em] text-sm">
              <Link to="/experiencias">Conhecer todas as experiências <ArrowRight size={14} className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GASTRONOMIA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <UtensilsCrossed className="text-secondary mx-auto mb-5" size={36} />
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Gastronomia</span>
              <h2 className="font-display text-3xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
                Pensão completa nos fins de semana
              </h2>
              <p className="font-body text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-4">
                Café da manhã farto com pães e bolos saídos do forno. Almoço com receitas regionais e ingredientes frescos da serra. Chá da tarde e jantar à luz de velas.
              </p>
              <p className="font-body text-primary-foreground/70 text-base leading-relaxed mb-8">
                Em agosto, o cardápio ganha caldos, sopas cremosas e sobremesas quentes — a gastronomia que a estação pede.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm">
                <Link to="/gastronomia">Ver nossa gastronomia <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-[#f6f1e6]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold mb-5 leading-tight">
            Seu agosto começa aqui
          </h2>
          <p className="font-body text-primary/70 mb-8">Consulte disponibilidade em tempo real e garanta sua reserva pelo nosso motor oficial.</p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm">
            <a href={buildOmnibeesUrl()} target="_blank" rel="noopener noreferrer">Reservar agora <ArrowRight size={16} className="ml-2" /></a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgostoPage;

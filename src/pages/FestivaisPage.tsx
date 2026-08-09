import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { buildOmnibeesUrl } from "@/lib/omnibees";
import { festivals } from "@/data/festivals";

const heroCta = buildOmnibeesUrl();

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const imageHover = {
  transition: { duration: 0.7 },
  whileHover: { scale: 1.02 },
};

const FestivaisPage = () => {
  const [agosto, setembro, outubro, ...gridFestivals] = festivals;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Festivais do Ano no Minha Glória"
        description="Conheça o calendário anual de festivais do Minha Glória Hotel Boutique: Fondue, Fogo de Chão, Fazenda Encantada, Costela, Natal, Verão e muito mais na serra fluminense."
        canonical="/festivais"
        schemas={[
          breadcrumbSchema([
            { name: "Início", url: "/" },
            { name: "Festivais", url: "/festivais" },
          ]),
        ]}
      />
      <Header />

      <main className="pt-16 lg:pt-24">
        {/* Hero Header */}
        <section className="py-20 md:py-28 px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.span
              {...fadeIn}
              className="text-secondary font-body text-xs tracking-[0.3em] uppercase mb-6 block"
            >
              Experiências Exclusivas
            </motion.span>
            <motion.h1
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-primary font-semibold italic leading-[1.05] mb-8"
            >
              Calendário de Festivais
            </motion.h1>
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="w-16 h-px bg-secondary mx-auto mb-8"
            />
            <motion.p
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.3 }}
              className="text-primary/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-body font-light"
            >
              Uma curadoria de momentos inesquecíveis, celebrando a alta gastronomia, a cultura local e a natureza exuberante ao longo das estações.
            </motion.p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 lg:px-8 pb-24 md:pb-32">
          {/* Agosto & Setembro — Alternating Editorial */}
          <div className="space-y-24 md:space-y-40 mb-24 md:mb-40">
            {/* Agosto: image left, text right */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <motion.div
                {...fadeIn}
                className="md:col-span-7 relative group"
              >
                <div className="absolute -inset-3 md:-inset-4 border border-secondary/20 transition-all duration-700 group-hover:inset-0" />
                <div className="overflow-hidden shadow-2xl">
                  <motion.img
                    src={agosto.image}
                    alt={agosto.imageAlt}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover"
                    {...imageHover}
                  />
                </div>
              </motion.div>
              <motion.div
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.15 }}
                className="md:col-span-5 md:pl-8 lg:pl-12"
              >
                <span className="text-secondary font-display italic text-4xl md:text-5xl block mb-4">
                  {agosto.month}
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-primary font-semibold mb-5">
                  {agosto.title}
                </h2>
                <p className="font-body text-primary/70 leading-relaxed mb-6">
                  {agosto.description}
                </p>
                {agosto.detail && (
                  <p className="font-body text-secondary text-sm tracking-[0.15em] uppercase mb-8">
                    {agosto.detail}
                  </p>
                )}
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-primary font-body text-xs font-bold tracking-[0.2em] uppercase border-b-2 border-secondary rounded-none pb-1 hover:text-secondary hover:no-underline"
                >
                  <Link to={agosto.ctaUrl}>
                    {agosto.ctaLabel} <ArrowRight size={14} className="ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </section>

            {/* Setembro: text left, image right */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <motion.div
                {...fadeIn}
                className="md:col-span-5 md:order-1 md:pr-8 lg:pr-12 text-left md:text-right"
              >
                <span className="text-secondary font-display italic text-4xl md:text-5xl block mb-4">
                  {setembro.month}
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-primary font-semibold mb-5">
                  {setembro.title}
                </h2>
                <p className="font-body text-primary/70 leading-relaxed mb-6">
                  {setembro.description}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-primary font-body text-xs font-bold tracking-[0.2em] uppercase border-b-2 border-secondary rounded-none pb-1 hover:text-secondary hover:no-underline"
                >
                  <Link to={setembro.ctaUrl}>
                    {setembro.ctaLabel} <ArrowRight size={14} className="ml-2" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.15 }}
                className="md:col-span-7 md:order-2 relative group"
              >
                <div className="absolute -inset-3 md:-inset-4 border border-secondary/20 transition-all duration-700 group-hover:inset-0" />
                <div className="overflow-hidden shadow-2xl">
                  <motion.img
                    src={setembro.image}
                    alt={setembro.imageAlt}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover"
                    {...imageHover}
                  />
                </div>
              </motion.div>
            </section>
          </div>

          {/* Outubro — Featured Full-Width */}
          <motion.section
            {...fadeIn}
            className="bg-primary text-primary-foreground p-8 md:p-16 lg:p-24 mb-24 md:mb-40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 border-t border-r border-secondary/20 translate-x-12 -translate-y-12" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="text-secondary font-body text-xs tracking-[0.3em] uppercase mb-4 block">
                  Temporada Especial
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-6 leading-tight">
                  {outubro.title}
                </h2>
                <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 font-body">
                  {outubro.description}
                </p>
                <div className="flex items-center gap-6">
                  <div className="h-px w-12 bg-secondary" />
                  <span className="font-body text-sm tracking-[0.2em] uppercase italic">
                    {outubro.detail}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden border border-primary-foreground/10">
                <img
                  src={outubro.image}
                  alt={outubro.imageAlt}
                  loading="lazy"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </motion.section>

          {/* Novembro a Fevereiro — Staggered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-16 md:gap-y-32">
            {gridFestivals.map((festival, index) => (
              <motion.article
                key={festival.id}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                className={`group ${index % 2 === 1 ? "md:mt-20" : ""}`}
              >
                <div className="overflow-hidden shadow-lg mb-6">
                  <motion.img
                    src={festival.image}
                    alt={festival.imageAlt}
                    loading="lazy"
                    className="w-full aspect-square object-cover grayscale-[0.1] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="text-secondary font-display italic text-2xl block mb-2">
                  {festival.month}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-primary font-semibold mb-4">
                  {festival.title}
                </h3>
                <p className="font-body text-primary/60 text-sm leading-relaxed mb-6">
                  {festival.description}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-primary font-body text-xs font-bold tracking-[0.2em] uppercase border-b border-secondary rounded-none pb-1 hover:text-secondary hover:no-underline"
                >
                  <Link to={festival.ctaUrl}>
                    {festival.ctaLabel} <ArrowRight size={14} className="ml-2" />
                  </Link>
                </Button>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              {...fadeIn}
              className="w-16 h-px bg-secondary mx-auto mb-8"
            />
            <motion.h2
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="font-display text-3xl md:text-5xl font-semibold mb-6 leading-tight"
            >
              Escolha o seu festival na serra
            </motion.h2>
            <motion.p
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="font-body text-primary-foreground/70 text-base md:text-lg mb-8 leading-relaxed"
            >
              Cada estação tem uma experiência exclusiva esperando por você. Reserve agora e viva o Minha Glória no momento certo.
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm"
              >
                <a href={heroCta} target="_blank" rel="noopener noreferrer">
                  <CalendarDays size={16} className="mr-2" />
                  Reservar agora
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-body uppercase tracking-[0.15em] text-sm"
              >
                <Link to="/ofertas">Ver ofertas</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FestivaisPage;

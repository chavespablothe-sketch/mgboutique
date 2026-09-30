import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import CouponBanner from "@/components/CouponBanner";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Heart, Music, Tractor, Trees, Wand2 } from "lucide-react";
import { buildOmnibeesUrl } from "@/lib/omnibees";
import { feriasJulhoImages, pacoteImages } from "@/lib/siteImages";
import packages from "@/data/packages";
import { isPackageActive } from "@/lib/packageStatus";

const pacotesOutubro = [
  packages.find((p) => p.slug === "dia-das-criancas-2026"),
  packages.find((p) => p.slug === "finados-2026"),
].filter(Boolean) as NonNullable<(typeof packages)[number]>[];

const experiencias = [
  { icon: Wand2, titulo: "Fazenda Encantada", texto: "O mês inteiro com a fazenda transformada em um cenário de sonhos e descobertas, pensado para encantar crianças e adultos." },
  { icon: Tractor, titulo: "Fazendinha & Colheita", texto: "Contato com os animais, colheita na horta e experiências inesquecíveis da vida no campo para toda a família." },
  { icon: Music, titulo: "Música ao vivo aos sábados", texto: "Noites acolhedoras embaladas por música ao vivo, no melhor clima de festa de família." },
  { icon: Trees, titulo: "Lazer em meio à natureza", texto: "Piscina climatizada, cantos de descanso e 165 mil m² de natureza preservada na serra fluminense." },
  { icon: Sparkles, titulo: "Recreação especial", texto: "Oficinas criativas, contação de histórias e brincadeiras monitoradas para os pequenos se divertirem sem parar." },
  { icon: Heart, titulo: "Refúgio para casais", texto: "Apenas 20 chalés reservados, chá da tarde, ofurô e o silêncio raro da serra fluminense." },
];

const fazendaEncantada = [
  "Contação de histórias interativa para toda a família",
  "Caça ao tesouro temática pelos cantos da fazenda",
  "Oficinas de arte e criatividade com monitores dedicados",
  "Fazendinha: carinho com os animais e momentos lúdicos",
  "Recreação especial de Dia das Crianças com surpresas",
  "Sessões de cinema infantil com pipoca do forno",
];

const destaquesOutubro = [
  {
    src: pacoteImages.criancas2026,
    alt: "Família com crianças aproveitando o feriado de Dia das Crianças no hotel",
    titulo: "O mês das crianças na fazenda",
    texto: "Pacote especial de Dia das Crianças de 9 a 12 de outubro, com celebração dedicada, kit diversão, mimo no quarto e recreação especial diária.",
  },
  {
    src: feriasJulhoImages.recreacao,
    alt: "Recreação monitorada para crianças na fazendinha do hotel",
    titulo: "Fazenda Encantada para os pequenos",
    texto: "Contação de histórias, caça ao tesouro, oficinas criativas e cinema infantil — uma programação pensada para surpreender os pequenos.",
  },
  {
    src: feriasJulhoImages.bolhas,
    alt: "Piscina climatizada com bolhas na área de lazer do hotel",
    titulo: "Lazer completo para toda a família",
    texto: "Piscina climatizada, contato com os animais e 165 mil m² de natureza preservada para desacelerar em família.",
  },
  {
    src: pacoteImages.finados2026,
    alt: "Casal aproveitando momento de descanso no chalé do hotel",
    titulo: "Feriadão de Finados para desacelerar",
    texto: "De 30 de outubro a 2 de novembro, um feriado de bem-estar, silêncio e experiências sensoriais para restaurar corpo e mente.",
  },
];

const OutubroPage = () => {
  const heroCta = buildOmnibeesUrl({ checkIn: "09102026", checkOut: "12102026" });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Outubro Encantado | Fazenda Encantada e Dia das Crianças no Minha Glória"
        description="Outubro é o mês das crianças na fazenda: Pacote especial de Dia das Crianças de 9 a 12 de outubro e o Feriadão de Finados de 30 de outubro a 2 de novembro, com pensão completa, Fazenda Encantada e recreação especial."
        canonical="/outubro"
        schemas={[breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Outubro", url: "/outubro" }])]}
      />
      <Header />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={pacoteImages.criancas2026}
          alt="Família com crianças aproveitando outubro no Minha Glória Hotel Boutique"
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
              <Calendar size={13} /> Outubro de 2026
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[1.05] mb-6">
              Outubro <span className="text-secondary italic">encantado</span>
            </h1>
            <p className="font-body text-primary-foreground/85 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              O mês das crianças na fazenda: <span className="text-secondary">Fazenda Encantada</span>, Pacote Especial de Dia das Crianças de 9 a 12 de outubro e o Feriadão de Finados de 30 de outubro a 2 de novembro — tudo com pensão completa e a natureza da serra fluminense.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm">
                <a href={heroCta} target="_blank" rel="noopener noreferrer">Reservar agora <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-body uppercase tracking-[0.15em] text-sm">
                <a href="#fazenda-encantada">Fazenda Encantada</a>
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

      {/* FAZENDA ENCANTADA */}
      <section id="fazenda-encantada" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Wand2 className="text-secondary mb-5" size={34} />
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Festival do mês</span>
              <h2 className="font-display text-3xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
                Fazenda Encantada
              </h2>
              <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
                Outubro transforma a nossa propriedade em um cenário de sonhos e descobertas. Uma imersão na vida do campo com o requinte de um hotel boutique — pensada para encantar crianças e emocionar adultos.
              </p>
              <ul className="space-y-3 mb-8">
                {fazendaEncantada.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-primary-foreground/75 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm">
                <a href={heroCta} target="_blank" rel="noopener noreferrer">Garantir minha reserva <ArrowRight size={16} className="ml-2" /></a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {[
                { src: feriasJulhoImages.recreacao, alt: "Recreação monitorada para crianças na fazendinha" },
                { src: "/images/tucano.jpg", alt: "Tucano na área verde da fazenda" },
                { src: "/images/lazer-lhamas.jpg", alt: "Lhamas na fazendinha do hotel" },
                { src: feriasJulhoImages.pintura, alt: "Oficina de pintura para crianças" },
              ].map((img) => (
                <div key={img.alt} className="relative overflow-hidden rounded-lg aspect-square group">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUTUBRO ENCANTADO — DESTAQUES COM FOTOS */}
      <section id="outubro-encantado" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Outubro encantado</span>
            <h2 className="font-display text-3xl md:text-5xl text-primary font-semibold leading-tight">Um mês para encantar</h2>
            <p className="font-body text-primary/70 mt-4">
              Do Dia das Crianças ao Feriadão de Finados, reunimos o melhor do lazer, da gastronomia e do clima acolhedor da fazenda — para que cada estadia seja uma memória para a vida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {destaquesOutubro.map((d, i) => (
              <motion.article
                key={d.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-lg overflow-hidden border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={d.src} alt={d.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl md:text-2xl text-primary mb-2 leading-tight">{d.titulo}</h3>
                  <p className="font-body text-primary/70 text-sm leading-relaxed">{d.texto}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm">
              <a href={heroCta} target="_blank" rel="noopener noreferrer">Reservar minha estadia <ArrowRight size={16} className="ml-2" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* PACOTES */}
      <section id="pacotes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Escolha o seu</span>
            <h2 className="font-display text-3xl md:text-5xl text-primary font-semibold leading-tight">Pacotes de outubro</h2>
            <p className="font-body text-primary/70 mt-4">Do Dia das Crianças ao Feriadão de Finados — convites diferentes para o mesmo desejo: celebrar, descansar e voltar leve.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pacotesOutubro.filter((p) => isPackageActive(p)).map((pkg, i) => {
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
                      {pkg.slug === "dia-das-criancas-2026" && (
                        <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-primary font-body text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full mb-3">
                          <Sparkles size={11} /> Dia das Crianças
                        </span>
                      )}
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
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section className="py-20 bg-[#f6f1e6]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Experiências</span>
            <h2 className="font-display text-3xl md:text-5xl text-primary font-semibold leading-tight">Muito mais que hospedagem</h2>
            <p className="font-body text-primary/70 mt-4">Música ao vivo, fazendinha, animais e piscina climatizada — outubro convida a viver a serra em família.</p>
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
              <Sparkles className="text-secondary mx-auto mb-5" size={36} />
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Gastronomia</span>
              <h2 className="font-display text-3xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
                Pensão completa, do café à sobremesa
              </h2>
              <p className="font-body text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-4">
                Café da manhã farto com pães e bolos saídos do forno, almoço com receitas regionais, chá da tarde e jantar. Nos fins de semana, o buffet especial de comidas caseiras toma conta da mesa.
              </p>
              <p className="font-body text-primary-foreground/70 text-base leading-relaxed mb-8">
                Em outubro, os menus ganham um toque encantado para as crianças — com surpresas doces e opções pensadas para os pequenos ao longo de toda a estadia.
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
            Seu Outubro Encantado começa aqui
          </h2>
          <p className="font-body text-primary/70 mb-8">Consulte disponibilidade em tempo real e garanta sua reserva pelo nosso motor oficial.</p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm">
            <a href={buildOmnibeesUrl({ checkIn: "09102026", checkOut: "12102026" })} target="_blank" rel="noopener noreferrer">Reservar agora <ArrowRight size={16} className="ml-2" /></a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutubroPage;

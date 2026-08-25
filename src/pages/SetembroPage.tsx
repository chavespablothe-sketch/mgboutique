import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import CouponBanner from "@/components/CouponBanner";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, UtensilsCrossed, Leaf, Heart, Flame, Music, Tractor, Trees } from "lucide-react";
import { buildOmnibeesUrl } from "@/lib/omnibees";
import { feriasJulhoImages, pacoteImages, agostoImages, setembroImages } from "@/lib/siteImages";
import packages from "@/data/packages";
import { isPackageActive } from "@/lib/packageStatus";

const pacotesSetembro = [
  packages.find((p) => p.slug === "sete-de-setembro-2026"),
  packages.find((p) => p.slug === "fim-de-semana"),
].filter(Boolean) as NonNullable<(typeof packages)[number]>[];

const experiencias = [
  { icon: Music, titulo: "Música ao vivo aos sábados", texto: "O melhor da música sertaneja embalando a noite da fazenda, com o cheiro de brasa no ar." },
  { icon: Tractor, titulo: "Colheita & Fazendinha", texto: "Colheita na horta, contato com os animais e experiências inesquecíveis para crianças e adultos." },
  { icon: Trees, titulo: "Lazer em meio à natureza", texto: "Piscinas (a principal climatizada), trilhas, cantos de descanso e 165 mil m² de natureza preservada." },
  { icon: Leaf, titulo: "Passeios pela propriedade", texto: "Charrete, quadriciclo e jeep — atividades opcionais contratadas à parte para explorar a paisagem." },
  { icon: Sparkles, titulo: "Momentos em família", texto: "Recreação monitorada, oficinas criativas e brincadeiras ao ar livre para os pequenos." },
  { icon: Heart, titulo: "Refúgio para casais", texto: "Apenas 20 chalés reservados, chá da tarde, ofurô e o silêncio raro da serra fluminense." },
];

const fogoDeChao = [
  "Feijoada Mega Especial aos sábados, completa e com todos os acompanhamentos",
  "Costela das 12 Horas aos domingos, assada lentamente no fogo de chão",
  "Costelinha suína na brasa e linguiças artesanais assadas devagar",
  "Legumes na brasa: batatas, milho, cebolas e o clássico arroz carreteiro",
  "Buffet especial de comidas caseiras nos fins de semana",
  "Pastel quentinho com caldo de cana, no melhor estilo rural",
];

const destaquesGastronomia = [
  {
    src: setembroImages.culinariaFazenda,
    alt: "Buffet de culinária de fazenda com acompanhamentos servidos em travessas",
    titulo: "O melhor da culinária de fazenda na mesa",
    texto: "Costela das 12 Horas aos domingos e Feijoada Mega Especial aos sábados — as duas grandes estrelas do fim de semana.",
  },
  {
    src: setembroImages.tradicaoSabor,
    alt: "Buffet com pratos caseiros quentes servidos no restaurante do hotel fazenda",
    titulo: "Tradição e sabor em cada detalhe",
    texto: "Costelinha suína e linguiças artesanais na brasa, legumes assados lentamente, arroz carreteiro e pastel com caldo de cana.",
  },
  {
    src: setembroImages.pavaoNatureza,
    alt: "Pavão na área verde do Hotel Fazenda Minha Glória",
    titulo: "Muito mais que boa comida",
    texto: "Música ao vivo aos sábados, contato direto com os animais, passeios opcionais e trilhas em 165 mil m² preservados.",
  },
  {
    src: setembroImages.refugioFamilia,
    alt: "Cavalo pastando no gramado com a Pedra Riscada ao fundo",
    titulo: "O refúgio perfeito para toda a família",
    texto: "Recreação monitorada diária, apenas 20 chalés exclusivos e 1 criança até 6 anos cortesia nos fins de semana.",
  },
];


const SetembroPage = () => {
  const heroCta = buildOmnibeesUrl({ checkIn: "04092026", checkOut: "07092026" });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Setembro no Minha Glória | Feriadão da Independência & Fogo de Chão"
        description="Feriadão de 7 de Setembro com pensão completa, Festival Fogo de Chão e experiências para casais e famílias na serra fluminense. Reserve pelo motor oficial."
        canonical="/setembro"
        schemas={[breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Setembro", url: "/setembro" }])]}
      />
      <Header />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img
          src={pacoteImages.fimDeSemana}
          alt="Chalé e serra no feriado de 7 de Setembro do Minha Glória Hotel Boutique"
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
              <Calendar size={13} /> Setembro de 2026
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[1.05] mb-6">
              O feriadão que pede <span className="text-secondary italic">serra e lareira</span>
            </h1>
            <p className="font-body text-primary-foreground/85 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              De 4 a 7 de setembro, três noites de pensão completa, ar puro e tempo lento. E, ao longo do mês, o <span className="text-secondary">Festival Fogo de Chão</span> perfuma a propriedade com brasa, lenha e cortes nobres.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm">
                <a href={heroCta} target="_blank" rel="noopener noreferrer">Reservar agora <ArrowRight size={16} className="ml-2" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-body uppercase tracking-[0.15em] text-sm">
                <a href="#fogo-de-chao">Festival Fogo de Chão</a>
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

      {/* FESTIVAL FOGO DE CHÃO */}
      <section id="fogo-de-chao" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Flame className="text-secondary mb-5" size={34} />
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Festival do mês</span>
              <h2 className="font-display text-3xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
                Festival Fogo de Chão
              </h2>
              <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
                A tradição brasileira em sua versão boutique: fogo baixo, paciência e ingredientes escolhidos a dedo. Um jantar que acontece devagar, ao ar livre, com o cheiro de lenha e a serra ao fundo.
              </p>
              <ul className="space-y-3 mb-8">
                {fogoDeChao.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-primary-foreground/75 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm">
                <a href={heroCta} target="_blank" rel="noopener noreferrer">Garantir minha mesa <ArrowRight size={16} className="ml-2" /></a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {[
                { src: feriasJulhoImages.cozinha, alt: "Preparo na brasa pela nossa cozinha" },
                { src: agostoImages.fondueCarne, alt: "Cortes nobres selecionados" },
                { src: pacoteImages.finados2026, alt: "Mesa posta para o jantar" },
                { src: pacoteImages.setembro2026, alt: "Feriadão em família no hotel" },
              ].map((img) => (
                <div key={img.alt} className="relative overflow-hidden rounded-lg aspect-square group">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PACOTES */}
      <section id="pacotes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">Escolha o seu</span>
            <h2 className="font-display text-3xl md:text-5xl text-primary font-semibold leading-tight">Pacotes de setembro</h2>
            <p className="font-body text-primary/70 mt-4">Do feriadão da Independência aos fins de semana com pensão completa — convites diferentes para o mesmo desejo: pausar, respirar e voltar leve.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pacotesSetembro.filter((p) => isPackageActive(p)).map((pkg, i) => {
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
                      {pkg.slug === "sete-de-setembro-2026" && (
                        <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-primary font-body text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full mb-3">
                          <Flame size={11} /> Festival Fogo de Chão
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
            <h2 className="font-display text-3xl md:text-5xl text-primary font-semibold leading-tight">Um setembro para viver devagar</h2>
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
                Pensão completa no feriadão
              </h2>
              <p className="font-body text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-4">
                Café da manhã farto com pães e bolos saídos do forno. Almoço com receitas regionais e ingredientes frescos da serra. Chá da tarde e jantar à luz de velas.
              </p>
              <p className="font-body text-primary-foreground/70 text-base leading-relaxed mb-8">
                Em setembro, o fogo de chão assume o protagonismo — brasa lenta, cortes nobres e acompanhamentos da roça.
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
            Seu feriadão começa aqui
          </h2>
          <p className="font-body text-primary/70 mb-8">Consulte disponibilidade em tempo real e garanta sua reserva pelo nosso motor oficial.</p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm">
            <a href={buildOmnibeesUrl({ checkIn: "04092026", checkOut: "07092026" })} target="_blank" rel="noopener noreferrer">Reservar agora <ArrowRight size={16} className="ml-2" /></a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SetembroPage;

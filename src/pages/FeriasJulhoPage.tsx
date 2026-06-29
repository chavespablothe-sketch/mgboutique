import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import CouponBanner from "@/components/CouponBanner";
import Lightbox from "@/components/Lightbox";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Sparkles, ArrowRight, Sun, ZoomIn } from "lucide-react";
import { OMNIBEES_URL } from "@/lib/omnibees";
import { feriasJulhoImages as IMG } from "@/lib/siteImages";

const galeria = [
  { src: IMG.bolhas, alt: "Crianças brincando com bolhas de sabão no jardim" },
  { src: IMG.recreacao, alt: "Recreação ao ar livre com os monitores" },
  { src: IMG.cozinha, alt: "Oficina de confeitaria com chapéu de chef" },
  { src: IMG.piscina, alt: "Crianças se divertindo na piscina" },
  { src: IMG.pintura, alt: "Ateliê de pintura e desenho no gramado" },
  { src: IMG.cisne, alt: "Encontro com o cisne negro no lago" },
  { src: IMG.presente, alt: "Momento especial com a equipe de recreação" },
];

type Dia = {
  nome: string;
  resumo: string;
  blocos: { hora: string; titulo: string; detalhes?: string[] }[];
};

const programacao: Dia[] = [
  {
    nome: "Segunda-feira",
    resumo: "Boas-vindas, fazendinha e primeiros encantos.",
    blocos: [
      { hora: "09h30 — 10h30", titulo: "Tour pelo Hotel" },
      { hora: "11h — 12h", titulo: "Passeio ao Balanço / Mirante", detalhes: ["Contemplação da paisagem", "Fotos divertidas em família"] },
      { hora: "14h — 15h30", titulo: "Visita à Fazendinha", detalhes: ["Alimentação dos animais"] },
      { hora: "16h — 17h", titulo: "Recreação no Campo e Espaço Kids", detalhes: ["Futebol infantil", "Brincadeiras com bola", "Pega-pega e circuito recreativo"] },
    ],
  },
  {
    nome: "Terça-feira",
    resumo: "Cores, gincanas e a Eguinha Safira.",
    blocos: [
      { hora: "09h30 — 10h30", titulo: "Passeio com a Eguinha Safira", detalhes: ["Interação e fotos"] },
      { hora: "11h — 12h", titulo: "Oficina de Pintura", detalhes: ["Pintura com guache", "Pintura facial temática"] },
      { hora: "14h — 15h30", titulo: "Gincana Infantil", detalhes: ["Corrida de saco", "Corrida do ovo na colher"] },
      { hora: "16h — 17h", titulo: "Brincadeiras no Espaço Kids", detalhes: ["Dança das cadeiras", "Jogos recreativos", "Atividades livres"] },
    ],
  },
  {
    nome: "Quarta-feira",
    resumo: "Natureza, criatividade e muita arte.",
    blocos: [
      { hora: "09h30 — 10h30", titulo: "Oficina Criativa da Natureza", detalhes: ["Coleta de folhas e flores pelo hotel", "Colagem e montagem de painéis"] },
      { hora: "11h — 12h", titulo: "Pintura com Guache", detalhes: ["Desenhos temáticos da fazenda", "Pintura facial"] },
      { hora: "14h — 15h30", titulo: "Oficina de Massinha", detalhes: ["Modelagem de animais", "Criações livres"] },
      { hora: "16h — 17h", titulo: "Recreação no Campo", detalhes: ["Cabo de guerra", "Corrida de saco", "Brincadeiras com bola"] },
    ],
  },
  {
    nome: "Quinta-feira",
    resumo: "Mãos na terra e brincadeiras rurais.",
    blocos: [
      { hora: "09h30 — 10h30", titulo: "Plantação na Horta", detalhes: ["Plantio de mudinhas"] },
      { hora: "11h — 12h", titulo: "Passeio ao Balanço / Mirante", detalhes: ["Observação da natureza", "Fotos e diversão"] },
      { hora: "14h — 15h30", titulo: "Alimentação dos Animais", detalhes: ["Visita à fazendinha", "Interação com os animais"] },
      { hora: "16h — 17h", titulo: "Gincana Rural", detalhes: ["Cabo de guerra", "Corrida de saco", "Corrida do bambolê"] },
    ],
  },
  {
    nome: "Sexta-feira",
    resumo: "Skibunda, futebol e adrenalina boa.",
    blocos: [
      { hora: "09h30 — 10h30", titulo: "Alimentação dos Animais", detalhes: ["Visita guiada à fazendinha"] },
      { hora: "11h — 12h", titulo: "Jogos no Campo", detalhes: ["Futebol infantil", "Circuito com bola", "Mini campeonato"] },
      { hora: "14h — 15h30", titulo: "Skibunda" },
      { hora: "16h — 17h", titulo: "Recreação Livre", detalhes: ["Queimada adaptada", "Dança das cadeiras", "Brincadeiras no campo"] },
    ],
  },
  {
    nome: "Sábado",
    resumo: "Dia cheio com Gincana Junina à noite.",
    blocos: [
      { hora: "09h30 — 10h30", titulo: "Passeio com a Eguinha Safira", detalhes: ["Interação e fotos"] },
      { hora: "11h — 12h", titulo: "Plantação na Horta", detalhes: ["Plantio de mudinhas", "Educação ambiental"] },
      { hora: "13h — 14h30", titulo: "Alimentação dos Animais", detalhes: ["Visita à fazendinha"] },
      { hora: "15h — 15h30", titulo: "Skibunda" },
      { hora: "17h — 18h30", titulo: "Grande Gincana Junina", detalhes: ["Corrida de saco", "Cabo de guerra", "Corrida do ovo"] },
      { hora: "19h — 21h", titulo: "Espaço Junino Infantil", detalhes: ["Pescaria"] },
    ],
  },
  {
    nome: "Domingo",
    resumo: "Despedida com paisagem, jogos e pintura.",
    blocos: [
      { hora: "09h30 — 10h30", titulo: "Passeio ao Balanço / Mirante", detalhes: ["Contemplação da paisagem", "Fotos divertidas em família"] },
      { hora: "11h — 12h", titulo: "Skibunda" },
      { hora: "14h — 15h30", titulo: "Jogos no Campo", detalhes: ["Futebol infantil", "Brincadeiras com bola", "Corridas recreativas"] },
      { hora: "16h — 17h", titulo: "Encerramento no Espaço Kids", detalhes: ["Pintura facial", "Desenhos para colorir", "Brincadeiras livres"] },
    ],
  },
];

const diasArte = [
  { nome: "Segunda", img: IMG.segunda, frase: "Pé na grama e bolhas no ar pra começar bem." },
  { nome: "Terça",   img: IMG.terca,   frase: "Tobogã, gincanas e muita risada solta." },
  { nome: "Quarta",  img: IMG.quarta,  frase: "Folhas, tintas e cabeça cheia de ideia." },
  { nome: "Quinta",  img: IMG.quinta,  frase: "Mão na terra e oi pro cisne negro." },
  { nome: "Sexta",   img: IMG.sexta,   frase: "Skibunda gelado e futebol até cansar." },
  { nome: "Sábado",  img: IMG.sabado,  frase: "Chapéu de chef de dia, arraiá à noite." },
  { nome: "Domingo", img: IMG.domingo, frase: "Mirante, pintura facial e abraço de tchau." },
];

const FeriasJulhoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const CTA = ({ size = "lg" as "lg" | "default" }) => (
    <Button
      asChild
      size={size}
      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] gap-3 text-sm shadow-lg"
    >
      <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
        Reservar agora <ArrowRight size={16} />
      </a>
    </Button>
  );

  return (
    <div className="min-h-screen">
      <SEO
        title="Férias de Julho 2026 | Minha Glória Hotel Boutique"
        description="Programação recreativa infantil completa nas férias de julho em Bom Jardim, RJ. Fazendinha, oficinas, gincanas, skibunda e muito mais para as crianças amarem."
        canonical="/ferias-de-julho"
        ogImage={IMG.feriasCover}
        schemas={[breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Férias de Julho", url: "/ferias-de-julho" },
        ])]}
      />
      <Header />

      {/* HERO — colorido, com foto + arte oficial */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-primary">
        {/* Foto de fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.heroFerias})` }}
          aria-hidden
        />
        {/* Camadas coloridas vivas, respeitando verde + dourado */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--primary) / 0.92) 0%, hsl(var(--primary) / 0.78) 40%, hsl(var(--primary) / 0.55) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-70 mix-blend-soft-light"
          style={{
            background:
              "radial-gradient(circle at 12% 20%, hsl(var(--secondary) / 0.55), transparent 45%), radial-gradient(circle at 88% 80%, hsl(var(--secondary) / 0.35), transparent 55%)",
          }}
          aria-hidden
        />
        {/* confetes decorativos */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-24 left-8 w-3 h-3 rounded-full bg-secondary/80 animate-pulse" />
          <div className="absolute top-40 right-16 w-2 h-2 rounded-full bg-primary-foreground/70" />
          <div className="absolute bottom-32 left-1/4 w-4 h-4 rounded-full bg-secondary/60" />
          <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 rounded-full bg-primary-foreground/60 animate-pulse" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 text-secondary font-body text-xs tracking-[0.4em] uppercase mb-5">
                <Sun size={14} /> 13 de Julho a 01 de Agosto · 2026
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-[1.05] mb-6">
                Um julho inteiro para as <span className="italic text-secondary">crianças amarem</span> — e os pais respirarem.
              </h1>
              <p className="text-primary-foreground/85 font-body text-base md:text-lg leading-relaxed mb-8">
                Manhãs na fazendinha, tardes de oficina, gincanas no campo, skibunda, pintura, plantio na horta
                e encontros com a Eguinha Safira. Toda a sofisticação Minha Glória, com o coração mais
                colorido do ano.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <CTA />
                <a href="#programacao" className="text-primary-foreground/80 hover:text-secondary font-body text-xs tracking-[0.3em] uppercase transition-colors">
                  Ver programação completa ↓
                </a>
              </div>
            </motion.div>

            {/* Arte oficial Férias de Julho */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="absolute -inset-3 rounded-3xl bg-secondary/40 blur-2xl" aria-hidden />
              <img
                src={IMG.feriasCover}
                alt="Arte oficial Férias de Julho 2026 no Minha Glória Hotel Boutique"
                className="relative rounded-2xl shadow-2xl ring-1 ring-secondary/40 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CUPOM BIEL — destaque */}
      <section className="py-10 lg:py-14 bg-hotel-cream">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <CouponBanner />
        </div>
      </section>

      {/* ENCANTAMENTO */}
      <section className="py-16 lg:py-20 bg-hotel-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-5">
              <img
                src={IMG.introSemana}
                alt="De segunda a domingo — programação variada"
                className="rounded-2xl shadow-xl ring-1 ring-secondary/30 w-full"
              />
            </div>
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-4 block">De segunda a domingo</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-5 leading-[1.15]">
                Sete dias diferentes. Uma única certeza: as crianças não vão querer ir embora.
              </h2>
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                Cada dia da semana tem a sua própria pauta — da plantação na horta à grande gincana junina,
                do passeio com a Eguinha Safira ao skibunda na descida do gramado. Tudo conduzido pela nossa
                equipe de recreação, em meio à montanha e à Mata Atlântica de Bom Jardim.
              </p>
            </div>
          </div>

          {/* Galeria destaques */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
            {galeria.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-xl bg-muted ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTES DIÁRIAS */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-4 block">Programação visual</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold leading-[1.15]">
              Um dia. Um clima. Uma aventura nova.
            </h2>
            <p className="text-muted-foreground font-body text-sm md:text-base mt-3">
              Passa o olho e já dá pra sentir o ritmo da semana — clica nas artes pra ver tudo detalhado lá embaixo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 max-w-6xl mx-auto">
            {diasArte.map((d, i) => (
              <motion.a
                key={d.nome}
                href="#programacao"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-secondary/30 shadow-md hover:shadow-xl transition-all"
              >
                <img src={d.img} alt={`${d.nome} — programação`} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-3 text-primary-foreground">
                  <p className="font-display text-base md:text-lg font-semibold leading-tight">{d.nome}</p>
                  <p className="text-[11px] md:text-xs font-body text-primary-foreground/85 leading-snug mt-1">{d.frase}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMAÇÃO COMPLETA */}
      <section id="programacao" className="py-20 lg:py-28 bg-hotel-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-4 block">Dia a dia</span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground font-semibold leading-[1.1] mb-4">
              Programação recreativa infantil
            </h2>
            <p className="text-muted-foreground font-body text-base">
              Sete dias de programação completa, das 9h30 às 21h, conduzidos pela equipe Minha Glória.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {programacao.map((dia, i) => (
              <motion.article
                key={dia.nome}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm"
              >
                <header className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-6 pb-5 border-b border-border">
                  <Calendar size={18} className="text-secondary" />
                  <h3 className="font-display text-2xl md:text-3xl text-foreground font-semibold">{dia.nome}</h3>
                  <p className="text-muted-foreground font-body text-sm italic">{dia.resumo}</p>
                </header>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                  {dia.blocos.map((b, j) => (
                    <div key={j} className="flex gap-4">
                      <div className="shrink-0 w-1 self-stretch rounded-full bg-secondary/60" aria-hidden />
                      <div>
                        <p className="text-[11px] font-body uppercase tracking-[0.2em] text-secondary font-semibold mb-1">{b.hora}</p>
                        <p className="font-display text-base text-foreground font-semibold mb-1.5">{b.titulo}</p>
                        {b.detalhes && (
                          <ul className="space-y-1">
                            {b.detalhes.map((d, k) => (
                              <li key={k} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                                <span className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <CTA />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.recreacao})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" aria-hidden />
        <div className="relative container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <Sparkles className="text-secondary mx-auto mb-5" size={32} />
          <h2 className="font-display text-3xl md:text-5xl text-primary-foreground font-semibold leading-[1.1] mb-5">
            Garanta as férias mais memoráveis do ano
          </h2>
          <p className="text-primary-foreground/75 font-body text-base md:text-lg leading-relaxed mb-9">
            Datas e quartos são limitados. Reserve direto pelo nosso motor oficial e assegure o chalé ideal para a sua família.
          </p>
          <CTA />
          <div className="mt-6">
            <Link to="/ofertas" className="text-primary-foreground/60 hover:text-secondary font-body text-xs tracking-[0.3em] uppercase transition-colors">
              Ver outros pacotes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeriasJulhoPage;

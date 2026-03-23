import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { faqSchema, breadcrumbSchema } from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import DateSearchBar from "@/components/DateSearchBar";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Navigation, Baby, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { cat: "Reservas", q: "Como faço para reservar?", a: "Você pode reservar diretamente pelo nosso site através do motor de reservas Omnibees, ou entrar em contato pelo WhatsApp." },
  { cat: "Reservas", q: "Qual a política de cancelamento?", a: "Cancelamento gratuito até 7 dias antes do check-in. Após esse prazo, pode haver cobrança de uma diária." },
  { cat: "Reservas", q: "Quais as formas de pagamento?", a: "Aceitamos cartões de crédito (parcele em até 10x sem juros), PIX e transferência bancária." },
  { cat: "Reservas", q: "É necessário pagar depósito caução?", a: "Não cobramos caução. Apenas o pagamento da reserva conforme as condições escolhidas." },
  { cat: "Hospedagem", q: "Qual o horário de check-in e check-out?", a: "Check-in a partir das 15h e check-out até 12h. Late check-out sob consulta e disponibilidade." },
  { cat: "Hospedagem", q: "O que está incluído na diária?", a: "Café da manhã artesanal está sempre incluso. Nos finais de semana e feriados, oferecemos pensão completa (café, almoço e jantar)." },
  { cat: "Hospedagem", q: "Qual o regime de refeições?", a: "Nos pacotes de fim de semana e feriados: pensão completa. Em dias avulsos de semana: café da manhã incluso, almoço e jantar sob consulta." },
  { cat: "Crianças", q: "A partir de que idade a criança paga?", a: "Crianças até 6 anos se hospedam gratuitamente. Acima de 6 anos, é cobrada tarifa de criança." },
  { cat: "Crianças", q: "Tem berço e cadeirão?", a: "Sim! Berço no chalé, cadeirão no restaurante, fraldário e menu kids em todas as refeições." },
  { cat: "Crianças", q: "Existe recreação infantil?", a: "Sim, com equipe dedicada em datas programadas (feriados e pacotes). Gincanas, oficinas e contato com os animais." },
  { cat: "Pets", q: "O hotel aceita animais de estimação?", a: "Sim! Somos pet friendly. Consulte regras de convivência e áreas permitidas." },
  { cat: "Alimentação", q: "Posso levar comida de fora?", a: "Oferecemos pensão completa nos pacotes, mas entendemos necessidades especiais. Consulte nossa equipe para combinar." },
  { cat: "Acesso", q: "Precisa de carro para chegar?", a: "Recomendamos carro próprio. A estrada é pavimentada e carros comuns acessam normalmente." },
  { cat: "Acesso", q: "Tem cobertura de celular?", a: "Cobertura limitada — Claro e Vivo funcionam melhor. Wi-Fi gratuito disponível em todo o hotel." },
  { cat: "Estrutura", q: "A piscina é aquecida?", a: "A piscina é climatizada, mantendo temperatura agradável mesmo nos meses mais frios." },
];

const ContatoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Contato e FAQ | Fale Conosco"
        description="Entre em contato com o Minha Glória Hotel Boutique. WhatsApp, e-mail, telefone e perguntas frequentes sobre reservas, hospedagem, crianças e pets."
        canonical="/contato"
        schemas={[
          faqSchema(faqs.map(f => ({ q: f.q, a: f.a }))),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contato", url: "/contato" }]),
        ]}
      />
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-4 block">Fale Conosco</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-[1.05] mb-6">
                Estamos aqui para <span className="italic text-secondary">você</span>
              </h1>
              <p className="text-primary-foreground/60 font-body text-lg leading-relaxed max-w-xl mx-auto">
                Tire suas dúvidas, planeje sua estadia ou conte-nos o que imagina.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-primary pb-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a href="https://wa.me/5522997792023?text=Olá! Gostaria de informações sobre o Minha Glória." target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-xl p-4 font-body text-sm hover:bg-[#25D366]/90 transition-colors shadow-lg"
              >
                <MessageCircle size={18} /> WhatsApp · Resposta rápida
              </a>
              <a href="tel:+5522997792023" className="flex items-center justify-center gap-3 bg-primary-foreground/10 text-primary-foreground rounded-xl p-4 font-body text-sm hover:bg-primary-foreground/20 transition-colors">
                <Phone size={18} /> (22) 99779-2023
              </a>
              <a href="mailto:contato@minhagloria.com.br" className="flex items-center justify-center gap-3 bg-primary-foreground/10 text-primary-foreground rounded-xl p-4 font-body text-sm hover:bg-primary-foreground/20 transition-colors">
                <Mail size={18} /> contato@minhagloria.com.br
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl text-foreground font-semibold mb-6">
                  Perto o suficiente para <span className="italic text-secondary">escapar</span>
                </h2>
                <div className="space-y-5 mb-8">
                  {[
                    { icon: MapPin, title: "Endereço", desc: "Estrada Rosário km 4,5 — Banquete, Bom Jardim/RJ" },
                    { icon: Clock, title: "Check-in / Check-out", desc: "Check-in: 15h · Check-out: 12h" },
                    { icon: Navigation, title: "Como chegar", desc: "RJ-116, saída para Banquete. 2h30 do RJ." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-11 h-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="text-secondary" size={18} />
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-semibold text-foreground mb-0.5">{item.title}</h3>
                        <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mb-8">
                  <a href="https://www.instagram.com/minhagloriahotel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-secondary hover:bg-primary/20 transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="https://www.facebook.com/minhagloria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-secondary hover:bg-primary/20 transition-colors">
                    <Facebook size={18} />
                  </a>
                </div>
                <div className="rounded-xl overflow-hidden h-[280px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d-42.43!3d-22.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQm9tIEphcmRpbQ!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Localização"
                  />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="bg-card rounded-xl border border-border p-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Envie uma mensagem</h3>
                  <p className="text-muted-foreground font-body text-sm mb-6">Respondemos em até 24h.</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-3">
                      <Input placeholder="Seu nome" className="font-body" />
                      <Input type="email" placeholder="Seu e-mail" className="font-body" />
                    </div>
                    <Input type="tel" placeholder="Telefone / WhatsApp" className="font-body" />
                    <Input placeholder="Datas de interesse (ex: Páscoa 2026)" className="font-body" />
                    <Textarea placeholder="Conte sobre a viagem dos seus sonhos..." rows={5} className="font-body resize-none" />
                    <Button className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-body uppercase tracking-[0.15em] py-5 text-sm rounded-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-hotel-cream">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-4">
                Perguntas <span className="italic text-secondary">frequentes</span>
              </h2>
              <p className="text-muted-foreground font-body text-base">As dúvidas mais comuns dos nossos hóspedes</p>
            </motion.div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border border-border px-6">
                  <AccordionTrigger className="font-body text-sm text-foreground hover:no-underline py-4">
                    <span className="text-left">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContatoPage;

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DateSearchBar from "@/components/DateSearchBar";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Navigation, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContatoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section
          className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-1.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/80" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-6 block">Fale Conosco</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[0.95] mb-6">
                Estamos aqui para <span className="italic text-secondary">você</span>
              </h1>
              <p className="text-editorial text-primary-foreground/70 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                Tire suas dúvidas, planeje sua estadia ou conte-nos o que imagina
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
        </section>

        {/* Date search bar + Quick Actions */}
        <section className="bg-primary py-8">
          <div className="container mx-auto px-4 max-w-4xl space-y-4">
            <p className="text-primary-foreground/60 font-body text-xs tracking-[0.3em] uppercase text-center">Consulte disponibilidade</p>
            <DateSearchBar />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
              <a href="https://wa.me/5522997792023?text=Olá! Gostaria de informações sobre o Minha Glória." target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-xl p-4 font-body text-sm hover:bg-[#25D366]/90 transition-colors shadow-lg"
              >
                <MessageCircle size={18} /> WhatsApp · Resposta rápida
              </a>
              <a href="tel:+5522997792023"
                className="flex items-center justify-center gap-3 bg-primary-foreground/10 text-primary-foreground rounded-xl p-4 font-body text-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone size={18} /> (22) 99779-2023
              </a>
              <a href="mailto:contato@minhagloria.com.br"
                className="flex items-center justify-center gap-3 bg-primary-foreground/10 text-primary-foreground rounded-xl p-4 font-body text-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail size={18} /> contato@minhagloria.com.br
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-[1.1]">
                  Perto o suficiente para <span className="italic text-secondary">escapar</span>
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                  Localizado a 18km do centro de Nova Friburgo, em Bom Jardim-RJ. 
                  Fácil acesso pela RJ-116, a aproximadamente 2h30 do Rio de Janeiro.
                </p>

                <div className="space-y-6 mb-8">
                  {[
                    { icon: MapPin, title: "Endereço", desc: "Estrada Rosário km 4,5 — Banquete, Bom Jardim/RJ" },
                    { icon: Phone, title: "Telefone / WhatsApp", desc: "(22) 99779-2023" },
                    { icon: Mail, title: "E-mail", desc: "contato@minhagloria.com.br" },
                    { icon: Clock, title: "Check-in / Check-out", desc: "Check-in: 15h · Check-out: 12h" },
                    { icon: Navigation, title: "Como chegar", desc: "RJ-116, saída para Banquete. 2h30 do RJ, 3h de SP." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="text-secondary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-foreground mb-0.5">{item.title}</h3>
                        <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mb-8">
                  <a href="https://www.instagram.com/minhagloria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-secondary hover:bg-primary/20 transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="https://www.facebook.com/minhagloria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-secondary hover:bg-primary/20 transition-colors">
                    <Facebook size={18} />
                  </a>
                </div>

                <div className="bg-hotel-cream rounded-xl p-6 flex items-start gap-4">
                  <Baby size={22} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display text-base font-semibold text-foreground mb-1">Viajando com crianças?</p>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      Crianças até 6 anos não pagam! Berço, cadeirão, menu kids, fraldário e recreação — tudo incluso.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="rounded-xl overflow-hidden h-[300px] mb-8 shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d-42.43!3d-22.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQm9tIEphcmRpbQ!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Localização"
                  />
                </div>

                <div className="bg-card rounded-xl border border-border p-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Envie uma mensagem</h3>
                  <p className="text-muted-foreground font-body text-sm mb-6">Respondemos em até 24h.</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-3">
                      <Input placeholder="Seu nome" className="font-body" />
                      <Input type="email" placeholder="Seu e-mail" className="font-body" />
                    </div>
                    <Input type="tel" placeholder="Telefone / WhatsApp" className="font-body" />
                    <Input placeholder="Assunto (ex: Reserva Páscoa 2026)" className="font-body" />
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
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContatoPage;

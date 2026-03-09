import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
          className="relative h-[65vh] flex items-center justify-center bg-cover bg-center"
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
                Tire suas dúvidas, planeje sua estadia ou simplesmente conte-nos o que imagina. 
                Cada conversa começa com um sonho.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
        </section>

        {/* Quick Actions */}
        <section className="bg-primary py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <a href="https://wa.me/5522997792023?text=Olá! Gostaria de informações sobre o Minha Glória Hotel Boutique." target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-xl p-5 font-body text-base hover:bg-[#25D366]/90 transition-colors shadow-lg"
              >
                <MessageCircle size={22} /> WhatsApp · Resposta rápida
              </a>
              <a href="tel:+5522997792023"
                className="flex items-center justify-center gap-3 bg-primary-foreground/10 text-primary-foreground rounded-xl p-5 font-body text-base hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone size={22} /> (22) 99779-2023
              </a>
              <a href="mailto:contato@minhagloria.com.br"
                className="flex items-center justify-center gap-3 bg-primary-foreground/10 text-primary-foreground rounded-xl p-5 font-body text-base hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail size={22} /> contato@minhagloria.com.br
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Left */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-10 justify-start">
                  <span className="pr-4">Informações</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-[1.1]">
                  Perto o suficiente para <span className="italic text-secondary">escapar</span>
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
                  O Minha Glória Hotel Boutique está localizado a 18km do centro de Nova Friburgo, 
                  no distrito de Banquete, em Bom Jardim-RJ. Fácil acesso pela RJ-116, a aproximadamente 
                  2h30 do Rio de Janeiro e 3h de São Paulo. Um mundo inteiro de natureza, a uma distância 
                  que cabe num fim de semana.
                </p>

                <div className="space-y-8 mb-10">
                  {[
                    { icon: MapPin, title: "Endereço", desc: "Estrada Rosário km 4,5 — Banquete, Bom Jardim/RJ" },
                    { icon: Phone, title: "Telefone / WhatsApp", desc: "(22) 99779-2023" },
                    { icon: Mail, title: "E-mail", desc: "contato@minhagloria.com.br" },
                    { icon: Clock, title: "Check-in / Check-out", desc: "Check-in: 15h · Check-out: 12h" },
                    { icon: Navigation, title: "Como chegar", desc: "RJ-116, saída para Banquete. 2h30 do RJ, 3h de SP." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="text-secondary" size={22} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground font-body text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mb-10">
                  <a href="https://www.instagram.com/minhagloria" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-secondary hover:bg-primary/20 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.facebook.com/minhagloria" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-secondary hover:bg-primary/20 transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>

                <div className="bg-hotel-cream rounded-xl p-8 flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Baby size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground mb-2">Viajando com crianças?</p>
                    <p className="text-muted-foreground font-body text-base leading-relaxed">
                      Crianças até 6 anos não pagam! Temos berço, cadeirão, menu kids, fraldário e 
                      recreação monitorada. Fale conosco e preparamos tudo com carinho especial para os pequenos.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="rounded-xl overflow-hidden h-[350px] mb-10 shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d-42.43!3d-22.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQm9tIEphcmRpbQ!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Localização"
                  />
                </div>

                <div className="bg-card rounded-xl border border-border p-10">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Envie uma mensagem</h3>
                  <p className="text-muted-foreground font-body text-base mb-8">
                    Conte-nos sobre a viagem dos seus sonhos. Respondemos em até 24h.
                  </p>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Seu nome" className="font-body py-5" />
                      <Input type="email" placeholder="Seu e-mail" className="font-body py-5" />
                    </div>
                    <Input type="tel" placeholder="Telefone / WhatsApp" className="font-body py-5" />
                    <Input placeholder="Assunto (ex: Reserva Páscoa 2026)" className="font-body py-5" />
                    <Textarea placeholder="Conte-nos sobre a viagem dos seus sonhos... Quantos adultos? Crianças? Datas desejadas? Alguma celebração especial?" rows={6} className="font-body resize-none" />
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] py-6 text-sm">
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

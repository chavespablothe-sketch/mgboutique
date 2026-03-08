import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Navigation, Baby, CreditCard } from "lucide-react";
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
          className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-1.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/70" />
          <div className="relative z-10 text-center">
            <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Fale Conosco</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold">Contato</h1>
            <p className="text-primary-foreground/70 font-body mt-4 text-lg">Estamos prontos para ajudar você a planejar a estadia perfeita</p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-primary py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <a href="https://wa.me/5522997792023?text=Olá! Gostaria de informações sobre o Minha Glória Hotel Boutique." target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-lg p-4 font-body text-sm hover:bg-[#25D366]/90 transition-colors"
              >
                <MessageCircle size={20} /> WhatsApp · Resposta rápida
              </a>
              <a href="tel:+5522997792023"
                className="flex items-center justify-center gap-3 bg-primary-foreground/10 text-primary-foreground rounded-lg p-4 font-body text-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone size={20} /> Ligar: (22) 99779-2023
              </a>
              <a href="mailto:contato@minhagloria.com.br"
                className="flex items-center justify-center gap-3 bg-primary-foreground/10 text-primary-foreground rounded-lg p-4 font-body text-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail size={20} /> contato@minhagloria.com.br
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Informações</p>
                <h2 className="font-display text-3xl text-foreground font-semibold mb-8">
                  Imerso em meio <span className="italic text-secondary">à natureza</span>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  O Minha Glória Hotel Boutique está localizado a 18km do centro de Nova Friburgo, 
                  no distrito de Banquete, em Bom Jardim-RJ. Fácil acesso pela RJ-116, a aproximadamente 
                  2h30 do Rio de Janeiro e 3h de São Paulo.
                </p>

                <div className="space-y-6 mb-8">
                  {[
                    { icon: MapPin, title: "Endereço", desc: "Estrada Rosário km 4,5 - Banquete - Bom Jardim/RJ" },
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
                        <h3 className="font-display text-base font-semibold text-foreground mb-1">{item.title}</h3>
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
                  <Baby size={24} className="text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-display text-base font-semibold text-foreground mb-1">Viajando com crianças?</p>
                    <p className="text-muted-foreground font-body text-sm">Crianças até 6 anos não pagam! Temos berço, cadeirão, menu kids e recreação monitorada. Fale conosco para preparar tudo com carinho.</p>
                  </div>
                </div>
              </motion.div>

              {/* Right */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="rounded-xl overflow-hidden h-[300px] mb-8 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d-42.43!3d-22.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQm9tIEphcmRpbQ!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Localização"
                  />
                </div>

                <div className="bg-card rounded-xl border border-border p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">Envie uma mensagem</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Seu nome" className="font-body" />
                      <Input type="email" placeholder="Seu e-mail" className="font-body" />
                    </div>
                    <Input type="tel" placeholder="Telefone / WhatsApp" className="font-body" />
                    <Input placeholder="Assunto (ex: Reserva Páscoa 2026)" className="font-body" />
                    <Textarea placeholder="Conte-nos sobre a viagem dos seus sonhos... Quantos adultos? Crianças? Datas?" rows={5} className="font-body resize-none" />
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-wider">
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

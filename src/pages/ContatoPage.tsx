import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContatoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section
          className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-1.jpg')` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">Contato</h1>
            <p className="text-white/70 font-body mt-4">Entre em contato conosco</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">Fale Conosco</p>
                <h2 className="font-display text-3xl text-foreground font-semibold mb-8">
                  Imerso em meio <span className="italic text-secondary">à natureza</span>
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  O Minha Glória Hotel Boutique está localizado a 18km do centro de Nova Friburgo, 
                  no distrito de Banquete, em Bom Jardim-RJ. Um paraíso em meio à natureza para momentos inesquecíveis.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">Endereço</h3>
                      <p className="text-muted-foreground font-body text-sm">Estrada Rosário km 4,5 - Banquete - Bom Jardim/RJ</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">Telefone / WhatsApp</h3>
                      <p className="text-muted-foreground font-body text-sm">(22) 99779-2023</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">E-mail</h3>
                      <p className="text-muted-foreground font-body text-sm">contato@minhagloria.com.br</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">Horários</h3>
                      <p className="text-muted-foreground font-body text-sm">Check-in: a partir das 15h · Check-out: até as 12h</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/5522997792023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block"
                >
                  <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-body gap-2">
                    <MessageCircle size={18} />
                    Fale pelo WhatsApp
                  </Button>
                </a>
              </motion.div>

              {/* Form + Map */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="rounded-lg overflow-hidden h-[300px] mb-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d-42.43!3d-22.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQm9tIEphcmRpbQ!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Localização"
                  />
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Seu nome" className="font-body" />
                    <Input type="email" placeholder="Seu e-mail" className="font-body" />
                  </div>
                  <Input placeholder="Assunto" className="font-body" />
                  <Textarea placeholder="Sua mensagem..." rows={5} className="font-body resize-none" />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body uppercase tracking-wider">
                    Enviar Mensagem
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContatoPage;

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 lg:py-32 bg-hotel-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Como Chegar
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold">
            Localização
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden h-[400px] bg-muted"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d-43.85!3d-22.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVm9sdGEgUmVkb25kYQ!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Hotel"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="text-secondary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Rodovia Volta Redonda - Conservatória, Km 12<br />
                  Volta Redonda - RJ, 27259-000
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="text-secondary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Telefone</h3>
                <p className="text-muted-foreground font-body text-sm">(24) 9999-9999</p>
                <p className="text-muted-foreground font-body text-sm">WhatsApp disponível</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="text-secondary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">E-mail</h3>
                <p className="text-muted-foreground font-body text-sm">reservas@minhagloria.com.br</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="text-secondary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Horários</h3>
                <p className="text-muted-foreground font-body text-sm">Check-in: a partir das 15h</p>
                <p className="text-muted-foreground font-body text-sm">Check-out: até as 12h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

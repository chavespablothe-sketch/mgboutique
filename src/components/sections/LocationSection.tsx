import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Car } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-24 lg:py-40 bg-hotel-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-8 justify-start">
              <span className="pr-4">Como Chegar</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-semibold mb-8 leading-[1.1]">
              Perto o suficiente para <span className="italic text-secondary">escapar</span>
            </h2>
            <p className="text-editorial text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              A apenas 2h30 do Rio de Janeiro e 3h de São Paulo, o Minha Glória fica longe o 
              bastante para você se sentir em outro mundo — e perto o bastante para um fim 
              de semana espontâneo. Estrada Rosário km 4,5, distrito de Banquete, Bom Jardim-RJ. 
              A 18km do centro de Nova Friburgo, pela RJ-116.
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Endereço", desc: "Estrada Rosário km 4,5 — Banquete, Bom Jardim/RJ" },
                { icon: Car, title: "Distâncias", desc: "Rio de Janeiro: 2h30 · São Paulo: 3h · Nova Friburgo: 18km" },
                { icon: Phone, title: "Reservas", desc: "(22) 99779-2023 · WhatsApp disponível" },
                { icon: Clock, title: "Horários", desc: "Check-in: a partir das 14h · Check-out: até as 12h" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-secondary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground font-body text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-28"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5!2d-42.4969675!3d-22.1603666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97f6e5d8a7a979%3A0x987525f07fb83b25!2sHotel+Fazenda+Minha+Gl%C3%B3ria!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Minha Glória Hotel Boutique"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

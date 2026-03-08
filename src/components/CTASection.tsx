import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
  showPhone?: boolean;
}

const CTASection = ({
  title = "Reserve sua experiência inesquecível",
  subtitle = "Fale com nossa equipe e monte o pacote ideal para sua família",
  bgImage = "https://www.minhagloria.com.br/images/carousel-new-2.webp",
  showPhone = true,
}: CTASectionProps) => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="absolute inset-0 bg-primary/80" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-4">{title}</h2>
        <p className="text-primary-foreground/70 font-body text-lg mb-10 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-wider gap-2 px-8">
            <a href="https://wa.me/5522997792023?text=Olá! Gostaria de fazer uma reserva." target="_blank" rel="noopener noreferrer">
              Reservar agora <ArrowRight size={16} />
            </a>
          </Button>
          {showPhone && (
            <a href="tel:+5522997792023" className="flex items-center gap-2 text-secondary font-body text-sm hover:text-secondary/80 transition-colors">
              <Phone size={16} /> (22) 99779-2023
            </a>
          )}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

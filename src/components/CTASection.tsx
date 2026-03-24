import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

import { OMNIBEES_URL } from "@/lib/omnibees";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
  showPhone?: boolean;
}

const CTASection = ({
  title = "Sua próxima memória inesquecível começa aqui",
  subtitle = "Apenas 20 suítes em meio à Mata Atlântica. Pensão completa, 1 criança até 12 anos grátis nos fins de semana e parcelamento em até 10x sem juros. Reserve a experiência perfeita para sua família.",
  bgImage = "https://www.minhagloria.com.br/images/carousel-new-2.webp",
  showPhone = true,
}: CTASectionProps) => (
  <section className="relative py-32 lg:py-40 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="absolute inset-0 bg-primary/85" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold mb-6 leading-[1.1]">{title}</h2>
        <p className="text-editorial text-primary-foreground/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground font-body uppercase tracking-[0.2em] gap-3 px-10 py-6 text-sm rounded-full shadow-xl shadow-cta/20">
            <a href={OMNIBEES_URL} target="_blank" rel="noopener noreferrer">
              <CalendarDays size={16} />
              Reservar agora <ArrowRight size={16} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-secondary/40 text-secondary hover:bg-secondary/10 font-body uppercase tracking-[0.15em] px-8 py-6 text-sm rounded-full gap-2">
            <Link to="/pacotes">
              Ver pacotes 2026
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

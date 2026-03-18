import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GastronomySection = () => {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-4 block">
            Pensão completa inclusa
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground font-semibold mb-5 leading-[1.1]">
            Café da manhã, almoço e jantar
          </h2>
          <p className="text-primary-foreground/70 font-body text-base leading-relaxed mb-8">
            Todas as refeições estão inclusas nos pacotes — com ingredientes frescos, 
            receitas regionais e menu kids. Sem preocupações.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] gap-3 text-sm">
            <Link to="/gastronomia">
              Saiba mais <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GastronomySection;

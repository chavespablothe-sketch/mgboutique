import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GastronomySection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Image */}
        <div
          className="relative h-[300px] lg:h-auto bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-primary/20" />
        </div>

        {/* Content */}
        <div className="bg-primary flex items-center">
          <div className="px-8 md:px-16 lg:px-20 py-16 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-4 block">
                Gastronomia
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-primary-foreground font-semibold mb-6 leading-[1.1]">
                Da horta à mesa, <span className="italic">com alma</span>
              </h2>
              <p className="text-primary-foreground/70 font-body text-base leading-relaxed mb-8">
                Pensão completa em todos os pacotes: café da manhã artesanal, almoço regional 
                com ingredientes orgânicos e jantar especial. Menu kids incluso.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] gap-3 text-sm">
                <Link to="/gastronomia">
                  Saiba mais <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GastronomySection;

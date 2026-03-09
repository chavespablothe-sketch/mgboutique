import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GastronomySection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed image section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Image side */}
        <div
          className="relative h-[400px] lg:h-auto bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-primary/20" />
        </div>

        {/* Content side */}
        <div className="bg-primary flex items-center">
          <div className="px-8 md:px-16 lg:px-20 py-20 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-6 block">
                Gastronomia
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground font-semibold mb-8 leading-[1.1]">
                Da horta à mesa, <br />
                <span className="italic">com alma</span>
              </h2>
              <p className="text-editorial text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-6">
                Nossa cozinha é um ato de amor pela serra fluminense. Pães artesanais que saem 
                do forno ao amanhecer. Ervas colhidas da nossa horta orgânica minutos antes 
                de chegar ao prato. Carnes assadas lentamente, molhos que levam horas de 
                dedicação. Aqui, cada refeição é uma celebração.
              </p>
              <p className="text-primary-foreground/60 font-body text-base leading-relaxed mb-8">
                Pensão completa em todos os pacotes: café da manhã com buffet artesanal, 
                almoço regional com ingredientes orgânicos e jantar especial — incluindo 
                menu kids com opções saudáveis e apresentação que encanta os pequenos. 
                Nos feriados, jantares temáticos com música ao vivo e harmonização de vinhos.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] gap-3 text-sm">
                <Link to="/gastronomia">
                  Descobrir nosso menu <ArrowRight size={16} />
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

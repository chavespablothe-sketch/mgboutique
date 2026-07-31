import { motion } from "framer-motion";
import { ArrowRight, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { agostoImages } from "@/lib/siteImages";
import { fondueMenu, cartaDeVinhos } from "@/data/fondue";
import { buildOmnibeesUrl } from "@/lib/omnibees";

const FondueSection = () => {
  const grupos = [fondueMenu.carnes, fondueMenu.acompanhamentos, fondueMenu.chocolate];

  return (
    <section id="fondue" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="text-secondary font-body text-xs tracking-[0.4em] uppercase mb-3 block">
            Destaque de agosto
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-5">
            Festival de <span className="italic text-secondary">Fondue</span>
          </h2>
          <p className="font-body text-primary-foreground/80 text-base md:text-lg leading-relaxed">
            O sabor mais esperado do inverno chegou ao Minha Glória. A partir de 08/08, sempre aos sábados,
            uma experiência irresistível em um ambiente acolhedor, cercado pela natureza e pelo charme da serra.
          </p>
        </motion.div>

        {/* Fotos */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-14">
          {[
            { src: agostoImages.fondueCarne, alt: "Fondue de queijo com carne bovina" },
            { src: agostoImages.fondueFrango, alt: "Fondue de queijo com filé suíno e frango" },
            { src: agostoImages.fondueChocolate, alt: "Fondue de chocolate com morangos" },
          ].map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="overflow-hidden rounded-xl group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Cardápio */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {grupos.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/5 border border-secondary/25 rounded-xl p-7 backdrop-blur-sm"
            >
              <span className="text-2xl block mb-3" aria-hidden>{g.icon}</span>
              <h3 className="font-display text-xl text-secondary mb-4">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="font-body text-primary-foreground/80 text-sm flex gap-2">
                    <span className="text-secondary">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-body text-primary-foreground/70 text-sm mt-8">
          📅 Início em 08/08. Festival realizado aos sábados restantes do mês de agosto.
        </p>

        {/* Carta de vinhos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-16 bg-primary-foreground/5 border border-secondary/20 rounded-2xl p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <Wine className="text-secondary mx-auto mb-3" size={30} />
            <h3 className="font-display text-2xl md:text-3xl text-primary-foreground font-semibold">
              Nossa carta de vinhos
            </h3>
            <p className="font-body text-primary-foreground/70 text-sm mt-2">
              Rótulos tintos e rosés selecionados para acompanhar a noite (disponíveis à parte).
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cartaDeVinhos.map((grupo) => (
              <div key={grupo.pais}>
                <h4 className="font-body text-secondary text-xs uppercase tracking-[0.25em] mb-3">
                  <span aria-hidden>{grupo.flag}</span> {grupo.pais}
                </h4>
                <ul className="space-y-1.5">
                  {grupo.rotulos.map((r) => (
                    <li key={r} className="font-body text-primary-foreground/75 text-[13px] leading-snug">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body uppercase tracking-[0.15em] text-sm"
          >
            <a href={buildOmnibeesUrl({ checkIn: "07082026", checkOut: "09082026" })} target="_blank" rel="noopener noreferrer">
              Reservar sua noite de fondue <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FondueSection;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Spa & Bem-estar",
    image: "https://www.minhagloria.com.br/lovable-uploads/04460747-2a8e-4012-a6be-1b1819ad5997.png",
    link: "/experiencias",
  },
  {
    title: "Trilhas & Passeios",
    image: "https://www.minhagloria.com.br/lovable-uploads/b7fedef6-5188-49de-a6f5-ac36f6e262f8.png",
    link: "/experiencias",
  },
  {
    title: "Gastronomia",
    image: "https://www.minhagloria.com.br/lovable-uploads/fdf9bc84-d84a-4376-8178-95e596cf51c4.png",
    link: "/gastronomia",
  },
];

const AmenitiesSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/fundo.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-28 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[1.05] hero-text-shadow italic">
            Para descobrir
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-5"
        >
          <div className="w-12 h-0.5 bg-secondary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary-foreground/90 font-body text-lg md:text-xl text-center max-w-lg mx-auto mb-20 hero-text-shadow"
        >
          Momentos e experiências com a assinatura Minha Glória.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7 }}
              className={`${i === 1 ? "md:mt-10" : ""}`}
            >
              <Link to={card.link} className="group block">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] ring-1 ring-white/10">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-center">
                    <h3 className="font-display text-xl md:text-2xl text-primary-foreground font-semibold mb-3 hero-text-shadow">
                      {card.title}
                    </h3>
                    <span className="inline-block text-secondary text-sm font-body uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Explorar →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
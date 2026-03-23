import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Spa & Bem-estar",
    image: "https://www.minhagloria.com.br/lovable-uploads/f7d9ecaa-e043-4c83-8549-89dfb50450a6.png",
    link: "/experiencias",
  },
  {
    title: "Trilhas & Passeios",
    image: "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png",
    link: "/experiencias",
  },
  {
    title: "Gastronomia",
    image: "https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png",
    link: "/gastronomia",
  },
];

const AmenitiesSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src="https://www.minhagloria.com.br/images/carousel-new-4.webp"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-36">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-[1.05] hero-text-shadow italic">
            Para descobrir
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <div className="w-10 h-0.5 bg-secondary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary-foreground/80 font-body text-lg md:text-xl text-center max-w-lg mx-auto mb-16 hero-text-shadow"
        >
          Momentos e experiências com a assinatura Minha Glória.
        </motion.p>

        {/* Overlapping cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
              className={`${i === 0 ? "md:-mt-4" : i === 2 ? "md:-mt-4" : "md:mt-8"}`}
            >
              <Link to={card.link} className="group block">
                <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-[3/4]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="font-display text-xl md:text-2xl text-primary-foreground font-semibold mb-2 hero-text-shadow">
                      {card.title}
                    </h3>
                    <span className="text-secondary text-lg group-hover:translate-y-0 translate-y-1 transition-transform duration-300 inline-block">
                      ↓
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

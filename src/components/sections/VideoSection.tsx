import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-4 block">
            Viva a experiência
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-semibold leading-tight">
            Assista e <span className="italic text-secondary">se encante</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-muted aspect-video flex items-center justify-center relative">
            {/* Placeholder for Instagram embed or uploaded video */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://www.minhagloria.com.br/images/carousel-new-2.webp')` }}>
              <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-secondary/90 flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors shadow-xl">
                  <svg className="w-8 h-8 text-secondary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground font-body text-sm z-10 hidden">
              Envie seu vídeo institucional para exibir aqui
            </p>
          </div>
          <p className="text-center text-muted-foreground font-body text-sm mt-6 italic">
            Conheça o Minha Glória Hotel Boutique — seu refúgio na serra fluminense
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

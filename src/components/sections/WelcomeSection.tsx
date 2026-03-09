import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <section className="py-24 lg:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Editorial opener */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="divider-ornament text-secondary font-body text-xs tracking-[0.4em] uppercase mb-8">
            Bem-vindos ao Minha Glória
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-10 leading-[1.1]">
            Um lugar onde o tempo 
            <br className="hidden md:block" />
            <span className="italic text-secondary">desacelera</span>
          </h2>
          <p className="text-editorial text-muted-foreground text-xl md:text-2xl leading-relaxed">
            Imagine acordar com o canto dos pássaros, abrir a janela do seu chalé e ver as montanhas 
            da Mata Atlântica banhadas pela luz dourada da manhã. Enquanto as crianças correm livres 
            pela fazenda, alimentam as lhamas e descobrem o mundo, você toma um café artesanal 
            na varanda, sentindo o aroma da terra molhada. Aqui, cada momento é uma pausa. 
            Cada respiro, um recomeço.
          </p>
        </motion.div>

        {/* Photo mosaic */}
        <div className="grid grid-cols-12 gap-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-7 overflow-hidden rounded-lg"
          >
            <img
              src="https://www.minhagloria.com.br/images/carousel-new-2.webp"
              alt="Vista aérea completa do Minha Glória Hotel Boutique entre montanhas e mata atlântica"
              className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="col-span-12 md:col-span-5 overflow-hidden rounded-lg"
          >
            <img
              src="https://www.minhagloria.com.br/images/carousel-new-4.webp"
              alt="Chalés de madeira aconchegantes com varandas e vista para a natureza"
              className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-12 md:col-span-4 overflow-hidden rounded-lg"
          >
            <img
              src="https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png"
              alt="Animais da fazenda - lhamas e alpacas encantam adultos e crianças"
              className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 md:col-span-4 overflow-hidden rounded-lg"
          >
            <img
              src="https://www.minhagloria.com.br/images/carousel-new-3.webp"
              alt="Cavalos pastando livremente na fazenda, com montanhas ao fundo"
              className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-12 md:col-span-4 overflow-hidden rounded-lg"
          >
            <img
              src="https://www.minhagloria.com.br/lovable-uploads/252a23af-2a29-46e8-8e7e-dbd3ce9cf861.png"
              alt="Lago natural da fazenda cercado por vegetação e montanhas"
              className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Two-column editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl md:text-3xl text-foreground font-semibold mb-6">
              Mais que um hotel — <span className="italic text-secondary">um destino</span>
            </h3>
            <div className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              <p>
                Situado a 18km do centro de Nova Friburgo, no coração da serra fluminense, 
                o Minha Glória não é um hotel de passagem. É um destino por si só. São 
                apenas 20 suítes — o suficiente para garantir que cada hóspede receba 
                atenção genuína, que cada refeição seja preparada com carinho e que cada 
                momento seja vivido com exclusividade.
              </p>
              <p>
                A propriedade se estende por hectares de Mata Atlântica preservada, com 
                trilhas que levam a cachoeiras escondidas, um lago natural que reflete 
                as montanhas e uma fazendinha onde crianças e adultos se encantam com 
                lhamas, alpacas, cavalos e coelhos. Aqui, luxo não é ostentação — é 
                o privilégio de estar cercado por beleza, silêncio e natureza.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl md:text-3xl text-foreground font-semibold mb-6">
              Para famílias que <span className="italic text-secondary">valorizam memórias</span>
            </h3>
            <div className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              <p>
                No Minha Glória, as crianças não ficam apenas "entretidas" — elas vivem 
                aventuras. Alimentam os animais da fazenda pela manhã, exploram trilhas 
                adaptadas à tarde e participam de oficinas criativas com materiais naturais. 
                À noite, ouvem histórias ao redor da fogueira enquanto os pais saboreiam 
                um bom vinho sob as estrelas.
              </p>
              <p>
                Com pensão completa em todos os pacotes, recreação monitorada e 
                crianças até 6 anos hospedadas gratuitamente, cada detalhe foi pensado 
                para que a família inteira possa simplesmente... estar junta. Sem pressa, 
                sem telas, sem preocupações. Apenas presença.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center mt-20 pt-12 border-t border-border"
        >
          <p className="editorial-quote text-3xl md:text-4xl text-foreground/80 leading-snug">
            "O lugar mais bonito e acolhedor que já conheci. Cada detalhe é pensado com carinho."
          </p>
          <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mt-6">— Hóspede, Google Reviews · Nota 4.9</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;

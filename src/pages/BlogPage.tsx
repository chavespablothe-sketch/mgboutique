import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Hotéis com animais para crianças no RJ: guia completo",
    excerpt: "Descubra os melhores hotéis do Rio de Janeiro onde crianças podem ter contato com animais — de lhamas e alpacas a cavalos e coelhos.",
    category: "Família",
    readTime: "8 min",
    image: "https://www.minhagloria.com.br/lovable-uploads/fa0a1d74-12c1-4134-8d8d-0e688addbccb.png",
  },
  {
    title: "O que fazer em Bom Jardim e Nova Friburgo: roteiro de fim de semana",
    excerpt: "Um guia prático com as melhores cachoeiras, trilhas, restaurantes e experiências da serra fluminense.",
    category: "Destinos",
    readTime: "10 min",
    image: "https://www.minhagloria.com.br/images/carousel-new-2.webp",
  },
  {
    title: "Hotel fazenda ou hotel boutique: qual a diferença?",
    excerpt: "Entenda o que diferencia um hotel boutique de um hotel fazenda tradicional e descubra qual experiência combina mais com você.",
    category: "Dicas",
    readTime: "6 min",
    image: "https://www.minhagloria.com.br/lovable-uploads/d853d202-1c9d-4cd8-8f3b-d89a257c4ee7.png",
  },
  {
    title: "Escapadas românticas perto do Rio de Janeiro",
    excerpt: "As melhores opções de hospedagem para casais que buscam refúgio, privacidade e experiências únicas a poucas horas do Rio.",
    category: "Romântico",
    readTime: "7 min",
    image: "https://www.minhagloria.com.br/lovable-uploads/44683466-44b0-4f6e-896a-51a9ae1249fc.png",
  },
  {
    title: "Férias de julho com crianças na serra fluminense",
    excerpt: "Programação completa para aproveitar o inverno na serra com os pequenos: atividades, gastronomia e aventuras.",
    category: "Família",
    readTime: "9 min",
    image: "https://www.minhagloria.com.br/lovable-uploads/7b9a8c26-81a0-4894-9f0f-2a4c11fd34ce.png",
  },
  {
    title: "Hotel pet friendly no Rio de Janeiro: onde se hospedar com seu pet",
    excerpt: "Guia com os melhores hotéis que aceitam animais de estimação no estado do Rio de Janeiro.",
    category: "Dicas",
    readTime: "6 min",
    image: "https://www.minhagloria.com.br/images/carousel-new-3.webp",
  },
];

const BlogPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Blog | Dicas de Viagem e Serra Fluminense"
        description="Artigos sobre hotéis com animais para crianças, trilhas em Nova Friburgo, gastronomia serrana e dicas para famílias que buscam natureza no RJ."
        canonical="/blog"
        schemas={[
          { "@context": "https://schema.org", "@type": "Blog", name: "Blog Minha Glória", url: "https://www.minhagloria.com.br/blog", publisher: { "@type": "Hotel", name: "Minha Glória Hotel Boutique" } },
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]),
        ]}
      />
      <Header />
      <div className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-secondary font-body text-xs tracking-[0.5em] uppercase mb-4 block">Blog</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-[1.05] mb-6">
                Histórias, dicas e <span className="italic text-secondary">inspiração</span>
              </h1>
              <p className="text-primary-foreground/60 font-body text-lg leading-relaxed max-w-xl mx-auto">
                Descubra destinos, planeje viagens em família e conheça o melhor da serra fluminense.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-500"
                >
                  <div className="relative overflow-hidden h-52">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-[10px] font-body uppercase tracking-wider px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-body mb-3">
                      <Clock size={12} /> {post.readTime} de leitura
                    </div>
                    <h2 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-secondary font-body text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1">
                      Em breve <ArrowRight size={12} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground font-body text-base">
                Novos artigos em breve. Siga-nos no{" "}
                <a href="https://www.instagram.com/minhagloriahotel" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  Instagram
                </a>{" "}
                para novidades.
              </p>
            </div>
          </div>
        </section>

        <CTASection
          title="Quer viver essas experiências?"
          subtitle="Reserve sua estadia no Minha Glória e descubra o melhor da serra fluminense."
        />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;

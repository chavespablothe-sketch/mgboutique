import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OffersSection from "@/components/sections/OffersSection";

const PacotesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section
          className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://ncqfwshsbbathpddtrvk.supabase.co/storage/v1/object/public/minha-gloria-bucket/packages/principal/rv6jyv97zg-1770309523978.webp')` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
          <div className="relative z-10 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">Pacotes & Ofertas</h1>
            <p className="text-white/70 font-body mt-4">Experiências únicas para sua estadia</p>
          </div>
        </section>

        <OffersSection />
      </div>
      <Footer />
    </div>
  );
};

export default PacotesPage;

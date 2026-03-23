import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { hotelSchema, websiteSchema } from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import BoutiqueSection from "@/components/sections/BoutiqueSection";
import AccommodationsSection from "@/components/sections/AccommodationsSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import OffersSection from "@/components/sections/OffersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Minha Glória Hotel Boutique | Refúgio de Luxo e Natureza"
        description="Hotel boutique em Bom Jardim, RJ. Chalés exclusivos em meio à Mata Atlântica, pensão completa, spa e experiências para toda a família. Reserve agora."
        canonical="/"
        schemas={[hotelSchema, websiteSchema]}
      />
      <Header />
      <HeroSection />
      <WelcomeSection />
      <BoutiqueSection />
      <AccommodationsSection />
      <AmenitiesSection />
      <OffersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

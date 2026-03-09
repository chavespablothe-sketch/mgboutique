import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import BoutiqueSection from "@/components/sections/BoutiqueSection";
import AccommodationsSection from "@/components/sections/AccommodationsSection";
import GastronomySection from "@/components/sections/GastronomySection";
import ChefSection from "@/components/sections/ChefSection";
import OffersSection from "@/components/sections/OffersSection";
import VideoSection from "@/components/sections/VideoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <BoutiqueSection />
      <AccommodationsSection />
      <GastronomySection />
      <ChefSection />
      <OffersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

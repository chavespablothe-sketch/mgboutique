import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WelcomeSection from "@/components/sections/WelcomeSection";
import AccommodationsSection from "@/components/sections/AccommodationsSection";
import OffersSection from "@/components/sections/OffersSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import GastronomySection from "@/components/sections/GastronomySection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocationSection from "@/components/sections/LocationSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <AccommodationsSection />
      <OffersSection />
      <BenefitsSection />
      <AmenitiesSection />
      <GastronomySection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;

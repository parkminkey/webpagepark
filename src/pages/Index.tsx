import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MinistrySection from "@/components/MinistrySection";
import BookSection from "@/components/BookSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MinistrySection />
      <BookSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

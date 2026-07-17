import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import FeatureSection from "@/components/features/FeatureSection";
import StationSection from "@/components/stations/StationSection";
import TeamSection from "@/components/team/TeamSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";
import FeatureShowcase from "@/components/FeatureShowcase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroSection />
<FeatureShowcase />
      <AboutSection />
      <FeatureSection/>
      <StationSection/>
      <TeamSection/>
      <ContactSection/>
      <Footer/>
      
    </main>
  );
}
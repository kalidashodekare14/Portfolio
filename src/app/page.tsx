import AboutMe from "@/components/sections/AboutMe";
import ContactMe from "@/components/sections/ContactMe";
// import Education from "@/components/Education";
import HeroSection from "@/components/sections/Hero/HeroSection";
// import HeroSection1 from "@/components/HeroSection1/HeroSection1";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import TechnicalSkill from "@/components/sections/TechnicalSkill";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <TechnicalSkill />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

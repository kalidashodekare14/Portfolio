import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import TechnicalSkill from "@/components/TechnicalSkill";
import Footer from "@/layout/Footer";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      {/* <Education /> */}
      <TechnicalSkill />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import HeroSection1 from "@/components/HeroSection1";
import Projects from "@/components/Projects";
import TechnicalSkill from "@/components/TechnicalSkill";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      <HeroSection1 />
      <AboutMe />
      {/* <Education /> */}
      <TechnicalSkill />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

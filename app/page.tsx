import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import TechnicalSkill from "@/components/TechnicalSkill";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      {/* <Education /> */}
      <TechnicalSkill />
      <Projects />
    </div>
  );
}

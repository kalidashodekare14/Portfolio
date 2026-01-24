import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import TechnicalSkill from "@/components/TechnicalSkill";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      {/* <Education /> */}
      <TechnicalSkill />
    </div>
  );
}

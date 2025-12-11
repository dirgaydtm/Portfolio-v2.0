import { HeroSection } from "@/components/sections/hero-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

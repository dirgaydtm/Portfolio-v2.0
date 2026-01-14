import HeroSection from "@/features/hero/components/hero-section";
import TechStackSection from "@/features/tech-stack/components/tech-stack-section";
import ExperienceSection from "@/features/experience/components/experience-section";
import ProjectsSection from "@/features/projects/components/projects-section";
import ContactSection from "@/features/contact/components/contact-section";

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

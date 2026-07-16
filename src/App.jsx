import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import JourneySection from "./components/JourneySection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="container mx-auto bg-transparent text-slate-100">
      <Header />
      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 lg:px-8 lg:py-16">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
    </div>
  );
}

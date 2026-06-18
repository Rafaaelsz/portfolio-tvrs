import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { SkillsEcosystem } from "@/components/sections/SkillsEcosystem";
import { BackgroundNetwork } from "@/components/three/BackgroundNetwork";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <BackgroundNetwork />
      <Header />
      <main className="relative z-10 min-h-screen overflow-hidden">
        <Hero />
        <About />
        <SkillsEcosystem />
        <Projects />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

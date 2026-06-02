"use client";

import { useState } from "react";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import type { Language } from "@/components/portfolio/i18n";
import { Nav } from "@/components/portfolio/Nav";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const toggleLanguage = () => setLanguage((current) => (current === "pt" ? "en" : "pt"));

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Nav language={language} onToggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <Stack language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </main>
  );
}

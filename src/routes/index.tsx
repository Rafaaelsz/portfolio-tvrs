import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { useState } from "react";
import type { Language } from "@/components/portfolio/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rafael Tavares — Desenvolvedor FullStack" },
      {
        name: "description",
        content:
          "Portfólio de Rafael Tavares, Desenvolvedor FullStack: APIs robustas em Python e Java, interfaces dinâmicas em JavaScript.",
      },
      { property: "og:title", content: "Rafael Tavares — Desenvolvedor FullStack" },
      {
        property: "og:description",
        content: "Construindo aplicações robustas e escaláveis de ponta a ponta.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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

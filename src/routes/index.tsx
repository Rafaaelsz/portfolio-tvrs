import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Full Stack Engineer — Portfólio" },
      {
        name: "description",
        content:
          "Portfólio de engenharia de software full stack: APIs robustas em Python e Java, interfaces dinâmicas em JavaScript.",
      },
      { property: "og:title", content: "Full Stack Engineer — Portfólio" },
      {
        property: "og:description",
        content:
          "Construindo aplicações robustas e escaláveis de ponta a ponta.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Nav />
      <Hero />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}

import {
  Boxes,
  BriefcaseBusiness,
  Chrome,
  Flower2,
  Handshake,
  Radar,
  ServerCog,
  Smartphone,
} from "lucide-react";

export type Project = {
  stack: string[];
  /** Repositório público. Omita quando o repositório for privado: o card não mostra o botão. */
  github?: string;
  demo?: string;
  accent: "cyan" | "emerald" | "amber" | "rose" | "violet";
  Icon: typeof ServerCog;
};

// A ordem precisa ser a mesma de `projects.items` em src/i18n/dictionaries.ts (PT e EN).
export const projectConfigs: Project[] = [
  {
    // Lume: produto próprio, repositório privado. O demo aponta para a landing,
    // que explica o produto e leva ao app (https://lumelead.vercel.app).
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Stripe",
      "Vercel AI SDK",
    ],
    demo: "https://app-lume-lp.vercel.app",
    accent: "amber",
    Icon: Radar,
  },
  {
    // TODO(Rafael): confirmar que a Giselle autorizou o estúdio a aparecer no portfólio.
    // Repositório privado (cliente).
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    demo: "https://pilates-giselle-meyer.vercel.app",
    accent: "rose",
    Icon: Flower2,
  },
  {
    // TODO(Rafael): https://consorcio-track.vercel.app respondeu 404 em 29/10/2026.
    // Quando o deploy voltar, adicione `demo` aqui.
    stack: ["Java 21", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/Rafaaelsz/consorcio-track",
    accent: "emerald",
    Icon: Handshake,
  },
  {
    stack: ["Fastify", "TypeScript", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS"],
    github: "https://github.com/Rafaaelsz/finder-vagas-ti",
    demo: "https://finderti.vercel.app",
    accent: "cyan",
    Icon: BriefcaseBusiness,
  },
  {
    stack: ["Maestro", "YAML", "Android"],
    github: "https://github.com/Rafaaelsz/qa-mydemoapp-tests",
    accent: "violet",
    Icon: Smartphone,
  },
  {
    stack: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    github: "https://github.com/Rafaaelsz/cs2-box-analyzer",
    accent: "amber",
    Icon: Chrome,
  },
  {
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "BeautifulSoup"],
    github: "https://github.com/Rafaaelsz/price-tracking",
    accent: "cyan",
    Icon: ServerCog,
  },
  {
    stack: ["Django", "Python", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/Rafaaelsz/orbit-erp",
    demo: "https://orbit-erp.onrender.com/accounts/login/?next=/",
    accent: "emerald",
    Icon: Boxes,
  },
];

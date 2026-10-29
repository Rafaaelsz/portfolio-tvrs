import {
  Boxes,
  BriefcaseBusiness,
  Chrome,
  Handshake,
  HeartPulse,
  Radar,
  ServerCog,
  Smartphone,
} from "lucide-react";

export type Project = {
  stack: string[];
  /** Repositório público. Projetos com repo privado ficam sem link de GitHub. */
  github?: string;
  demo?: string;
  /** Projeto em destaque: ganha selo e borda de destaque no card. */
  featured?: boolean;
  accent: "cyan" | "emerald" | "amber" | "rose" | "violet";
  Icon: typeof ServerCog;
};

// A ordem precisa bater com `projects.items` em src/i18n/dictionaries.ts (pt e en).
export const projectConfigs: Project[] = [
  {
    // Lume: repos lume-lead e lume-lp são privados, então só o link da landing.
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Tailwind CSS",
      "Vitest",
    ],
    demo: "https://app-lume-lp.vercel.app",
    featured: true,
    accent: "cyan",
    Icon: Radar,
  },
  {
    // Cliente freelance, repo privado.
    stack: ["HTML", "CSS", "JavaScript", "Canvas"],
    demo: "https://pilates-giselle-meyer.vercel.app",
    accent: "rose",
    Icon: HeartPulse,
  },
  {
    // consorcio-track.vercel.app respondia 404 em 29/10/2026, por isso não há link de demo.
    stack: ["Next.js", "TypeScript", "Java 21", "Spring Boot", "PostgreSQL", "Flyway", "Docker"],
    github: "https://github.com/Rafaaelsz/consorcio-track",
    accent: "violet",
    Icon: Handshake,
  },
  {
    stack: ["Fastify", "TypeScript", "Prisma", "PostgreSQL", "Zod", "Next.js", "Vitest"],
    github: "https://github.com/Rafaaelsz/finder-vagas-ti",
    demo: "https://finderti.vercel.app",
    accent: "emerald",
    Icon: BriefcaseBusiness,
  },
  {
    stack: ["Maestro", "YAML", "Android", "GitHub Actions"],
    github: "https://github.com/Rafaaelsz/qa-mydemoapp-tests",
    accent: "amber",
    Icon: Smartphone,
  },
  {
    stack: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    github: "https://github.com/Rafaaelsz/orbit-erp",
    demo: "https://orbit-erp.onrender.com/accounts/login/?next=/",
    accent: "emerald",
    Icon: Boxes,
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
];

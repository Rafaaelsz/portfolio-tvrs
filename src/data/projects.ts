import { Boxes, Chrome, Flower2, MonitorCog, ServerCog } from "lucide-react";

export type Project = {
  stack: string[];
  github: string;
  demo?: string;
  accent: "cyan" | "emerald" | "amber" | "rose" | "violet";
  Icon: typeof ServerCog;
};

export const projectConfigs: Project[] = [
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
  {
    stack: ["Python", "Tkinter", "Pillow", "PyInstaller"],
    github: "https://github.com/Rafaaelsz/converteai",
    accent: "violet",
    Icon: MonitorCog,
  },
  {
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Rafaaelsz/floricultura-landing-page",
    accent: "rose",
    Icon: Flower2,
  },
];

/** Área de contratação do seletor Dev / QA / Cloud. "all" mostra a ordem original. */
export type Area = "dev" | "qa" | "cloud";
export type Role = "all" | Area;

export const roles: Role[] = ["all", "dev", "qa", "cloud"];

export function isRole(value: string | null): value is Role {
  return value === "all" || value === "dev" || value === "qa" || value === "cloud";
}

export type Project = {
  /** Chave estável (layoutId da animação e `key` do React). */
  slug: string;
  stack: string[];
  /** Repositório público. Omita quando o repositório for privado: o card não mostra o link. */
  github?: string;
  demo?: string;
  /** "production" = produto em produção; "live" = site no ar. Sem status, só código. */
  status?: "production" | "live";
  /**
   * Áreas em que o projeto é evidência, da mais forte para a mais fraca.
   * O seletor sobe para o topo quem tem a área em primeiro lugar e esmaece quem não tem.
   */
  areas: Area[];
};

// A ordem precisa ser a mesma de `projects.items` em src/i18n/dictionaries.ts (PT e EN).
// O primeiro item (Lume) é sempre o card grande do bento e não muda de lugar com o seletor.
export const projectConfigs: Project[] = [
  {
    // Lume: produto próprio, repositório privado. O demo aponta para a landing,
    // que explica o produto e leva ao app (https://lumelead.vercel.app).
    slug: "lume",
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
    status: "production",
    areas: ["dev", "qa", "cloud"],
  },
  {
    // TODO(Rafael): confirmar que a Giselle autorizou o estúdio a aparecer no portfólio.
    // Repositório privado (cliente).
    slug: "pilates",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    demo: "https://pilates-giselle-meyer.vercel.app",
    status: "live",
    areas: ["dev"],
  },
  {
    // TODO(Rafael): https://consorcio-track.vercel.app respondeu 404 em 29/10/2026.
    // Quando o deploy voltar, adicione `demo` aqui.
    slug: "consorcio-track",
    stack: ["Java 21", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
    github: "https://github.com/Rafaaelsz/consorcio-track",
    areas: ["dev", "cloud"],
  },
  {
    slug: "finder",
    stack: ["Fastify", "TypeScript", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS"],
    github: "https://github.com/Rafaaelsz/finder-vagas-ti",
    demo: "https://finderti.vercel.app",
    status: "live",
    areas: ["dev", "qa"],
  },
  {
    slug: "mydemoapp",
    stack: ["Maestro", "YAML", "Android"],
    github: "https://github.com/Rafaaelsz/qa-mydemoapp-tests",
    areas: ["qa"],
  },
  {
    slug: "cs2-box-analyzer",
    stack: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    github: "https://github.com/Rafaaelsz/cs2-box-analyzer",
    areas: ["dev"],
  },
  {
    slug: "price-tracking",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "BeautifulSoup"],
    github: "https://github.com/Rafaaelsz/price-tracking",
    areas: ["cloud", "dev"],
  },
  {
    // O demo no Render (plano gratuito) hiberna e demora para acordar,
    // por isso não leva o selo "no ar".
    slug: "orbit-erp",
    stack: ["Django", "Python", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/Rafaaelsz/orbit-erp",
    demo: "https://orbit-erp.onrender.com/accounts/login/?next=/",
    areas: ["dev"],
  },
];

/**
 * Ordena os projetos para a área escolhida.
 * Quem tem a área em primeiro lugar sobe; quem não tem vai para o fim e fica esmaecido.
 * Empates mantêm a ordem original, então "all" devolve a ordem do arquivo.
 */
export function orderForRole<T extends { config: Project; index: number }>(
  items: T[],
  role: Role,
): Array<T & { dim: boolean }> {
  const rank = (item: T) => {
    if (role === "all") return 0;
    const position = item.config.areas.indexOf(role);
    return position < 0 ? 10 : position;
  };

  return [...items]
    .sort((a, b) => rank(a) - rank(b) || a.index - b.index)
    .map((item) => ({ ...item, dim: role !== "all" && rank(item) === 10 }));
}

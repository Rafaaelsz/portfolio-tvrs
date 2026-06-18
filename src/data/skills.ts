export type SkillAccent = "cyan" | "emerald" | "amber" | "rose";

export const skillAccents: SkillAccent[] = ["cyan", "emerald", "amber", "rose"];

export const ecosystemNodes = [
  { label: "React", layer: "frontend" },
  { label: "Next.js", layer: "frontend" },
  { label: "FastAPI", layer: "api" },
  { label: "Django", layer: "api" },
  { label: "PostgreSQL", layer: "data" },
  { label: "Redis", layer: "data" },
  { label: "Docker", layer: "infra" },
  { label: "GitHub Actions", layer: "infra" },
  { label: "Webhooks", layer: "tools" },
] as const;

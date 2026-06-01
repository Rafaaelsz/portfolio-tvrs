import type { Language } from "./i18n";

type StackCard = {
  title: string;
  tag: string;
  description: Record<Language, string>;
  techs: string[];
  glow: string;
  span?: string;
};

const cards: StackCard[] = [
  {
    title: "Core Backend",
    tag: "Python · Java",
    description: {
      pt: "APIs estruturadas, regras de negócio sólidas e arquiteturas escaláveis com Django, FastAPI e o ecossistema Java.",
      en: "Structured APIs, solid business rules, and scalable architectures with Django, FastAPI, and the Java ecosystem.",
    },
    techs: ["Python", "Django", "FastAPI", "Java", "PostgreSQL", "Docker"],
    glow: "rgba(56, 189, 248, 0.18)",
    span: "md:col-span-2",
  },
  {
    title: "Core Frontend",
    tag: "JavaScript · React",
    description: {
      pt: "Interfaces dinâmicas, integradas e responsivas com foco em performance e experiência.",
      en: "Dynamic, integrated, and responsive interfaces focused on performance and user experience.",
    },
    techs: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind"],
    glow: "rgba(250, 204, 21, 0.15)",
  },
  {
    title: "Integrações & Dados",
    tag: "APIs · SQL",
    description: {
      pt: "Consumo e desenho de APIs REST, modelagem de dados relacional e integrações entre sistemas.",
      en: "REST API consumption and design, relational data modeling, and integrations between systems.",
    },
    techs: ["REST", "SQL", "Redis", "Webhooks"],
    glow: "rgba(168, 85, 247, 0.16)",
  },
  {
    title: "Automação & DevTools",
    tag: "CI/CD · Git",
    description: {
      pt: "Automações inteligentes, scripts produtivos e pipelines que aceleram a entrega contínua.",
      en: "Smart automation, productive scripts, and pipelines that speed up continuous delivery.",
    },
    techs: ["Git", "GitHub Actions", "Linux", "Bash"],
    glow: "rgba(52, 211, 153, 0.15)",
    span: "md:col-span-2",
  },
];

type StackProps = {
  language: Language;
};

const content = {
  pt: {
    eyebrow: "Stack",
    title: "Tecnologias que conectam backend e frontend",
  },
  en: {
    eyebrow: "Stack",
    title: "Technologies that connect backend and frontend",
  },
} satisfies Record<Language, Record<string, string>>;

export function Stack({ language }: StackProps) {
  const text = content[language];

  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">{text.eyebrow}</p>
        <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
          {text.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className={`group relative overflow-hidden rounded-2xl border border-slate-800/60 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:border-slate-700 ${c.span ?? ""}`}
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(400px circle at 50% 0%, ${c.glow}, transparent 60%)`,
              }}
            />
            <div className="relative">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{c.tag}</span>
              <h3 className="mt-2 text-xl font-medium text-white">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {c.description[language]}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.techs.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-800/80 bg-slate-900/40 px-2.5 py-0.5 text-[11px] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

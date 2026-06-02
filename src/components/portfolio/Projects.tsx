import { ArrowUpRight, Github } from "lucide-react";
import type { Language } from "./i18n";

const projects = [
  {
    name: "Orbit ERP",
    type: {
      pt: "Sistema ERP / Gestão Empresarial",
      en: "ERP System / Business Management",
    },
    description: {
      pt: "Sistema web completo para controle de estoque e gestão empresarial. Desenvolvido com foco em usabilidade, segurança e inteligência de dados, oferecendo gerenciamento de produtos, movimentações de estoque, relatórios e indicadores para tomada de decisão.",
      en: "Complete web system for inventory control and business management. Built with a focus on usability, security, and data intelligence, offering product management, inventory movements, reports, and decision-making indicators.",
    },
    stack: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    github: "https://github.com/Rafaaelsz/orbit-erp",
    demo: "https://orbit-erp.onrender.com/accounts/login/?next=/",
    status: { pt: "Concluído", en: "Completed" },
    featured: true,
  },
  {
    name: "CS2 Box Analyzer",
    type: { pt: "Extensão Chrome/Edge", en: "Chrome/Edge Extension" },
    description: {
      pt: "Ferramenta de análise passiva de risco para sites de abertura de caixas de Counter-Strike 2. Calcula valor esperado, ROI estimado, house edge e classificação de risco com base no conteúdo visível da página, sem automatizar ações do usuário.",
      en: "Passive risk analysis tool for Counter-Strike 2 case-opening websites. It calculates expected value, estimated ROI, house edge, and risk classification from visible page content without automating user actions.",
    },
    stack: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    github: "https://github.com/Rafaaelsz/cs2-box-analyzer",
    demo: "#",
    status: { pt: "Concluído", en: "Completed" },
    featured: true,
  },
  {
    name: "Price Tracking API",
    type: "Backend / API",
    description: {
      pt: "API de monitoramento de preços com sistema de alertas automatizados. Utiliza processamento assíncrono para rastrear produtos, armazenar histórico de preços e notificar usuários sobre variações relevantes.",
      en: "Price monitoring API with an automated alert system. It uses asynchronous processing to track products, store price history, and notify users about relevant changes.",
    },
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "BeautifulSoup"],
    github: "https://github.com/Rafaaelsz/price-tracking",
    demo: "#",
    status: { pt: "Concluído", en: "Completed" },
    featured: true,
  },
  {
    name: "ConverteAi",
    type: "Desktop Application",
    description: {
      pt: "Aplicação desktop desenvolvida em Python com interface gráfica em Tkinter para conversão de múltiplos formatos de arquivos. Oferece uma experiência simples e intuitiva para usuários que realizam conversões frequentes.",
      en: "Desktop application built in Python with a Tkinter graphical interface for converting multiple file formats. It offers a simple and intuitive experience for users who perform frequent conversions.",
    },
    stack: ["Python", "Tkinter", "Pillow", "PyInstaller"],
    github: "https://github.com/Rafaaelsz/converteai",
    demo: "#",
    status: { pt: "Concluído", en: "Completed" },
    featured: false,
  },
  {
    name: "Floricultura Landing Page",
    type: "Frontend / Landing Page",
    description: {
      pt: "Landing page moderna e responsiva desenvolvida para uma floricultura, focada em apresentação de produtos, conversão de clientes e experiência visual elegante em dispositivos móveis e desktop.",
      en: "Modern responsive landing page built for a flower shop, focused on product presentation, customer conversion, and an elegant visual experience across mobile and desktop devices.",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Rafaaelsz/floricultura-landing-page",
    demo: "#",
    status: { pt: "Concluído", en: "Completed" },
    featured: false,
  },
];

type ProjectsProps = {
  language: Language;
};

const content = {
  pt: {
    eyebrow: "Projetos",
    title: "Aplicações completas, do schema à interface",
  },
  en: {
    eyebrow: "Projects",
    title: "Complete applications, from schema to interface",
  },
} satisfies Record<Language, Record<string, string>>;

export function Projects({ language }: ProjectsProps) {
  const text = content[language];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="mb-14 flex items-end justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">{text.eyebrow}</p>
          <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/60 bg-white/[0.02] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-slate-700"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {typeof p.type === "string" ? p.type : p.type[language]}
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-white">{p.name}</h3>
                </div>
                <div className="flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={p.github}
                    aria-label="GitHub"
                    className="rounded-full border border-slate-800/80 bg-slate-900/40 p-2 text-slate-300 transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={p.demo}
                    aria-label="Live Demo"
                    className="rounded-full border border-slate-800/80 bg-slate-900/40 p-2 text-slate-300 transition-colors hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {p.description[language]}
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
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

import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "Orbit ERP",
    type: "Sistema ERP / Gestão Empresarial",
    description:
      "Sistema web completo para controle de estoque e gestão empresarial. Desenvolvido com foco em usabilidade, segurança e inteligência de dados, oferecendo gerenciamento de produtos, movimentações de estoque, relatórios e indicadores para tomada de decisão.",
    stack: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    github: "https://github.com/Rafaaelsz/orbit-erp",
    demo: "https://orbit-erp.onrender.com/accounts/login/?next=/",
    status: "Concluído",
    featured: true,
  },
  {
    name: "CS2 Box Analyzer",
    type: "Extensão Chrome/Edge",
    description:
      "Ferramenta de análise passiva de risco para sites de abertura de caixas de Counter-Strike 2. Calcula valor esperado, ROI estimado, house edge e classificação de risco com base no conteúdo visível da página, sem automatizar ações do usuário.",
    stack: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    github: "https://github.com/Rafaaelsz/cs2-box-analyzer",
    demo: "#",
    status: "Concluído",
    featured: true,
  },
  {
    name: "Price Tracking API",
    type: "Backend / API",
    description:
      "API de monitoramento de preços com sistema de alertas automatizados. Utiliza processamento assíncrono para rastrear produtos, armazenar histórico de preços e notificar usuários sobre variações relevantes.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "BeautifulSoup"],
    github: "https://github.com/Rafaaelsz/price-tracking",
    demo: "#",
    status: "Concluído",
    featured: true,
  },
  {
    name: "ConverteAi",
    type: "Desktop Application",
    description:
      "Aplicação desktop desenvolvida em Python com interface gráfica em Tkinter para conversão de múltiplos formatos de arquivos. Oferece uma experiência simples e intuitiva para usuários que realizam conversões frequentes.",
    stack: ["Python", "Tkinter", "Pillow", "PyInstaller"],
    github: "https://github.com/Rafaaelsz/converteai",
    demo: "#",
    status: "Concluído",
    featured: false,
  },
  {
    name: "Floricultura Landing Page",
    type: "Frontend / Landing Page",
    description:
      "Landing page moderna e responsiva desenvolvida para uma floricultura, focada em apresentação de produtos, conversão de clientes e experiência visual elegante em dispositivos móveis e desktop.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Rafaaelsz/floricultura-landing-page",
    demo: "#",
    status: "Concluído",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="mb-14 flex items-end justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">Projetos</p>
          <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
            Aplicações completas, do schema à interface
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
                    {p.type}
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-white">{p.name}</h3>
                </div>
                <div className="flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="rounded-full border border-slate-800/80 bg-slate-900/40 p-2 text-slate-300 transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Live Demo"
                    className="rounded-full border border-slate-800/80 bg-slate-900/40 p-2 text-slate-300 transition-colors hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.description}</p>
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

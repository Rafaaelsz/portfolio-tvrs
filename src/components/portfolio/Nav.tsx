import { languageLabels, type Language } from "./i18n";

type NavProps = {
  language: Language;
  onToggleLanguage: () => void;
};

const content = {
  pt: {
    stack: "Stack",
    projects: "Projetos",
    contact: "Contato",
    hire: "Contratar",
    toggleLabel: "Mudar idioma para inglês",
  },
  en: {
    stack: "Stack",
    projects: "Projects",
    contact: "Contact",
    hire: "Hire me",
    toggleLabel: "Switch language to Portuguese",
  },
} satisfies Record<Language, Record<string, string>>;

export function Nav({ language, onToggleLanguage }: NavProps) {
  const text = content[language];
  const nextLanguage = language === "pt" ? "en" : "pt";

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(94%,820px)] -translate-x-1/2">
      <nav className="glass flex items-center justify-between rounded-full border border-slate-800/60 px-5 py-2.5">
        <a href="#" className="text-sm font-semibold tracking-tight text-white">
          Rafael Tavares
        </a>
        <div className="hidden items-center gap-6 text-xs text-slate-400 sm:flex">
          <a href="#stack" className="transition-colors hover:text-white">
            {text.stack}
          </a>
          <a href="#projects" className="transition-colors hover:text-white">
            {text.projects}
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            {text.contact}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-black transition-all duration-300 hover:bg-slate-200"
          >
            {text.hire}
          </a>
          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={text.toggleLabel}
            className="rounded-full border border-slate-800/80 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-slate-700 hover:bg-white/[0.05] hover:text-white"
          >
            {languageLabels[nextLanguage]}
          </button>
        </div>
      </nav>
    </header>
  );
}

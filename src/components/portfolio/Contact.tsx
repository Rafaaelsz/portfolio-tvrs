import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { Language } from "./i18n";

type ContactProps = {
  language: Language;
};

const content = {
  pt: {
    eyebrow: "Contato",
    title: "Vamos construir algo sólido juntos",
    description:
      "Conte sobre seu projeto. Respondo em até 24 horas com uma proposta inicial de arquitetura e próximos passos.",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "Email",
    emailPlaceholder: "voce@empresa.com",
    project: "Projeto",
    projectPlaceholder: "Descreva brevemente o que você quer construir...",
    submit: "Enviar mensagem",
    sending: "Abrindo email...",
    emailSubject: "Novo contato pelo portfólio",
    emailBodyName: "Nome",
    emailBodyProject: "Projeto",
    footer: "Construído com engenharia & atenção aos detalhes",
  },
  en: {
    eyebrow: "Contact",
    title: "Let's build something solid together",
    description:
      "Tell me about your project. I reply within 24 hours with an initial architecture proposal and next steps.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    project: "Project",
    projectPlaceholder: "Briefly describe what you want to build...",
    submit: "Send message",
    sending: "Opening email...",
    emailSubject: "New contact from portfolio",
    emailBodyName: "Name",
    emailBodyProject: "Project",
    footer: "Built with engineering & attention to detail",
  },
} satisfies Record<Language, Record<string, string>>;

export function Contact({ language }: ContactProps) {
  const [sent, setSent] = useState(false);
  const text = content[language];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const project = data.get("project");
    const subject = encodeURIComponent(text.emailSubject);
    const body = encodeURIComponent(
      `${text.emailBodyName}: ${name}\nEmail: ${email}\n\n${text.emailBodyProject}:\n${project}`,
    );

    window.location.href = `mailto:rafaeltperaldo@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">{text.eyebrow}</p>
          <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.title}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">{text.description}</p>

          <div className="mt-8 flex items-center gap-2">
            {[
              { href: "https://github.com/Rafaaelsz", label: "GitHub", Icon: Github },
              {
                href: "https://www.linkedin.com/in/rafael-tavares-p26/",
                label: "LinkedIn",
                Icon: Linkedin,
              },
              { href: "mailto:rafaeltperaldo@gmail.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full border border-slate-800/80 bg-white/[0.02] p-2.5 text-slate-400 backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-2xl border border-slate-800/60 p-6">
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-slate-500">
                {text.name}
              </label>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-slate-800/80 bg-slate-900/40 px-3 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-slate-600"
                placeholder={text.namePlaceholder}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-slate-500">
                {text.email}
              </label>
              <input
                name="email"
                required
                type="email"
                className="w-full rounded-lg border border-slate-800/80 bg-slate-900/40 px-3 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-slate-600"
                placeholder={text.emailPlaceholder}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-slate-500">
                {text.project}
              </label>
              <textarea
                name="project"
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-slate-800/80 bg-slate-900/40 px-3 py-2.5 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-slate-600"
                placeholder={text.projectPlaceholder}
              />
            </div>
            <button
              type="submit"
              className="btn-glow group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-slate-200"
            >
              {sent ? text.sending : text.submit}
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </form>
      </div>

      <div className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-slate-800/60 pt-8 text-xs text-slate-500 sm:flex-row">
        <span>© {new Date().getFullYear()} — Rafael Tavares</span>
        <span>{text.footer}</span>
      </div>
    </footer>
  );
}

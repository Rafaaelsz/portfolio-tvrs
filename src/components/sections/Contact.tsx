"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Section } from "@/components/layout/Section";
import { PortfolioButton } from "@/components/ui/PortfolioButton";
import { useLanguage } from "@/i18n/LanguageProvider";

const links = [
  { href: "https://github.com/Rafaaelsz", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/rafael-tavares-p26/", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:rafaeltperaldo@gmail.com", label: "Email", Icon: Mail },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { dictionary } = useLanguage();
  const text = dictionary.contact;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    const data = new FormData(event.currentTarget);

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: text.form.subject,
          message: data.get("project"),
          company: data.get("company"),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send contact message.");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/72 p-6 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(52,211,153,0.12),transparent_36%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase text-cyan-300/80">{text.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold text-white sm:text-5xl">
              {text.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-400">{text.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {links.map(({ href, label, Icon }) => {
                const translatedLabel =
                  label === "GitHub"
                    ? text.links.github
                    : label === "LinkedIn"
                      ? text.links.linkedin
                      : text.links.email;

                return (
                  <PortfolioButton
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    variant="secondary"
                  >
                    <Icon className="size-4" />
                    {translatedLabel}
                  </PortfolioButton>
                );
              })}
            </div>
          </div>

          <form onSubmit={onSubmit} className="grid gap-4">
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-semibold uppercase text-neutral-500">
                {text.form.name}
                <input
                  name="name"
                  required
                  placeholder={text.form.namePlaceholder}
                  className="h-12 rounded-xl border border-white/10 bg-black/24 px-3 text-sm font-normal normal-case text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-cyan-300/45"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase text-neutral-500">
                {text.form.email}
                <input
                  name="email"
                  required
                  type="email"
                  placeholder={text.form.emailPlaceholder}
                  className="h-12 rounded-xl border border-white/10 bg-black/24 px-3 text-sm font-normal normal-case text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-cyan-300/45"
                />
              </label>
            </div>
            <label className="grid gap-2 text-xs font-semibold uppercase text-neutral-500">
              {text.form.project}
              <textarea
                name="project"
                required
                rows={6}
                placeholder={text.form.projectPlaceholder}
                className="resize-none rounded-xl border border-white/10 bg-black/24 px-3 py-3 text-sm font-normal normal-case leading-7 text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-cyan-300/45"
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-medium text-neutral-950 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-70"
            >
              {status === "loading" ? text.form.sending : text.form.submit}
              <Send className="size-4" />
            </button>
            {status !== "idle" && status !== "loading" && (
              <p
                className={`text-sm leading-6 ${
                  status === "success" ? "text-emerald-300" : "text-rose-300"
                }`}
                role="status"
                aria-live="polite"
              >
                {status === "success" ? text.form.success : text.form.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

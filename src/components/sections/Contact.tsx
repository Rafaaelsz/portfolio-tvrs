"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { useRole } from "@/components/role/RoleProvider";
import { useLanguage } from "@/i18n/LanguageProvider";

const contactLinks = {
  email: { href: "mailto:rafaeltperaldo@gmail.com", label: "rafaeltperaldo@gmail.com" },
  github: { href: "https://github.com/Rafaaelsz", label: "github.com/Rafaaelsz ↗" },
  linkedin: {
    href: "https://www.linkedin.com/in/rafael-tavares-p26/",
    label: "linkedin.com/in/rafael-tavares-p26 ↗",
  },
} as const;

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [pickedKind, setPickedKind] = useState<string | null>(null);
  const { dictionary } = useLanguage();
  const { role } = useRole();
  const text = dictionary.contact;
  const form = text.form;

  // Sem escolha manual, quem veio pelo seletor de área provavelmente tem uma vaga.
  const kind = pickedKind ?? (role === "all" ? form.kinds[0].value : "job");
  const placeholder = role === "all" ? form.messagePlaceholder : dictionary.roles.message[role];

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    const element = event.currentTarget;
    const data = new FormData(element);
    const kindLabel = form.kinds.find((option) => option.value === kind)?.label ?? kind;
    // O tipo de pedido (e a área, se escolhida) vai no `subject`, que já existe no schema.
    const subject = `${form.subject} · ${kindLabel}${
      role === "all" ? "" : ` (${dictionary.roles.names[role]})`
    }`;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject,
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      if (!response.ok) {
        console.error("Contact request failed.", { status: response.status });
        throw new Error("Unable to send contact message.");
      }

      element.reset();
      setPickedKind(null);
      setStatus("success");
    } catch (error) {
      if (error instanceof TypeError) {
        console.error("Contact request could not reach the server.");
      }
      setStatus("error");
    }
  };

  return (
    <section className="ec-section contact" id="contact">
      <div className="halo" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="eyebrow">{text.eyebrow}</Reveal>
        <Reveal as="h2" delay={1} className="ec-h2">
          {text.titleTop}
          <br />
          {text.titleBottom}
        </Reveal>
        <div className="contact-row">
          <Reveal>
            <p className="contact-lead">{text.description}</p>
            <ul className="links">
              {(Object.keys(contactLinks) as Array<keyof typeof contactLinks>).map((key) => {
                const link = contactLinks[key];
                const external = link.href.startsWith("http");
                return (
                  <li key={key}>
                    <span>{text.links[key]}</span>
                    <a
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={1}>
            <form className="ec-form" onSubmit={onSubmit}>
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hp"
                aria-hidden="true"
              />
              <div className="chips" role="radiogroup" aria-label={form.kindsAria}>
                {form.kinds.map((option) => (
                  <label key={option.value}>
                    <input
                      type="radio"
                      name="kind"
                      value={option.value}
                      checked={kind === option.value}
                      onChange={() => setPickedKind(option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              <div className="ec-form-pair">
                <label>
                  <span className="sr-only">{form.name}</span>
                  <input
                    className="ec-input"
                    name="name"
                    required
                    minLength={2}
                    maxLength={120}
                    autoComplete="name"
                    placeholder={form.namePlaceholder}
                  />
                </label>
                <label>
                  <span className="sr-only">{form.email}</span>
                  <input
                    className="ec-input"
                    name="email"
                    type="email"
                    required
                    maxLength={180}
                    autoComplete="email"
                    placeholder={form.emailPlaceholder}
                  />
                </label>
              </div>
              <label>
                <span className="sr-only">{form.message}</span>
                <textarea
                  className="ec-input"
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  placeholder={placeholder}
                />
              </label>
              <button className="btn pri" type="submit" disabled={status === "loading"}>
                {status === "loading" ? form.sending : form.submit}
              </button>
              <p
                className={status === "error" ? "form-status is-error" : "form-status"}
                role="status"
                aria-live="polite"
              >
                {status === "success" ? form.success : status === "error" ? form.error : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

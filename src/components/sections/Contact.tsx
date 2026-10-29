"use client";

import { useRef, useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { useRole } from "@/components/role/RoleProvider";
import { useLanguage } from "@/i18n/LanguageProvider";
import { contactFields, invalidContactFields, type ContactField } from "@/lib/validations";

const contactLinks = {
  email: { href: "mailto:rafaeltperaldo@gmail.com", label: "rafaeltperaldo@gmail.com" },
  github: { href: "https://github.com/Rafaaelsz", label: "github.com/Rafaaelsz ↗" },
  linkedin: {
    href: "https://www.linkedin.com/in/rafael-tavares-p26/",
    label: "linkedin.com/in/rafael-tavares-p26 ↗",
  },
} as const;

type Status = "idle" | "loading" | "success" | "invalid" | "rate-limited" | "unavailable";

const contactEmail = contactLinks.email.label;

function readFields(form: HTMLFormElement) {
  const data = new FormData(form);
  return Object.fromEntries(contactFields.map((field) => [field, String(data.get(field) ?? "")]));
}

/** Campos que a API apontou no 400 (`fieldErrors`), filtrados pelos que o formulário conhece. */
async function serverInvalidFields(response: Response): Promise<ContactField[]> {
  const body: unknown = await response.json().catch(() => null);
  const fieldErrors =
    body && typeof body === "object" && "fieldErrors" in body ? body.fieldErrors : null;
  if (!fieldErrors || typeof fieldErrors !== "object") return [];
  return contactFields.filter((field) => field in fieldErrors);
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [invalid, setInvalid] = useState<ContactField[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
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
    const fields = readFields(element);

    // Mesmas regras do Zod da API, antes de gastar uma requisição (e uma vaga do rate limit).
    const clientInvalid = invalidContactFields(fields);
    if (clientInvalid.length) {
      showInvalid(clientInvalid);
      return;
    }
    const kindLabel = form.kinds.find((option) => option.value === kind)?.label ?? kind;
    // O tipo de pedido (e a área, se escolhida) vai no `subject`, que já existe no schema.
    const subject = `${form.subject} · ${kindLabel}${
      role === "all" ? "" : ` (${dictionary.roles.names[role]})`
    }`;

    setInvalid([]);
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, subject, company: data.get("company") }),
      });

      if (response.ok) {
        element.reset();
        setPickedKind(null);
        setStatus("success");
        return;
      }

      console.error("Contact request failed.", { status: response.status });
      if (response.status === 400) {
        showInvalid(await serverInvalidFields(response));
      } else {
        setStatus(response.status === 429 ? "rate-limited" : "unavailable");
      }
    } catch {
      console.error("Contact request could not reach the server.");
      setStatus("unavailable");
    }
  };

  function showInvalid(fields: ContactField[]) {
    setInvalid(fields);
    setStatus("invalid");
    if (fields[0]) (formRef.current?.elements.namedItem(fields[0]) as HTMLElement | null)?.focus();
  }

  // Ao corrigir um campo marcado, o erro some assim que ele passa nas regras.
  const onFieldInput = (field: ContactField) => {
    if (!invalid.includes(field) || !formRef.current) return;
    if (!invalidContactFields(readFields(formRef.current)).includes(field)) {
      const rest = invalid.filter((item) => item !== field);
      setInvalid(rest);
      if (!rest.length) setStatus("idle");
    }
  };

  const fieldProps = (field: ContactField) => {
    const isInvalid = invalid.includes(field);
    return {
      name: field,
      "aria-invalid": isInvalid || undefined,
      "aria-describedby": isInvalid ? `contact-${field}-error` : undefined,
      onInput: () => onFieldInput(field),
    };
  };

  const fieldError = (field: ContactField) =>
    invalid.includes(field) ? (
      <span className="field-error" id={`contact-${field}-error`}>
        {form.errors[field]}
      </span>
    ) : null;

  const [beforeEmail, afterEmail] = form.errors.unavailable.split("{email}");
  const statusMessage =
    status === "success" ? (
      form.success
    ) : status === "invalid" ? (
      form.errors.invalid
    ) : status === "rate-limited" ? (
      form.errors.rateLimited
    ) : status === "unavailable" ? (
      <>
        {beforeEmail}
        <a href={contactLinks.email.href}>{contactEmail}</a>
        {afterEmail}
      </>
    ) : (
      ""
    );
  const isError = status === "invalid" || status === "rate-limited" || status === "unavailable";

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
            <form className="ec-form" onSubmit={onSubmit} ref={formRef} noValidate>
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
                <div className="field">
                  <label>
                    <span className="sr-only">{form.name}</span>
                    <input
                      className="ec-input"
                      {...fieldProps("name")}
                      required
                      minLength={2}
                      maxLength={120}
                      autoComplete="name"
                      placeholder={form.namePlaceholder}
                    />
                  </label>
                  {fieldError("name")}
                </div>
                <div className="field">
                  <label>
                    <span className="sr-only">{form.email}</span>
                    <input
                      className="ec-input"
                      {...fieldProps("email")}
                      type="email"
                      required
                      maxLength={180}
                      autoComplete="email"
                      placeholder={form.emailPlaceholder}
                    />
                  </label>
                  {fieldError("email")}
                </div>
              </div>
              <div className="field">
                <label>
                  <span className="sr-only">{form.message}</span>
                  <textarea
                    className="ec-input"
                    {...fieldProps("message")}
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={5}
                    placeholder={placeholder}
                  />
                </label>
                {fieldError("message")}
              </div>
              <button className="btn pri" type="submit" disabled={status === "loading"}>
                {status === "loading" ? form.sending : form.submit}
              </button>
              <p
                className={isError ? "form-status is-error" : "form-status"}
                role="status"
                aria-live="polite"
              >
                {statusMessage}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

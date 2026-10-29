import type { Area, Role } from "@/data/projects";

export type Locale = "pt-BR" | "en-US";

export type ProjectCopy = {
  name: string;
  type: string;
  /** Uma frase curta para o card do bento e a lista. */
  summary: string;
  description: string;
  problem: string;
  features: string[];
};

export type Dictionary = {
  meta: {
    skip: string;
  };
  header: {
    aria: string;
    home: string;
    languageLabel: string;
    languageShort: string;
    cta: string;
    nav: {
      work: string;
      about: string;
      journey: string;
      contact: string;
    };
  };
  hero: {
    kicker: string;
    titleTop: string;
    titleLit: string;
    /** Texto com **negrito** marcado por asteriscos duplos. */
    description: string;
    ctas: {
      work: string;
      lume: string;
    };
    liveLabel: string;
  };
  roles: {
    label: string;
    aria: string;
    names: Record<Role, string>;
    /** Frase que aparece sob o seletor. Texto com **negrito**. */
    pitch: Record<Role, string>;
    /** Placeholder da mensagem no formulário quando a área está escolhida. */
    message: Record<Area, string>;
    dimmed: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    titleMuted: string;
    status: {
      production: string;
      live: string;
      code: string;
    };
    openLabel: string;
    githubLabel: string;
    lume: {
      funnelLabel: string;
      coolingLabel: string;
      shotAlt: string;
    };
    items: ProjectCopy[];
  };
  about: {
    eyebrow: string;
    /** Palavras entre *asteriscos* acendem em azul-gelo. */
    paragraph: string;
    skills: Array<{
      title: string;
      items: string;
      areas: Area[];
    }>;
  };
  journey: {
    eyebrow: string;
    title: string;
    steps: Array<{
      when: string;
      title: string;
      description: string;
    }>;
  };
  contact: {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    links: {
      email: string;
      github: string;
      linkedin: string;
    };
    form: {
      kindsAria: string;
      kinds: Array<{ value: string; label: string }>;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      subject: string;
    };
  };
  footer: {
    place: string;
  };
};

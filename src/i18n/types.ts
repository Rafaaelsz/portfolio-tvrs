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
    /** `document.title` e `<meta name="description">`; o PT também alimenta o SSR. */
    title: string;
    description: string;
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
    /** Texto alternativo dos prints reais que fazem pan nos cards, por `slug`. */
    previews: Record<string, string>;
    /** Card do My Demo App: os fluxos de exemplo ficam verdes quando o card entra na tela. */
    qa: {
      aria: string;
      flows: string[];
      /** `{n}` vira a quantidade de fluxos passando. */
      summary: string;
    };
    items: ProjectCopy[];
  };
  /** Textos da narrativa no scroll (direção A): hero, cena do Lume e trilho de capítulos. */
  narrative: {
    chapters: {
      aria: string;
      eclipse: string;
      lume: string;
      work: string;
      about: string;
      contact: string;
    };
    hero: {
      afterEyebrow: string;
      afterTitle: string;
      afterText: string;
      scrollCue: string;
    };
    lume: {
      tag: string;
      skip: string;
      beats: Array<{ title: string; text: string }>;
      /** Descrição da animação para leitor de tela (o quadro é decorativo). */
      srSummary: string;
      board: {
        title: string;
        stages: string;
        demo: string;
        open: string;
        won: string;
        columns: [string, string, string, string];
        cooling: string;
        accepted: string;
        /** Estado do card que anda: sem site, WhatsApp, proposta, aceita. */
        moverStates: [string, string, string, string];
        pdfTitle: string;
        pdfItem: string;
      };
    };
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
      errors: {
        /** Erro por campo, com as mesmas regras do `contactMessageSchema`. */
        name: string;
        email: string;
        message: string;
        /** 400: a API recusou os dados. */
        invalid: string;
        /** 429: rate limit. */
        rateLimited: string;
        /** 5xx ou rede. `{email}` vira um link de e-mail. */
        unavailable: string;
      };
      subject: string;
    };
  };
  footer: {
    place: string;
  };
};

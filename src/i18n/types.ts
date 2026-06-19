export type Locale = "pt-BR" | "en-US";

export type ProjectCopy = {
  name: string;
  type: string;
  description: string;
  problem: string;
  features: string[];
  visual: {
    label: string;
    nodes: string[];
    metrics: string[];
  };
};

export type Dictionary = {
  localeName: string;
  header: {
    aria: string;
    home: string;
    languageLabel: string;
    nav: {
      about: string;
      skills: string;
      projects: string;
      journey: string;
      contact: string;
    };
  };
  hero: {
    availability: string;
    eyebrow: string;
    title: string;
    description: string;
    ctas: {
      projects: string;
      contact: string;
    };
    stats: Array<{
      label: string;
      value: string;
    }>;
    architecture: Array<{
      title: string;
      tech: string;
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    stepLabel: string;
    flow: Array<{
      label: string;
      detail: string;
    }>;
    highlights: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: Array<{
      title: string;
      description: string;
      items: string[];
    }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    aside: string;
    problemLabel: string;
    githubLabel: string;
    demoLabel: string;
    items: ProjectCopy[];
  };
  journey: {
    eyebrow: string;
    title: string;
    description: string;
    milestones: Array<{
      marker: string;
      title: string;
      description: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    links: {
      github: string;
      linkedin: string;
      email: string;
    };
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      project: string;
      projectPlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      subject: string;
    };
  };
  footer: {
    built: string;
  };
};

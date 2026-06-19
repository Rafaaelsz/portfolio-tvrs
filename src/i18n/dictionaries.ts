import type { Dictionary, Locale } from "./types";

export const defaultLocale: Locale = "pt-BR";

export const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": {
    localeName: "PT-BR",
    header: {
      aria: "Navegação principal",
      home: "Página inicial de Rafael Tavares",
      languageLabel: "Alterar idioma para inglês dos Estados Unidos",
      nav: {
        about: "Sobre",
        skills: "Skills",
        projects: "Projetos",
        journey: "Jornada",
        contact: "Contato",
      },
    },
    hero: {
      availability: "Disponível para projetos de software",
      eyebrow: "Rafael Tavares",
      title: "Construindo aplicações robustas do design de APIs à experiência do usuário.",
      description:
        "Desenvolvedor Full Stack focado em Python, Java, React, Next.js, PostgreSQL e APIs REST. Crio sistemas práticos, automações e aplicações web com arquitetura limpa, interfaces responsivas e usabilidade real.",
      ctas: {
        projects: "Ver Projetos",
        contact: "Contato",
      },
      stats: [
        { label: "Backend", value: "APIs, dados, serviços" },
        { label: "Frontend", value: "React, Next.js, UI" },
        { label: "Sistemas", value: "Docker, Redis, jobs" },
      ],
      architecture: [
        { title: "Frontend", tech: "React / Next.js" },
        { title: "Camada API", tech: "FastAPI / Django" },
        { title: "Serviços", tech: "Jobs / Regras" },
        { title: "Banco de Dados", tech: "PostgreSQL / Redis" },
        { title: "Integrações", tech: "Docker / Webhooks" },
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Um perfil full stack prático com estrutura backend no centro.",
      description:
        "Gosto de construir sistemas úteis, organizados e fáceis de evoluir. Meu trabalho normalmente começa entendendo o problema, desenhando o fluxo de dados, estruturando o backend e então criando uma interface que torne a solução clara e usável.",
      stepLabel: "Etapa",
      flow: [
        { label: "Problema", detail: "Clarear o fluxo de trabalho" },
        { label: "Dados", detail: "Modelar o schema" },
        { label: "API", detail: "Expor contratos claros" },
        { label: "Interface", detail: "Tornar a solução usável" },
      ],
      highlights: [
        "Engenharia backend, APIs, bancos de dados e estrutura de sistemas.",
        "Projetos com Python, Java, Django, FastAPI, React, Next.js e PostgreSQL.",
        "Automação, ferramentas de produtividade e aplicações reais além de sites estáticos.",
      ],
    },
    skills: {
      eyebrow: "Ecossistema técnico",
      title: "Tecnologias apresentadas como um sistema, não como badges isoladas.",
      description:
        "React e Next.js se conectam a camadas de API, serviços backend se conectam a PostgreSQL e Redis, e Docker, GitHub Actions e automações apoiam a entrega.",
      groups: [
        {
          title: "Backend Core",
          description:
            "Design de APIs, regras de negócio, modelagem relacional e estrutura backend.",
          items: ["Python", "Java", "Django", "FastAPI", "REST APIs", "SQL"],
        },
        {
          title: "Frontend Core",
          description: "Interfaces responsivas que tornam capacidades backend claras e usáveis.",
          items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
        },
        {
          title: "Dados & Infraestrutura",
          description: "Persistência, cache, containers e práticas de entrega para sistemas reais.",
          items: ["PostgreSQL", "Redis", "Docker", "Git", "GitHub Actions", "Linux", "Bash"],
        },
        {
          title: "Automação & Ferramentas",
          description:
            "Integrações práticas, scraping, utilitários desktop e ferramentas de browser.",
          items: [
            "Celery",
            "BeautifulSoup",
            "Webhooks",
            "Tkinter",
            "PyInstaller",
            "Chrome Extension API",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Case studies com estética de produto para sistemas práticos.",
      description:
        "Cada projeto destaca um tipo específico de pensamento de software: modelagem de dados, ferramenta de navegador, processamento assíncrono, utilitário desktop e entrega frontend responsiva.",
      aside:
        "Os principais trabalhos são apresentados como fluxos de sistema para mostrar o que foi construído, por que importa e quais tecnologias sustentam a solução.",
      problemLabel: "Problema resolvido",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      items: [
        {
          name: "Orbit ERP",
          type: "Sistema ERP / Gestão Empresarial",
          description:
            "Sistema web completo para controle de estoque e gestão empresarial, focado em usabilidade, organização de dados e clareza operacional.",
          problem:
            "Dados de negócio precisam de fluxos claros: produtos, movimentações, estado do estoque, relatórios e decisões conectados ao mesmo modelo.",
          features: [
            "Fluxos de estoque",
            "Gestão de produtos",
            "Relatórios operacionais",
            "Interface guiada por dados",
          ],
          visual: {
            label: "Operações de estoque",
            nodes: ["Produtos", "Movimentos", "Relatórios", "PostgreSQL"],
            metrics: ["Schema", "Fluxos", "CRUD", "Dashboards"],
          },
        },
        {
          name: "CS2 Box Analyzer",
          type: "Extensão Chrome / Edge",
          description:
            "Extensão de análise passiva de risco para sites de abertura de caixas de Counter-Strike 2. Lê conteúdo visível da página e estima valor esperado, ROI, house edge e classificação de risco sem automatizar ações do usuário.",
          problem:
            "Dados complexos da página só se tornam úteis quando são extraídos, normalizados e apresentados como informação de risco clara.",
          features: [
            "Leitura de conteúdo visível",
            "Estimativa de valor esperado",
            "Métricas de ROI e house edge",
            "Classificação de risco",
          ],
          visual: {
            label: "Fluxo da extensão",
            nodes: ["Página", "Parser", "Métricas", "Risco"],
            metrics: ["EV", "ROI", "House edge", "Risco"],
          },
        },
        {
          name: "Price Tracking API",
          type: "Backend / API",
          description:
            "API para monitoramento de preços e alertas automatizados. Armazena histórico de preços, processa tarefas assíncronas e notifica usuários sobre mudanças relevantes.",
          problem:
            "Monitoramento de preços exige persistência confiável, jobs em background e alertas sem bloquear as requisições da API.",
          features: [
            "Pipeline assíncrono",
            "Histórico de preços",
            "Fila de jobs",
            "Alertas automáticos",
          ],
          visual: {
            label: "URL do produto até alerta",
            nodes: ["URL", "Scraper", "Fila", "Banco", "Alerta"],
            metrics: ["REST", "Workers", "Histórico", "Notificação"],
          },
        },
        {
          name: "ConverteAi",
          type: "Aplicação Desktop",
          description:
            "Aplicação desktop em Python com interface Tkinter para converter múltiplos formatos de arquivo de forma simples e prática.",
          problem:
            "Conversões frequentes de arquivos devem ser diretas, previsíveis e disponíveis fora do navegador.",
          features: [
            "Interface desktop",
            "Conversão em lote",
            "Processamento de imagens",
            "Executável empacotado",
          ],
          visual: {
            label: "Fluxo de conversão",
            nodes: ["Arquivos", "Validação", "Conversão", "Saída"],
            metrics: ["Local", "Prático", "Empacotado", "Utilitário"],
          },
        },
        {
          name: "Floricultura Landing Page",
          type: "Frontend / Landing Page",
          description:
            "Landing page moderna e responsiva para uma floricultura, focada em apresentação visual, conversão de clientes e experiência mobile.",
          problem:
            "Um negócio local precisa de uma página polida que apresente produtos com clareza e conduza visitantes ao contato.",
          features: [
            "Layout responsivo",
            "Apresentação de produtos",
            "CTA focado em conversão",
            "Interface mobile-first",
          ],
          visual: {
            label: "Experiência da landing page",
            nodes: ["Hero", "Produtos", "Mobile", "CTA"],
            metrics: ["Responsivo", "Visual", "Rápido", "Claro"],
          },
        },
      ],
    },
    journey: {
      eyebrow: "Jornada",
      title: "Uma evolução orientada para o desenvolvimento de aplicações completas.",
      description:
        "A narrativa é intencionalmente honesta: progressão por projetos práticos, automação, interfaces web, APIs backend e sistemas completos.",
      milestones: [
        {
          marker: "01",
          title: "Início com projetos práticos de software",
          description:
            "Construí uma base estudando programação por meio de aplicações úteis, não apenas exercícios isolados.",
        },
        {
          marker: "02",
          title: "Automação e ferramentas desktop com Python",
          description:
            "Explorei scripts, fluxos de arquivos e interfaces Tkinter para resolver problemas objetivos do dia a dia.",
        },
        {
          marker: "03",
          title: "Avanço para interfaces web modernas",
          description:
            "Evoluí para React, Next.js, TypeScript e Tailwind CSS para criar experiências frontend responsivas.",
        },
        {
          marker: "04",
          title: "APIs e sistemas orientados por dados",
          description:
            "Desenvolvi projetos backend com FastAPI, Django, PostgreSQL e Redis, conectando modelos de dados a fluxos reais de aplicação.",
        },
        {
          marker: "05",
          title: "Foco atual: produtos de software completos",
          description:
            "Combinando engenharia backend, clareza frontend, integrações e workflows de deploy em aplicações full stack estruturadas.",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos construir algo sólido.",
      description:
        "Tem uma ideia, projeto ou sistema que precisa de estrutura? Posso ajudar a transformar isso em uma aplicação clara, funcional e escalável.",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
      },
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "Email",
        emailPlaceholder: "voce@email.com",
        project: "Projeto",
        projectPlaceholder: "Conte o que você quer construir...",
        submit: "Enviar mensagem",
        sending: "Enviando mensagem...",
        success: "Mensagem enviada com sucesso. Obrigado pelo contato!",
        error: "Não foi possível enviar a mensagem. Tente novamente em instantes.",
        subject: "Novo contato pelo portfólio de Rafael Tavares",
      },
    },
    footer: {
      built: "Construído com Next.js, React Three Fiber e atenção à estrutura.",
    },
  },
  "en-US": {
    localeName: "EN-US",
    header: {
      aria: "Primary navigation",
      home: "Rafael Tavares home",
      languageLabel: "Switch language to Brazilian Portuguese",
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        journey: "Journey",
        contact: "Contact",
      },
    },
    hero: {
      availability: "Available for software projects",
      eyebrow: "Rafael Tavares",
      title: "Building robust applications from API design to user experience.",
      description:
        "Full Stack Developer focused on Python, Java, React, Next.js, PostgreSQL and REST APIs. I create practical systems, automations and web applications with clean architecture, responsive interfaces and real-world usability.",
      ctas: {
        projects: "View Projects",
        contact: "Contact",
      },
      stats: [
        { label: "Backend", value: "APIs, data, services" },
        { label: "Frontend", value: "React, Next.js, UI" },
        { label: "Systems", value: "Docker, Redis, jobs" },
      ],
      architecture: [
        { title: "Frontend", tech: "React / Next.js" },
        { title: "API Layer", tech: "FastAPI / Django" },
        { title: "Services", tech: "Jobs / Rules" },
        { title: "Database", tech: "PostgreSQL / Redis" },
        { title: "Integrations", tech: "Docker / Webhooks" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "A practical full stack profile with backend structure at the center.",
      description:
        "I like building systems that are useful, organized and easy to evolve. My work usually starts with understanding the problem, designing the data flow, structuring the backend and then creating an interface that makes the solution clear and usable.",
      stepLabel: "Step",
      flow: [
        { label: "Problem", detail: "Clarify the workflow" },
        { label: "Data", detail: "Shape the schema" },
        { label: "API", detail: "Expose clear contracts" },
        { label: "Interface", detail: "Make it usable" },
      ],
      highlights: [
        "Backend engineering, APIs, databases and system structure.",
        "Portfolio projects with Python, Java, Django, FastAPI, React, Next.js and PostgreSQL.",
        "Automation, productivity tools and real-world applications beyond static websites.",
      ],
    },
    skills: {
      eyebrow: "Skills ecosystem",
      title: "Technologies presented as a system, not isolated badges.",
      description:
        "React and Next.js connect to API layers, backend services connect to PostgreSQL and Redis, and Docker, GitHub Actions and automation tools support delivery.",
      groups: [
        {
          title: "Backend Core",
          description:
            "API design, business rules, relational data modeling and backend structure.",
          items: ["Python", "Java", "Django", "FastAPI", "REST APIs", "SQL"],
        },
        {
          title: "Frontend Core",
          description: "Responsive interfaces that make backend capabilities clear and usable.",
          items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
        },
        {
          title: "Data & Infrastructure",
          description:
            "Persistence, caching, containers and delivery habits that support real systems.",
          items: ["PostgreSQL", "Redis", "Docker", "Git", "GitHub Actions", "Linux", "Bash"],
        },
        {
          title: "Automation & Tools",
          description: "Practical integrations, scraping, desktop utilities and browser tooling.",
          items: [
            "Celery",
            "BeautifulSoup",
            "Webhooks",
            "Tkinter",
            "PyInstaller",
            "Chrome Extension API",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Product-style case studies for practical systems.",
      description:
        "Each project highlights a specific kind of software thinking: data modeling, browser tooling, async processing, desktop utility and responsive frontend delivery.",
      aside:
        "The strongest work is presented as system flows so visitors can see what was built, why it matters and which technologies carried the solution.",
      problemLabel: "Problem solved",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      items: [
        {
          name: "Orbit ERP",
          type: "ERP System / Business Management",
          description:
            "A complete web system for inventory control and business management, focused on usability, data organization and operational clarity.",
          problem:
            "Business data needs clear flows: products, movements, stock state, reports and decisions all connected to the same model.",
          features: [
            "Inventory workflows",
            "Product and stock management",
            "Operational reports",
            "Database-driven screens",
          ],
          visual: {
            label: "Inventory operations",
            nodes: ["Products", "Stock moves", "Reports", "PostgreSQL"],
            metrics: ["Schema", "Workflows", "CRUD", "Dashboards"],
          },
        },
        {
          name: "CS2 Box Analyzer",
          type: "Chrome / Edge Extension",
          description:
            "A passive risk analysis browser extension for Counter-Strike 2 case-opening websites. It reads visible page content and estimates expected value, ROI, house edge and risk classification without automating user actions.",
          problem:
            "Complex page data becomes useful only when it is extracted, normalized and presented as clear risk information.",
          features: [
            "Visible content parsing",
            "Expected value estimates",
            "ROI and house edge metrics",
            "Risk classification UI",
          ],
          visual: {
            label: "Extension analysis flow",
            nodes: ["Page data", "Parser", "Metrics", "Risk score"],
            metrics: ["EV", "ROI", "House edge", "Risk"],
          },
        },
        {
          name: "Price Tracking API",
          type: "Backend / API",
          description:
            "An API for price monitoring and automated alerts. It stores product price history, processes asynchronous tasks and notifies users about relevant price changes.",
          problem:
            "Price monitoring requires reliable persistence, background jobs and alerts without blocking API requests.",
          features: [
            "Async scraping pipeline",
            "Price history storage",
            "Background job queue",
            "Automated alert flow",
          ],
          visual: {
            label: "Product URL to alert",
            nodes: ["Product URL", "Scraper", "Queue", "Database", "Alert"],
            metrics: ["REST", "Workers", "History", "Notify"],
          },
        },
        {
          name: "ConverteAi",
          type: "Desktop Application",
          description:
            "A Python desktop application with a Tkinter interface for converting multiple file formats in a simple and practical way.",
          problem:
            "Frequent file conversion should feel direct, predictable and available outside the browser.",
          features: [
            "Desktop interface",
            "Batch-oriented conversion",
            "Image processing",
            "Packaged executable",
          ],
          visual: {
            label: "Desktop conversion flow",
            nodes: ["Files", "Validation", "Convert", "Output"],
            metrics: ["Local", "Practical", "Packaged", "Utility"],
          },
        },
        {
          name: "Floricultura Landing Page",
          type: "Frontend / Landing Page",
          description:
            "A modern and responsive landing page for a flower shop, focused on visual presentation, customer conversion and mobile experience.",
          problem:
            "A local business needs a polished page that presents products clearly and guides visitors toward contact.",
          features: [
            "Responsive layout",
            "Product presentation",
            "Conversion-focused CTA",
            "Mobile-first interface",
          ],
          visual: {
            label: "Landing page experience",
            nodes: ["Hero", "Products", "Mobile", "CTA"],
            metrics: ["Responsive", "Visual", "Fast", "Clear"],
          },
        },
      ],
    },
    journey: {
      eyebrow: "Journey",
      title: "A growth-oriented path into complete application development.",
      description:
        "The story is intentionally honest: focused progression through practical projects, automation, web interfaces, backend APIs and full systems.",
      milestones: [
        {
          marker: "01",
          title: "Started with practical software projects",
          description:
            "Built a foundation by studying programming through useful applications instead of isolated exercises.",
        },
        {
          marker: "02",
          title: "Created automation and desktop tools with Python",
          description:
            "Explored scripts, file workflows and Tkinter interfaces to solve focused day-to-day problems.",
        },
        {
          marker: "03",
          title: "Moved into modern web interfaces",
          description:
            "Advanced into React, Next.js, TypeScript and Tailwind CSS to build responsive frontend experiences.",
        },
        {
          marker: "04",
          title: "Built APIs and data-backed systems",
          description:
            "Developed backend projects with FastAPI, Django, PostgreSQL and Redis, connecting data models to real application flows.",
        },
        {
          marker: "05",
          title: "Current focus: complete software products",
          description:
            "Combining backend engineering, frontend clarity, integrations and deployment workflows into structured full stack applications.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something solid.",
      description:
        "Have an idea, project or system that needs structure? I can help transform it into a clear, functional and scalable application.",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
      },
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        project: "Project",
        projectPlaceholder: "Tell me what you want to build...",
        submit: "Send message",
        sending: "Sending message...",
        success: "Message sent successfully. Thanks for reaching out!",
        error: "Unable to send the message. Please try again soon.",
        subject: "New contact from Rafael Tavares portfolio",
      },
    },
    footer: {
      built: "Built with Next.js, React Three Fiber and attention to structure.",
    },
  },
};

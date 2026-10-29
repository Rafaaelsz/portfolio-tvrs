import type { Dictionary, Locale } from "./types";

export const defaultLocale: Locale = "pt-BR";

export const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": {
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
        "Do produto que estou construindo, o Lume, a uma landing page para cliente, MVPs de SaaS, APIs e automação de testes mobile. Cada card mostra o problema, o que o projeto faz e a stack.",
      aside:
        "Os principais trabalhos são apresentados como fluxos de sistema para mostrar o que foi construído, por que importa e quais tecnologias sustentam a solução.",
      problemLabel: "Problema resolvido",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      featuredLabel: "Em destaque",
      items: [
        {
          name: "Lume",
          type: "Micro-SaaS / CRM de prospecção",
          description:
            "CRM para freelancers e pequenas agências que vendem sites. Você cadastra ou importa empresas por CSV, acompanha cada lead no funil até o fechamento e gera a proposta comercial em PDF com escopo, valor, prazo e validade. Um assistente de IA resume o lead, sugere o próximo passo e rascunha a mensagem.",
          problem:
            "Quem vende site para negócio local costuma controlar contatos em planilha e conversa solta. O Lume junta a lista de empresas, o histórico de cada contato e a proposta no mesmo lugar.",
          features: [
            "Funil de leads com histórico",
            "Importação de empresas por CSV",
            "Propostas em PDF com texto sugerido pela IA",
            "Busca de empresas sem site via Google Places e OpenStreetMap, sem scraping (ainda desligada)",
          ],
          linkLabel: "Conhecer o Lume",
          visual: {
            label: "Da empresa ao fechamento",
            nodes: ["Empresa", "Lead", "Funil", "Proposta"],
            metrics: ["CSV", "IA", "PDF", "Prisma"],
          },
        },
        {
          name: "Estúdio Pilates Giselle Meyer",
          type: "Landing page / Cliente freelance",
          description:
            "Página única para um estúdio de Pilates com duas unidades no Centro de Florianópolis. Mostra unidades, horários e modalidades e leva a visitante a agendar a aula experimental pelo WhatsApp da unidade mais próxima, com a mensagem já pronta.",
          problem:
            "Com duas unidades, a visitante precisa saber qual fica mais perto e falar com a certa. Cada unidade tem o próprio botão de WhatsApp, que aparece nos cards, no bloco final e no botão flutuante.",
          features: [
            "WhatsApp por unidade com mensagem pronta",
            "Espiral animada em canvas",
            "Perguntas frequentes com <details>",
            "HTML, CSS e JS puros, sem framework",
          ],
          linkLabel: "Ver site",
          visual: {
            label: "Visita até agendamento",
            nodes: ["Hero", "Unidades", "Modalidades", "WhatsApp"],
            metrics: ["2 unidades", "Mobile", "Teclado", "Sem build"],
          },
        },
        {
          name: "ConsorcioTrack",
          type: "MVP de micro-SaaS B2B",
          description:
            "Sistema para corretores e pequenas equipes que vendem consórcio. Reúne funil comercial, clientes, histórico de contatos, agenda de follow-ups, grupos, cotas e um simulador de lance.",
          problem:
            "Cliente, grupo e cota costumam ficar em controles separados. O MVP liga os três ao funil e separa os dados por organização (multi-tenant).",
          features: [
            "Funil e follow-ups",
            "Grupos e cotas vinculados ao cliente",
            "Simulador de lance",
            "API Spring Boot com migrações Flyway",
          ],
          visual: {
            label: "Cliente, grupo e cota",
            nodes: ["Cliente", "Funil", "Cota", "Lance"],
            metrics: ["REST", "Multi-tenant", "Flyway", "Docker"],
          },
        },
        {
          name: "Finder Vagas TI",
          type: "Full stack / Busca de vagas",
          description:
            "Busca pública de vagas de tecnologia com filtros por tecnologia, empresa, modalidade, senioridade, contrato, local e salário. As vagas entram por ingestão de fontes públicas oficiais, como Greenhouse e Lever.",
          problem:
            "Vagas de TI ficam espalhadas pelos sistemas de recrutamento de cada empresa. O projeto junta tudo numa busca só e calcula um match simples com as tecnologias que a pessoa conhece.",
          features: [
            "Filtros combinados e paginação",
            "Ingestão de Greenhouse e Lever",
            "Match por tecnologia",
            "API documentada no Swagger",
          ],
          visual: {
            label: "Fonte até busca",
            nodes: ["Greenhouse / Lever", "Ingestão", "API Fastify", "Busca"],
            metrics: ["REST", "Prisma", "Zod", "Swagger"],
          },
        },
        {
          name: "QA MyDemoApp",
          type: "QA / Testes mobile",
          description:
            "Casos de teste documentados e automação com Maestro sobre o app Android de prática da Sauce Labs. Cada caso tem o mesmo ID no documento e no flow, para achar a automação correspondente.",
          problem:
            "Praticar o ciclo de QA de ponta a ponta: escrever o caso de teste, automatizar e rodar no CI, num emulador Android dentro do GitHub Actions.",
          features: [
            "Login, compra completa e carrinho",
            "Flows Maestro em YAML",
            "Emulador Android no GitHub Actions",
            "ID igual no doc e no flow",
          ],
          visual: {
            label: "Caso de teste até CI",
            nodes: ["Test case", "Flow", "Emulador", "CI"],
            metrics: ["Maestro", "Android", "YAML", "Actions"],
          },
        },
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
        "From the product I am building, Lume, to a client landing page, SaaS MVPs, APIs and mobile test automation. Each card shows the problem, what the project does and the stack.",
      aside:
        "The strongest work is presented as system flows so visitors can see what was built, why it matters and which technologies carried the solution.",
      problemLabel: "Problem solved",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      featuredLabel: "Featured",
      items: [
        {
          name: "Lume",
          type: "Micro-SaaS / Prospecting CRM",
          description:
            "A CRM for freelancers and small agencies that sell websites. You add or import businesses from CSV, follow each lead through the pipeline until the deal closes and generate a PDF proposal with scope, price, deadline and validity. An AI assistant summarizes the lead, suggests the next step and drafts the message.",
          problem:
            "People who sell websites to local businesses usually track contacts in spreadsheets and scattered chats. Lume keeps the business list, each contact's history and the proposal in one place.",
          features: [
            "Lead pipeline with history",
            "Business import from CSV",
            "PDF proposals with AI-suggested copy",
            "Search for businesses without a website via Google Places and OpenStreetMap, no scraping (not enabled yet)",
          ],
          linkLabel: "Visit Lume",
          visual: {
            label: "From business to closed deal",
            nodes: ["Business", "Lead", "Pipeline", "Proposal"],
            metrics: ["CSV", "AI", "PDF", "Prisma"],
          },
        },
        {
          name: "Estúdio Pilates Giselle Meyer",
          type: "Landing page / Freelance client",
          description:
            "A single page for a Pilates studio with two locations in downtown Florianópolis, Brazil. It shows locations, hours and class types and leads visitors to book a trial class on the WhatsApp of the nearest location, with the message already written.",
          problem:
            "With two locations, visitors need to know which one is closer and reach the right one. Each location has its own WhatsApp button, shown on the location cards, in the final section and in the floating button.",
          features: [
            "WhatsApp per location with a ready message",
            "Animated canvas spiral",
            "FAQ built with <details>",
            "Plain HTML, CSS and JS, no framework",
          ],
          linkLabel: "Visit site",
          visual: {
            label: "Visit to booking",
            nodes: ["Hero", "Locations", "Classes", "WhatsApp"],
            metrics: ["2 locations", "Mobile", "Keyboard", "No build"],
          },
        },
        {
          name: "ConsorcioTrack",
          type: "B2B micro-SaaS MVP",
          description:
            "A system for brokers and small teams that sell consórcio, a Brazilian pooled-purchase plan. It brings together the sales pipeline, clients, contact history, follow-up agenda, groups, quotas and a bid simulator.",
          problem:
            "Client, group and quota usually live in separate spreadsheets. The MVP ties all three to the pipeline and keeps each organization's data apart (multi-tenant).",
          features: [
            "Pipeline and follow-ups",
            "Groups and quotas linked to the client",
            "Bid simulator",
            "Spring Boot API with Flyway migrations",
          ],
          visual: {
            label: "Client, group and quota",
            nodes: ["Client", "Pipeline", "Quota", "Bid"],
            metrics: ["REST", "Multi-tenant", "Flyway", "Docker"],
          },
        },
        {
          name: "Finder Vagas TI",
          type: "Full stack / Job search",
          description:
            "Public search for tech jobs with filters for technology, company, work model, seniority, contract, location and salary. Jobs come in through ingestion from official public sources such as Greenhouse and Lever.",
          problem:
            "Tech jobs are spread across each company's applicant tracking system. The project gathers them into a single search and computes a simple match against the technologies a person knows.",
          features: [
            "Combined filters and pagination",
            "Greenhouse and Lever ingestion",
            "Match by technology",
            "API documented in Swagger",
          ],
          visual: {
            label: "Source to search",
            nodes: ["Greenhouse / Lever", "Ingestion", "Fastify API", "Search"],
            metrics: ["REST", "Prisma", "Zod", "Swagger"],
          },
        },
        {
          name: "QA MyDemoApp",
          type: "QA / Mobile testing",
          description:
            "Documented test cases and Maestro automation for Sauce Labs' Android practice app. Each case has the same ID in the document and in the flow, so the matching automation is easy to find.",
          problem:
            "Practicing the QA cycle end to end: write the test case, automate it and run it in CI, on an Android emulator inside GitHub Actions.",
          features: [
            "Login, full checkout and cart",
            "Maestro flows in YAML",
            "Android emulator on GitHub Actions",
            "Same ID in doc and flow",
          ],
          visual: {
            label: "Test case to CI",
            nodes: ["Test case", "Flow", "Emulator", "CI"],
            metrics: ["Maestro", "Android", "YAML", "Actions"],
          },
        },
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

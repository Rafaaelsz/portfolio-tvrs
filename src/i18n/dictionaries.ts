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
        "Um produto próprio, um trabalho para cliente e projetos que mostram como resolvo problemas: CRM e SaaS, landing page, APIs, processamento assíncrono, extensão de navegador e testes de QA.",
      aside:
        "Os principais trabalhos são apresentados como fluxos de sistema para mostrar o que foi construído, por que importa e quais tecnologias sustentam a solução.",
      problemLabel: "Problema resolvido",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      items: [
        {
          name: "Lume",
          type: "Produto próprio / SaaS",
          description:
            "CRM de prospecção para freelancers e pequenas agências que vendem sites. Você cola um link do Google Maps, do Instagram ou de um site, ou importa uma planilha CSV, e o Lume cria o lead com nome, endereço, contatos e a indicação de se a empresa parece ter site. Daí em diante, o lead segue no funil até o fechamento, com proposta em PDF e lembrete de follow-up.",
          problem:
            "Quem vende sites costuma prospectar em planilha e em conversas soltas no WhatsApp. O histórico se perde, o follow-up é esquecido e não dá para ver em que etapa o funil vaza.",
          features: [
            "Lead a partir de link ou CSV",
            "Funil com aviso de lead esfriando",
            "Propostas comerciais em PDF",
            "Assistente de IA para resumo e mensagens",
          ],
          demoLabel: "Conhecer o Lume",
          visual: {
            label: "Do link colado ao contrato",
            nodes: ["Link / CSV", "Lead", "Funil", "Proposta", "Fechamento"],
            metrics: ["SaaS", "Planos Grátis e Pro", "IA sob demanda", "PDF"],
          },
        },
        {
          name: "Estúdio Pilates Giselle Meyer",
          type: "Cliente freelance / Landing page",
          description:
            "Landing page de um estúdio de Pilates com duas unidades no Centro de Florianópolis. A página apresenta o método, as unidades, os aparelhos e as dúvidas mais comuns, e leva a visitante a agendar uma aula experimental pelo WhatsApp da unidade mais próxima, com a mensagem já escrita.",
          problem:
            "Cada unidade do estúdio atende por um WhatsApp diferente. A página precisava mostrar com clareza onde fica cada uma e mandar o contato para o número certo.",
          features: [
            "Um botão de agendamento por unidade",
            "Mensagem de WhatsApp pronta",
            "Layout mobile-first",
            "HTML, CSS e JS sem framework",
          ],
          demoLabel: "Ver o site",
          visual: {
            label: "Da visita ao agendamento",
            nodes: ["Página", "Unidade", "WhatsApp", "Aula experimental"],
            metrics: ["Cliente real", "2 unidades", "Mobile-first", "Sem framework"],
          },
        },
        {
          name: "ConsorcioTrack",
          type: "MVP / Micro-SaaS B2B",
          description:
            "MVP de um sistema para corretores, consultores e pequenas equipes que vendem consórcio. Reúne o funil comercial, os clientes, o histórico de contatos, a agenda de follow-ups, os grupos e as cotas num só lugar, com um simulador de lance.",
          problem:
            "Vender consórcio exige acompanhar cliente, grupo, cota e lance ao mesmo tempo, e essa informação costuma ficar espalhada entre planilhas e anotações.",
          features: [
            "Funil comercial e follow-ups",
            "Clientes com histórico de contatos",
            "Grupos, cotas e vínculos",
            "Simulador de lance",
          ],
          visual: {
            label: "Do cliente à cota",
            nodes: ["Cliente", "Funil", "Grupo", "Cota", "Lance"],
            metrics: ["Multi-tenant", "API REST", "Flyway", "Docker Compose"],
          },
        },
        {
          name: "Finder de Vagas TI",
          type: "Full stack / API pública",
          description:
            "Buscador público de vagas de tecnologia. Uma API em Fastify importa vagas de fontes públicas oficiais, como Greenhouse e Lever, e o frontend em Next.js permite buscar e filtrar por tecnologia, empresa, modalidade, senioridade, contrato, localização e salário.",
          problem:
            "As vagas de tecnologia ficam espalhadas por vários portais de recrutamento, cada um com o seu formato e os seus filtros.",
          features: [
            "Importação de Greenhouse e Lever",
            "Filtros combinados e paginação",
            "Match simples por tecnologia",
            "Documentação da API no Swagger",
          ],
          visual: {
            label: "Da fonte pública à busca",
            nodes: ["Greenhouse / Lever", "Importação", "API", "Filtros"],
            metrics: ["REST", "Swagger", "Vitest", "Docker"],
          },
        },
        {
          name: "Testes do My Demo App",
          type: "QA / Testes mobile",
          description:
            "Testes manuais e automatizados do My Demo App, o app Android de prática da Sauce Labs. Cada caso de teste tem a sua documentação e, quando automatizado, um flow do Maestro com o mesmo ID, para achar a automação a partir do documento.",
          problem:
            "Um teste que não está escrito não se repete do mesmo jeito. Documentar cada caso e ligá-lo à automação deixa a verificação reproduzível.",
          features: [
            "Casos de teste documentados",
            "Flows do Maestro em YAML",
            "Login, compra e carrinho",
            "Mesmo ID no documento e no flow",
          ],
          visual: {
            label: "Do caso de teste ao flow",
            nodes: ["Caso de teste", "Flow YAML", "Maestro", "Emulador Android"],
            metrics: ["Mobile", "Prioridades", "Manual + automação", "Estudo de QA"],
          },
        },
        {
          name: "CS2 Box Analyzer",
          type: "Extensão Chrome / Edge",
          description:
            "Extensão de análise passiva de risco para sites de abertura de caixas de Counter-Strike 2. Lê o conteúdo visível da página e estima valor esperado, ROI, house edge e classificação de risco, sem automatizar nenhuma ação do usuário.",
          problem:
            "Os dados de uma caixa só ajudam a decidir quando são extraídos, normalizados e mostrados como uma informação de risco clara.",
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
            "API de monitoramento de preços com alertas. Você cadastra a URL de um produto e um preço-alvo; um worker em background consulta o preço periodicamente, guarda o histórico e avisa pelo Telegram quando o valor chega ao alvo.",
          problem:
            "Monitorar preço exige consultas periódicas, histórico confiável e alertas, sem travar as requisições da API.",
          features: [
            "Scraping em background",
            "Histórico de preços",
            "Agendamento com Celery Beat",
            "Alerta pelo Telegram",
          ],
          visual: {
            label: "Da URL do produto ao alerta",
            nodes: ["URL", "Scraper", "Fila", "Banco", "Alerta"],
            metrics: ["REST", "Workers", "Histórico", "Telegram"],
          },
        },
        {
          name: "Orbit ERP",
          type: "Sistema web / Gestão de estoque",
          description:
            "Sistema web de controle de estoque para quem ainda gerencia produtos em planilha: cadastro de produtos com margem de lucro, entradas e saídas com validação de saldo, dashboard com alerta de estoque baixo e relatórios em PDF.",
          problem:
            "Planilhas de estoque desorganizadas não impedem venda sem saldo nem mostram o que está acabando.",
          features: [
            "Entradas e saídas com validação",
            "Produtos com margem de lucro",
            "Alerta de estoque baixo",
            "Relatórios em PDF",
          ],
          visual: {
            label: "Operações de estoque",
            nodes: ["Produtos", "Movimentos", "Relatórios", "PostgreSQL"],
            metrics: ["Dashboard", "Login", "CRUD", "PDF"],
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
        "My own product, client work and projects that show how I solve problems: CRM and SaaS, landing pages, APIs, async processing, browser tooling and QA testing.",
      aside:
        "The strongest work is presented as system flows so visitors can see what was built, why it matters and which technologies carried the solution.",
      problemLabel: "Problem solved",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      items: [
        {
          name: "Lume",
          type: "Own product / SaaS",
          description:
            "A prospecting CRM for freelancers and small agencies that sell websites. You paste a Google Maps, Instagram or website link, or import a CSV spreadsheet, and Lume creates the lead with name, address, contacts and whether the business appears to have a website. From there, the lead moves through the pipeline until the deal closes, with a PDF proposal and follow-up reminders.",
          problem:
            "People who sell websites often prospect in spreadsheets and scattered WhatsApp chats. History gets lost, follow-ups are forgotten and there is no way to see where the pipeline leaks.",
          features: [
            "Leads from a link or CSV",
            "Pipeline that flags cooling leads",
            "Sales proposals as PDF",
            "AI assistant for summaries and messages",
          ],
          demoLabel: "See Lume",
          visual: {
            label: "From pasted link to contract",
            nodes: ["Link / CSV", "Lead", "Pipeline", "Proposal", "Closed"],
            metrics: ["SaaS", "Free and Pro plans", "On-demand AI", "PDF"],
          },
        },
        {
          name: "Giselle Meyer Pilates Studio",
          type: "Freelance client / Landing page",
          description:
            "A landing page for a Pilates studio with two locations in downtown Florianópolis, Brazil. It presents the method, the locations, the equipment and common questions, and leads visitors to book a trial class through the WhatsApp number of the nearest location, with the message already written.",
          problem:
            "Each location answers on a different WhatsApp number. The page had to make it clear where each one is and send the visitor to the right number.",
          features: [
            "One booking button per location",
            "Prefilled WhatsApp message",
            "Mobile-first layout",
            "Plain HTML, CSS and JS",
          ],
          demoLabel: "Visit the site",
          visual: {
            label: "From visit to booking",
            nodes: ["Page", "Location", "WhatsApp", "Trial class"],
            metrics: ["Real client", "2 locations", "Mobile-first", "No framework"],
          },
        },
        {
          name: "ConsorcioTrack",
          type: "MVP / B2B micro-SaaS",
          description:
            "An MVP for brokers, consultants and small teams that sell consórcio, a Brazilian pooled-purchase plan. It brings the sales pipeline, clients, contact history, follow-up schedule, groups and quotas into one place, plus a bid simulator.",
          problem:
            "Selling consórcio means tracking client, group, quota and bid at the same time, and that information usually ends up spread across spreadsheets and notes.",
          features: [
            "Sales pipeline and follow-ups",
            "Clients with contact history",
            "Groups, quotas and links",
            "Bid simulator",
          ],
          visual: {
            label: "From client to quota",
            nodes: ["Client", "Pipeline", "Group", "Quota", "Bid"],
            metrics: ["Multi-tenant", "REST API", "Flyway", "Docker Compose"],
          },
        },
        {
          name: "Finder de Vagas TI",
          type: "Full stack / Public API",
          description:
            "A public search tool for tech jobs. A Fastify API imports openings from official public sources such as Greenhouse and Lever, and the Next.js frontend lets you search and filter by technology, company, work model, seniority, contract, location and salary.",
          problem:
            "Tech job openings are spread across many recruiting platforms, each with its own format and filters.",
          features: [
            "Greenhouse and Lever import",
            "Combined filters and pagination",
            "Simple match by technology",
            "Swagger API docs",
          ],
          visual: {
            label: "From public source to search",
            nodes: ["Greenhouse / Lever", "Import", "API", "Filters"],
            metrics: ["REST", "Swagger", "Vitest", "Docker"],
          },
        },
        {
          name: "My Demo App Tests",
          type: "QA / Mobile testing",
          description:
            "Manual and automated tests for My Demo App, the Sauce Labs Android practice app. Each test case has its own document and, when automated, a Maestro flow with the same ID, so the automation is easy to find from the document.",
          problem:
            "A test that is not written down is not repeated the same way. Documenting each case and linking it to the automation makes the check reproducible.",
          features: [
            "Documented test cases",
            "Maestro flows in YAML",
            "Login, checkout and cart",
            "Same ID in document and flow",
          ],
          visual: {
            label: "From test case to flow",
            nodes: ["Test case", "YAML flow", "Maestro", "Android emulator"],
            metrics: ["Mobile", "Priorities", "Manual + automated", "QA study"],
          },
        },
        {
          name: "CS2 Box Analyzer",
          type: "Chrome / Edge Extension",
          description:
            "A passive risk analysis browser extension for Counter-Strike 2 case-opening websites. It reads visible page content and estimates expected value, ROI, house edge and risk classification without automating any user action.",
          problem:
            "Case data only helps a decision when it is extracted, normalized and shown as clear risk information.",
          features: [
            "Visible content parsing",
            "Expected value estimates",
            "ROI and house edge metrics",
            "Risk classification",
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
            "A price monitoring API with alerts. You register a product URL and a target price; a background worker checks the price periodically, stores the history and sends a Telegram message when the price reaches the target.",
          problem:
            "Price monitoring needs periodic checks, reliable history and alerts without blocking API requests.",
          features: [
            "Background scraping",
            "Price history",
            "Scheduling with Celery Beat",
            "Telegram alerts",
          ],
          visual: {
            label: "Product URL to alert",
            nodes: ["Product URL", "Scraper", "Queue", "Database", "Alert"],
            metrics: ["REST", "Workers", "History", "Telegram"],
          },
        },
        {
          name: "Orbit ERP",
          type: "Web system / Inventory management",
          description:
            "An inventory control web system for businesses still managing products in spreadsheets: products with profit margin, stock in and out with balance validation, a dashboard with low-stock alerts and PDF reports.",
          problem:
            "Messy inventory spreadsheets neither prevent selling without stock nor show what is running out.",
          features: [
            "Stock moves with validation",
            "Products with profit margin",
            "Low-stock alerts",
            "PDF reports",
          ],
          visual: {
            label: "Inventory operations",
            nodes: ["Products", "Stock moves", "Reports", "PostgreSQL"],
            metrics: ["Dashboard", "Login", "CRUD", "PDF"],
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

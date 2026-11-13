import type { Dictionary, Locale } from "./types";

export const defaultLocale: Locale = "pt-BR";

export const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": {
    meta: {
      title: "Rafael Tavares · Eu construo e coloco no ar",
      description:
        "Sistemas web, landing pages e automações. Portfólio de Rafael Tavares, de Palhoça, SC, com o Lume, um CRM para quem vende sites.",
      skip: "Pular para o conteúdo",
    },
    header: {
      aria: "Navegação principal",
      home: "Rafael Tavares, início",
      languageLabel: "Mudar o idioma para inglês",
      languageShort: "EN",
      cta: "Falar comigo",
      nav: {
        work: "Trabalho",
        about: "Sobre",
        journey: "Jornada",
        contact: "Contato",
      },
    },
    hero: {
      kicker: "Palhoça, SC · aberto a freelance e vaga júnior",
      titleTop: "Eu construo",
      titleLit: "e coloco no ar.",
      description:
        "Sistemas web, landing pages e automações. O mais recente é **o Lume**, um CRM para quem vende sites, que desenhei, programei e mantenho sozinho.",
      ctas: {
        work: "Ver o trabalho",
        lume: "Conhecer o Lume ↗",
      },
      liveLabel: "No ar agora",
    },
    roles: {
      label: "Contratando para",
      aria: "Destacar projetos por área",
      names: {
        all: "Tudo",
        dev: "Dev",
        qa: "QA",
        cloud: "Cloud",
      },
      pitch: {
        all: "Escolha uma área e os projetos se reorganizam: o que mais conta para ela sobe.",
        dev: "Faço a feature inteira: **modelo o banco, escrevo a API e entrego a tela.** O Lume é o exemplo mais completo, e está no ar.",
        qa: "Penso primeiro **onde o usuário tropeça.** Escrevo testes de ponta a ponta com Maestro, e o Lume tem testes com Vitest rodando contra um Postgres de verdade.",
        cloud:
          "Nos meus projetos, **cuido do deploy, das filas e do preview com banco próprio para cada PR.**",
      },
      message: {
        dev: "Oi, Rafael. Tenho uma vaga de dev e queria conversar.",
        qa: "Oi, Rafael. Tenho uma vaga de QA e queria conversar.",
        cloud: "Oi, Rafael. Tenho uma vaga de cloud/infra e queria conversar.",
      },
      dimmed: "menos relacionado a esta área",
    },
    projects: {
      eyebrow: "Trabalho",
      title: "Coisas que estão no ar.",
      titleMuted: "E as que me ensinaram a pôr.",
      status: {
        production: "em produção",
        live: "no ar",
        code: "código no GitHub",
      },
      openLabel: "Abrir",
      githubLabel: "GitHub",
      previews: {
        "seven-imports":
          "Primeira dobra da loja Seven Imports, com a chamada O básico com presença.",
        pilates: "Primeira dobra da landing do Estúdio Pilates Giselle Meyer, em tons de vinho.",
        finder: "Página inicial do Finder de Vagas TI, com a busca de vagas.",
      },
      qa: {
        aria: "Fluxos de exemplo do repositório (demonstração)",
        flows: [
          "Login com usuário válido",
          "Adicionar produto ao carrinho",
          "Finalizar compra",
          "Login bloqueado mostra erro",
        ],
        summary: "{n} de 4 fluxos de exemplo passando",
      },
      items: [
        {
          name: "Lume",
          type: "Produto próprio / SaaS",
          summary: "CRM de prospecção e acompanhamento de leads para quem vende a negócios locais.",
          description:
            "CRM de prospecção e acompanhamento de leads para freelancers, agências e consultores que vendem a negócios locais. Você busca empresas por segmento e cidade no Google Maps, vê quais não têm site e salva as que interessam. Também dá para colar um link do Maps, do Instagram ou de um site, ou importar uma planilha CSV. Daí em diante, cada lead segue no funil até o fechamento, com proposta em PDF, mensagens prontas e lembrete de follow-up.",
          problem:
            "Quem vende para negócio local costuma prospectar em planilha e em conversas soltas no WhatsApp. O histórico se perde, o follow-up é esquecido e não dá para ver em que etapa o funil vaza.",
          features: [
            "Busca por segmento e cidade",
            "Lead a partir de link ou CSV",
            "Funil com aviso de lead esfriando",
            "Propostas em PDF e mensagens prontas",
          ],
        },
        {
          name: "Seven Imports",
          type: "Cliente freelance / Loja virtual",
          summary:
            "Loja de moda masculina que vendia só pelo direct. Agora o cliente monta a sacola e o pedido chega pronto no WhatsApp.",
          description:
            "Loja virtual de uma marca de moda masculina importada de Florianópolis, que antes vendia só pelo direct do Instagram. O catálogo tem filtro por categoria e tamanho, a sacola guarda as peças e o pedido sai pronto para o WhatsApp da loja, com tamanhos, quantidades e a forma de entrega.",
          problem:
            "Vender pelo direct obriga a responder, uma por uma, as mesmas perguntas sobre peça, tamanho e preço. O pedido chega incompleto e se perde no meio da conversa.",
          features: [
            "Catálogo com filtro por tamanho",
            "Sacola que vira pedido no WhatsApp",
            "Mobile first, com sacola em bottom sheet",
            "Next.js com export estático",
          ],
        },
        {
          name: "Estúdio Pilates Giselle Meyer",
          type: "Cliente freelance / Landing page",
          summary:
            "Landing de um estúdio com duas unidades. A visitante cai no WhatsApp da unidade certa, com a mensagem pronta.",
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
        },
        {
          name: "ConsorcioTrack",
          type: "MVP / Micro-SaaS B2B",
          summary:
            "Para quem vende consórcio: funil comercial, clientes, grupos e cotas num lugar só, com simulador de lance.",
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
        },
        {
          name: "Finder de Vagas TI",
          type: "Full stack / API pública",
          summary:
            "Vaga de tecnologia fica espalhada por vários portais. O Finder importa de fontes públicas, como Greenhouse e Lever, e junta tudo numa busca com filtros.",
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
        },
        {
          name: "Testes do My Demo App",
          type: "QA / Testes mobile",
          summary:
            "Testes manuais e automatizados do app Android de prática da Sauce Labs. Cada caso documentado tem um flow do Maestro com o mesmo ID.",
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
        },
        {
          name: "Price Tracking API",
          type: "Backend / API",
          summary:
            "Histórico de preços e alerta no Telegram. A coleta roda em workers, para não travar a API.",
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
        },
      ],
    },
    narrative: {
      chapters: {
        aria: "Capítulos",
        eclipse: "Eclipse",
        lume: "O Lume",
        work: "Outros trabalhos",
        about: "Sobre",
        contact: "Contato",
      },
      hero: {
        afterEyebrow: "O mais recente",
        afterTitle: "O Lume.",
        afterText: "Um produto inteiro no ar, feito por uma pessoa. Role e veja ele trabalhar.",
        scrollCue: "role",
      },
      lume: {
        tag: "produto próprio",
        skip: "Pular a demonstração ↓",
        beats: [
          {
            title: "Um link vira lead.",
            text: "Link do Google Maps, do Instagram ou do site, ou uma planilha CSV. O Lume preenche nome, endereço, contato e diz se a empresa parece ter site.",
          },
          {
            title: "O lead anda no funil.",
            text: "São 11 etapas, do primeiro contato ao fechamento. Quando um lead fica parado, ele esfria, e o Lume avisa.",
          },
          {
            title: "A proposta sai em PDF.",
            text: "Com modelo, versão e valor. A mensagem do WhatsApp chega escrita.",
          },
          {
            title: "Empresa sem site entra. Cliente sai.",
            text: "Desenhei, programei e mantenho o Lume sozinho. A busca de empresas pelo Google Places já está ligada.",
          },
        ],
        srSummary:
          "Demonstração com dados fictícios: um link do Google Maps vira o lead Padaria Trigo Dourado, que passa por Novo, Contatado e Proposta até Fechado, com uma proposta em PDF de R$ 2.400. O total fechado sobe de R$ 2.800 para R$ 5.200.",
        board: {
          title: "Prospecções",
          stages: "4 das 11 etapas",
          demo: "demonstração · dados fictícios",
          open: "em andamento",
          won: "fechado",
          columns: ["Novo", "Contatado", "Proposta", "Fechado"],
          cooling: "esfriando · 1 dia parado",
          accepted: "aceita",
          moverStates: [
            "sem site",
            "WhatsApp enviado",
            "proposta nº 0007 · R$ 2.400",
            "proposta aceita · R$ 2.400",
          ],
          pdfTitle: "Proposta comercial nº 0007",
          pdfItem: "Site institucional",
        },
      },
    },
    about: {
      eyebrow: "Sobre",
      paragraph:
        "Tenho 21 anos e construo pensando em quem vai usar quando der *errado.* Faço sistemas web, landing pages e automações, e estou decidindo se o próximo passo é *dev, QA ou cloud.* Não me vendo como sênior. Me vendo como alguém que *termina.*",
      skills: [
        {
          title: "Web",
          items: "Next.js, React, TypeScript, Tailwind, HTML e CSS",
          areas: ["dev"],
        },
        {
          title: "Dados e API",
          items: "PostgreSQL, Prisma, FastAPI, Django, Fastify, Redis",
          areas: ["dev"],
        },
        {
          title: "Testes",
          items: "Playwright, Maestro, Vitest, teste manual de fluxo",
          areas: ["qa"],
        },
        {
          title: "Infra",
          items: "Linux, Docker, GitHub Actions, Vercel",
          areas: ["cloud"],
        },
      ],
    },
    journey: {
      eyebrow: "Jornada",
      title: "Do script ao produto no ar.",
      steps: [
        {
          when: "Início",
          title: "Automações em Python",
          description: "Scripts e utilitários de desktop para tarefas que eu repetia todo dia.",
        },
        {
          when: "Depois",
          title: "APIs e sistemas web",
          description:
            "FastAPI, Django e PostgreSQL em projetos pessoais. Depois, Next.js e TypeScript.",
        },
        {
          when: "Testes",
          title: "QA com Maestro",
          description:
            "Testes de ponta a ponta no app mobile My Demo App, com os casos documentados no GitHub.",
        },
        {
          when: "Freelance",
          title: "Primeiro cliente",
          description: "A landing do Estúdio Pilates Giselle Meyer, do briefing à publicação.",
        },
        {
          when: "Agora",
          title: "O Lume em produção",
          description:
            "Produto próprio no ar. A cobrança está pronta no código e ainda não foi ligada.",
        },
        {
          when: "Formação",
          title: "Unopar, polo Palhoça",
          description: "Ensino superior em andamento.",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      titleTop: "Tem algo para",
      titleBottom: "colocar no ar?",
      description:
        "Uma landing, um sistema que tira a planilha do caminho, uma automação, ou uma vaga. Me conta em duas linhas e eu respondo.",
      links: {
        email: "E-mail",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      form: {
        kindsAria: "Tipo de pedido",
        kinds: [
          { value: "landing", label: "Landing page" },
          { value: "system", label: "Sistema web" },
          { value: "automation", label: "Automação" },
          { value: "job", label: "Vaga" },
        ],
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "E-mail",
        emailPlaceholder: "Seu e-mail",
        message: "Mensagem",
        messagePlaceholder: "O que você precisa?",
        submit: "Enviar",
        sending: "Enviando…",
        success: "Mensagem enviada. Obrigado! Respondo por e-mail.",
        errors: {
          name: "Escreva seu nome, com 2 a 120 caracteres.",
          email: "Digite um e-mail válido, como nome@empresa.com.",
          message: "Escreva a mensagem, com 10 a 3.000 caracteres.",
          invalid: "Confira os campos destacados e tente de novo.",
          rateLimited: "Muitas tentativas seguidas. Tente de novo em alguns minutos.",
          unavailable: "Não foi possível enviar agora. Escreva para {email}.",
        },
        subject: "Portfólio",
      },
    },
    footer: {
      place: "Rafael Tavares · Palhoça, SC",
    },
  },
  "en-US": {
    meta: {
      title: "Rafael Tavares · I build it and ship it",
      description:
        "Web systems, landing pages and automations. Portfolio of Rafael Tavares, from Palhoça, Brazil, featuring Lume, a CRM for people who sell websites.",
      skip: "Skip to content",
    },
    header: {
      aria: "Main navigation",
      home: "Rafael Tavares, home",
      languageLabel: "Switch language to Portuguese",
      languageShort: "PT",
      cta: "Get in touch",
      nav: {
        work: "Work",
        about: "About",
        journey: "Journey",
        contact: "Contact",
      },
    },
    hero: {
      kicker: "Palhoça, Brazil · open to freelance and junior roles",
      titleTop: "I build it",
      titleLit: "and ship it.",
      description:
        "Web systems, landing pages and automations. The latest is **Lume**, a CRM for people who sell websites, which I designed, built and run on my own.",
      ctas: {
        work: "See the work",
        lume: "Meet Lume ↗",
      },
      liveLabel: "Live now",
    },
    roles: {
      label: "Hiring for",
      aria: "Highlight projects by area",
      names: {
        all: "All",
        dev: "Dev",
        qa: "QA",
        cloud: "Cloud",
      },
      pitch: {
        all: "Pick an area and the projects reorder: what matters most for it moves up.",
        dev: "I build the whole feature: **I model the database, write the API and ship the screen.** Lume is the most complete example, and it is live.",
        qa: "I think first about **where the user trips.** I write end-to-end tests with Maestro, and Lume has Vitest tests running against a real Postgres.",
        cloud:
          "In my projects, **I handle deploys, queues and a preview with its own database for every PR.**",
      },
      message: {
        dev: "Hi Rafael, I have a dev role and would like to talk.",
        qa: "Hi Rafael, I have a QA role and would like to talk.",
        cloud: "Hi Rafael, I have a cloud/infra role and would like to talk.",
      },
      dimmed: "less related to this area",
    },
    projects: {
      eyebrow: "Work",
      title: "Things that are live.",
      titleMuted: "And the ones that taught me how.",
      status: {
        production: "in production",
        live: "live",
        code: "code on GitHub",
      },
      openLabel: "Open",
      githubLabel: "GitHub",
      previews: {
        "seven-imports":
          "Above-the-fold view of the Seven Imports store, with the headline O básico com presença.",
        pilates:
          "Above-the-fold view of the Giselle Meyer Pilates Studio landing page, in wine tones.",
        finder: "Finder de Vagas TI home page, with the job search.",
      },
      qa: {
        aria: "Sample flows from the repository (demo)",
        flows: [
          "Login with a valid user",
          "Add a product to the cart",
          "Complete checkout",
          "Locked-out login shows an error",
        ],
        summary: "{n} of 4 sample flows passing",
      },
      items: [
        {
          name: "Lume",
          type: "Own product / SaaS",
          summary: "A prospecting and lead follow-up CRM for people who sell to local businesses.",
          description:
            "A prospecting and lead follow-up CRM for freelancers, agencies and consultants who sell to local businesses. You search Google Maps by segment and city, see which businesses have no website and save the ones worth pursuing. You can also paste a Maps, Instagram or website link, or import a CSV spreadsheet. From there, each lead moves through the pipeline until the deal closes, with PDF proposals, ready-made messages and follow-up reminders.",
          problem:
            "People who sell to local businesses often prospect in spreadsheets and scattered WhatsApp chats. History gets lost, follow-ups are forgotten and there is no way to see where the pipeline leaks.",
          features: [
            "Search by segment and city",
            "Leads from a link or CSV",
            "Pipeline that flags cooling leads",
            "PDF proposals and ready-made messages",
          ],
        },
        {
          name: "Seven Imports",
          type: "Freelance client / Online store",
          summary:
            "A menswear store that sold only through Instagram DMs. Now the customer fills a bag and the order lands ready on WhatsApp.",
          description:
            "Online store for an imported menswear brand from Florianópolis that used to sell only through Instagram DMs. The catalog filters by category and size, the bag keeps the pieces and the order goes out ready to the store's WhatsApp, with sizes, quantities and delivery method.",
          problem:
            "Selling through DMs means answering the same questions about item, size and price one by one. Orders arrive incomplete and get lost in the conversation.",
          features: [
            "Catalog with size filter",
            "Bag that becomes a WhatsApp order",
            "Mobile first, with a bottom-sheet bag",
            "Next.js with static export",
          ],
        },
        {
          name: "Giselle Meyer Pilates Studio",
          type: "Freelance client / Landing page",
          summary:
            "Landing page for a studio with two locations. Visitors land on the right location's WhatsApp, with the message already written.",
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
        },
        {
          name: "ConsorcioTrack",
          type: "MVP / B2B micro-SaaS",
          summary:
            "For people who sell consórcio (a Brazilian pooled-purchase plan): pipeline, clients, groups and quotas in one place, plus a bid simulator.",
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
        },
        {
          name: "Finder de Vagas TI",
          type: "Full stack / Public API",
          summary:
            "Tech job openings are spread across many portals. Finder imports them from public sources such as Greenhouse and Lever and brings them into one filtered search.",
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
        },
        {
          name: "My Demo App Tests",
          type: "QA / Mobile testing",
          summary:
            "Manual and automated tests for the Sauce Labs Android practice app. Every documented case has a Maestro flow with the same ID.",
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
        },
        {
          name: "Price Tracking API",
          type: "Backend / API",
          summary:
            "Price history and Telegram alerts. Scraping runs in background workers, so the API never blocks.",
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
        },
      ],
    },
    narrative: {
      chapters: {
        aria: "Chapters",
        eclipse: "Eclipse",
        lume: "Lume",
        work: "Other work",
        about: "About",
        contact: "Contact",
      },
      hero: {
        afterEyebrow: "The latest",
        afterTitle: "Lume.",
        afterText: "A whole product, live, built by one person. Scroll and watch it work.",
        scrollCue: "scroll",
      },
      lume: {
        tag: "own product",
        skip: "Skip the demo ↓",
        beats: [
          {
            title: "A link becomes a lead.",
            text: "A Google Maps, Instagram or website link, or a CSV spreadsheet. Lume fills in name, address and contact, and tells you whether the business appears to have a website.",
          },
          {
            title: "The lead moves down the pipeline.",
            text: "There are 11 stages, from first contact to closing. When a lead sits still, it cools down, and Lume lets you know.",
          },
          {
            title: "The proposal comes out as a PDF.",
            text: "With a template, a version and a price. The WhatsApp message arrives already written.",
          },
          {
            title: "A business with no website comes in. A client goes out.",
            text: "I designed, built and run Lume on my own. Business search through Google Places is already switched on.",
          },
        ],
        srSummary:
          "Demo with sample data: a Google Maps link becomes the lead Padaria Trigo Dourado, which moves through New, Contacted and Proposal to Closed, with a R$ 2,400 PDF proposal. The closed total goes from R$ 2,800 to R$ 5,200.",
        board: {
          title: "Prospects",
          stages: "4 of 11 stages",
          demo: "demo · sample data",
          open: "open",
          won: "closed",
          columns: ["New", "Contacted", "Proposal", "Closed"],
          cooling: "cooling · idle for 1 day",
          accepted: "accepted",
          moverStates: [
            "no website",
            "WhatsApp sent",
            "proposal #0007 · R$ 2,400",
            "proposal accepted · R$ 2,400",
          ],
          pdfTitle: "Sales proposal #0007",
          pdfItem: "Business website",
        },
      },
    },
    about: {
      eyebrow: "About",
      paragraph:
        "I'm 21 and I build with the user in mind for when things go *wrong.* I make web systems, landing pages and automations, and I'm deciding whether my next step is *dev, QA or cloud.* I don't sell myself as senior. I sell myself as someone who *finishes.*",
      skills: [
        {
          title: "Web",
          items: "Next.js, React, TypeScript, Tailwind, HTML and CSS",
          areas: ["dev"],
        },
        {
          title: "Data and API",
          items: "PostgreSQL, Prisma, FastAPI, Django, Fastify, Redis",
          areas: ["dev"],
        },
        {
          title: "Testing",
          items: "Playwright, Maestro, Vitest, manual flow testing",
          areas: ["qa"],
        },
        {
          title: "Infra",
          items: "Linux, Docker, GitHub Actions, Vercel",
          areas: ["cloud"],
        },
      ],
    },
    journey: {
      eyebrow: "Journey",
      title: "From script to shipped product.",
      steps: [
        {
          when: "Start",
          title: "Python automations",
          description: "Scripts and desktop utilities for tasks I kept repeating every day.",
        },
        {
          when: "Then",
          title: "APIs and web systems",
          description:
            "FastAPI, Django and PostgreSQL in personal projects. Then Next.js and TypeScript.",
        },
        {
          when: "Testing",
          title: "QA with Maestro",
          description:
            "End-to-end tests on the My Demo App mobile app, with the cases documented on GitHub.",
        },
        {
          when: "Freelance",
          title: "First client",
          description: "The Giselle Meyer Pilates Studio landing page, from brief to launch.",
        },
        {
          when: "Now",
          title: "Lume in production",
          description:
            "My own product, live. Billing is ready in the code and not switched on yet.",
        },
        {
          when: "Education",
          title: "Unopar, Palhoça campus",
          description: "Higher education in progress.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      titleTop: "Got something",
      titleBottom: "to ship?",
      description:
        "A landing page, a system that gets the spreadsheet out of the way, an automation, or a job opening. Tell me in two lines and I'll reply.",
      links: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      form: {
        kindsAria: "Request type",
        kinds: [
          { value: "landing", label: "Landing page" },
          { value: "system", label: "Web system" },
          { value: "automation", label: "Automation" },
          { value: "job", label: "Job opening" },
        ],
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "Your email",
        message: "Message",
        messagePlaceholder: "What do you need?",
        submit: "Send",
        sending: "Sending…",
        success: "Message sent. Thanks! I'll reply by email.",
        errors: {
          name: "Enter your name, 2 to 120 characters.",
          email: "Enter a valid email, like name@company.com.",
          message: "Write a message, 10 to 3,000 characters.",
          invalid: "Check the highlighted fields and try again.",
          rateLimited: "Too many attempts in a row. Try again in a few minutes.",
          unavailable: "Couldn't send it right now. Email me at {email}.",
        },
        subject: "Portfolio",
      },
    },
    footer: {
      place: "Rafael Tavares · Palhoça, Brazil",
    },
  },
};

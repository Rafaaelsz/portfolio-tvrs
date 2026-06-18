# Rafael Tavares Portfolio

Portfólio profissional de Rafael Tavares, Desenvolvedor Full Stack, criado para apresentar projetos, competências técnicas e evolução prática em desenvolvimento de software.

## Preview

Deploy atual:

https://portfolio-tvrs-six.vercel.app/

## Objetivo

O objetivo deste portfólio é comunicar uma atuação full stack com forte base em backend, APIs, bancos de dados, automação e interfaces modernas. A proposta visual segue uma estética premium, limpa e orientada a produto, com foco em clareza, responsividade, performance e experiência do usuário.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js
- React Three Fiber
- Drei
- Lucide React
- Vercel para deploy

## Funcionalidades principais

- Landing page responsiva com design dark-first.
- Hero com cena Three.js representando arquitetura de software e fluxo de dados.
- Seção About com narrativa profissional e foco em estrutura de sistemas.
- Ecossistema de skills com tecnologias organizadas por contexto de uso.
- Projetos apresentados como pequenos case studies.
- Timeline de evolução técnica.
- Formulário de contato via `mailto`.
- Suporte multilíngue PT-BR / EN-US.
- Persistência de idioma com `localStorage`.
- Animações sutis com Framer Motion.
- Componentização organizada e dados separados da interface.

## Estrutura do projeto

```txt
src/
  app/
    layout.tsx
    page.tsx

  components/
    layout/
      Header.tsx
      Footer.tsx
      Section.tsx

    sections/
      Hero.tsx
      About.tsx
      SkillsEcosystem.tsx
      Projects.tsx
      ExperienceTimeline.tsx
      Contact.tsx

    three/
      ArchitectureScene.tsx
      BackgroundNetwork.tsx
      DataPacket.tsx
      SkillsNetwork.tsx

    ui/
      PortfolioButton.tsx
      ProjectCard.tsx
      SectionTitle.tsx
      TechBadge.tsx

  data/
    projects.ts
    skills.ts
    experience.ts

  i18n/
    dictionaries.ts
    LanguageProvider.tsx
    types.ts

  styles.css
```

## Como rodar localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse:

```txt
http://localhost:3000
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o servidor local de desenvolvimento.

```bash
npm run build
```

Gera a build de produção.

```bash
npm run start
```

Inicia a aplicação em modo produção após o build.

```bash
npm run lint
```

Executa a validação com ESLint.

```bash
npm run format
```

Formata os arquivos com Prettier.

## Melhorias implementadas

- Redesign completo com visual premium e foco em produto.
- Cena Three.js no hero baseada em arquitetura real de aplicação.
- Rede visual para representar tecnologias conectadas.
- Projetos estruturados como case studies.
- Componentes reutilizáveis para botões, badges, cards e títulos de seção.
- Bordas arredondadas consistentes em cards, botões, inputs e containers.
- Internacionalização PT-BR / EN-US com dicionários centralizados.
- Persistência do idioma selecionado no navegador.
- Conteúdo técnico alinhado ao posicionamento full stack e backend-oriented.
- README atualizado para refletir a versão atual do projeto.

## Próximos passos

- Adicionar testes automatizados de interface.
- Incluir imagens reais ou vídeos curtos dos projetos principais.
- Melhorar métricas de acessibilidade com auditoria Lighthouse.
- Adicionar integração real para envio de mensagens no formulário.
- Evoluir SEO com metadados dinâmicos por idioma.

## Contato

- GitHub: https://github.com/Rafaaelsz
- LinkedIn: https://www.linkedin.com/in/rafael-tavares-p26/
- Email: rafaeltperaldo@gmail.com

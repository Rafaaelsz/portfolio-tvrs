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
- Prisma ORM
- PostgreSQL
- Zod
- Lucide React
- Vercel para deploy

## Funcionalidades principais

- Landing page responsiva com design dark-first.
- Hero com cena Three.js representando arquitetura de software e fluxo de dados.
- Seção About com narrativa profissional e foco em estrutura de sistemas.
- Ecossistema de skills com tecnologias organizadas por contexto de uso.
- Projetos apresentados como pequenos case studies.
- Timeline de evolução técnica.
- Formulário de contato salvo via API interna, sem abrir aplicativo de email externo.
- Inbox administrativo privado para visualizar mensagens recebidas.
- Login admin com credenciais via variáveis de ambiente.
- Sessão com cookie HTTP-only assinado.
- Suporte multilíngue PT-BR / EN-US.
- Persistência de idioma com `localStorage`.
- Animações sutis com Framer Motion.
- Componentização organizada e dados separados da interface.

## Como funciona o contato

O formulário público envia os dados para:

```txt
POST /api/contact
```

Os dados são validados no backend com Zod, passam por um rate limit simples e são persistidos no banco como `ContactMessage`.

Campos salvos:

- Nome
- Email
- Assunto opcional
- Mensagem
- Status (`unread`, `read`, `archived`)
- Data de envio

## Painel administrativo

O painel privado fica em:

```txt
/admin
```

Fluxo:

1. Acesse `/admin`.
2. Faça login com `ADMIN_EMAIL` e a senha usada para gerar `ADMIN_PASSWORD_HASH`.
3. Acesse o inbox em `/admin/inbox`.
4. Visualize mensagens recebidas.
5. Marque mensagens como lidas.
6. Arquive mensagens.
7. Exclua mensagens quando necessário.

O painel usa uma sessão curta (8 horas) em cookie HTTP-only, `SameSite=Strict` e
`Secure` em produção. O cookie contém apenas email e expiração, assinados com HMAC-SHA256.
Não há JWT, refresh token, Bearer token, papéis ou permissões porque existe um único admin.

## Variáveis de ambiente

Crie um arquivo `.env` com base no `.env.example`:

```env
DATABASE_URL=
ADMIN_EMAIL=
ADMIN_PASSWORD_HASH=
SESSION_SECRET=
```

Recomendações:

- `DATABASE_URL`: connection string PostgreSQL, por exemplo Neon, Supabase ou outro Postgres compatível com Vercel.
- `ADMIN_EMAIL`: email usado no login do painel.
- `ADMIN_PASSWORD_HASH`: hash scrypt da senha do painel. `ADMIN_PASSWORD` é aceito apenas em desenvolvimento local.
- `SESSION_SECRET`: string aleatória com pelo menos 32 caracteres. Troque-a para revogar todas as sessões.

Gerar `ADMIN_PASSWORD_HASH`:

```bash
node -e "const crypto=require('node:crypto'),readline=require('node:readline').createInterface({input:process.stdin,output:process.stdout}); readline.question('Senha: ',password=>{const salt=crypto.randomBytes(16).toString('base64url');crypto.scrypt(password,salt,64,(error,key)=>{readline.close();if(error)throw error;console.log('scrypt$'+salt+'$'+key.toString('base64url'));});});"
```

Gerar `SESSION_SECRET`:

```bash
node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"
```

Em produção, configure `DATABASE_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH` e
`SESSION_SECRET` no provedor de deploy. Não configure `ADMIN_PASSWORD`. O frontend e as
APIs administrativas usam URLs relativas no mesmo domínio, portanto nenhuma liberação de
CORS é necessária. O rate limit em memória é apenas uma proteção local; habilite o rate
limit do provedor se o endpoint de login ficar exposto a ataques distribuídos.

## Banco de dados

O projeto usa Prisma com PostgreSQL.

Subir PostgreSQL local com Docker:

```bash
docker compose up -d
```

Connection string local:

```env
DATABASE_URL=postgresql://portfolio:portfolio@localhost:54329/portfolio_tvrs
```

Gerar Prisma Client:

```bash
npm run db:generate
```

Rodar migration local:

```bash
npm run db:migrate
```

Aplicar migrations em produção:

```bash
npm run db:deploy
```

Abrir Prisma Studio:

```bash
npm run db:studio
```

## Estrutura do projeto

```txt
prisma/
  schema.prisma
  migrations/

src/
  app/
    admin/
      page.tsx
      login/
        page.tsx
      inbox/
        page.tsx

    api/
      contact/
        route.ts
      admin/
        login/
          route.ts
        logout/
          route.ts
        messages/
          [id]/
            route.ts

    layout.tsx
    page.tsx

  components/
    admin/
      AdminInbox.tsx
      LoginForm.tsx
      StatusBadge.tsx
      types.ts

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
      MotionWrapper.tsx
      PortfolioButton.tsx
      ProjectCard.tsx
      SectionTitle.tsx
      TechBadge.tsx

  data/
    projects.ts
    skills.ts

  i18n/
    dictionaries.ts
    LanguageProvider.tsx
    types.ts

  lib/
    auth.ts
    prisma.ts
    rate-limit.ts
    validations.ts
    rate-limit.ts
    validations.ts

  styles.css
```

## Como rodar localmente

Instale as dependências:

```bash
npm install
```

Configure `.env`:

```bash
cp .env.example .env
```

Se quiser usar o Postgres local do projeto, rode:

```bash
docker compose up -d
```

E configure:

```env
DATABASE_URL=postgresql://portfolio:portfolio@localhost:54329/portfolio_tvrs
```

Gere o Prisma Client:

```bash
npm run db:generate
```

Rode a migration no banco configurado:

```bash
npm run db:migrate
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
npm run build
npm run start
npm run lint
npm run test:auth
npm run format
npm run db:generate
npm run db:migrate
npm run db:deploy
npm run db:studio
```

## Como testar

Formulário:

1. Acesse `http://localhost:3000`.
2. Preencha o formulário de contato.
3. Envie a mensagem.
4. A mensagem deve ser salva no banco sem abrir app de email externo.

Admin:

1. Acesse `http://localhost:3000/admin`.
2. Faça login com as credenciais do `.env`.
3. Veja a mensagem no inbox.
4. Teste marcar como lida, arquivar e excluir.
5. Faça logout e confirme que `/admin/inbox` não fica acessível sem sessão.

## Melhorias implementadas

- Redesign completo com visual premium e foco em produto.
- Cena Three.js no hero baseada em arquitetura real de aplicação.
- Rede visual para representar tecnologias conectadas.
- Projetos estruturados como case studies.
- Componentes reutilizáveis para botões, badges, cards e títulos de seção.
- Bordas arredondadas consistentes em cards, botões, inputs e containers.
- Internacionalização PT-BR / EN-US com dicionários centralizados.
- Persistência do idioma selecionado no navegador.
- Formulário integrado a backend interno.
- Inbox administrativo privado com autenticação.
- Persistência de mensagens com Prisma e PostgreSQL.

## Próximos passos

- Adicionar reCAPTCHA ou Turnstile ao formulário público.
- Adicionar busca textual no inbox.
- Adicionar paginação para grandes volumes de mensagens.
- Melhorar métricas de acessibilidade com auditoria Lighthouse.
- Evoluir SEO com metadados dinâmicos por idioma.

## Contato

- GitHub: https://github.com/Rafaaelsz
- LinkedIn: https://www.linkedin.com/in/rafael-tavares-p26/
- Email: rafaeltperaldo@gmail.com

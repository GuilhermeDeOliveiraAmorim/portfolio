# Portfólio — Guilherme Amorim

Site pessoal em [www.guilhermeamorim.com](https://www.guilhermeamorim.com), com apresentação
profissional, competências, projetos e formulário de contato.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [Material Tailwind](https://www.material-tailwind.com/)
- [Postmark](https://postmarkapp.com/) para o envio do formulário de contato
- Deploy na [Vercel](https://vercel.com/), com Analytics e Speed Insights

## Requisitos

- Node.js >= 18
- pnpm

## Instalação

```bash
pnpm install
```

## Desenvolvimento

```bash
pnpm dev     # http://localhost:3000
```

Crie um `.env` na raiz com o token do Postmark, usado pela rota `src/app/api/sendmail/route.ts`:

```bash
POSTMARK_SERVER_API_TOKEN=...
```

Sem essa variável, o formulário de contato não envia — o restante do site funciona normalmente.

## Scripts

```bash
pnpm dev      # servidor de desenvolvimento
pnpm build    # build de produção
pnpm start    # serve o build
pnpm lint     # eslint
```

## Estrutura

```
src/
├── app/
│   ├── page.tsx              # composição da home
│   ├── layout.tsx            # metadata, fonte e layout raiz
│   ├── hero.tsx              # apresentação
│   ├── skills.tsx            # competências
│   ├── projects.tsx          # projetos
│   ├── resume.tsx            # formação (resumo)
│   ├── contact-form.tsx      # formulário de contato
│   ├── resume-details/       # página de detalhes da formação
│   └── api/sendmail/         # rota de envio via Postmark
├── components/               # navbar, footer, cards
└── data/
    └── resume.ts             # fonte única dos itens de formação
```

## Créditos

Construído a partir do template
[NextJS Tailwind Portfolio Page](https://www.creative-tim.com/product/nextjs-tailwind-portfolio-page)
da [Creative Tim](https://www.creative-tim.com/), sob a
[licença original](https://www.creative-tim.com/license) — ver [`LICENSE.md`](LICENSE.md).

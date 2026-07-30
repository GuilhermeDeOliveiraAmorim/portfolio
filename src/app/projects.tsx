"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const PROJECTS = [
  {
    img: "/image/imovila.png",
    title: "Imovila — SaaS em produção",
    desc: "Portal imobiliário que conecta corretores a quem procura comprar, vender ou alugar. Monorepo pnpm + Turborepo: API NestJS com Drizzle sobre PostgreSQL, front Next.js 15 com React 19, assinaturas via Stripe, autenticação JWT com papéis, e-mail transacional e jobs agendados. Testado com Jest, Vitest e Playwright em seis perfis de dispositivo, com CI e deploy contínuo. Código privado.",
    externalLink: "https://www.imovila.com.br/",
  },
  {
    img: "/image/go-nextjs.png",
    title: "Expense Tracker",
    desc: "API em Go seguindo Clean Architecture com camadas explícitas — domínio e ports, casos de uso, controllers e repositórios. Gin, GORM, PostgreSQL, autenticação JWT e Docker.",
    externalLink: "https://github.com/GuilhermeDeOliveiraAmorim/expense_tracker",
  },
  {
    img: "/image/go-nextjs.png",
    title: "Sistema de Temperatura por CEP",
    desc: "Dois serviços em Go se comunicando: um valida o CEP, o outro resolve a localização e retorna a temperatura. Instrumentados com OpenTelemetry e Zipkin para tracing distribuído, orquestrados por Docker Compose.",
    externalLink: "https://github.com/GuilhermeDeOliveiraAmorim/sistema-temp-cep",
  },
  {
    img: "/image/go-nextjs.png",
    title: "Investment Manager",
    desc: "Gestão de ativos e clientes com arquitetura desacoplada: front em Next.js, back em Node.js com Express e Prisma, banco MySQL e ambiente completo em Docker Compose, com documentação interativa da API.",
    externalLink:
      "https://github.com/GuilhermeDeOliveiraAmorim/investment-manager",
  },
  {
    img: "/image/go-nextjs.png",
    title: "FacilitaProf",
    desc: "Sistema de geração de provas para professores. Back-end em TypeScript seguindo Clean Architecture com Prisma ORM, front-end em Next.js.",
    externalLink: "https://github.com/GuilhermeDeOliveiraAmorim/facilita-prof",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4"
          placeholder={""}
        >
          Projetos
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
          placeholder={""}
        >
          Produto em produção e projetos de arquitetura em Go e TypeScript —
          domínio em camadas, testes automatizados e entrega contínua.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
      <div className="container mx-auto mt-20 text-center">
        <Typography
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          placeholder={""}
        >
          Antes disso, entreguei sites institucionais para clientes, como o da{" "}
          <Link
            href="https://lucigreyceteles.adv.br/"
            target="_blank"
            className="font-medium text-gray-900 underline"
          >
            Lucigreyce Teles Advocacia
          </Link>{" "}
          — WordPress, com foco em SEO e presença digital.
        </Typography>
      </div>
    </section>
  );
}

export default Projects;

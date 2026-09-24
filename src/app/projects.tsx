"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const PROJECTS = [
  {
    img: "/image/imovila.png",
    title: "Imovila",
    desc: "Portal imobiliário que conecta corretores a quem procura comprar, vender ou alugar. Monorepo pnpm + Turborepo: API NestJS com Drizzle sobre PostgreSQL, front Next.js 15 com React 19, Stripe, autenticação JWT com papéis, e-mail transacional e jobs agendados. Testado com Jest, Vitest e Playwright em seis perfis de dispositivo, com CI e deploy contínuo.",
    externalLink: "https://www.imovila.com.br/",
  },
  {
    img: "/image/go-nextjs.png",
    title: "RedePet",
    desc: "Plataforma que conecta donos de pets a prestadores de serviços locais. Monorepo com API Go, front Next.js + React, app mobile e infra orquestrada por Docker Compose. Catálogo paginado com filtros por localização, fluxo completo de solicitações e sistema de avaliações.",
    externalLink: "https://redepet.net/",
  },
  {
    img: "/image/go-nextjs.png",
    title: "Maxtron Energia",
    desc: "Site institucional para empresa de engenharia elétrica e solar em Aracaju/SE. Next.js com identidade visual própria e múltiplas páginas (Início, Serviços, Sobre, Contato), desenvolvido com conselho de agentes especialistas.",
    externalLink: "https://maxtronenergia.com.br/",
  },
  {
    img: "/image/go-nextjs.png",
    title: "You Choose",
    desc: "App mobile-first de comparação de filmes com ranking dinâmico por Elo Rating. Next.js 16, Chakra UI, TanStack Query e Framer Motion seguindo Clean Architecture. Rankings persistidos no Google Cloud Storage.",
    externalLink: "https://uchoose.net/",
  },
  {
    img: "/image/go-nextjs.png",
    title: "Cartola em Dados",
    desc: "Dashboard e analytics para times do Cartola FC. App Next.js full-stack com coleta de dados da API oficial e visualizações interativas de pontuação, patrimônio, formações e desempenho por rodada.",
    externalLink: "https://cartolaemdados.com.br/",
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
          Produto em produção e projetos com Next.js, Go e TypeScript:
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
          </Link>
          , WordPress, com foco em SEO e presença digital.
        </Typography>
      </div>
    </section>
  );
}

export default Projects;

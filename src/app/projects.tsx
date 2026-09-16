"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    title: "Imovila: SaaS em produção",
    desc: "Portal imobiliário que conecta corretores a quem procura comprar, vender ou alugar. Monorepo pnpm e Turborepo, com API NestJS sobre Drizzle e PostgreSQL, front Next.js 15 com React 19, assinaturas via Stripe, autenticação JWT com papéis, e-mail transacional e jobs agendados. Testado com Jest, Vitest e Playwright em seis perfis de dispositivo, com CI e deploy contínuo.",
    externalLink: "https://www.imovila.com.br/",
  },
  {
    title: "Cartola em Dados",
    desc: "Plataforma de dados e inteligência para o Cartola FC. Faz ingestão histórica e corrente pela API oficial e expõe uma API HTTP de consulta escrita em Go, seguindo Clean Architecture e DDD com o domínio isolado da infraestrutura.",
    externalLink: "https://cartolaemdados.com.br/",
  },
  {
    title: "You Choose",
    desc: "Ranking construído por votação. O usuário monta listas de filmes ou marcas e os itens aparecem em confrontos par a par: a cada rodada se escolhe um vencedor, e a ordem final emerge do acumulado dos votos. API em Go com Clean Architecture, autenticação JWT, voto idempotente por confronto, erros em RFC 7807 e documentação Swagger.",
    externalLink: "https://uchoose.net/",
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
          Produtos em produção, construídos em Go e TypeScript, com domínio em
          camadas, testes automatizados e entrega contínua.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

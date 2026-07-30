"use client";

import { Typography } from "@material-tailwind/react";
import {
  FaLayerGroup,
  FaServer,
  FaLaptopCode,
  FaVial,
} from "react-icons/fa";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: FaLayerGroup,
    title: "Arquitetura de software",
    children:
      "DDD e Clean Architecture na prática: domínio isolado de infraestrutura, casos de uso explícitos e dependências apontando para dentro. Organizo projetos em camadas e em monorepo quando o produto pede.",
  },
  {
    icon: FaServer,
    title: "Back-end e APIs",
    children:
      "APIs REST em NestJS e Go, com autenticação JWT, controle de acesso por papéis, rate limiting e integrações de pagamento e e-mail. Persistência com Drizzle, Prisma ou GORM sobre PostgreSQL e MySQL.",
  },
  {
    icon: FaLaptopCode,
    title: "Front-end",
    children:
      "Interfaces em Next.js com App Router, React e Tailwind CSS. Renderização no servidor, sessão via cookie e layouts que funcionam de desktop a mobile.",
  },
  {
    icon: FaVial,
    title: "Testes e entrega contínua",
    children:
      "Testes unitários, de integração e end-to-end com Jest, Vitest e Playwright. Pipelines no GitHub Actions com lint, typecheck e testes antes do deploy — em Docker, Fly.io e Vercel.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase"
          placeholder={""}
        >
          Competências
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4"
          placeholder={""}
        >
          Como eu trabalho
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
          placeholder={""}
        >
          Da modelagem do domínio ao deploy: arquitetura em camadas, APIs
          testadas e entrega automatizada.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

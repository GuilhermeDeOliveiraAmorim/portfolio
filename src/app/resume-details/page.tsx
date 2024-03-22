"use client";

import { Navbar, Footer } from "@/components";
import { Typography } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

export default function ResumeDetails() {
  const RESUME_ITEMS = [
    {
      icon: ChartBarIcon,
      children: "Pós-Gradução em Desenvolvimento Avançado em Go",
      description: "Jan (2024) - atual",
    },
    {
      icon: PuzzlePieceIcon,
      children:
        "Pós-graduação Lato Sensu - MBA, Desenvolvimento Full Stack TypeScript",
      description: "Mar (2022) - Abr (2023)",
    },
    {
      icon: CursorArrowRaysIcon,
      children:
        "Analista de Teste, Engenharia de Software, com formação em Análise de Testes",
      description: "Jan (2013) - Dez (2013)",
    },
    {
      icon: CursorArrowRaysIcon,
      children: "Bacharelado em Ciência da Computação",
      description: "Jul (2006) - Dez (2013)",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <section className="px-8 py-24">
        <div className="container mx-auto grid w-full grid-cols-1 items-center lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h2" color="blue-gray" placeholder={""}>
              Sobre
            </Typography>
            <Typography
              className="mb-4 mt-3 w-9/12 font-normal !text-gray-500"
              placeholder={""}
            >
              <b>Em estudo</b>: DDD e Clean Architecture aplicadas a projetos
              Node.js (TypeScript, Express, Next.js), Python (FastAPI,
              SQLAlchemy) e Go (GORM, Gin, Chi).
            </Typography>
            <Typography
              className="mb-4 mt-3 w-9/12 font-normal !text-gray-500"
              placeholder={""}
            >
              <b>Graduação</b>: Ciência da Computação (Universidade Federal de
              Alagoas, 2006-2013). Desenvolvimento de competências em Java,
              MySQL, Engenharia de Software e Empreendedorismo. Bolsista de
              iniciação científica (Biotecnologia); bolsista de extensão
              (software desktop); monitor (Teoria da Computação); TCC na área de
              Análise de Sentimento (nota máxima, com publicação nacional e
              internacional).
            </Typography>
            <Typography
              className="mb-4 mt-3 w-9/12 font-normal !text-gray-500"
              placeholder={""}
            >
              <b>Outras formações</b>: – MBA em Desenvolvimento Full Stack com
              Javascript e TypeScript pelo Instituto de Gestão e Tecnologia da
              Informação (2023); – Curso Sequencial de Formação Complementar da
              Universidade Federal de Pernambuco em parceria com a Motorola
              Mobility. Desenvolvimento de habilidades em Java e Análise de
              Testes de Software (2013); – Mestrado em Ciência da Computação
              (Universidade Federal de Sergipe) com atuação nas áreas de
              Computação Afetiva e Interação Homem-Máquina, grande área
              Inteligência Artificial. (2014 - Não finalizado);
            </Typography>
            <Typography
              className="mb-4 mt-3 w-9/12 font-normal !text-gray-500"
              placeholder={""}
            >
              <b>Outras experiências</b>: 3 anos de serviço público (auxiliar
              administrativo na Prefeitura de Campo Grande/AL). Criação de
              portal web (Se Liga Arapiraca).
            </Typography>
          </div>
          <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-16">
            {RESUME_ITEMS.map((props, idx) => (
              <ResumeItem key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

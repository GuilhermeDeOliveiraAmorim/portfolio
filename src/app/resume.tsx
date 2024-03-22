"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import Link from "next/link";

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

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray" placeholder={""}>
            Currículo
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500" placeholder={""}>
            Com mais de 10 anos de experiência em desenvolvimento web e 4 anos
            em backend, trago expertise em criar soluções digitais eficientes e
            inovadoras.
          </Typography>
          <Link
            href={"/resume-details"}
            color="gray"
            className="flex items-center gap-2"
          >
            saiba mais
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Link>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-16">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;

"use client";

import { Typography } from "@material-tailwind/react";
import {
  FaArrowsAlt,
  FaSearch,
  FaPaintBrush,
  FaRegListAlt,
} from "react-icons/fa";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: FaPaintBrush,
    title: "Desenvolvimento Web Frontend",
    children:
      "Criar experiências web bonitas e funcionais é a minha especialidade. Utilizando tecnologias recentes e as melhores práticas, eu projeto e construo websites eficientes.",
  },
  {
    icon: FaSearch,
    title: "Otimização para Buscadores (SEO)",
    children:
      "Otimização precisa de palavras-chave, tags meta e conteúdo para aumentar a visibilidade nos motores de busca, melhorando a posição nos resultados e a relevância online.",
  },
  {
    icon: FaArrowsAlt,
    title: "Design Responsivo",
    children:
      "Criação de layouts adaptáveis para uma experiência consistente em todos os dispositivos, usando técnicas avançadas de design e desenvolvimento.",
  },
  {
    icon: FaRegListAlt,
    title: "APIs Restful",
    children:
      "Desenvolvimento de APIs eficientes e escaláveis, seguindo os princípios RESTful. Implemento endpoints claros e bem documentados para facilitar a comunicação.",
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
          Skills
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4"
          placeholder={""}
        >
          O que posso fazer por você
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
          placeholder={""}
        >
          Transformando linhas de código em experiências digitais memoráveis,
          com expertise em desenvolvimento web, backend robusto e paixão pela
          inovação tecnológica.
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

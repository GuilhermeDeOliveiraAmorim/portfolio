"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/lucigreyceteles.png",
    title: "Lucigreyce Teles Advocacia",
    desc: "Seu escritório virtual, onde a expertise jurídica encontra a excelência digital. Websites construídos com WordPress, otimizados para a área jurídica, garantindo uma presença online forte e profissional.",
    externalLink: "https://lucigreyceteles.adv.br/",
  },
  {
    img: "/image/lucigreyceteles-atendimento.png",
    title: "Atendimento - Lucigreyce Teles",
    desc: "Atendimento jurídico personalizado e eficiente. Sua advocacia em boas mãos, em uma landing page construída com WordPress, facilitando o gerenciamento.",
    externalLink: "https://atendimento.lucigreyceteles.adv.br/",
  },
  {
    img: "/image/frank-deering.png",
    title: "Frank Deering - Advocacia e Consultoria",
    desc: "Conheça nosso site desenvolvido com WordPress, dedicado à advocacia com excelência, trazendo informações precisas e acessíveis para você.",
    externalLink: "https://frankdeering.adv.br/",
  },
  {
    img: "/image/cristina-vieira.png",
    title: "Cristina Vieira - Advocacia e Consultoria",
    desc: "Um site construído em HTML e CSS com foco na advocacia, seguindo boas práticas de SEO para destacar a excelência de Cristina Vieira no mundo jurídico.",
    externalLink: "https://cristinavieira.com.br/",
  },
  {
    img: "/image/deso.png",
    title: "Companhia de Saneamento de Sergipe",
    desc: "Site em HTML e CSS, construído com boas práticas de SEO, backend PHP, integrado ao banco de dados Postgres.",
    externalLink: "https://www.deso-se.com.br/",
  },
  {
    img: "/image/go-nextjs.png",
    title: "You Choose",
    desc: "Uma aplicação com backend em Go e Clean Architecture, combinado com um frontend em Next.js seguindo também os princípios da Clean Architecture.",
    externalLink: "https://github.com/GuilhermeDeOliveiraAmorim/youchoose",
  },
  {
    img: "/image/go-nextjs.png",
    title: "FacilitaProf",
    desc: "Uma API construída em Go, seguindo os princípios da Clean Architecture para garantir a simplicidade e eficiência em cada requisição.",
    externalLink:
      "https://github.com/GuilhermeDeOliveiraAmorim/facilitaprof-go",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
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
          Meus projetos web são desenvolvidos com design responsivo e otimização
          de SEO, enquanto minhas APIs seguem os princípios da Clean
          Architecture, garantindo eficiência e qualidade em cada detalhe.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

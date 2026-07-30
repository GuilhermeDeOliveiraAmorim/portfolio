"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

function Hero() {
  return (
    <header className="bg-white p-8 mb-20">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
            placeholder={""}
          >
            Desenvolvedor full-stack, do domínio ao deploy.
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            placeholder={""}
          >
            Sou Guilherme. Construo APIs e produtos web em TypeScript (NestJS,
            Next.js) e Go, com fundamento em arquitetura de software — DDD,
            Clean Architecture e código em camadas. Hoje mantenho um SaaS
            próprio em produção, do modelo de dados ao deploy contínuo.
          </Typography>
          <div className="grid">
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Link href={"#projects"}>
                <Button
                  color="gray"
                  className="w-full px-4 md:w-[12rem]"
                  placeholder={""}
                >
                  Ver projetos
                </Button>
              </Link>
              <Link href={"#contact"}>
                <Button
                  variant="outlined"
                  color="gray"
                  className="w-full px-4 md:w-[12rem]"
                  placeholder={""}
                >
                  Falar comigo
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Image
          width={540}
          height={540}
          alt="Guilherme Amorim"
          src="/image/gui.png"
          className="h-[24rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;

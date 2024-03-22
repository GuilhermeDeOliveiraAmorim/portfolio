"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

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
            Transformando ideias em <br /> soluções digitais de excelência.
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            placeholder={""}
          >
            Olá! Sou Guilherme, apaixonado por tecnologia e especialista em web
            design. Conheça minha jornada no desenvolvimento, onde a
            criatividade encontra a funcionalidade.
          </Typography>
          <div className="grid">
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Seu melhor e-mail" size="lg" />
              <Button
                color="gray"
                className="w-full px-4 md:w-[12rem]"
                placeholder={""}
              >
                Orçamento
              </Button>
            </div>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/gui.png"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;

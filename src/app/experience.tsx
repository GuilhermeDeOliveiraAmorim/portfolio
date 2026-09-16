"use client";

import { Typography } from "@material-tailwind/react";
import { ExperienceCard } from "@/components";
import { EXPERIENCE_ITEMS } from "@/data/experience";

export function Experience() {
  return (
    <section className="px-8 py-24" id="experience">
      <div className="container mx-auto mb-16 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase"
          placeholder={""}
        >
          Experiência
        </Typography>
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4"
          placeholder={""}
        >
          Onde eu atuo
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-7/12"
          placeholder={""}
        >
          Liderança técnica e arquitetura de back-end em produto de streaming
          rodando em Smart TVs.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-4xl gap-8">
        {EXPERIENCE_ITEMS.map((item) => (
          <ExperienceCard key={`${item.company}-${item.start}`} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Experience;

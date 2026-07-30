"use client";

import { Typography } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { RESUME_ITEMS } from "@/data/resume";
import Link from "next/link";

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray" placeholder={""}>
            Formação
          </Typography>
          <Typography
            className="mb-4 mt-3 lg:w-9/12 font-normal !text-gray-500"
            placeholder={""}
          >
            Ciência da Computação como base, especialização em Go e em
            desenvolvimento full stack, e prática contínua em arquitetura de
            software — hoje também como monitor de Engenharia de Software no MBA
            USP/Esalq.
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
        <div className="col-span-1 grid gap-y-2 lg:gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-16">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;

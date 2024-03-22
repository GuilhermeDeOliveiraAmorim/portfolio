import React from "react";
import { Navbar as MTNavbar, Typography } from "@material-tailwind/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export function Navbar() {
  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50"
      placeholder={""}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color="blue-gray"
          className="text-lg font-bold"
          placeholder={""}
        >
          <Link href={"/"}>
            Guilherme Amorim
          </Link>
        </Typography>
        <div className="items-center gap-2 flex">
          <Link
            href={"https://www.linkedin.com/in/guideoliveiraamorim/"}
            target="_blank"
          >
            <FaLinkedin color="#1d1d1d" />
          </Link>
          <Link
            href={"https://github.com/GuilhermeDeOliveiraAmorim"}
            target="_blank"
          >
            <FaGithub color="#1d1d1d" />
          </Link>
        </div>
      </div>
    </MTNavbar>
  );
}

export default Navbar;

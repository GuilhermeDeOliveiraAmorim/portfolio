"use client";
import { Button } from "@material-tailwind/react";
import { FaWhatsapp } from "react-icons/fa";

export function FixedPlugin() {
  return (
    <a href="https://wa.me/5579991145680" target="_blank">
      <Button
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50 bg-[#128c7e]"
        placeholder={""}
      >
        <FaWhatsapp /> WhatsApp
      </Button>
    </a>
  );
}

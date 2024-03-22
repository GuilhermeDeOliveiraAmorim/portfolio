import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography
            className="text-center font-normal !text-gray-700"
            placeholder={""}
          >
            &copy; {CURRENT_YEAR} Feito com{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Tailwind
            </a>
            {" e "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>
            {" por "}
            <a href="https://www.guilhermeamorim.com/">Guilherme Amorim</a>.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

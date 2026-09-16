import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  /**
   * Opcional. Sem captura de tela do projeto, o card abre direto no título,
   * em vez de reservar um slot vazio ou repetir uma arte genérica entre
   * projetos diferentes.
   */
  img?: string;
  title: string;
  desc: string;
  externalLink: string;
}

export function ProjectCard({
  img,
  title,
  desc,
  externalLink,
}: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false} placeholder={""}>
      {img ? (
        <CardHeader
          floated={false}
          className="mx-0 mt-0 mb-6 h-48"
          placeholder={""}
        >
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        </CardHeader>
      ) : null}
      <CardBody className="p-0" placeholder={""}>
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2" placeholder={""}>
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500" placeholder={""}>
          {desc}
        </Typography>
        <Link
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          color="gray"
          className="-m-2 flex items-center gap-2 p-2"
        >
          Acessar
          <FaExternalLinkAlt
            strokeWidth={3}
            className="h-3.5 w-3.5 text-gray-900"
          />
        </Link>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;

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
  img: string;
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
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48" placeholder={""}>
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0" placeholder={""}>
        <a
          href={externalLink}
          target="_blank"
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
          color="gray"
          className="flex items-center gap-2"
        >
          Ver detalhes
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

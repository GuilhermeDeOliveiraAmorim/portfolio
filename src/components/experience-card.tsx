import { Card, CardBody, Chip, Typography } from "@material-tailwind/react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { formatPeriod, type ExperienceItem } from "@/data/experience";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <Card color="transparent" shadow={false} placeholder={""}>
      <CardBody className="p-0" placeholder={""}>
        <div className="mb-4 flex items-start gap-4">
          <Card
            color="gray"
            className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
            placeholder={""}
          >
            <BriefcaseIcon className="h-6 w-6" strokeWidth={2} />
          </Card>
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="leading-snug"
              placeholder={""}
            >
              {item.role}
            </Typography>
            <Typography
              className="font-medium !text-gray-700"
              placeholder={""}
            >
              {item.company}
            </Typography>
            <Typography
              className="text-sm font-normal !text-gray-500"
              placeholder={""}
            >
              {formatPeriod(item)} · {item.location}
            </Typography>
          </div>
        </div>

        <Typography className="mb-4 font-normal !text-gray-500" placeholder={""}>
          {item.summary}
        </Typography>

        <ul className="mb-6 list-disc space-y-1 pl-5">
          {item.highlights.map((highlight) => (
            <li key={highlight}>
              <Typography
                className="text-sm font-normal !text-gray-500"
                placeholder={""}
              >
                {highlight}
              </Typography>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <Chip
              key={tech}
              value={tech}
              variant="outlined"
              size="sm"
              className="rounded-full normal-case !text-gray-700"
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default ExperienceCard;

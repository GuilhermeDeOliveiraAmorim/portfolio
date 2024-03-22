import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
  description: string;
}

export function ResumeItem({
  icon: Icon,
  children,
  description,
}: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
        placeholder={""}
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </Card>
      <Typography
        className="w-full text-sm lg:font-normal xl:font-normal !text-gray-500"
        placeholder={""}
      >
        {children}
      </Typography>
      <Typography className="w-full font- !text-gray-500" placeholder={""}>
        {description}
      </Typography>
    </div>
  );
}

export default ResumeItem;

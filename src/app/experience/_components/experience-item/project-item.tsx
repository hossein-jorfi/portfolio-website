import { H4, Large, Muted, Small } from "@/components/ui/typography";
import { Project } from "../../types";
import { CheckCircle, Dot, NotebookPen } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

const ProjectItem = ({
  name,
  description,
  icon,
  responsibilities,
  learnings,
  image,
}: Project) => {
  return (
    <div className="grid grid-cols-3 gap-7 border p-4 rounded-xl">
      <div className="space-y-4 col-span-2">
        <div className="space-y-1">
          <H4 className="flex items-center gap-2 [&>svg]:size-5">
            {icon && icon} {name}
          </H4>
          <Muted>{description}</Muted>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <QuestionItem
            title="My Responsilties"
            items={responsibilities || []}
            icon={<CheckCircle className="size-5 text-foreground/80" />}
          />
          <QuestionItem
            title="What i Learned"
            items={learnings || []}
            icon={<NotebookPen className="size-5 text-foreground/80" />}
          />
        </div>
      </div>
      {image && (
        <div className="flex items-center justify-center">
          <Image
            src={image || ""}
            alt={name}
            width={1000}
            height={1000}
            className="rounded-lg object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectItem;

const QuestionItem = ({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: ReactNode;
}) => {
  return (
    <div className="space-y-3 rounded-lg p-3 bg-muted shadow-sm">
      <Large className="flex items-center gap-2">
        {icon} {title}
      </Large>
      <div className="space-y-2">
        {items?.map((item) => (
          <Small
            key={item}
            className="flex items-center gap-2 text-foreground/80"
          >
            <Dot className="size-5" /> {item}
          </Small>
        ))}
      </div>
    </div>
  );
};

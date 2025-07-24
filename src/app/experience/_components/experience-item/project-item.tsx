import { H4, Large, Muted, Small } from "@/components/ui/typography";
import { Project } from "../../types";
import { CheckCircle2 } from "lucide-react";

const ProjectItem = ({ name, description, responsibilities }: Project) => {
  return (
    <div className="grid grid-cols-3 gap-7">
      <div className="space-y-4 col-span-2">
        <div className="space-y-1">
          <H4>{name}</H4>
          <Muted>{description}</Muted>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <QuestionItem
            title="My Responsilties"
            items={responsibilities || []}
          />
          <QuestionItem title="What i Learned" items={responsibilities || []} />
        </div>
      </div>
      <div className="border rounded-lg w-full h-[300px]" />
    </div>
  );
};

export default ProjectItem;

const QuestionItem = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="space-y-3 border rounded-lg p-3">
      <Large>{title}</Large>
      <div className="space-y-2">
        {items?.map((item) => (
          <Small
            key={item}
            className="flex items-center gap-2 text-foreground/80"
          >
            <CheckCircle2 className="size-4" /> {item}
          </Small>
        ))}
      </div>
    </div>
  );
};

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
        {responsibilities && (
          <div className="space-y-3">
            <Large>My Responsilties</Large>
            <div className="space-y-2">
              {responsibilities.map((responsibility) => (
                <Small
                  key={responsibility}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <CheckCircle2 className="size-4" /> {responsibility}
                </Small>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="border rounded-lg w-full h-[300px]" />
    </div>
  );
};

export default ProjectItem;

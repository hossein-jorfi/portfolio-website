import { H4, Muted, Small } from "@/components/ui/typography";
import { Project } from "../../types";

const ProjectItem = ({ name, description }: Project) => {
  return (
    <div className="grid grid-cols-3 gap-7">
      <div className="space-y-3 col-span-2">
        <div className="space-y-1">
          <H4>{name}</H4>
          <Muted>{description}</Muted>
        </div>
        <div>
          <Small>My Responsilties</Small>
        </div>
      </div>
      <div className="border rounded-lg w-full h-[300px]" />
    </div>
  );
};

export default ProjectItem;

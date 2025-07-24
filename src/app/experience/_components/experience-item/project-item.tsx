import { H4, Muted } from "@/components/ui/typography";
import { Project } from "../../types";

const ProjectItem = ({ name, description }: Project) => {
  return (
    <div className="grid grid-cols-3 gap-7">
      <div className="space-y-1 col-span-2">
        <H4>{name}</H4>
        <Muted>{description}</Muted>
      </div>
      <div className="border rounded-lg w-full h-[300px]" />
    </div>
  );
};

export default ProjectItem;

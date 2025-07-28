import ProjectItem from "./_components/project-item";
import { PROJECTS } from "./constants";

const Page = () => {
  return (
    <div className="app-container flex flex-col gap-6">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  );
};

export default Page;
import ProjectItem from "./_components/project-item";
import { PROJECTS } from "./constants";

const Page = () => {
  return (
    <div className="app-container">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  );
};

export default Page;
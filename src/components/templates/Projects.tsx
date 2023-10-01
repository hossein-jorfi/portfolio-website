import React from "react";
import ProjectCard from "../modules/ProjectCard";
import AnimatedText from "../elements/AnimatedText";

const Projects = () => {
  return (
    <div className="my-container">
      <div className="mt-10 pb-36">
        <AnimatedText title="Projects" className="text-left text-5xl" />
        <div className="grid grid-cols-12 gap-10 mt-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;

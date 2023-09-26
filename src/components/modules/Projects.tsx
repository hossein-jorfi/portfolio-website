import React from "react";
import ProjectCard from "../ProjectCard";
import AnimatedText from "../AnimatedText";

const Projects = () => {
  return (
    <div className="mt-10 pb-36">
      <AnimatedText title="Projects" className="text-left text-5xl" />
      <div className="grid grid-cols-12 gap-3 mt-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;

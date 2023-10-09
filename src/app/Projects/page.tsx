"use client";
import ProjectCard from "@/components/modules/ProjectCard";
import TransitionEffect from "@/components/effect/TransitionEffect";
import Projects from "@/components/templates/Projects";
import React from "react";

const page = () => {
  return (
    <>
      <TransitionEffect />
      <Projects />
      {/* <div className="pb-10 my-container min-h-screen bg-light dark:bg-dark grid grid-cols-12 gap-3 -z-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> 
      </div> */}
    </>
  );
};

export default page;

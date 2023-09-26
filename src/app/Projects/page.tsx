"use client";
import ProjectCard from "@/components/ProjectCard";
import TransitionEffect from "@/components/TransitionEffect";
import React from "react";

const page = () => {
  return (
    <>
      {/* <TransitionEffect /> */}
      <div className="pb-10 my-container min-h-screen bg-light dark:bg-dark grid grid-cols-12 gap-3 -z-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> 
      </div>
    </>
  );
};

export default page;

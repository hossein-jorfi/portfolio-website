"use client";
import TransitionEffect from "@/components/TransitionEffect";
import React from "react";

const page = () => {
  return (
    <>
      <TransitionEffect />
      <div className="my-container min-h-screen bg-light dark:bg-dark">
        Projects
      </div>
    </>
  );
};

export default page;

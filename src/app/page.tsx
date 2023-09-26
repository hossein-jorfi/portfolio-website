"use client";
import TransitionEffect from "@/components/TransitionEffect";
import { useRef } from "react";
import HomePage from "@/components/modules/Home";
import About from "@/components/modules/About";
import Projects from "@/components/modules/Projects";

function Home() {
  const ref = useRef(null);

  // const clickHandler = () => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      {/* <TransitionEffect /> */}

      <div className="my-container flex flex-col items-start md:items-center text-dark bg-light dark:bg-dark dark:text-light w-full min-h-screen -z-20">
        <HomePage />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default Home;

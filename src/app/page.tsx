"use client";
import TransitionEffect from "@/components/TransitionEffect";
import { useRef } from "react";
import HomePage from "@/components/modules/Home";
import About from "@/components/modules/About";
import Projects from "@/components/modules/Projects";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      {/* <TransitionEffect /> */}
      <div className="my-container flex flex-col items-center justify-center text-dark bg-light dark:bg-dark dark:text-light w-full min-h-screen -z-20">
        <HomePage />
      </div>
    </>
  );
}

export default Home;

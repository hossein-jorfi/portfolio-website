"use client";
import AnimatedText from "@/components/elements/AnimatedText";
import { motion } from "framer-motion";
import myPic2 from "../../../public/images/about_page_photo.jpg";
import Image from "next/image";
import TransitionEffect from "@/components/effect/TransitionEffect";
import About from "@/components/templates/About";

const Page = () => {
  return (
    <>
      <TransitionEffect />
      <About />
    </>
  );
};

export default Page;

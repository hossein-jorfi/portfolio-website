"use client";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import myPic2 from "../../../public/images/myPic2.JPEG";
import Image from "next/image";

const Paragraph = ({ value }: { value: string }) => {
  const splitedWord = value.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p
      className="text-2xl mt-3 font-semibold text-dark"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {splitedWord.map((item, index) => (
        <motion.span variants={child} key={index} className="mr-1 inline-block">
          {item}
        </motion.span>
      ))}
    </motion.p>
  );
};

const Page = () => {
  return (
    <div className="my-container min-h-screen w-full">
      <AnimatedText title="About Me" className="text-left" />
      <div className="mt-10 flex justify-between items-center space-x-10">
        <Paragraph value="My name is Hossein Jorfi, Im 19 years old and im from iran, Im ready to work as Front-End Developer, Now its been about 3 years that i started learning programming, and about 2 years that i focused on Front End developing, I love learning new technology, Individual development, Team Work , and i open to work in person (Tehran) and Remote" />

        <div className=" h-max rounded-2xl border-2 border-solid border-dark overflow-hidden bg-light p-8">
          <div>
            <Image src={myPic2} alt="my photo" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

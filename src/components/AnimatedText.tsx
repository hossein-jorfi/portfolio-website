"use client";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWorld = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => {
  return (
    <div
      className={`w-full mx-auto py-2 flex justify-between items-center text-center overflow-hidden ${className}`}
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full text-dark font-bold capitalize text-xl sm:text-5xl md:text-6xl xl:text-8xl ${className}`}
      >
        {title.split(" ").map((item: string, index: number) => (
          <motion.span
            variants={singleWorld}
            key={index}
            className="inline-block"
          >
            {item}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;

import { spawn } from "child_process";
import React from "react";

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
      <h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
      >
        {title.split(" ").map((item: string, index: number) => (
          <span key={index}>{item}</span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;

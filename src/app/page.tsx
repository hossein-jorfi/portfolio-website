"use client";
import Image from "next/image";
import picture2 from "../../public/images/myPic.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

function Home() {
  return (
    <>
      <TransitionEffect />
      <div className="my-container flex items-start md:items-center text-dark bg-light dark:bg-dark dark:text-light w-full min-h-screen z-0">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center rounded-full full "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={picture2}
              alt="profile"
              className="w-4/6 md:w-5/6 rounded-full h-auto border-8 border-black dark:border-black"
            />
          </motion.div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center self-center">
            <AnimatedText
              className="text-left text-4xl"
              title="Hossein Jorfi"
            />
            <p className="font-medium text-base">
              As a skilled Front-End developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-4">
              <Link
                target="_blank"
                download={true}
                href="/CV.pdf"
                className="flex w-fit items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg font-semibold text-lg hover:bg-light hover:text-dark border-2 border-dark dark:border-light dark:hover:bg-dark dark:hover:text-light"
              >
                <span>Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
              <Link
                href="mailto:hosseinjorfi81@gmail.com"
                target="_blank"
                className="ml-4 font-medium text-dark dark:text-light underline text-lg"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

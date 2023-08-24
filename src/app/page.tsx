"use client";
import Image from "next/image";
import picture2 from "../../public/images/myPic.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex items-center text-dark w-full min-h-screen z-0 bg-light px-32 2xl:container">
      <div className="flex items-center justify-between w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 rounded-full full "
        >
          <Image
            src={picture2}
            alt="profile"
            className="w-5/6 rounded-full h-auto border-8 border-black"
          />
        </motion.div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText className="text-left" title="Hossein Jorfi" />
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
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold text-lg hover:bg-light hover:text-dark border-2 border-dark"
            >
              Resume <LinkArrow className="ml-2" />
            </Link>
            <Link
              href="mailto:hosseinjorfi81@gmail.com"
              target="_blank"
              className="ml-4 font-medium text-dark underline text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

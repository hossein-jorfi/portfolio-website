"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TelegramIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import moon from "../../public/icons/moon.png";
import Image from "next/image";

const CutomLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <motion.span
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className="relative group inline-block"
    >
      <Link className={`${className} `} href={href}>
        {title}
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className={`absolute left-0 -bottom-1 bg-dark dark:bg-light h-[2px] group-hover:w-full transition-[width] ease-in-out duration-300 ${
            href === pathname ? "w-full" : "w-0"
          }`}
        ></motion.span>
      </Link>
    </motion.span>
  );
};

const CutomMobileLink = ({
  href,
  title,
  className = "",
  className2 = "",
  setIsOpen,
}: {
  href: string;
  title: string;
  className?: string;
  className2?: string;
  setIsOpen: any;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const clickHandler = () => {
    setIsOpen(false);
    router.push(href);
  };
  return (
    <motion.span
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className="relative group inline-block"
    >
      <button className={`${className}`} onClick={clickHandler}>
        {title}
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className={`absolute left-0 -bottom-1 bg-dark dark:bg-light h-[2px] group-hover:w-full transition-[width] ease-in-out duration-300 ${className2} ${
            href === pathname ? "w-full" : "w-0"
          }`}
        ></motion.span>
      </button>
    </motion.span>
  );
};

const NavBar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const path = usePathname();

  const themeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${theme}`} key={`${path}dkdsd`}>
      {/* Dextop */}
      <header className="hidden sm:flex my-container w-full py-8 font-medium justify-between items-center bg-light dark:bg-dark dark:text-light">
        <motion.nav
          animate={{
            transition: {
              delay: 0.5,
              staggerChildren: 0.08,
            },
          }}
          className="space-x-10"
        >
          <CutomLink href="/" title="Home" />
          <CutomLink href="/About" title="About" />
          <CutomLink href="/Projects" title="Projects" />
          <CutomLink href="/Articles" title="Articles" />
        </motion.nav>
        <nav className="flex justify-center items-center space-x-4">
          <motion.a
            href="https://www.linkedin.com/in/hosseinjorfi/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-fit"
          >
            <LinkedInIcon className="" />
          </motion.a>
          <motion.a
            className="w-fit"
            href="#"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TelegramIcon className="" />
          </motion.a>
          <motion.a
            href="https://github.com/hossein-jorfi"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-fit"
          >
            <GithubIcon className="" />
          </motion.a>
          <motion.p
            className={`cursor-pointer p-1 rounded-full ${
              theme === "dark" ? "bg-light" : "bg-dark"
            }`}
            onClick={themeToggle}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-light"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </motion.p>
        </nav>
      </header>

      {/* Mobile */}
      <header className="bg-light dark:bg-dark dark:text-light sm:hidden my-container py-8 flex justify-between items-center">
        <div
          onClick={clickHandler}
          className="cursor-pointer flex flex-col justify-center items-center"
        >
          <span
            className={`transition-all duration-300 ease-out bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`transition-all duration-300 ease-out bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`transition-all duration-300 ease-out bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </div>

        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className={`min-w-[80vw] min-h-[80vh] flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/80 dark:bg-light/80 dark:text-dark backdrop-blur-md text-light z-50 rounded-2xl`}
          >
            <div className="flex flex-col justify-center items-center space-y-8">
              <CutomMobileLink
                setIsOpen={setIsOpen}
                href="/"
                title="Home"
                className2="bg-light dark:!bg-dark"
              />
              <CutomMobileLink
                setIsOpen={setIsOpen}
                href="/About"
                title="About"
                className2="bg-light dark:!bg-dark"
              />
              <CutomMobileLink
                setIsOpen={setIsOpen}
                href="/Projects"
                title="Projects"
                className2="bg-light dark:!bg-dark"
              />
              <CutomMobileLink
                setIsOpen={setIsOpen}
                href="/Articles"
                title="Articles"
                className2="bg-light dark:!bg-dark"
              />
            </div>
            <nav className="mt-10 flex justify-center items-center space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/hosseinjorfi/"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon className="" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <TelegramIcon className="" />
              </motion.a>
              <motion.a
                href="https://github.com/hossein-jorfi"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon className="" />
              </motion.a>
              <motion.p
                className={`cursor-pointer p-1 rounded-full ${
                  theme === "dark" ? "bg-dark" : "bg-light"
                }`}
                onClick={themeToggle}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-light"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-dark"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                )}
              </motion.p>
            </nav>
          </motion.div>
        )}

        <div>
          <Link
            href="mailto:hosseinjorfi81@gmail.com"
            target="_blank"
            className="ml-4 font-medium text-dark dark:text-light underline text-lg"
          >
            Contact
          </Link>
        </div>
      </header>

      {children}
    </div>
  );
};

export default NavBar;

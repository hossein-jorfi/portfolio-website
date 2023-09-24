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

  const themeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${theme}`}>
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
          >
            <LinkedInIcon className="" />
          </motion.a>
          <motion.a href="#" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
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
              theme === "dark" ? "bg-light" : "bg-dark"
            }`}
            onClick={themeToggle}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? (
              <MoonIcon className="text-dark" />
            ) : (
              <SunIcon className="text-light" />
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
                  <MoonIcon className="text-light" />
                ) : (
                  <SunIcon className="text-dark" />
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

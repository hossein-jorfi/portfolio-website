"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, TelegramIcon } from "./Icons";
import { motion } from "framer-motion";

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

const NavBar = () => {
  return (
    <>
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
          <motion.a
            href="https://github.com/hossein-jorfi"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className="" />
          </motion.a>
          <motion.a href="#" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <TelegramIcon className="" />
          </motion.a>
        </nav>
      </header>

      {/* Mobile */}
      <header className="bg-light dark:bg-dark dark:text-light sm:hidden my-container py-8 flex justify-between items-center">
        <div>Menu</div>
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
    </>
  );
};

export default NavBar;

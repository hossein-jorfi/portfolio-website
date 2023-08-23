"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <Link className={`${className} relative group`} href={href}>
      {title}
      <span
        className={`absolute left-0 -bottom-1 bg-dark h-[2px] group-hover:w-full transition-[width] ease-in-out duration-300 ${
          href === pathname ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav className="space-x-10">
        <CutomLink href="/" title="Home" />
        <CutomLink href="/About" title="About" />
        <CutomLink href="/Projects" title="Projects" />
        <CutomLink href="/Articles" title="Articles" />
      </nav>
      {/* <h2>Logo</h2> */}
      <nav>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;

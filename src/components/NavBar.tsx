import Link from "next/link";

const CutomLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  return (
    <Link className={className} href={href}>
      {title}
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav>
        <CutomLink href="/" title="Home" />
        <CutomLink href="/" title="About" />
        <CutomLink href="/" title="Projects" />
        <CutomLink href="/" title="Articles" />
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

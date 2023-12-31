import Image from "next/image";
import heartGif from "../../../public/gif/heart.png";

const Footer = () => {
  return (
    <footer className="my-container border-t-4 flex justify-center items-center border-dark dark:border-light bg-light dark:bg-dark py-6">
      <p className="text-dark dark:text-light font-semibold flex items-center">
        Build with{" "}
        <span className="px-2 w-11">
          <Image src={heartGif} alt="heart" className="rounded-full" />
        </span>{" "}
        By Hossein Jorfi
      </p>
    </footer>
  );
};

export default Footer;

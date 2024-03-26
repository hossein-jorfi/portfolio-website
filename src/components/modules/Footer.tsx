import Image from "next/image";
import heartGif from "../../../public/gif/heart.png";

const Footer = () => {
  return (
    <>
      <div className="bg-dark dark:bg-light w-full h-[4px]"></div>
      <footer className="my-container flex justify-center items-center bg-light dark:bg-dark py-6">
        <p className="text-dark dark:text-light font-semibold flex items-center">
          Build with{" "}
          <span className="px-2 w-11">
            <Image src={heartGif} alt="heart" className="rounded-full" />
          </span>{" "}
          By Hossein Jorfi
        </p>
      </footer>
    </>
  );
};

export default Footer;

import Image from "next/image";
import heartGif from "../../public/gif/icons8-heart.gif";

const Footer = () => {
  return (
    <footer className="my-container border-t-2 flex justify-center items-center border-dark py-6">
      <p className="text-dark font-semibold flex items-center">
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

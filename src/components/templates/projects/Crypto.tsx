import Image from "next/image";
import cryptoImage from "../../../../public/projectsImages/Crypto/crypto.png";
import ProjectDetailLink from "@/components/elements/ProjectDetailLink";
import AnimatedText from "@/components/elements/AnimatedText";

const Crypto = () => {
  return (
    <div className="my-container min-h-screen w-full dark:bg-dark pb-32">
      <div className="">
        <Image src={cryptoImage} alt="project" />
      </div>
      <div className="">
        <ProjectDetailLink
          demo="https://jolly-kangaroo-e551b5.netlify.app/BTC"
          github="https://github.com/hossein-jorfi/crypto"
        />
        <div className="mt-10">
          <AnimatedText
            title="Description"
            className="text-left !text-3xl sm:!text-6xl"
          />
          <p className="mt-3 font-semibold text-xl text-dark dark:text-light">
            This site show data of the coin dynamically. if you put symbol of
            the coin in end point you can see information about the coin like
            domain/BTC domain/ETH. i used Next.js and bootstrap to make it. its
            use 5 api to get and show data. 2 api for coin informaion and the
            icon, one for chart, one for convert section, and the wordpress
            RESTapi for comment section and articles section. the articles in
            wordpress weblog that related to coin get from api and same for the
            comments (its not working in the demo. but you can see the methods
            in code)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crypto;

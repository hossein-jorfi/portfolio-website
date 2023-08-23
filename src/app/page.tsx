import Image from "next/image";
import picture from "../../public/images/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";

function Home() {
  return (
    <div className="flex items-center text-dark w-full min-h-screen z-0 bg-light p-32">
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <Image src={picture} alt="profile" className="w-full h-auto" />
        </div>
        <div className="w-1/2">
          <AnimatedText className="" title="Hossein Jorfi" />
          <p className="">
            As a skilled Front-End developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

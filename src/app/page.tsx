import Image from "next/image";
import picture from "../../public/images/developer-pic-1.png";
import picture2 from "../../public/images/myPic.jpg";
import AnimatedText from "@/components/AnimatedText";

function Home() {
  return (
    <div className="flex items-center text-dark w-full min-h-screen z-0 bg-light px-32 2xl:container">
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2 rounded-full full ">
          <Image src={picture2} alt="profile" className="w-5/6 rounded-full h-auto border-4 border-black" />
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

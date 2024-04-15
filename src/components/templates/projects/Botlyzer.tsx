import Image from "next/image";
import MainImage from "../../../../public/projectsImages/BotLyzer/bot1.png";
import ProjectDetailLink from "@/components/elements/ProjectDetailLink";
import AnimatedText from "@/components/elements/AnimatedText";

const Botlyzer = () => {
  return (
    <div className="my-container min-h-screen w-full dark:bg-dark pb-32">
      <div className="">
        <Image src={MainImage} alt="project" />
      </div>
      <div className="">
        <ProjectDetailLink demo="https://app.dealbot.ir/" github="" />
        <div className="mt-10">
          <AnimatedText
            title="Description"
            className="text-left !text-3xl sm:!text-6xl"
          />
          <p className="mt-3 font-semibold text-xl text-dark dark:text-light">
            The website I worked on with this team was a crypto trading
            platform, and I was responsible for the app logic. This included
            handling all routing, API calls, authorization, and real-time
            features such as websockets or Pusher events and other features.
            <br />
            Routing - API - WebSocket - State Management(Redux & Context) -
            Performance Pptimization And...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Botlyzer;

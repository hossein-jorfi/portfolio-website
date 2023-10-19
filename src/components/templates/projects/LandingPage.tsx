import AnimatedText from "@/components/elements/AnimatedText";
import ProjectDetailLink from "@/components/elements/ProjectDetailLink";
import landingPageImage from "../../../../public/projectsImages/LandingPage/landing.png";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="my-container min-h-screen w-full dark:bg-dark pb-32">
      <div className="">
        <Image src={landingPageImage} alt="project" />
      </div>
      <div className="">
        <ProjectDetailLink
          demo="https://landing-page-neon-five.vercel.app/"
          github="https://github.com/hossein-jorfi/landing-page"
        />
        <div className="mt-10">
          <AnimatedText
            title="Description"
            className="text-left !text-3xl sm:!text-6xl"
          />
          <p className="mt-3 font-semibold text-xl text-dark dark:text-light">
            this is a simple landing page, its dont have any complecated section
            or fetching data, i did this project just to improve my css skill
            and turn a design to code . its fully responsive and i used react
            and tailwind css
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

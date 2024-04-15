import Image from "next/image";
import ProjectDetailLink from "@/components/elements/ProjectDetailLink";
import AnimatedText from "@/components/elements/AnimatedText";
// Images
import MainImage from "../../../../public/projectsImages/BotLyzer/bot1.png";
import autoTradingImage from "../../../../public/projectsImages/BotLyzer/bot_autotrading.png";
import login from "../../../../public/projectsImages/BotLyzer/bot_login.png";
import tradeSimImage from "../../../../public/projectsImages/BotLyzer/bot_trade_sim.png";
import createStartegyImage from "../../../../public/projectsImages/BotLyzer/bot_c_srategy.png";
import modalImage from "../../../../public/projectsImages/BotLyzer/bot_modal.png";
import signalImage from "../../../../public/projectsImages/BotLyzer/boy_signal.png";
import traderBotsImage from "../../../../public/projectsImages/BotLyzer/bot_trader_bots.png";
import pricingImage from "../../../../public/projectsImages/BotLyzer/bot_pricing.png";
import pricing2Image from "../../../../public/projectsImages/BotLyzer/bot_pricong_2.png";
import portfolioImage from "../../../../public/projectsImages/BotLyzer/bot_portfolio.png";
import ImageModal from "@/components/elements/ImageModal";

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
      <div className="mt-5">
        <AnimatedText
          title="Images"
          className="text-left !text-3xl sm:!text-5xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <ImageModal>
            <Image src={autoTradingImage} alt="project image" />
          </ImageModal>
          <ImageModal>
            <Image src={tradeSimImage} alt="project image" />
          </ImageModal>
          <ImageModal>
            <Image src={createStartegyImage} alt="project image" />
          </ImageModal>
          <ImageModal>
            <Image src={traderBotsImage} alt="project image" />
          </ImageModal>
          <ImageModal>
            <Image src={signalImage} alt="project image" />
          </ImageModal>
          <ImageModal>
            <Image src={login} alt="project image" />
          </ImageModal>
          <ImageModal>
            <Image src={modalImage} alt="project image" />
          </ImageModal>
          <ImageModal>
            <Image src={pricingImage} alt="project image" />
          </ImageModal>
          <ImageModal>
            <Image src={pricing2Image} alt="project image" />
          </ImageModal>
          <ImageModal>
            <Image src={portfolioImage} alt="project image" />
          </ImageModal>
        </div>
      </div>
    </div>
  );
};

export default Botlyzer;

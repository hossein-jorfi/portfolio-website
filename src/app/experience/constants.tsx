import { ChartCandlestick, Factory, PhoneCall } from "lucide-react";
import { ExperienceItemProps } from "./types";

export const experienceItems: ExperienceItemProps[] = [
  {
    company: "Maroon Moshaver Arjan",
    position: "Front End Developer",
    date: {
      start: "Azar 1402",
      end: "Ordibehesht 1404",
    },
    description:
      "This was my first real experience as a front end developer on a team. i learned so many things in that time. some of them because the job itself but moust of them because i forced myself to keep my knowleg up to date with new tecnologis aldo no one wanted that from me, and that is one of the reasons i leaved them because i wanted to work on products with cutting edge tecnolgies and best practices.",
    projects: [
      {
        name: "Botlyzer",
        icon: <ChartCandlestick />,
        description:
          "A Crypto Currency Platform. Users enter their Exchange API key in their panel and can manage All Exchanges they have in one app like manageing their assets, Trading with advanced Stop loss and take profit, Creating Stategies With Programming and Logical Conditions and see everything on Tradingview Chart and so many other fechures.",
        responsibilities: [
          "App Logic",
          "API Calls",
          "Authentication & Authorization",
          "Routing",
          "Maintaining Legacy Code",
        ],
        learnings: [
          "Team Work",
          "Real time functionalities",
          "Working on Legacy Code",
          "Advanced State Management",
          "Tradingview Advanced Chart",
        ],
        image: "/images/botlyzer/bot1.png",
      },
      {
        name: "Petrochemical Bandar Imam (BIPC)",
        icon: <Factory />,
        description:
          "Petrochemical have many pipes that need to be monitored and maintained. Every pipe has a liquid or gas that have to be in certen speed and pressure. so they need a dashboard so they can see all the pipes in diffrent ways and if a pipe speed is out of standard range, operator recive a warning notification.",
        responsibilities: [
          "API Calls",
          "Websockets",
          "Pixel perfect styling",
          "Working with 3D team",
        ],
        learnings: [
          "Optimize Fast Websockets",
          "Performance Optimization",
          "SWR",
          "MUI advanced customization",
        ],
        image: "/images/bipc/bipc.png",
      },
    ],
  },
  {
    company: "Sharen",
    position: "Front End Developer",
    date: {
      start: "Ordibehesht 1404",
      end: "Current",
    },
    description:
      "In this company im the first Front End Developer they hired so all desicions related to what technologies to use is up to me. its a very good option because you have freedom to choose what to use and how to use it but its a great responsibility too because you have to make shure to choose best options.",
    projects: [
      {
        name: "VIOP Monitoring",
        icon: <PhoneCall />,
        description:
          "This app is a Dashboard for monitor and manage related things to VOIP like Calls, Extentions, Queues and etc. as i mentioned before im the one to choose what tecnologies to use. based on the info they gave me about the app and how they want to sell it i chose to use React and not Next.js and i decided to use Shadcn UI so the App can have a good design system. also i was responsible for the UI and UX of the app. so read the Refactoring UI book from Tailwind creators and i learned a lot about UI and UX and how to make a good design system.",
        image: "/images/botlyzer/bot1.png",
        responsibilities: [
          "Api calls and Caching",
          "Optimize Large Lists",
          "Apply Real time features",
          "Finding Best tecnologies for related tasks",
          "UI & UX",
        ],
        learnings: [
          "UI & UX basic",
          "Why we need a design system",
          "Virtual Rendering",
          "Working with Large set of data",
          "Jira",
        ],
      },
    ],
  },
];

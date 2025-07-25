import { ChartCandlestick, Factory } from "lucide-react";
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
    company: "Company 2",
    position: "Position 2",
    date: {
      start: "Ordibehesht 1404",
      end: "Current",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis, error necessitatibus quod sequi accusamus provident, pariatur commodi doloremque quibusdam a vel unde harum architecto eaque, fuga cumque laborum fugiat.",
    projects: [
      {
        name: "Project 1",
        description: "Description 1",
      },
      {
        name: "Project 2",
        description: "Description 2",
      },
    ],
  },
];

// Icons
import {
  HTML5,
  CSS,
  TypeScript,
  TailwindCSS,
  ReactQuery,
  ShadcnuiIcon,
  ReactIcon,
  Zustand,
  NextjsIcon,
} from "@/components/icons/web-icons";
import { SVGProps, JSX } from "react";

export interface ProjectType {
  image: string;
  title: string;
  text: string;
  liveLink: string;
  gitHubLink: string;
  skills: ((props: SVGProps<SVGSVGElement>) => JSX.Element)[];
  haveTest?: string;
}

export const PROJECTS: ProjectType[] = [
  {
    image: "/images/projects/jsonplaceholder.png",
    title: "Json Placeholder UI",
    text: "This project is using the jsonplaceholder.typicode.com  fake API. The point is how you can manage server data in UI with React-Query (Tanstack-Query). If you open a page, data that belongs to that page will be cached. If you leave the page and come back, instead of loading, you will see cached data. It will remain until new data replaces it (if the data has changed).",
    liveLink: "https://jorfi-jsonplaceholder.vercel.app/",
    gitHubLink: "https://github.com/hossein-jorfi/json-placeholder",
    skills: [
      HTML5,
      CSS,
      TypeScript,
      ShadcnuiIcon,
      TailwindCSS,
      ReactIcon,
      ReactQuery,
    ],
    haveTest:
      "https://github.com/hossein-jorfi/json-placeholder/blob/main/src/lib/post-utils.test.ts",
  },
  {
    image: "/images/projects/shop.png",
    title: "Shop",
    text: "a Shop website usign fakestoreapi.com  data build with Next.js and have different kinds of rendering (SSR, SSG, CSR). actions like add a product to cart is handled by zustand and cart page is handled with react query to get and cache data(CSR). the home page and shop page is static(SSG) and single product page is server side render (SSR). and with some tricks the website feels fast (top loading skeletons), and static routes feel dynamic (progress bar loading)",
    liveLink: "https://jorfi-shop.vercel.app/",
    gitHubLink: "https://github.com/hossein-jorfi/Shop-Next.js",
    skills: [
      HTML5,
      CSS,
      TypeScript,
      ShadcnuiIcon,
      TailwindCSS,
      NextjsIcon,
      Zustand,
      ReactIcon,
      ReactQuery,
    ],
  },
  {
    image: "/images/projects/next-dash.png",
    title: "Next.js Dashboard",
    text: "This is the dashboard from the official Next.js website course, which covers significant topics and features of Next.js, such as the various types of server-side rendering applicable in different scenarios, authorization, authentication, navigation, and more. Upon completing the course, I enhanced the aesthetics of the dashboard by utilizing Shadcn UI and developed loading skeletons for the components.",
    liveLink: "https://nextjs-dashboard-hossein.vercel.app",
    gitHubLink: "https://github.com/hossein-jorfi/nextjs-dashboard",
    skills: [
      HTML5,
      CSS,
      TypeScript,
      ReactIcon,
      NextjsIcon,
      TailwindCSS,
      ShadcnuiIcon,
    ],
  },
  {
    image: "/images/projects/landing.png",
    title: "Landing page",
    text: "This project involves the creation of a straightforward landing page that does not incorporate any data fetching or complex tasks. The primary objective is to practice styling and ensuring responsiveness in web pages. For this Project, I utilized React and Tailwind CSS.",
    liveLink: "https://landing-page-neon-five.vercel.app",
    gitHubLink: "https://github.com/hossein-jorfi/landing-page",
    skills: [HTML5, CSS, ReactIcon, TailwindCSS],
  },
];

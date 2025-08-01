import { Lead } from "@/components/ui/typography";
import Info from "./info";

const praggraph1 =
  "Every web developer is capable of performing fundamental tasks such as retrieving product data from a server and presenting it in a list format, as well as executing all CRUD (Create, Read, Update, Delete) requests. Therefore, one may wonder why companies place such significant emphasis on hiring front-end developers. The reason lies in the fact that their responsibilities extend beyond mere data management and editing; while these functions are indeed foundational to a website, for many organizations, their website represents the most critical aspect of their brand identity. It is essential that they convey the essence of their brand through their online presence.";

const praggraph2 =
  "Additionally, one expects any developer to produce clean and professional work. For instance, consider a scenario where there is a list of articles on a website and there arises a need for functionality that allows sorting based on the article's creation date. In this situation, two types of programmers may emerge: one who hastily begins installing libraries upon receiving the task—acquiring one package for sorting, another for parsing dates from an API due to format incompatibility with JavaScript, and perhaps even an additional package for pagination without much thought. This approach can lead to a simplistic website bloated with unnecessary dependencies that frustrate users and devices alike.";

const praggraph3 =
  "Conversely, there exists a more judicious method wherein the developer thoughtfully considers the task at hand and utilizes libraries only when necessary. Often, simple methods suffice for sorting without necessitating the importation of an entire library into the project. I take pride in being the kind of individual who strives to create code that other developers find enjoyable to build upon while appreciating the structure and problem-solving strategies I have employed.";

const Page = () => {
  return (
    <div className="app-container flex flex-col gap-5">
      <Info />
      <Lead className="leading-8 text-foreground">{praggraph1}</Lead>
      <Lead className="leading-8 text-foreground">{praggraph2}</Lead>
      <Lead className="leading-8 text-foreground">{praggraph3}</Lead>
    </div>
  );
};

export default Page;

import ExperienceItem from "./_components/experience-item";
import { experienceItems } from "./constants";

const Page = () => {
  return (
    <div className="app-container flex flex-col gap-6">
      {experienceItems.map((item) => (
        <ExperienceItem key={item.company} {...item} />
      ))}
    </div>
  );
};

export default Page;

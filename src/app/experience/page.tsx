import ExperienceItem from "./_components/experience-item";
import { experienceItems } from "./constants";

const Page = () => {
  return (
    <div className="app-container">
      {experienceItems.map((item) => (
        <ExperienceItem key={item.company} {...item} />
      ))}
    </div>
  );
};

export default Page;

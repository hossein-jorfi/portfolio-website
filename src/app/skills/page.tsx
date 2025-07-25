import { BASE_SKILLS } from "./constants";
import SimpleSkillItem from "./_components/simple-skill-item";

const Page = () => {
  return (
    <div className="app-container">
      <div className="grid grid-cols-3 gap-4">
        {BASE_SKILLS.map((skill) => (
          <SimpleSkillItem key={skill.text} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Page;

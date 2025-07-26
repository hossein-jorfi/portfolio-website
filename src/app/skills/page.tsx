import { BASE_SKILLS } from "./constants";
import SimpleSkillItem from "./_components/simple-skill-item";
import { H4 } from "@/components/ui/typography";

const Page = () => {
  return (
    <div className="app-container flex flex-col gap-8">
      {BASE_SKILLS.map((skill) => (
        <div key={skill.category}>
          <H4 className="my-4 text-muted-foreground">{skill.category}</H4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skill.skills.map((skill) => (
              <SimpleSkillItem key={skill.text} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;

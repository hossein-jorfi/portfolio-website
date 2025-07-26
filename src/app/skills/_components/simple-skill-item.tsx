import { Large } from "@/components/ui/typography";

const SimpleSkillItem = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3 rounded-lg p-6 bg-muted dark:bg-card">
      <div className="[&>svg]:size-6">
        {icon}
      </div>
      <Large>{text}</Large>
    </div>
  );
};

export default SimpleSkillItem;

import { Large } from "@/components/ui/typography";

const SimpleSkillItem = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-2 rounded-lg p-4 bg-muted dark:bg-card">
      <div className="[&>svg]:size-6 p-3 bg-input/70 dark:bg-input/30 rounded-md border-2">
        {icon}
      </div>
      <Large>{text}</Large>
    </div>
  );
};

export default SimpleSkillItem;

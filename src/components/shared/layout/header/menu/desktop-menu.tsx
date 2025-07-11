import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";
import { menuItems } from ".";

const DesktopMenu = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <CodeXml className="size-5" />
      </Button>
      {menuItems.map((item, index) => (
        <Button variant="ghost" size="sm" className="font-semibold" key={index}>
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default DesktopMenu;

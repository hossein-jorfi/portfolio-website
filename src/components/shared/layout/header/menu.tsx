import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <CodeXml className="size-5" />
      </Button>
      {Array.from({ length: 5 }).map((_, index) => (
        <Button variant="ghost" size="sm" className="font-semibold" key={index}>
          Page {index + 1}
        </Button>
      ))}
    </div>
  );
};

export default Menu;

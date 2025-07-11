import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <Code />
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

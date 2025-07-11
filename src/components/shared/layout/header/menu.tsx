import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <Code />
      </Button>
      <Button variant="ghost">Page 1</Button>
      <Button variant="ghost">Page 2</Button>
      <Button variant="ghost">Page 3</Button>
      <Button variant="ghost">Page 4</Button>
    </div>
  );
};

export default Menu;

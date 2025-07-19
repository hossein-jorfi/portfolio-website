import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon">
        <Menu />
      </Button>
    </div>
  );
};

export default MobileMenu;
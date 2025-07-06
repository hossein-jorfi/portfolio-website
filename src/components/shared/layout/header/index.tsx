import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const Header = () => {
  return (
    <div className="app-container py-4 flex items-center justify-between">
      <Button variant="ghost" size="icon"><Code /></Button>
      <ThemeToggle />
    </div>
  );
};

export default Header;

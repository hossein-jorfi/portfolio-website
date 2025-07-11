import ThemeToggle from "@/components/shared/theme-toggle";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="app-container py-4 flex items-center justify-between">
      <Menu />

      <div className="flex h-4 items-center space-x-3">
        <Button size="sm">
          <DownloadIcon /> Download CV
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;

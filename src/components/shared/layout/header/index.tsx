import ThemeToggle from "@/components/shared/theme-toggle";
import Menu from "./menu";
import ResumeButton from "../../resume-button";

const Header = () => {
  return (
    <div className="app-container py-4 flex items-center justify-between sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <Menu />

      <div className="flex h-4 items-center space-x-2">
        <ResumeButton />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;

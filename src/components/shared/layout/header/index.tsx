import ThemeToggle from "@/components/shared/theme-toggle";
import Menu from "./menu";

const Header = () => {
  return (
    <div className="app-container py-4 flex items-center justify-between">
      <Menu />
      <ThemeToggle />
    </div>
  );
};

export default Header;

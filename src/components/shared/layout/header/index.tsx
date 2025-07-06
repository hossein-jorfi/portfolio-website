import ThemeToggle from "@/components/shared/theme-toggle";

const Header = () => {
  return (
    <div className="app-container py-4 flex items-center justify-between">
      logo
      <ThemeToggle />
    </div>
  );
};

export default Header;

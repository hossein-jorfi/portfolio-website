import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

export const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about",
  },
  // {
  //   label: "Contact",
  //   href: "/contact",
  // },
];

const Menu = () => {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
};

export default Menu;

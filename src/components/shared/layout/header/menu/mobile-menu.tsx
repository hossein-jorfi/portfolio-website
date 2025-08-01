"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { menuItems } from ".";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <SidebarProvider>
      <SidebarTrigger />

      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <MenuButton key={item.label} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};

export default MobileMenu;

const MenuButton = ({ item }: { item: (typeof menuItems)[number] }) => {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <SidebarMenuItem key={item.label}>
      <SidebarMenuButton
        asChild
        onClick={() => {
          toggleSidebar();
        }}
        className="font-medium"
        isActive={pathname === item.href}
      >
        <Link href={item.href}>
          <span>{item.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

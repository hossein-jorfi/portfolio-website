"use client";

import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";
import { menuItems } from ".";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import ContactButton from "@/app/_home/contact-button";

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <CodeXml className="size-5" />
      </Button>
      {menuItems.map((item, index) => (
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "font-semibold",
            pathname === item.href && "bg-accent"
          )}
          key={index}
          asChild
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
      <ContactButton />
    </div>
  );
};

export default DesktopMenu;

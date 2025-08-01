"use client";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy, Github, Linkedin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const socials = [
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/hossein-jorfi/",
  },
  {
    name: "GitHub",
    icon: <Github />,
    url: "https://github.com/hossein-jorfi",
  },
  {
    name: "Telegram",
    icon: <Send />,
    url: "https://t.me/hossein_jorfi",
  },
];

const ContactDialog = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Contact</DialogTitle>
        <DialogDescription>
          Contact me for any questions or opportunities.
        </DialogDescription>
      </DialogHeader>
      <PhoneItem />
      <div className="flex flex-col items-start gap-1">
        {socials.map((social) => (
          <SocialsMediaItem key={social.name} {...social} />
        ))}
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default ContactDialog;

const SocialsMediaItem = ({
  name,
  icon,
  url,
}: {
  name: string;
  icon: React.ReactNode;
  url: string;
}) => {
  return (
    <Button variant="ghost" asChild>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {icon}
        {name}
      </Link>
    </Button>
  );
};

const PhoneItem = () => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <Button className="w-fit" variant="outline" asChild>
        <Link href="tel:09015304912" className="font-semibold">
          <Phone /> +98 901-530-4912
        </Link>
      </Button>
      <Button
        size="icon"
        variant="outline"
        onClick={() => {
          navigator.clipboard.writeText("09015304912");
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1000);
        }}
      >
        {isCopied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
};

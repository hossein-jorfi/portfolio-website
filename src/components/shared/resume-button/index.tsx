import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Button size="sm" asChild>
      <Link href="/Hossein_Jorfi.pdf" download={true}>
        <DownloadIcon /> Resume
      </Link>
    </Button>
  );
};

export default ResumeButton;

import ResumeButton from "@/components/shared/resume-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { H1, H3 } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="app-container mt-30 flex flex-col items-center gap-2">
      <Badge variant="secondary">Front End Developer</Badge>
      <H1>Hossein Jorfi</H1>
      <H3>I Can Build High Quality, Tested and Scalable Web Applications.</H3>
      <div className="flex items-center gap-2 mt-5">
        <ResumeButton />
        <Button variant="ghost" size="sm">
          Contact <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

import ResumeButton from "@/components/shared/resume-button";
import { Badge } from "@/components/ui/badge";
import { H1, H3 } from "@/components/ui/typography";
import { CardsDemo } from "./_home/cards";
import ContactButton from "./_home/contact-button";

export default function Home() {
  return (
    <div className="app-container flex flex-col items-center gap-2 text-center mt-20">
      <Badge variant="secondary">Front End Developer</Badge>
      <H1>Hossein Jorfi</H1>
      <H3>I Can Build High Quality, Tested and Scalable Web Applications.</H3>
      <div className="flex items-center gap-2 mt-5">
        <ResumeButton />
        <ContactButton />
      </div>

      <CardsDemo />
    </div>
  );
}

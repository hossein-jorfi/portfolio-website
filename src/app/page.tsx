import { Badge } from "@/components/ui/badge";
import { H1, H3 } from "@/components/ui/typography";

export default function Home() {
  return (
    <div className="app-container mt-30 flex flex-col items-center gap-2">
      <Badge variant="secondary">Front End Developer</Badge>
      <H1>Hossein Jorfi</H1>
      <H3>I Can Build High Quality, Tested and Scalable Web Applications.</H3>
    </div>
  );
}

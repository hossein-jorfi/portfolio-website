import { ProjectType } from "../../constants";
import Image from "next/image";
import { P } from "@/components/ui/typography";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { GitHub } from "@/components/icons/web-icons";

const ProjectItem = ({
  image,
  title,
  text,
  liveLink,
  gitHubLink,
  skills,
}: // haveTest,
ProjectType) => {
  return (
    <Card className="w-full">
      <CardHeader className="gap-y-3.5">
        <CardTitle className="flex items-center gap-2 text-2xl">
          {/* <Building2 className="size-6" /> */}
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 col-span-2">
          <P className="!mt-0 leading-6">{text}</P>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div key={index}>{skill({ className: "size-6" })}</div>
            ))}
          </div>
        </div>
        <Image
          src={image}
          className="rounded-lg overflow-hidden"
          alt={title}
          width={1000}
          height={1000}
        />

        <div className="flex gap-2">
          <Button variant="outline" className="min-w-28" asChild>
            <Link href={gitHubLink} target="_blank">
              <GitHub /> GitHub
            </Link>
          </Button>
          <Button variant="outline" className="min-w-28" asChild>
            <Link href={liveLink} target="_blank">
              <ExternalLink /> Live
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectItem;

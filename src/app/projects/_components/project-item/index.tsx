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
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">{title}</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 ">
          <P className="!mt-0 leading-6">
            {text?.split(" ").map((i) => {
              if (i?.includes(".com")) {
                return (
                  <Button variant="link" asChild key={i} className="p-0 h-fit text-base text-blue-500">
                    <Link href={`https://${i}`} target="_blank">
                      {" "}{i}{" "}
                    </Link>
                  </Button>
                );
              } else {
                return `${i} `;
              }
            })}
          </P>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div key={index}>{skill({ className: "size-6" })}</div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={image}
            className="rounded-lg overflow-hidden border-2"
            alt={title}
            width={500}
            height={500}
          />
        </div>

        <div className="grid grid-cols-2 md:flex gap-2 mt-4 md:mt-1">
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

import { ProjectType } from "../../constants";
import Image from "next/image";
import { H3 } from "@/components/ui/typography";
import { P } from "@/components/ui/typography";
import Link from "next/link";

const ProjectItem = ({
  image,
  title,
  text,
  liveLink,
  gitHubLink,
  skills,
  haveTest,
}: ProjectType) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Image src={image} alt={title} width={100} height={100} />
        <div>
          <H3>{title}</H3>
          <P>{text}</P>
          <div>
            {skills.map((skill, index) => (
              <div key={index}>{skill({})}</div>
            ))}
          </div>
          <div>
            <Link href={liveLink}>Live</Link>
            <Link href={gitHubLink}>GitHub</Link>
            {haveTest && <Link href={haveTest}>Test</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

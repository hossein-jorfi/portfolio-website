// ExperienceItem.tsx
import { CalendarDays, Building2, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { P } from "@/components/ui/typography";
import { ExperienceItemProps } from "../../types";
import ProjectItem from "./project-item";

export default function ExperienceItem({
  company,
  position,
  date,
  description,
  projects,
}: ExperienceItemProps) {
  return (
    <Card className="w-full mt-6">
      <CardHeader className="gap-y-3.5">
        <div className="flex items-center justify-between gap-5">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Building2 className="size-6" />
            {company}
          </CardTitle>
          <Badge variant="outline" size="md">
            <CalendarDays className="h-4 w-4" />
            {date.start} – {date.end}
          </Badge>
        </div>
        <Badge size="md">
          <Code2 />
          {position}
        </Badge>

        <P className="!mt-0 leading-6">{description}</P>
      </CardHeader>

      <CardContent className="space-y-4">
        {projects.length > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Projects
              </p>
              {projects.map((project) => (
                <ProjectItem key={project.name} {...project} />
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

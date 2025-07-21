// ExperienceItem.tsx
import { CalendarDays, Building2, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Project {
  name: string;
  description: string;
}

export interface ExperienceItemProps {
  company: string;
  position: string;
  jalaliDate: { start: string; end: string };
  englishDate: { start: string; end: string };
  description: string;
  projects: Project[];
}

export default function ExperienceItem({
  company,
  position,
  jalaliDate,
  englishDate,
  description,
  projects,
}: ExperienceItemProps) {
  return (
    <Card className="w-full mt-6">
      <CardHeader>
        <div className="flex items-center justify-between gap-5">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Building2 className="size-6" />
            {company}
          </CardTitle>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <Badge variant="outline" size="md">
              <CalendarDays className="h-4 w-4" />
              {jalaliDate.start} – {jalaliDate.end}
            </Badge>
            <Badge variant="outline" size="md">
              <CalendarDays className="h-4 w-4" />
              <span>
                {englishDate.start} – {englishDate.end}
              </span>
            </Badge>
          </div>
        </div>
        <Badge size="md">
          <Code2 />
          {position}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>

        {projects.length > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Projects
              </h4>
              {projects.map((p) => (
                <div key={p.name} className="space-y-1">
                  <Badge variant="secondary" className="font-semibold">
                    {p.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

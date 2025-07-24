// ExperienceItem.tsx
import { CalendarDays, Building2, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { H4, Muted, P } from "@/components/ui/typography";
import { ExperienceItemProps } from "../../types";

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
              {projects.map((p) => (
                <div key={p.name} className="flex items-center gap-7">
                  <div className="space-y-1">
                    <H4>{p.name}</H4>
                    <Muted>{p.description}</Muted>
                  </div>
                  <div className="border rounded-lg w-full h-[300px]" />
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

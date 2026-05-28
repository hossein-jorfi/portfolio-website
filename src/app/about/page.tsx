import { H1, Lead } from "@/components/ui/typography";

const praggraph1 =
  "Every web developer is capable of performing fundamental tasks such as retrieving product data from a server and presenting it in a list format, as well as executing all CRUD (Create, Read, Update, Delete) requests. Therefore, one may wonder why companies place such significant emphasis on hiring front-end developers. The reason lies in the fact that their responsibilities extend beyond mere data management and editing; while these functions are indeed foundational to a website, for many organizations, their website represents the most critical aspect of their brand identity. It is essential that they convey the essence of their brand through their online presence.";

const praggraph2 =
  "Additionally, one expects any developer to produce clean and professional work. For instance, consider a scenario where there is a list of articles on a website and there arises a need for functionality that allows sorting based on the article's creation date. In this situation, two types of programmers may emerge: one who hastily begins installing libraries upon receiving the task—acquiring one package for sorting, another for parsing dates from an API due to format incompatibility with JavaScript, and perhaps even an additional package for pagination without much thought. This approach can lead to a simplistic website bloated with unnecessary dependencies that frustrate users and devices alike.";

const praggraph3 =
  "Conversely, there exists a more judicious method wherein the developer thoughtfully considers the task at hand and utilizes libraries only when necessary. Often, simple methods suffice for sorting without necessitating the importation of an entire library into the project. I take pride in being the kind of individual who strives to create code that other developers find enjoyable to build upon while appreciating the structure and problem-solving strategies I have employed.";

const principles = [
  {
    title: "Thoughtful engineering",
    description:
      "I prefer clear architecture and practical solutions over quick patches that add long-term complexity.",
  },
  {
    title: "Performance-minded choices",
    description:
      "Dependencies are tools, not defaults. I only add them when they provide meaningful value.",
  },
  {
    title: "Clean collaboration",
    description:
      "Readable code and consistent structure make it easier for teams to ship faster and maintain confidently.",
  },
];

const Page = () => {
  return (
    <div className="app-container py-10">
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-muted/70 via-background to-background px-6 py-10 shadow-sm md:px-10">
        <span className="inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Front-end Philosophy
        </span>
        <H1 className="mt-4">About Me</H1>
        <Lead className="mt-4 max-w-3xl leading-8 text-foreground/90">
          I build interfaces that feel intentional, performant, and aligned with a
          brand&apos;s identity.
        </Lead>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {principles.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-colors hover:bg-muted/40"
          >
            <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-8 space-y-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm md:p-8">
        <Lead className="leading-8 font-medium text-foreground">{praggraph1}</Lead>
        <div className="h-px w-full bg-border/70" />
        <Lead className="leading-8 font-medium text-foreground">{praggraph2}</Lead>
        <div className="h-px w-full bg-border/70" />
        <Lead className="leading-8 font-medium text-foreground">{praggraph3}</Lead>
      </section>
    </div>
  );
};

export default Page;

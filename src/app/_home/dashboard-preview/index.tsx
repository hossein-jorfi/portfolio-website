import { Button } from "@/components/ui/button";
import { Muted } from "@/components/ui/typography";
import Link from "next/link";

const DashboardPreview = () => {
  return (
    <div className="w-full mt-20 mb-10">
      <Muted>
        This is a preview of a dashboard created with{" "}
        <Button variant="link" asChild className="p-0 px-0.5">
          <Link href="https://ui.shadcn.com/blocks" target="_blank">
            shadcn
          </Link>
        </Button>
      </Muted>
      <div className="overflow-hidden w-full rounded-lg mt-0.5">
        <iframe
          src="https://ui.shadcn.com/view/dashboard-01"
          height="1000px"
          loading="lazy"
          className="bg-background no-scrollbar relative z-20 w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default DashboardPreview;

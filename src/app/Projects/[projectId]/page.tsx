import Crypto from "@/components/templates/projects/Crypto";
import LandingPage from "@/components/templates/projects/LandingPage";
import Weblog from "@/components/templates/projects/Weblog";

const page = ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
      if (projectId === "crypto") return <Crypto />
      if (projectId === "weblog") return <Weblog />
      if (projectId === "landing-page") return <LandingPage />
};

export default page;

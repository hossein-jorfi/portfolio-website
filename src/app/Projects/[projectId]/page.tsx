import Crypto from "@/components/templates/projects/Crypto";
import Weblog from "@/components/templates/projects/Weblog";

const page = ({
  params: { projectId },
}: {
  params: { projectId: string };
}) => {
      if (projectId === "crypto") return <Crypto />
      if (projectId === "weblog") return <Weblog />
};

export default page;

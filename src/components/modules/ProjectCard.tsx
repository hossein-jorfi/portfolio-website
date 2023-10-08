import Image, { StaticImageData } from "next/image";
import myPic2 from "../../../public/images/about_page_photo.jpg";
import Link from "next/link";

const ProjectCard = ({
  icons,
  title,
  image,
  routeId,
}: {
  icons: any;
  title: string;
  routeId: string;
  image: StaticImageData;
}) => {
  return (
    <div className="mt-7 sm:mt-0 h-max w-full relative sm:col-span-6 rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-4">
      <Link href={`/Projects/${routeId}`} className="">
        <div className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light -z-10"></div>

        <div className="flex justify-between items-center">
          <p className="font-bold text-dark dark:text-light">{title}</p>
          <div className="flex space-x-1">
            {icons.map((item: { icon: any; id: number }) => (
              <div key={item.id} className="w-4">
                <svg viewBox="0 0 128 128">{item.icon}</svg>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <Image
            src={image}
            alt="my photo"
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

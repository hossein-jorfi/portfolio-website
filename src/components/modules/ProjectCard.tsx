import Image from "next/image";
import myPic2 from "../../../public/images/about_page_photo.jpg";

const ProjectCard = ({ icon }: {icon: any }) => {
  return (
    <div className="mt-7 sm:mt-0 w-full h-max relative sm:col-span-6 rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-4">
      <div className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light -z-10"></div>

      <div className="flex justify-between items-center">
        <p className="font-bold text-dark dark:text-light">Project</p>
        <div className="w-4">
          <svg viewBox="0 0 128 128">
            {icon}
          </svg>
        </div>
      </div>
      <div className="mt-2">
        <Image
          src={myPic2}
          alt="my photo"
          className="rounded-2xl w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ProjectCard;

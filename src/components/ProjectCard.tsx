import Image from "next/image";
import myPic2 from "../../public/images/about_page_photo.jpg";

const ProjectCard = () => {
  return (
    <div className="w-full h-max relative col-span-12 sm:col-span-6 rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-4">

      <div className="absolute top-0 -right-3 w-[102%] h-[103%] rounded-[1.5rem] bg-dark -z-10"></div>

      <div className="">
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

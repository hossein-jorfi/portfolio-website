import Image from "next/image";

const ScreenShots = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={image || ""}
        alt={name}
        width={1000}
        height={1000}
        className="rounded-lg object-cover"
      />
    </div>
  );
};

export default ScreenShots;

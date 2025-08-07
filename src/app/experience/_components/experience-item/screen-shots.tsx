"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const ScreenShots = ({ image, name }: { image: string; name: string }) => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <Link href={image} target="_blank">
              <Image
                src={image || ""}
                alt={name}
                width={10000}
                height={10000}
                className="w-full h-auto object-cover rounded-lg border-2 cursor-pointer"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ScreenShots;

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const ScreenShots = ({ images, name }: { images: string[]; name: string }) => {
  return (
    <div className="px-12">
      <Carousel
        className=""
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
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

        <CarouselPrevious className="left" />
        <CarouselNext className="right" />
      </Carousel>
    </div>
  );
};

export default ScreenShots;

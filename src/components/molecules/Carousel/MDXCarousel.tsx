"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/molecules/Carousel/Carousel";
import { cn } from "@/utils/cn";

export const MDXCarousel = ({
  images,
  ratio = "web",
}: { images: string[]; ratio: "web" | "mobile" }) => {
  return (
    <Carousel
      className={"not-prose rounded overflow-hidden"}
      opts={{ loop: true, align: "center" }}
    >
      <CarouselContent className={"px-8"}>
        {images.map((image) => (
          <CarouselItem
            key={image}
            className={cn(
              "h-64 xl:h-[400px]",
              ratio === "mobile" && "basis-1/2",
            )}
          >
            <img
              src={image}
              alt="Jeteo"
              className={"rounded-xl size-full object-cover object-top"}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/molecules/Carousel/Carousel";

export const MDXCarousel = ({ images }: { images: string[] }) => {
  return (
    <Carousel
      className={"not-prose rounded overflow-hidden"}
      opts={{ loop: true, align: "center" }}
    >
      <CarouselContent className={"px-8"}>
        {images.map((image) => (
          <CarouselItem key={image} className={"h-64 xl:h-[400px]"}>
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

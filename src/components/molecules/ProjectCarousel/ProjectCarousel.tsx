"use client";

import { cn } from "@/utils/cn";
import React, { useState } from "react";

export const ProjectCarousel = ({
  children: slides,
}: { children: React.ReactNode[] }) => {
  const [curr, setCurr] = useState(0);

  return (
    <div className="relative h-full pl-6 py-8">
      <div
        className="flex h-full transition-transform ease-out duration-500 pr-6 gap-6 w-[90%]"
        style={{
          transform: `translateX(calc(-${curr * 100}% + 5%))`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            onClick={(e) => {
              if (curr === index) return;

              e.stopPropagation();
              e.preventDefault();
              setCurr(index);
            }}
            className={cn(
              "flex flex-col min-w-full transition-opacity ease-out duration-500",
              curr !== index && "opacity-50 cursor-pointer",
            )}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

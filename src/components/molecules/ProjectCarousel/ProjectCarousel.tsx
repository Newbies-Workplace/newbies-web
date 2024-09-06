"use client";

import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { HandledEvents } from "react-swipeable/src/types";

export const ProjectCarousel = ({
  children: slides,
}: { children: React.ReactNode[] }) => {
  const [curr, setCurr] = useState(0);
  const [swipeOffset, setSwipeOffset] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const shouldPreventSwipe = (e: HandledEvents) => {
    return (e.target as HTMLElement).tagName === "IMG";
  };

  const handlers = useSwipeable({
    onSwiping: (e) => {
      if (shouldPreventSwipe(e.event)) {
        return;
      }
      setSwipeOffset(e.deltaX);
    },
    onSwipedLeft: (e) => {
      if (shouldPreventSwipe(e.event)) {
        return;
      }

      next();
      setSwipeOffset(0);
    },
    onSwipedRight: (e) => {
      if (shouldPreventSwipe(e.event)) {
        return;
      }

      prev();
      setSwipeOffset(0);
    },
    preventScrollOnSwipe: true,
    delta: 50,
  });

  return (
    <div className="relative h-full pl-6 py-8" {...handlers}>
      <div
        className="flex h-full transition-transform ease-out duration-500 pr-6 gap-6 w-[90%]"
        style={{
          transform: `translateX(calc(-${curr * 100}% + ${swipeOffset}px))`,
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
              curr !== index && "opacity-50",
            )}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-end px-4 sm:py-4 justify-between pointer-events-none z-10">
        <button
          onClick={prev}
          className="sm:py-3 px-6 sm:rounded-xl rounded-full shadow bg-red-500 text-white hover:bg-red-600 pointer-events-auto"
        >
          &lt;-
        </button>
        <button
          onClick={next}
          className="sm:py-3 px-6 sm:rounded-xl rounded-full shadow bg-red-500 text-white hover:bg-red-600 pointer-events-auto"
        >
          -&gt;
        </button>
      </div>

      <div className="absolute bottom-2 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
          {slides.map((_: any, i: number) => (
            <div
              onClick={() => setCurr(i)}
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
              className={`transition-all w-5 h-1.5 bg-red-500 rounded-full cursor-pointer ${
                curr === i ? "p-0.5" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

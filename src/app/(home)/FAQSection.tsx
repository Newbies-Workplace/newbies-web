import FaqItem from "@/components/atoms/FaqItem/FaqItem";
import React from "react";
import Marquee from "react-fast-marquee";

export const FaqSection = () => {
  return (
    <div className="min-h-screen bg-green-900 bg-dot-white/[0.2] relative snap-start">
      <div className={"rotate-1 -mx-4"}>
        <Marquee
          direction="right"
          speed={65}
          className="shadow-neon-green bg-green-500 w-[3000px] overflow-hidden z-10"
          autoFill
        >
          <p className="mx-3 md:text-7xl sm:text-xl font-bold font-saira">
            MASZ PYTANIA?
          </p>
        </Marquee>
      </div>

      <div
        className={"flex flex-col justify-center items-center gap-4 py-8 px-4"}
      >
        <FaqItem
          question="Jak do nas dołączyć?"
          answer="Dołączyć na discorda"
        />
        <FaqItem
          question="Jak wycentrować diva"
          answer={"Dołączyć na discorda"}
        />
        <FaqItem
          question="Co to jest rekurencja?"
          answer={
            <FaqItem
              question="Co to jest rekurencja?"
              answer={
                <FaqItem
                  question="Co to jest rekurencja?"
                  answer={
                    <FaqItem
                      question="Co to jest rekurencja?"
                      answer="Właśnie to jest rekurencja!"
                    />
                  }
                />
              }
            />
          }
        />
      </div>
    </div>
  );
};

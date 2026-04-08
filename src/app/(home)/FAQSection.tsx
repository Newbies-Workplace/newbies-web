"use client";

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
        className={"w-full h-full flex flex-col justify-center items-center"}
      >
        <div
          className={
            "container flex h-full flex-col justify-center items-center gap-4 py-8 px-4"
          }
        >
          <FaqItem
            question="Jakie macie doświadczenie komercyjne"
            answer={
              "Część z nas na co dzień pracuje w korporacjach, wykonaliśmy również kilka projektów dla klientów zewnętrznych, ale przede wszystkim jesteśmy pasjonatami programowania, którzy chcą dzielić się swoją wiedzą i doświadczeniem z innymi!"
            }
          />
          <FaqItem
            question="Gdzie nas znaleźć?"
            answer={
              "Jesteśmy dostępni: " +
              "\n - na discordzie" +
              "\n - na Facebooku" +
              "\n - na Discordzie" +
              "\n - na platformie useme.com"
            }
          />
          <FaqItem
            question="Czy mogę u was zaliczyć praktyki?"
            answer={
              "Nie, zakończyliśmy prowadzenie praktyk w 2025 roku.\nDziękujemy wam za dziesiątki wspólnie stworzonych projektów!"
            }
          />
          <FaqItem
            question="Skąd jesteście?"
            answer={"Newbies powstało w Świdnicy dzięki firmie RST Software."}
          />
        </div>
      </div>
    </div>
  );
};

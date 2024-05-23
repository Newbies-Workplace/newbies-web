"use client";

import { CardDeck } from "@/components/molecules/TeamCard/CardDeck";
import { TeamCard } from "@/components/molecules/TeamCard/TeamCard";
import React from "react";
import Marquee from "react-fast-marquee";

export const OurTeamSection = () => {
  return (
    <div className="min-h-screen bg-orange-900 bg-dot-white/[0.2] relative snap-start">
      <div className={"-rotate-1 -mx-4"}>
        <Marquee
          direction="right"
          speed={65}
          className="shadow-neon-orange bg-orange-500 w-[3000px] overflow-hidden z-10"
          autoFill
        >
          <p className="mx-3 md:text-7xl sm:text-xl font-bold font-saira">
            ZESPÓŁ
          </p>
        </Marquee>
      </div>

      <div className={"h-full flex flex-col justify-evenly items-center"}>
        <CardDeck>
          <TeamCard img={"image/placeholder.png"} name={"Wiktor"} />
          <TeamCard img={"image/placeholder.png"} name={"Kamil"} />
          <TeamCard img={"image/placeholder.png"} name={"Oskar"} />
          <TeamCard img={"image/placeholder.png"} name={"Rafał"} />
        </CardDeck>

        <button className={"px-4 py-2 bg-orange-800 rounded"}>
          Stwórz swoją kartę
        </button>
      </div>
    </div>
  );
};

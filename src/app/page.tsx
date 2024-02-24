"use client";

import FaqItem from "@/components/atoms/FaqItem/FaqItem";
import { ControlRoomHome } from "@/components/organisms/ControlRoomHome/ControlRoomHome";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden bg-blue-900 snap-y text-white snap-mandatory">
      <div className={"absolute z-20"}>
        <ControlRoomHome />
      </div>

      <div className="h-screen bg-[#2b2e97] flex justify-center items-center flex-col snap-center">
        <p>O NAS</p>
        <p>TODO PRZYCISK POWROTU</p>
        <p>
          TODO info sugestia o przescrollowanie gdy ktoś zostaje na tej stronie
        </p>
      </div>

      <div className=" h-screen bg-blue-900 snap-start">
        <Marquee
          direction="right"
          speed={65}
          className="bg-blue-500 shadow-neon-blue w-[3000px] overflow-hidden z-10"
          autoFill
        >
          <p className="mx-3 md:text-7xl sm:text-xl font-bold font-saira">
            ŚRODA
          </p>
        </Marquee>
        <br />
        <Marquee
          direction="left"
          speed={65}
          className="bg-blue-500 shadow-neon-blue w-[3000px] overflow-hidden z-10"
          autoFill
        >
          <p className="mx-3 md:text-7xl sm:text-xl font-bold font-saira">
            17:00
          </p>
        </Marquee>

        <p>Dołącz</p>
      </div>

      <div className="h-screen bg-red-900 snap-start">
        <Marquee
          direction="right"
          speed={65}
          className="shadow-neon-red bg-red-500 w-[3000px] overflow-hidden z-10"
          autoFill
        >
          <p className="mx-3 md:text-7xl sm:text-xl font-bold font-saira">
            NASZE PROJEKTY
          </p>
        </Marquee>

        <p>Nasze projekty</p>
      </div>

      <div className="min-h-screen bg-orange-900 snap-start">
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

        <p>Zespół</p>
      </div>

      <div className="flex flex-col min-h-screen bg-green-900 snap-start">
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

        <div
          className={
            "flex flex-col justify-center items-center gap-4 py-8 px-4"
          }
        >
          <FaqItem
            question="Jak do nas dołączyć?"
            answer="Dołączyć na discorda"
          />
          <FaqItem question="Jak wycentrować diva" answer="My też nie wiemy" />
        </div>
      </div>
    </main>
  );
}

import React from "react";
import Marquee from "react-fast-marquee";

export const JoinUsSection = () => {
  return (
    <div className="min-h-dvh bg-blue-900 bg-dot-white/[0.2] relative snap-start">
      <div className={"rotate-1 -mx-4"}>
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
      </div>
      <div className={"-rotate-1 -mx-4"}>
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
      </div>

      <div className={"m-8 p-4 flex justify-center"}>Dołącz</div>
    </div>
  );
};

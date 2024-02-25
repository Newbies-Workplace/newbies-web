import React from "react";
import Marquee from "react-fast-marquee";

export const OurTeamSection = () => {
  return (
    <div className="min-h-screen bg-orange-900 snap-start">
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

      <p>Zespół</p>
    </div>
  );
};

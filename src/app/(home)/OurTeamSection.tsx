"use client";

import {CardDeck} from "@/components/molecules/TeamCard/CardDeck";
import {TeamCard} from "@/components/molecules/TeamCard/TeamCard";
import {teamMembers} from "@public/content/members/members";
import React, {useEffect, useState} from "react";
import {chunkArray} from "@/utils/chunk";
import {AnimatePresence, motion, useAnimate, useInView} from "framer-motion";
import Marquee from "react-fast-marquee";

export const OurTeamSection = () => {
  const [scope, animate] = useAnimate()
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-20px"
  });
  const [presentedCardName, setPresentedCardName] = useState<string>();
  const presentedMember = teamMembers.find(
    (member) => member.name === presentedCardName,
  );

  useEffect(() => {
    const slideInAmount = 100;

    if (inView) {
      const items = document.querySelectorAll('.card-deck');
      items.forEach((item, index) => {
        animate(
          item,
          {
            x: index % 2 === 0 ? [-slideInAmount, 0] : [slideInAmount, 0],
            opacity: [0, 1],
          },
          {
            duration: 1,
            delay: index * 0.5,
          },
        );
      });
    }
  }, [inView, animate]);

  return (
    <div ref={ref} className="min-h-screen bg-orange-900 bg-dot-white/[0.2] snap-start">
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

      <AnimatePresence>
        <div
          ref={scope}
          className={
            "w-full h-full pb-24 gap-16 flex flex-col justify-center items-center"
          }
        >
          <div className={"flex flex-col justify-evenly items-center"}>
            {chunkArray(teamMembers, 3).map((chunk, i) => {
              return (
                <motion.div
                  className={"card-deck"}
                  layoutId={`team-card-deck-${i}`}
                  key={chunk.map((member) => member.name).join("-")}
                  initial={{opacity: 0}}
                  transition={{duration: 1}}>
                  <CardDeck>
                    {chunk.map((member) =>
                      presentedCardName !== member.name ? (
                        <TeamCard
                          key={member.name}
                          member={member}
                          onClick={() => setPresentedCardName(member.name)}
                          hidden={presentedCardName === member.name}
                        />
                      ) : (
                        <div
                          key={`${member.name}-placeholder`}
                          className={"opacity-0"}
                        >
                          <TeamCard member={member} onClick={() => {
                          }}/>
                        </div>
                      ),
                    )}
                  </CardDeck>
                </motion.div>
              );
            })}
          </div>
        </div>

        <AnimatePresence>
          {presentedMember !== undefined && (
            <motion.div
              layout
              layoutId={"backdrop"}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              className={"absolute w-screen h-screen left-0 top-0 bg-black/30"}
              onClick={() => setPresentedCardName(undefined)}
            >
              <div
                className={
                  "size-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden"
                }
              >
                <TeamCard member={presentedMember} isPresented hidden={false}/>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatePresence>
    </div>
  );
};

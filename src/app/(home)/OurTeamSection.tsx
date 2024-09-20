"use client"

import {CardDeck} from "@/components/molecules/TeamCard/CardDeck";
import {TeamCard} from "@/components/molecules/TeamCard/TeamCard";
import {teamMembers} from "@public/content/members/members";
import React, {useState} from "react";
import {chunkArray} from "@/utils/chunk";
import {AnimatePresence, motion} from "framer-motion";

export const OurTeamSection = () => {
  const [presentedCardName, setPresentedCardName] = useState<string>();
  const presentedMember = teamMembers.find((member) => member.name === presentedCardName);

  return (
    <div className="min-h-screen bg-orange-900 flex bg-dot-white/[0.2] snap-start">
      {/*<div className={"-rotate-1 -mx-4"}>*/}
      {/*  <Marquee*/}
      {/*    direction="right"*/}
      {/*    speed={65}*/}
      {/*    className="shadow-neon-orange bg-orange-500 w-[3000px] overflow-hidden z-10"*/}
      {/*    autoFill*/}
      {/*  >*/}
      {/*    <p className="mx-3 md:text-7xl sm:text-xl font-bold font-saira">*/}
      {/*      ZESPÓŁ*/}
      {/*    </p>*/}
      {/*  </Marquee>*/}
      {/*</div>*/}
      <AnimatePresence>

        <div
          className={"w-full h-full py-16 gap-16 flex flex-col justify-center items-center"}
        >
          <div
            className={
              "flex flex-col justify-evenly items-center"
            }
          >
            {chunkArray(teamMembers, 3).map((chunk, i) => {
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: does not change at runtime
                <CardDeck key={i}>
                  {chunk.map((member) => (
                    presentedCardName !== member.name
                      ? <TeamCard key={member.name} member={member} onClick={() => setPresentedCardName(member.name)} hidden={presentedCardName === member.name}/>
                      : <div key={`${member.name}-placeholder`} className={"opacity-0"}>
                        <TeamCard member={member} onClick={() => {}}/>
                      </div>
                  ))}
                </CardDeck>
              );
            })}
          </div>
        </div>

        <AnimatePresence>
          {presentedMember !== undefined && (
            <motion.div
              layout
              layoutId={"backdrop"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={"absolute w-screen h-screen left-0 top-0 bg-black/30"} onClick={() => setPresentedCardName(undefined)}>
              <div className={"size-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden"}>
                <TeamCard member={presentedMember} isPresented hidden={false}/>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </AnimatePresence>
    </div>
  );
};

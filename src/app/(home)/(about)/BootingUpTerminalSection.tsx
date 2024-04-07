"use client";

import { TerminalStatus } from "@/app/(home)/(about)/components/TerminalStatus";
import { delay, random } from "@/utils/anim";
import banner from "@public/banner.md";
import { stagger, useAnimate } from "framer-motion";
import React, { useEffect } from "react";

const commandLetters = "npm run dev".split("");

interface BootingUpTerminalSectionProps {
  onAnimationEnd?: () => void;
}

export const BootingUpTerminalSection: React.FC<BootingUpTerminalSectionProps> =
  ({ onAnimationEnd }) => {
    const [scope, animate] = useAnimate();

    const handleAnimation = async () => {
      const items = document.querySelectorAll(".terminal > *").length;
      for (let i = 1; i <= items; i++) {
        await animate(
          `.terminal > :nth-child(${i})`,
          {
            opacity: [null, 1],
          },
          {
            duration: 0.05,
          },
        );

        await delay(random(100, 200));
      }

      animate(
        ".marker",
        { opacity: [0, 1, 0] },
        { repeat: Infinity, duration: 0.8 },
      );

      await delay(1000);

      await animate(
        ".command > *",
        { display: "inline", opacity: 1 },
        { duration: 0.1, delay: stagger(0.1) },
      );
      await delay(300);

      onAnimationEnd?.();
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: should execute only once
    useEffect(() => {
      handleAnimation().then();
    }, []);

    return (
      <div
        className="min-h-screen flex flex-col gap-8 p-2 md:p-8 bg-black snap-start font-ubuntu-mono text-xs sm:text-sm md:text-base overflow-hidden"
        ref={scope}
      >
        <div className={"terminal *:opacity-0"}>
          <b
            className={
              "whitespace-pre text-blue-500 text-shadow shadow-blue-500"
            }
          >
            {banner}
          </b>

          <br />
          <p>Uruchamianie systemu</p>
          <br />

          <TerminalStatus text={"Stan dysku: twardy"} />
          <TerminalStatus text={"Stan procesora: procesuje"} />
          <TerminalStatus
            text={"Stan połączenia internetowego: U mnie działa"}
          />
          <TerminalStatus
            text={
              "Stan memów: 100% wykorzystania, zalecane jest zresetowanie systemu"
            }
          />
          <TerminalStatus status={"failed"} text={"Rekrutowanie designerów"} />
          <TerminalStatus text={"Makietowanie strony głównej..."} />
          <TerminalStatus text={"Pisanie kodu źródłowego strony..."} />

          <br />
          <br />

          <p className={"*:text-shadow"}>
            <span className={"shadow-green-500 text-green-500 font-bold"}>
              admin@newbies
            </span>
            :
            <span className={"shadow-blue-500 text-blue-500 font-bold"}>~</span>
            $&nbsp;
            <span className={"command scale-x-0"}>
              {commandLetters.map((letter, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: ignore
                <span key={index} className={"opacity-0 hidden"}>
                  {letter}
                </span>
              ))}
            </span>
            <span className={"marker opacity-0"}>|</span>
          </p>
        </div>
      </div>
    );
  };

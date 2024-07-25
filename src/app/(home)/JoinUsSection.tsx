"use client";

import { MacWindow } from "@/components/molecules/MacWindow/MacWindow";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

export const JoinUsSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-dvh bg-blue-900 bg-dot-white/[0.2] relative snap-start"
      onMouseMove={onMouseMove}
    >
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

      <div
        className={"w-full h-full flex flex-col justify-center items-center"}
      >
        <div
          className={
            "h-full container flex flex-col justify-evenly items-center"
          }
        >
          <div
            className={
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-full p-4 z-20"
            }
          >
            <MacWindow title={"📅 Kiedy?"}>
              <div
                className={
                  "flex flex-col justify-center items-center gap-6 p-4"
                }
              >
                <div className={"space-y-2 space-x-4"}>
                  <p>Spotykamy się w każdą* środę o 17:00 na Discordzie:</p>
                  <ul className={"list-disc"}>
                    <li>Przeglądamy nasze kody</li>
                    <li>Przeprowadzamy review</li>
                    <li>Śmieszkujemy i kradniemy memy</li>
                    <li>Dzielimy się pomysłami na projekty</li>
                  </ul>
                </div>

                <a
                  href={"https://discord.gg/u9tuJWkXYg"}
                  target={"_blank"}
                  className={
                    "bg-blue-500 text-white p-2 rounded-lg shadow-neon-blue"
                  }
                  rel="noreferrer"
                >
                  Wpadnij do nas
                </a>

                <p className={"text-xs text-gray-300"}>
                  * z wyjątkiem śród w których się nie spotykamy 😅
                </p>
              </div>
            </MacWindow>
          </div>

          <motion.div
            initial={{ top: 5 }}
            whileInView={{ top: 220 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
            className="absolute sm:left-10 left-1"
          >
            <Eyes mousePos={mousePos} sizeMultiplier={1.5} />
          </motion.div>

          <motion.div
            initial={{ top: 5 }}
            whileInView={{ top: 160 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute sm:right-20 right-3"
          >
            <Eyes mousePos={mousePos} sizeMultiplier={1.2} />
          </motion.div>

          <motion.div
            initial={{ bottom: 220 }}
            whileInView={{ bottom: 80 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute sm:left-30 left-10"
          >
            <Eyes mousePos={mousePos} sizeMultiplier={1.8} />
          </motion.div>

          <motion.div
            initial={{ bottom: 160 }}
            whileInView={{ bottom: 40 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="absolute sm:right-40 right-4"
          >
            <Eyes mousePos={mousePos} sizeMultiplier={1.8} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Eyes = ({
  className,
  mousePos,
  sizeMultiplier = 1,
}: {
  className?: string;
  mousePos: {
    x: number;
    y: number;
  };
  sizeMultiplier?: number;
}) => {
  const eyeSize = 32 * sizeMultiplier;

  return (
    <div className={cn("flex flex-row", className)}>
      <div
        style={{
          width: eyeSize,
          height: eyeSize * 2,
        }}
        className="rounded-full flex justify-center items-center bg-white border-black border-2 p-1 overflow-hidden"
      >
        <Eyeball sizeMultiplier={sizeMultiplier} mousePos={mousePos} />
      </div>
      <div
        style={{
          width: eyeSize,
          height: eyeSize * 2,
        }}
        className="-ml-2 z-10 rounded-full flex justify-center items-center bg-white border-black border-2 p-1 overflow-hidden"
      >
        <Eyeball sizeMultiplier={sizeMultiplier} mousePos={mousePos} />
      </div>
    </div>
  );
};

const Eyeball = ({
  sizeMultiplier = 1,
  mousePos,
  className,
}: {
  sizeMultiplier?: number;
  mousePos: { x: number; y: number };
  className?: string;
}) => {
  const eyeBallSize = 18 * sizeMultiplier;

  const ref = useRef<HTMLDivElement>(null);
  const [styles, setStyles] = useState({});

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let x = mousePos.x - centerX;
    let y = mousePos.y - centerY;

    const radius = rect.width / 2;
    const distance = Math.sqrt(x * x + y * y);
    if (distance > radius) {
      x *= radius / distance;
      y *= radius / distance;
    }

    setStyles({
      transform: `translate(${x}px, ${y}px)`,
    });
  }, [mousePos]);

  return (
    <div
      ref={ref}
      style={{
        width: eyeBallSize,
        height: eyeBallSize * 2,
        ...styles,
      }}
      className={cn(className, "w-4 h-8 rounded-full bg-black")}
    />
  );
};

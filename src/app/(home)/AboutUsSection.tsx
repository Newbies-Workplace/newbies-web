"use client";

import React from "react";
import Image from "next/image";
import { useAnimate } from "framer-motion";

// todo scroll down suggestion

export const AboutUsSection = () => {
  const [scope, animate] = useAnimate();

  const handleAnimation = async () => {
    await animate("#head", {
      x: [null, 100, 0],
    });
    animate(".section:nth-child(1)", {
      opacity: [1, 0, 1],
    }, {
      repeat: Infinity
    });
    await animate(".section:nth-child(2)", {
      opacity: [1, 0, 1],
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col gap-8 p-8 bg-[#150DF7] snap-start font-bluescreen"
      ref={scope}
    >
      <button onClick={handleAnimation}>Animate</button>

      <div
        id={"head"}
        className={
          "flex flex-row items-center bg-white text-[#150DF7] font-bold p-2"
        }
      >
        <Image
          src={"/icon/newbies-logo.png"}
          alt={"newbies logo"}
          width={100}
          height={100}
        />

        <div>
          <p>NEWBIES</p>
          <p>Uczymy się na błędach</p>
        </div>
      </div>

      <div
        className={
          "w-full h-full grid auto-cols-max gap-4 grid-cols-1 md:grid-cols-2 selection:bg-white selection:text-[#150DF7]"
        }
      >
        <div
          className={
            "section border-white border-2 p-2 flex flex-col items-center gap-2"
          }
        >
          <p className={"font-bold"}>Nauka</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
        <div
          className={
            "section border-white border-2 p-2 flex flex-col items-center gap-2"
          }
        >
          <p className={"font-bold"}>Memy</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
        <div
          className={
            "section border-white border-2 p-2 flex flex-col items-center gap-2"
          }
        >
          <p className={"font-bold"}>Spotkania</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
        <div
          className={
            "section border-white border-2 p-2 flex flex-col items-center gap-2"
          }
        >
          <p className={"font-bold"}>Feedback</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
        <div
          className={
            "section border-white border-2 p-2 flex flex-col items-center gap-2"
          }
        >
          <p className={"font-bold"}>Projekty</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
        <div
          className={
            "section border-white border-2 p-2 flex flex-col items-center gap-2"
          }
        >
          <p className={"font-bold"}>RST</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
      </div>
    </div>
  );
};

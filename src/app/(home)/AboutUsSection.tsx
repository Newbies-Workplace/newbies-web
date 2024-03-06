"use client";

import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import banner from "@public/banner.md";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// todo manual animation instead of random
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const AboutUsSection = () => {
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

      await delay(random(100, 500));
    }

    await animate(".test-box", {
      borderWidth: [null, 2],
      borderColor: ["#ffffff00", "#fff"],
    });
    await animate(".test-box", {
      borderRadius: [0, 8],
    });
    await animate(".test-box", { height: [50, 100] });
    await animate(".test-box", { width: [50, 200] });
    await animate(".test-box > *", { padding: [0, 4] });
    await animate(".test-box > *", { scaleY: [0, 1] });
    await delay(1000);

    await animate(".test-box", { height: "auto" }, { type:'spring', duration: 0.5 });

    await animate(".marker", { opacity: [0, 1, 0] }, { repeat: Infinity, duration: 1 });
  };

  useEffect(() => {
    handleAnimation().then();
  }, [handleAnimation]);

  return (
    <div
      className="min-h-screen flex flex-col gap-8 p-2 md:p-8 bg-black snap-start font-ubuntu-mono text-xs sm:text-sm md:text-base overflow-hidden"
      ref={scope}
    >
      <div className={"terminal *:opacity-0"}>
        <b
          className={"whitespace-pre text-blue-500 text-shadow shadow-blue-500"}
        >
          {banner}
        </b>

        <br />
        <p>Kernel panic!</p>
        <br />

        <Status text={"Stan dysku: twardy"} />
        <Status text={"Stan procesora: procesuje"} />
        <Status text={"Stan połączenia internetowego: U mnie działa"} />
        <Status
          text={
            "Stan memów: 100% wykorzystania, zalecane jest zresetowanie systemu"
          }
        />
        <Status status={"failed"} text={"Rekrutowanie designerów"} />
        <Status text={"Makietowanie strony głównej..."} />
        <Status text={"Pisanie kodu źródłowego strony..."} />
      </div>

      <div className={"test-box w-10 h-10"}>
        <p className={"scale-y-0"}>Testowa zawartość</p>
        <p className={"scale-y-0"}>Da się więcej</p>
        <p className={"scale-y-0 w-10 h-10"}>SERIO</p>
        <p className={"scale-y-0 w-10 h-10"}>SERIO</p>
        <p className={"scale-y-0 w-10 h-10"}>SERIO</p>
      </div>

      <span className={"marker opacity-0"}>|</span>
    </div>
  );
};

const Status = ({
  className,
  status = "ok",
  text,
}: { className?: string; status?: "ok" | "failed"; text: string }) => {
  return (
    <p className={cn(className)}>
      <b className={"shadow-white text-shadow"}>
        [
        {status === "ok" ? (
          <>
            &nbsp;&nbsp;
            <span className={"shadow-green-500 text-green-500 text-shadow"}>
              OK
            </span>
            &nbsp;&nbsp;
          </>
        ) : (
          <span className={"shadow-red-500 text-red-500 text-shadow"}>
            FAILED
          </span>
        )}
        ]
      </b>
      &nbsp;
      {text}
    </p>
  );
};

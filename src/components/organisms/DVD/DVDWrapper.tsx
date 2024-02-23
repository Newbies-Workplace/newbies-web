import { DVD } from "@/components/organisms/DVD/DVD";
import { scrollAtom } from "@/scrollAtom";
import { useAtomValue } from "jotai";
import Image from "next/image";
import React from "react";
import { useGlitch } from "react-powerglitch";

export const DVDWrapper: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  const scroll = useAtomValue(scrollAtom);
  const glitch = useGlitch({
    timing: {
      duration: 5000,
    },
    glitchTimeSpan: {
      start: 0.2,
      end: 0.3,
    },
  });
  const logoGlitch = useGlitch({ glitchTimeSpan: false });
  const logo1Glitch = useGlitch({ glitchTimeSpan: false });
  const logo2Glitch = useGlitch({ glitchTimeSpan: false });
  const logo3Glitch = useGlitch({ glitchTimeSpan: false });

  return (
    <div className={"bg-black overflow-hidden"} style={{ width, height }}>
      <div
        className={"bg-[#2b2e97]"}
        style={{ width, height }}
        ref={glitch.ref}
      >
        <div
          style={{ visibility: scroll > 0.2 ? "visible" : "hidden" }}
          className={
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          }
        >
          <Image
            src={"/icon/newbies-logo.png"}
            alt={"newbies logo"}
            width={150}
            height={150}
            style={{ opacity: scroll }}
            ref={logoGlitch.ref}
          />
        </div>

        <div
          style={{ visibility: scroll > 0.5 ? "visible" : "hidden" }}
          className={
            "absolute top-1/2 left-1/2 transform translate-x-[200px] translate-y-[20px]"
          }
        >
          <Image
            src={"/icon/newbies-logo.png"}
            alt={"newbies logo"}
            width={150}
            height={150}
            ref={logo1Glitch.ref}
          />
        </div>

        <div
          style={{ visibility: scroll > 0.75 ? "visible" : "hidden" }}
          className={
            "absolute top-1/2 left-1/2 transform -translate-x-[300px] -translate-y-[200px]"
          }
        >
          <Image
            src={"/icon/newbies-logo.png"}
            alt={"newbies logo"}
            width={150}
            height={150}
            ref={logo2Glitch.ref}
          />
        </div>

        <div
          style={{ visibility: scroll > 0.9 ? "visible" : "hidden" }}
          className={
            "absolute top-1/2 left-1/2 transform -translate-x-[250px] translate-y-[150px]"
          }
        >
          <Image
            src={"/icon/newbies-logo.png"}
            alt={"newbies logo"}
            width={150}
            height={150}
            ref={logo3Glitch.ref}
          />
        </div>

        <DVD />
      </div>
    </div>
  );
};

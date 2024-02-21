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
  const glitch = useGlitch();

  return (
    <div className={"bg-black overflow-hidden"} style={{ width, height }}>
      <div
        className={"bg-[#2b2e97]"}
        style={{ width, height }}
        ref={glitch.ref}
      >
        <Image
          src={"/icon/newbies-logo.png"}
          alt={"newbies logo"}
          width={250}
          height={75}
          style={{ opacity: scroll }}
          className={
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          }
        />
        <DVD />
      </div>
    </div>
  );
};

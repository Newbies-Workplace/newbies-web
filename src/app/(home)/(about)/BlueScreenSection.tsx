import { delay } from "@/utils/anim";
import RickRollIcon from "@public/icon/rickroll.svg";
import React, { useEffect, useState } from "react";

interface BlueScreenSection {
  onAnimationEnd?: () => void;
}

export const BlueScreenSection: React.FC<BlueScreenSection> = ({
  onAnimationEnd,
}) => {
  const [delayText, setDelayText] = useState("3 seconds...");

  const handleAnimation = async () => {
    await delay(1000);
    setDelayText("2 seconds...");
    await delay(1000);
    setDelayText("1 second...");
    await delay(1000);

    onAnimationEnd?.();
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: should execute only once
  useEffect(() => {
    handleAnimation().then();
  }, []);

  return (
    <div className="min-h-screen bg-[#150DF7] text-white selection:text-[#150DF7] selection:bg-white p-2 md:p-8 font-lucida-console snap-start overflow-hidden">
      <p
        className={
          "bg-white text-[#150DF7] selection:text-white selection:bg-[#150DF7] p-4 w-full font-bold"
        }
      >
        A problem has been detected and Newbies site has been shut down to
        prevent damage to your computer.
      </p>

      <br />
      <p>
        If this is the first time you've seen this stop error screen, restart
        your computer. If this screen appears again, follow these steps:
      </p>
      <br />

      <p>
        Check to make sure any new hardware or software is properly installed.
        If this is a new installation, ask your hardware or software
        manufacturer for any Windows updates you might need.
      </p>
      <br />

      <p>
        If problems continue, disable or remove any newly installed hardware or
        software. Disable BIOS memory options such as caching or shadowing. If
        you need to use Safe Mode to remove or disable components, restart your
        computer, press F8 to select Advanced Startup Options, and then select
        Safe Mode.
      </p>

      <div className={"flex flex-row gap-2 my-8"}>
        <RickRollIcon color={"#150DF7"} className={"min-w-[100px]"} />

        <p className={"flex flex-col gap-4"}>
          <span>Scan this code to contact the administrator.</span>
          <b>Hold the space key to stop manual restart.</b>
        </p>
      </div>

      <p>Manual website restart in {delayText}</p>
    </div>
  );
};

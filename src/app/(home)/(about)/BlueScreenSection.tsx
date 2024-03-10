import { delay } from "@/utils/anim";
import React, { useEffect } from "react";

interface BlueScreenSection {
  onAnimationEnd?: () => void;
}

export const BlueScreenSection: React.FC<BlueScreenSection> = ({
  onAnimationEnd,
}) => {
  const handleAnimation = async () => {
    await delay(2000);
    onAnimationEnd?.();
  };

  useEffect(() => {
    handleAnimation().then();
  }, [handleAnimation]);

  return (
    <div className="min-h-screen bg-[#150DF7] snap-start overflow-hidden">
      <h1 className="text-4xl">Blue Screen</h1>
      <p className="text-lg">This is a blue screen section</p>
    </div>
  );
};

"use client";

import { BlueScreenSection } from "@/app/(home)/(about)/BlueScreenSection";
import { BootingUpTerminalSection } from "@/app/(home)/(about)/BootingUpTerminalSection";
import { SiteSection } from "@/app/(home)/(about)/SiteSection";
import React, { useState } from "react";

type Animation = "error" | "terminal" | "site";

export const AboutUsSection = () => {
  const [currentAnimation, setCurrentAnimation] = useState<Animation>("error");

  return <SiteSection />

  return (
    <>
      {currentAnimation === "error" && (
        <BlueScreenSection
          onAnimationEnd={() => {
            setCurrentAnimation("terminal");
          }}
        />
      )}

      {currentAnimation === "terminal" && (
        <BootingUpTerminalSection
          onAnimationEnd={() => {
            setCurrentAnimation("site");
          }}
        />
      )}

      {currentAnimation === "site" && <SiteSection />}
    </>
  );
};

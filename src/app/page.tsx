"use client";

import { AboutUsSection } from "@/app/(home)/AboutUsSection";
import { FaqSection } from "@/app/(home)/FAQSection";
import { JoinUsSection } from "@/app/(home)/JoinUsSection";
import { OurProjectsSection } from "@/app/(home)/OurProjectsSection";
import { OurTeamSection } from "@/app/(home)/OurTeamSection";
import { ControlRoomHome } from "@/components/organisms/ControlRoomHome/ControlRoomHome";
import { useState } from "react";

export default function Home() {
  const [zoomed, setZoomed] = useState(false);

  const handleZoom = () => {
    setZoomed(true);
  };

  return (
    <main className="w-screen overflow-x-hidden bg-blue-900 snap-y text-white snap-mandatory">
      {/*<div className={"absolute z-20 bg-black"}>*/}
      {/*  <ControlRoomHome onZoom={handleZoom} />*/}
      {/*</div>*/}

      <AboutUsSection />

      {zoomed && (
        <>
          <AboutUsSection />

          <JoinUsSection />

          <OurProjectsSection />

          <OurTeamSection />

          <FaqSection />
        </>
      )}
    </main>
  );
}

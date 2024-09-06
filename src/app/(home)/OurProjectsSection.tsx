import { ProjectCarousel } from "@/components/molecules/ProjectCarousel/ProjectCarousel";
import { ProjectCard } from "@/components/molecules/ProjectCard/ProjectCard";
import React from "react";
import Marquee from "react-fast-marquee";

import * as Jeteo from "@/projects/jeteo.mdx";
import * as Retro from "@/projects/retromachina.mdx";
import * as Swit from "@/projects/swit.mdx";

export const OurProjectsSection = async () => {

  return (
    <div className="min-h-dvh h-screen bg-red-900 bg-dot-white/[0.2] relative snap-start flex flex-col">
      <div className={"rotate-1 -mx-4"}>
        <Marquee
          direction="right"
          speed={65}
          className="shadow-neon-red bg-red-500 w-[3000px] overflow-hidden z-10"
          autoFill
        >
          <p className="mx-3 md:text-7xl sm:text-xl font-bold font-saira">
            NASZE PROJEKTY
          </p>
        </Marquee>
      </div>

      <div
        className={
          "flex flex-col items-center h-[calc(100vh-24px)] md:h-[calc(100vh-64px)] pb-4"
        }
      >
        <div className={"h-full w-full max-w-[1200px]"}>
          <ProjectCarousel>
            <ProjectCard project={{content: Jeteo.default({}), data: Jeteo.metadata}}/>
            <ProjectCard project={{content: Retro.default({}), data: Retro.metadata}}/>
            <ProjectCard project={{content: Swit.default({}), data: Swit.metadata}}/>
          </ProjectCarousel>
        </div>
      </div>
    </div>
  );
};

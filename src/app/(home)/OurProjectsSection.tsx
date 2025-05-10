import { ProjectCarousel } from "@/components/molecules/ProjectCarousel/ProjectCarousel";
import React from "react";
import Marquee from "react-fast-marquee";

import { getAllProjects, Project } from "@/utils/projects";
import { ProjectCard } from "@/components/molecules/ProjectCard/ProjectCard";

export const OurProjectsSection = async () => {
  const projects: Project[] = await getAllProjects();

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
          "flex flex-col items-center h-[calc(100vh-24px)] md:h-[calc(100vh-64px)] py-8"
        }
      >
        <div className={"h-full w-full max-w-[1200px]"}>
          <ProjectCarousel>
            {projects.map((project) => (
              <ProjectCard key={project.data.slug} project={project} />
            ))}
          </ProjectCarousel>
        </div>
      </div>
    </div>
  );
};

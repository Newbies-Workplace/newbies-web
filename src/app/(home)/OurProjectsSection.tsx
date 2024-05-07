import { Carousel } from "@/app/projects/Carousel";
import { ProjectCard } from "@/app/projects/ProjectCard";
import { getProjects } from "@/utils/projects";
import React from "react";
import Marquee from "react-fast-marquee";

export const OurProjectsSection = () => {
  const projects = getProjects();

  return (
    <div className="min-h-screen h-screen bg-red-900 bg-dot-white/[0.2] relative snap-start">
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

      <Carousel>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </Carousel>
    </div>
  );
};

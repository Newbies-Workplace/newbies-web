import { Carousel } from "@/app/projects/Carousel";
import { ProjectCard } from "@/app/projects/ProjectCard";
import Navbar from "@/components/molecules/Navbar/Navbar";
import { getProjects } from "@/utils/projects";
import React from "react";

const Projects = async () => {
  const projects = getProjects();

  return (
    <div className="flex flex-col w-full h-screen bg-red-900 bg-dot-white/[0.2]">
      <Navbar />

      <Carousel>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;

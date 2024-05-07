import { Project } from "@/utils/projects";
import md from "markdown-it";
import React from "react";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={"flex h-full gap-4 min-w-full bg-red-800 text-white"}>
      <div className={"flex flex-col gap-4"}>
        <div
          className={"size-[200px] bg-black border-2 border-red-500 rounded-xl"}
        />

        <div className={"flex flex-wrap gap-2"}>
          {project.data.tags.map((tag) => (
            <div
              key={tag}
              className={"bg-red-500 px-2 py-1 rounded-md text-xs"}
            >
              {tag}
            </div>
          ))}
        </div>

        <div>
          <span>Autorzy</span>
          <div className={"w-full h-1 rounded bg-red-500"} />
        </div>

        {/* todo github link / web link */}
      </div>

      <div className={"flex flex-col gap-4 overflow-scroll"}>
        <div className={"bg-red-700 px-2 py-1 rounded-md"}>
          {project.data.title}
        </div>

        <div>{project.data.summary}</div>

        {md().render(project.content)}
      </div>
    </div>
  );
};

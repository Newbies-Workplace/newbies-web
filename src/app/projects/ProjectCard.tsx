import { Project } from "@/utils/projects";
import md from "markdown-it";
import React from "react";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={"flex gap-4 min-w-full text-white"}>
      <div className={"flex flex-col gap-4"}>
        <div
          className={"size-[200px] bg-black border-2 border-red-500 rounded-xl"}
        />

        <div className={"flex flex-wrap gap-2"}>
          {project.data.tags.map((tag) => (
            <div
              key={tag}
              className={"bg-red-500 px-2 py-1 rounded-full text-xs"}
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
        {project.data.links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={"text-sm text-white bg-red-500 px-2 py-1 rounded-md"}
          >
            {link.title}
          </a>
        ))}
      </div>

      <div className={"flex flex-col gap-4 "}>
        <div className={"bg-red-700 px-2 py-1 rounded-md"}>
          {project.data.title}
        </div>

        <div className={"overflow-scroll"}>
          <div>{project.data.summary}</div>
          <br />

          <div
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: md().render(project.content) }}
          />
        </div>
      </div>
    </div>
  );
};

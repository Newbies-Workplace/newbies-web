import { Project } from "@/utils/projects";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className={
        "flex flex-col sm:flex-row sm:overflow-auto overflow-y-scroll gap-4 min-w-full text-white"
      }
    >
      <div className={"flex flex-col gap-4 min-w-[200px]"}>
        {project.data.image && (
          <img
            src={project.data.image}
            alt={"project thumbnail"}
            className={
              "min-h-[200px] h-[200px] sm:w-[200px] w-full bg-black object-cover border-2 border-red-500 rounded-xl"
            }
          />
        )}

        <div className={"flex flex-wrap gap-2"}>
          {project.data.tags?.map((tag) => (
            <div
              key={tag}
              className={"bg-red-700 px-2 py-1 rounded-full text-xs"}
            >
              {tag}
            </div>
          ))}
        </div>

        {project.data.links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "flex gap-2 items-center text-sm text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md"
            }
          >
            <FontAwesomeIcon icon={faLink} />

            {link.title}
          </a>
        ))}
      </div>

      <div className={"flex w-full flex-col gap-4"}>
        <div className={"bg-red-700 px-2 py-1 rounded-md font-jetbrains-mono"}>
          <b>{project.data.title}</b>
          {project.data.summary && <div>{project.data.summary}</div>}
        </div>

        <article className={"overflow-y-scroll prose prose-neutral"}>
          {project.content}
        </article>
      </div>
    </div>
  );
};

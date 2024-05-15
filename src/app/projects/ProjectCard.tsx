import { Project } from "@/utils/projects";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import md from "markdown-it";
import React from "react";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className={
        "flex flex-col sm:flex-row sm:overflow-auto overflow-scroll gap-4 min-w-full text-white"
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
          {project.data.tags.map((tag) => (
            <div
              key={tag}
              className={"bg-red-500 px-2 py-1 rounded-full text-xs"}
            >
              {tag}
            </div>
          ))}
        </div>

        {/*<div>*/}
        {/*  <span>Autorzy</span>*/}
        {/*  <div className={"w-full h-1 rounded bg-red-500"} />*/}
        {/*</div>*/}

        {/* todo github link / web link */}
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

      <div className={"flex flex-col gap-4 "}>
        <div className={"bg-red-700 px-2 py-1 rounded-md"}>
          {project.data.title}
        </div>

        <div className={"flex flex-col gap-2 overflow-scroll"}>
          {project.data.summary && <div>{project.data.summary}</div>}

          <div
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: md().render(project.content) }}
          />
        </div>
      </div>
    </div>
  );
};

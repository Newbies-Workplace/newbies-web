import React from "react";

export interface ProjectMetadata {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  image?: string;
  links?: {
    url: string;
    title: string;
    icon?: string;
  }[];
}

export interface Project {
  data: ProjectMetadata;
  content: React.ReactElement;
}

export const getAllProjects = async () => {
  const context = require.context("@public/content/projects", false, /\.mdx$/);
  const projects: Project[] = context.keys().map((key) => {
    const project = context(key);
    return {
      data: project.metadata,
      content: project.default({}),
    };
  });

  return projects;
};

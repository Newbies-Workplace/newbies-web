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

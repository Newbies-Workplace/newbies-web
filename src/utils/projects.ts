import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectMetadata = {
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
};

export type Project = {
  data: ProjectMetadata;
  slug: string;
  content: string;
};
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}

function getMDXProject(dir: string): Project[] {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { data, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      data,
      slug,
      content,
    };
  });
}

export function getProjects() {
  return getMDXProject(
    path.join(process.cwd(), "public", "content", "projects"),
  );
}

declare module "*.mdx" {
  import { ProjectMetadata } from "@/utils/projects";

  import type { JSX } from "react";

  // biome-ignore lint/suspicious/noExplicitAny: any is required by MDX
  let MDXComponent: (props: any) => JSX.Element;

  export default MDXComponent;
  export const metadata: ProjectMetadata;
}

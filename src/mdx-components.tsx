import { cn } from "@/utils/cn";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => (
      <a
        {...props}
        className={cn("underline", props.className)}
        target={"_blank"}
      />
    ),
    ...components,
  };
}

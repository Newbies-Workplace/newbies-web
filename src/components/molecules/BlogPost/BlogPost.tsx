import Tag from "@/components/atoms/Tag/Tag";
import React from "react";

interface BlogPostProps {
  imgSrc: string;
  title: string;
  description: string;
  tags: string[];
  readingTime: number;
}

const BlogPost: React.FC<BlogPostProps> = ({
  imgSrc,
  title,
  description,
  tags,
  readingTime,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 p-2 border-2 border-purple-500 bg-purple-800 rounded-2xl">
      <img
        src={imgSrc}
        className={"max-h-60 object-cover w-full rounded-xl"}
        alt={""}
      />

      <div className="flex gap-1 flex-col self-stretch">
        {tags.length > 0 && (
          <div className="flex gap-1 self-stretch flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        )}

        <p className="text-white font-bold">{title}</p>
        <p className="text-white">{description}</p>

        <p className="self-end text-purple-400">{readingTime} min czytania</p>
      </div>
    </div>
  );
};

export default BlogPost;

import Tag from "@/components/atoms/Tag/Tag";
import Image from "next/image";
import React from "react";

interface BlogPostProps {
  imgSrc: string;
  title: string;
  description: string;
  readingTime: number;
}

const BlogPost: React.FC<BlogPostProps> = ({
  imgSrc,
  title,
  description,
  readingTime,
}) => {
  return (
    <div className="flex flex-col items-start gap-1 pt-1 px-2 pb-2 border-2 border-purple-500 rounded-2xl w-[500px] m-2">
      <Image src={imgSrc} alt="siema taco" className="h-20" />
      <div className="flex flex-col pt-1 pb-2 self-stretch">
        <div className="flex gap-1 self-stretch flex-wrap">
          <Tag>PYTHON</Tag>
          <Tag>PYTHON</Tag>
          <Tag>PYTHON</Tag>
          <Tag>PYTHON</Tag>
          <Tag>PYTHON</Tag>
        </div>
        <p className=" text-white bodyL font-bold">{title}</p>
        <p className="text-white bodyS">{description}</p>
        <p className="self-end text-purple-500 bodyXS">
          {readingTime} min czytania
        </p>
      </div>
    </div>
  );
};

export default BlogPost;

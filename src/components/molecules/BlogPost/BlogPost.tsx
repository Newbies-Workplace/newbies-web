import Tag from "@/components/atoms/Tag/Tag";
import Image from "next/image";

interface BlogPostProps {}

const BlogPost: React.FC<BlogPostProps> = () => {
  return (
    <div className="flex flex-col  items-start gap-1 pt-1 px-2 pb-2 border-2 border-purple-500 rounded-2xl">
      <Image src={""} alt="siema taco" className="h-32" />
      <div className="flex flex-col gap-1 pt-1 pb-2 self-stretch">
        <div className="flex gap-1 self-stretch flex-wrap">
          <Tag>PYTHON</Tag>
          <Tag>PYTHON</Tag>
          <Tag>PYTHON</Tag>
          <Tag>PYTHON</Tag>
          <Tag>PYTHON</Tag>
        </div>
        <p className=" text-white bodyL">Wziołem mikrofon</p>
        <p className="text-white bodyS w-fit whitespace-normal">
          OpipipisOpipisOOpipisOpipisOpipisOpipisOpipisOpipisOpipisOpis
        </p>
        <p className="self-end text-purple-500 bodyXS">6 min czytania</p>
      </div>
    </div>
  );
};

export default BlogPost;

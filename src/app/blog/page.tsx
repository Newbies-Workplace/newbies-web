import BlogPost from "@/components/molecules/BlogPost/BlogPost";

const Blog = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-purple-900">
      <p className="headM font-bold text-white">BLOG</p>
      <BlogPost />
    </div>
  );
};

export default Blog;

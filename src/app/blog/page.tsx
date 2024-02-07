import BlogPost from "@/components/molecules/BlogPost/BlogPost";

const Blog = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center  bg-purple-900">
      <div className="flex flex-wrap max-w-[1082px] justify-center">
        <BlogPost
          imgSrc=""
          title="Jak robić, a się nie narobić?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          readingTime={6}
        />
        <BlogPost
          imgSrc=""
          title="Jak robić, a się nie narobić?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          readingTime={6}
        />
        <BlogPost
          imgSrc=""
          title="Jak robić, a się nie narobić?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          readingTime={6}
        />
      </div>
    </div>
  );
};

export default Blog;

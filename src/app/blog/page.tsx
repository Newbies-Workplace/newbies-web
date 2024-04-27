import BlogPost from "@/components/molecules/BlogPost/BlogPost";
import Navbar from "@/components/molecules/Navbar/Navbar";

const Blog = () => {
  return (
    <div className="size-full min-h-screen bg-purple-900 flex flex-col items-center bg-dot-white/[0.2]">
      <Navbar />

      <div className="flex flex-wrap gap-6 mx-6 max-w-[1082px] justify-center">
        <BlogPost
          imgSrc="/image/placeholder.png"
          title="Jak robić, a się nie narobić?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          tags={["hehe", "hyhy"]}
          readingTime={6}
        />
        <BlogPost
          imgSrc="/image/placeholder.png"
          title="Jak robić, a się nie narobić?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          tags={[]}
          readingTime={6}
        />
        <BlogPost
          imgSrc="/image/placeholder.png"
          title="Jak robić, a się nie narobić?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          tags={[]}
          readingTime={6}
        />
        <BlogPost
          imgSrc="/image/placeholder.png"
          title="Jak robić, a się nie narobić?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          tags={[]}
          readingTime={6}
        />
        <BlogPost
          imgSrc="/image/placeholder.png"
          title="Jak robić, a się nie narobić?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          tags={[]}
          readingTime={6}
        />
        <BlogPost
          imgSrc="/image/placeholder.png"
          title="Jak robić, a się nie narobić?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          tags={[]}
          readingTime={6}
        />
        <BlogPost
          imgSrc="/image/placeholder.png"
          title="Jak robić, a się nie narobić?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          tags={[]}
          readingTime={6}
        />
      </div>
    </div>
  );
};

export default Blog;

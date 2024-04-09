import Link from "next/link";

const Navbar = () => {
  return (
    <div className={"sticky top-3 px-3 mb-6 w-full"}>
      <div className="w-full flex items-center justify-between py-1 px-6 bg-black bg-opacity-80 backdrop-blur-sm rounded-full">
        <Link href={"/"}>
          <img
            className={
              "sm:size-12 sm:min-h-12 sm:min-w-12 size-10 min-w-10 min-h-10"
            }
            src={"/icon/newbies-logo.png"}
            alt={"newbies logo"}
          />
        </Link>

        <div className="flex flex-wrap gap-4 text-white text-sm sm:text-base">
          <Link href={"/projects"}>PROJEKTY</Link>
          <Link href={"/blog"}>BLOG</Link>
          <Link href={"https://discord.gg/u9tuJWkXYg"}>DOŁĄCZ</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

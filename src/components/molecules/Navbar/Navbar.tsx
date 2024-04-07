import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={"sticky top-3 px-3 mb-3 w-full"}>
      <div className="w-full flex items-center justify-between py-1 px-6 bg-black bg-opacity-80 backdrop-blur-sm rounded-full">
        <Link href={"/"}>
          <Image
            src={"/icon/newbies-logo.png"}
            alt={"newbies logo"}
            width={48}
            height={48}
          />
        </Link>

        <div className="flex flex-wrap gap-4 text-white">
          <Link href={"/"}>O NAS</Link>
          <Link href={"/projects"}>PROJEKTY</Link>
          <Link href={"/blog"}>BLOG</Link>
          <Link href={"https://discord.gg/u9tuJWkXYg"}>DOŁĄCZ</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

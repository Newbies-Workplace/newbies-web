import Image from "next/image";
import Link from "next/link";
import newbieslogo from "@/assets/small-newbies-logo.svg";

const Navbar = () => {
  return (
    <div className="m-3 p-1 bg-black bg-opacity-80 flex items-center justify-between px-16 rounded-full">
      <Image src={newbieslogo} width={55} height={55} alt="newbies-logo" />
      <span className="flex flex-wrap *:px-3 *:bodyS *:text-white">
        <Link href={"/"}>O NAS</Link>
        <Link href={"/projects"}>PROJEKTY</Link>
        <Link href={"/blog"}>BLOG</Link>
        <Link href={"https://discord.gg/wPNUe6tT"}>DOŁĄCZ</Link>
      </span>
    </div>
  );
};

export default Navbar;

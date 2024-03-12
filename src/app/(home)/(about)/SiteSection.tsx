import { MacWindow } from "@/app/(home)/(about)/components/MacWindow";
import { cn } from "@/utils/cn";
import LocationPinIcon from "@public/icon/location-pin.svg";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

export const SiteSection: React.FC = () => {
  const [scope, animate] = useAnimate();

  const handleAnimation = async () => {
    await animate(
      ".mac-window",
      {
        width: ["80%", "100%"],
        height: ["10%", "100%"],
      },
      { duration: 2 },
    );
    await animate(".mac-container", { opacity: [0, 1] }, { duration: 1 });
  };

  useEffect(() => {
    handleAnimation().then();
  }, [handleAnimation]);

  return (
    <div
      ref={scope}
      className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-400 to-orange-500 p-2 md:p-8 text-white snap-start overflow-hidden"
    >
      <MacWindow className={"mac-window h-[10%] w-[80%]"} title={"newbies.pl"}>
        <div
          className={
            "mac-container opacity-0 flex flex-col gap-4 p-4 bg-dot-[#ffffff30] h-full overflow-y-scroll"
          }
        >
          <div className={"flex flex-row gap-4 justify-center"}>
            <Image
              src={"/icon/newbies-logo.png"}
              alt={"newbies logo"}
              width={150}
              height={150}
            />

            <div className={"flex flex-col justify-center gap-4"}>
              <span className={"text-4xl"}>Newbies</span>
              <span>
                Powered by&nbsp;
                <a href={"https://rst.software"} className={"underline"}>
                  RST Software Masters
                </a>
              </span>
            </div>
          </div>

          {/*<div className={"grid grid-cols-1 lg:grid-cols-3 h-full gap-4"}>*/}
          {/*  <Section*/}
          {/*    className={"border-2 border-red-500 bg-red-900"}*/}
          {/*    icon={<LocationPinIcon width={100} height={100} />}*/}
          {/*    title={"About us"}*/}
          {/*    content={*/}
          {/*      "We are a group of people who are passionate about technology. We are not afraid of challenges and we are constantly developing our skills. We are open to new people and we are happy to share our knowledge."*/}
          {/*    }*/}
          {/*  />*/}

          {/*  <Section*/}
          {/*    className={"border-2 border-orange-500 bg-orange-900"}*/}
          {/*    icon={<LocationPinIcon width={100} height={100} />}*/}
          {/*    title={"Join us"}*/}
          {/*    content={*/}
          {/*      "We are constantly looking for new people who are passionate about technology. If you are a beginner and you want to learn from the best, join us."*/}
          {/*    }*/}
          {/*  />*/}

          {/*  <Section*/}
          {/*    className={"border-2 border-purple-500 bg-purple-900"}*/}
          {/*    icon={<LocationPinIcon width={100} height={100} />}*/}
          {/*    title={"Our projects"}*/}
          {/*    content={*/}
          {/*      "We are constantly working on new projects. We are not afraid of challenges and we are constantly developing our skills. We are open to new people and we are happy to share our knowledge."*/}
          {/*    }*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </MacWindow>
    </div>
  );
};

interface SectionProps {
  className?: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({
  className,
  icon,
  title,
  content,
}) => {
  return (
    <div
      className={cn(
        "flex flex-row lg:flex-col items-center gap-2 p-2 rounded-2xl",
      )}
    >
      <div>
        {icon}
        <h1>{title}</h1>
      </div>
      <div className={cn("p-2 rounded-2xl", className)}>
        <p>{content}</p>
      </div>
    </div>
  );
};

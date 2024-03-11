import React from "react";
import { MacWindow } from "@/app/(home)/(about)/components/MacWindow";
import Image from "next/image";
import { cn } from "@/utils/cn";
import LocationPinIcon from "@public/icon/location-pin.svg";

export const SiteSection: React.FC = () => {
  return (
    <div className="min-h-screen h-screen bg-gradient-to-br from-purple-400 to-orange-500 p-2 md:p-8 text-white snap-start overflow-hidden">
      <MacWindow title={"newbies.pl"}>
        <div
          className={
            "flex flex-col gap-4 p-4 bg-dot-[#ffffff30] h-full overflow-y-scroll"
          }
        >
          <div
            className={
              "flex flex-row gap-4 rounded-2xl border-2 border-blue-500 bg-blue-900"
            }
          >
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

          <div className={"grid grid-cols-1 lg:grid-cols-3 h-full gap-4"}>
            <Section
              className={"border-2 border-red-500 bg-red-900"}
              icon={<LocationPinIcon width={100} height={100} />}
              title={"About us"}
              content={
                "We are a group of people who are passionate about technology. We are not afraid of challenges and we are constantly developing our skills. We are open to new people and we are happy to share our knowledge."
              }
            />

            <Section
              className={"border-2 border-orange-500 bg-orange-900"}
              icon={<LocationPinIcon width={100} height={100} />}
              title={"Join us"}
              content={
                "We are constantly looking for new people who are passionate about technology. If you are a beginner and you want to learn from the best, join us."
              }
            />

            <Section
              className={"border-2 border-purple-500 bg-purple-900"}
              icon={<LocationPinIcon width={100} height={100} />}
              title={"Our projects"}
              content={
                "We are constantly working on new projects. We are not afraid of challenges and we are constantly developing our skills. We are open to new people and we are happy to share our knowledge."
              }
            />
          </div>

          <div
            className={"border-2 border-blue-500 bg-blue-900 rounded-2xl p-2"}
          >
            todo refactor this site
          </div>
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
        className,
      )}
    >
      {icon}
      <div className={"flex flex-col items-start lg:items-center gap-2"}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

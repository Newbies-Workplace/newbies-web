import React from "react";

interface MacWindowProps {
  children: React.ReactNode;
  title: string;
}

export const MacWindow: React.FC<MacWindowProps> = ({ title, children }) => {
  return (
    <div
      className={
        "rounded-xl h-full shadow-[0_40px_60px_rgba(0,0,0,0.2),0_0_15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.5)]"
      }
    >
      <div
        className={
          "flex flex-col rounded-xl h-full bg-[#1e1e1f] overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
        }
      >
        <div
          className={
            "relative flex flex-row items-center justify-center bg-[#ffffff09] w-full py-1"
          }
        >
          <div className={"absolute left-0 flex flex-row gap-2 p-2"}>
            <div className={"size-3 rounded-full bg-[#FF5D5A]"} />
            <div className={"size-3 rounded-full bg-[#f5c350]"} />
            <div className={"size-3 rounded-full bg-[#65cd57]"} />
          </div>

          <div
            className={
              "flex p-1 rounded-md bg-[#ffffff15] min-w-[150px] select-none items-center justify-center"
            }
          >
            {title}
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

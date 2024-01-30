"use client";
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answear: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answear }) => {
  const [isOpened, setisOpened] = useState(false);

  return (
    <div className="border-4 rounded-3xl border-green-500 p-2">
      <div className="flex justify-between items-center">
        <p className="font-bold text-white md:headS sm:headXS">{question}</p>
        <div
          onClick={() => setisOpened(!isOpened)}
          className={
            "w-10 h-10 rounded-full cursor-pointer " +
            (isOpened ? "bg-green-500" : "bg-white")
          }
        ></div>
      </div>
      <div
        className={
          "flex flex-col transition-all origin-top-left " +
          (isOpened ? "scale-y-100" : "scale-y-0")
        }
      >
        <div className="bg-white h-1 rounded-full"></div>
        <p className="font-bold text-white md:headXS sm:headXS">{answear}</p>
      </div>
    </div>
  );
};

export default FaqItem;

"use client";
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="border-4 rounded-3xl border-green-500 p-2">
      <div className="flex justify-between items-center">
        <p className="font-bold text-white bodyL">{question}</p>
        <div
          onClick={() => setIsOpened(!isOpened)}
          className={`w-7 h-7 rounded-full cursor-pointer ${
            isOpened ? "bg-green-500" : "bg-white"
          }`}
        />
      </div>
      <div
        className={`flex flex-col transition-all origin-top-left ${
          isOpened ? "scale-y-100" : "scale-y-0 h-0"
        }`}
      >
        <div className="bg-white h-0.5 rounded-full" />
        <p className="font-bold text-white bodyL">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;

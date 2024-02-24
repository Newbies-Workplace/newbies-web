"use client";

import React, { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string | React.ReactNode;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex flex-col w-full border-2 p-2 rounded-3xl border-green-500">
      <div className="flex justify-between items-center">
        <p className="font-bold text-white text-2xl shrink">{question}</p>
        <div
          onClick={() => setIsOpened(!isOpened)}
          className={`w-7 min-w-7 h-7 min-h-7 rounded-full cursor-pointer ${
            isOpened ? "bg-green-500" : "bg-white"
          }`}
        />
      </div>

      <div
        className={`flex flex-col transition-all origin-top-left ${
          isOpened ? "scale-y-100" : "scale-y-0 h-0"
        }`}
      >
        <div className="bg-white h-0.5 rounded-full my-2" />

        {typeof answer === "string" ? (
          <p className="text-white text-xl">{answer}</p>
        ) : (
          answer
        )}
      </div>
    </div>
  );
};

export default FaqItem;

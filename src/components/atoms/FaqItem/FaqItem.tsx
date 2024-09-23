"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string | React.ReactNode;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className="flex flex-col w-full border-2 p-2 rounded-3xl border-green-500 hover:bg-green-800 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        setIsOpened(!isOpened);
      }}
    >
      <div className="flex justify-between items-center">
        <p className="font-bold text-white text-2xl shrink">{question}</p>

        <div
          className={`w-7 min-w-7 h-7 min-h-7 rounded-full ${
            isOpened ? "bg-green-500" : "bg-white"
          }`}
        />
      </div>

      <motion.div
        className={"flex flex-col text-white text-base whitespace-pre-wrap"}
        animate={{
          height: isOpened ? "auto" : 0,
          opacity: isOpened ? 1 : 0,
          scaleY: isOpened ? 1 : 0,
        }}
      >
        <div className="bg-white h-0.5 my-2" />

        {typeof answer === "string" ? <p>{answer}</p> : answer}
      </motion.div>
    </div>
  );
};

export default FaqItem;

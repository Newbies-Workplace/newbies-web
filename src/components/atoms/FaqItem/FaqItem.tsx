"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string | React.ReactNode;
  stopPropagation?: boolean;
};

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  stopPropagation = false,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className="flex flex-col w-full border-2 p-4 gap-2 rounded-3xl border-green-500 bg-green-800 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        setIsOpened(!isOpened);
      }}
    >
      <AnimatePresence>
        <div className="flex justify-between items-center">
          <p className="font-bold text-white text-2xl shrink">{question}</p>

          <div
            className={`w-7 min-w-7 h-7 min-h-7 rounded-full ${
              isOpened ? "bg-green-500" : "bg-white"
            }`}
          />
        </div>

        {isOpened && (
          <motion.div
            key={`${question}answer`}
            className={"flex flex-col text-white text-base whitespace-pre-wrap"}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
          >
            <>
              {typeof answer === "string" ? (
                <p>{answer}</p>
              ) : (
                <div
                  onClick={(e) => {
                    if (stopPropagation) {
                      e.stopPropagation();
                    }
                  }}
                >
                  {answer}
                </div>
              )}
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;

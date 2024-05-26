import React from "react";

interface CardDeckProps {
  degree?: number;
  children: React.ReactNode[];
}

export const CardDeck: React.FC<CardDeckProps> = ({ degree = 3, children }) => {
  const totalChildren = children.length;

  return (
    <div className={"m-8 p-4 flex justify-center"}>
      {children.map((child, index) => {
        const indexFromCenter =
          totalChildren % 2 === 0
            ? index - Math.floor(totalChildren / 2) + 0.5
            : index - Math.floor(totalChildren / 2);

        const move =
          Math.abs(indexFromCenter) < 1 ? 5 : Math.abs(indexFromCenter) * 15;

        return (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: This is a static array
            key={index}
            className={"transform-gpu -mx-6"}
            style={{
              transform: `rotate(${
                indexFromCenter * degree
              }deg) translateY(${move}px)`,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

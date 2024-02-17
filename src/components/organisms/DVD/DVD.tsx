import DVDImage from "@public/icon/dvd.svg";
import React, { useEffect, useRef, useState } from "react";
import styles from "./DVD.module.css";

export const DVD = () => {
  const verticalRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLElement>(null);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    const colors = ["red", "green", "blue", "purple", "orange"];

    let i = 0;
    const changeColor = () => {
      setColor(colors[i % colors.length]);
      i++;
    };

    verticalRef.current?.addEventListener("animationiteration", changeColor);
    horizontalRef.current?.addEventListener("animationiteration", changeColor);

    return () => {
      verticalRef.current?.removeEventListener(
        "animationiteration",
        changeColor,
      );
      horizontalRef.current?.removeEventListener(
        "animationiteration",
        changeColor,
      );
    };
  }, []);

  return (
    <div className={styles.vertical} ref={verticalRef}>
      <div className={styles.horizontal} ref={horizontalRef}>
        <DVDImage color={color} width={100} height={50} />
      </div>
    </div>
  );
};

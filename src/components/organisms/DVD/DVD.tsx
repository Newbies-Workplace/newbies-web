import React, { useEffect, useRef } from "react";
import styles from "./DVD.module.css";

export const DVD = () => {
  const imgRef = useRef<HTMLElement>(null);
  const verticalRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const colors = [
      "bg-red-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-purple-500",
      "bg-orange-500",
    ];
    let i = 0;

    const changeColor = () => {
      console.log("changeColor");
      if (imgRef.current) {
        imgRef.current.className = colors[i % colors.length];
        i++;
      }
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
        <img
          ref={imgRef}
          src={"dvd.svg"}
          width={100}
          height={80}
          alt={"DVD"}
          className={"bg-purple-500"}
        />
      </div>
    </div>
  );
};

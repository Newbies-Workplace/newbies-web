import { cn } from "@/utils/cn";
import React from "react";

export const TerminalStatus = ({
  className,
  status = "ok",
  text,
}: { className?: string; status?: "ok" | "failed"; text: string }) => {
  return (
    <p className={cn(className)}>
      <b className={"shadow-white text-shadow"}>
        [
        {status === "ok" ? (
          <>
            &nbsp;&nbsp;
            <span className={"shadow-green-500 text-green-500 text-shadow"}>
              OK
            </span>
            &nbsp;&nbsp;
          </>
        ) : (
          <span className={"shadow-red-500 text-red-500 text-shadow"}>
            FAILED
          </span>
        )}
        ]
      </b>
      &nbsp;
      {text}
    </p>
  );
};

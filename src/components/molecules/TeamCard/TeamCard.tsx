"use client";

import { cn } from "@/utils/cn";
import { TeamMember } from "@public/content/members/members";
import { motion } from "framer-motion";
import { Portal } from "next/dist/client/portal";
import React, {
  createRef,
  CSSProperties,
  MouseEventHandler,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Tooltip } from "react-tooltip";
import styles from "./TeamCard.module.css";

interface TeamCardProps {
  hidden?: boolean;
  isPresented?: boolean;
  member: TeamMember;
  onClick?: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  hidden,
  isPresented,
  member: { img, name, level, stats, technologies, achievements },
  onClick,
}) => {
  const cardRef = createRef<HTMLDivElement>();

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hologramStyle, setHologramStyle] = useState<CSSProperties>({});

  useEffect(() => {
    if (!isPresented) {
      return;
    }

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;

      if (beta === null || gamma === null) {
        return;
      }

      const normalize = (value: number, maxDegree: number) => {
        if (value > maxDegree) {
          return maxDegree;
        }

        if (value < -maxDegree) {
          return -maxDegree;
        }

        return value;
      };

      const rotationX = normalize(gamma, 15);
      const rotationY = normalize(beta, 15);

      setRotation({ x: rotationX, y: rotationY });

      const x = normalize(gamma, 10) * 10;
      const y = normalize(beta, 10) * 10;

      setPosition({ x: x, y: y });
      setHologramStyle({
        backgroundPosition: `${-x}px ${-y}px`,
      });
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, true);

      return () => {
        window.removeEventListener(
          "deviceorientation",
          handleOrientation,
          true,
        );
      };
    }
  }, [isPresented]);

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const cardDiv = cardRef.current;
    if (!cardDiv) {
      return;
    }

    const { clientHeight, clientWidth } = cardDiv;
    const boundingBox = cardDiv.getBoundingClientRect();

    const x = e.pageX - boundingBox.left;
    const y = e.pageY - boundingBox.top;
    const transformX = x - clientWidth / 2;
    const transformY = y - clientHeight / 2;

    const rotationX = (transformX / clientWidth) * 20;
    const rotationY = (transformY / clientHeight) * 20;

    setPosition({ x, y });
    setRotation({ x: rotationX, y: rotationY });
    setHologramStyle({
      backgroundPosition: `${-transformX}px ${-transformY}px`,
    });
  };

  const onMouseLeave = () => {
    const cardDiv = cardRef.current;
    if (!cardDiv) {
      return;
    }

    setPosition({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0 });
  };

  const cardStyles: CSSProperties = useMemo(() => {
    return {
      transform: `perspective(700px) rotateY(calc(${rotation.x} * 1deg)) rotateX(calc(${rotation.y} * -1deg))`,
      transition: "transform 0.1s ease-out",
    };
  }, [rotation.x, rotation.y]);

  const holoStyles: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: "color-dodge",
      filter: "brightness(0.7) contrast(1.5) saturate(1)",
      backgroundSize: "120% 120%, 200% 200%, cover",
      backgroundPosition: "center center",
      backgroundBlendMode: "soft-light, difference",
      backgroundImage: `radial-gradient(circle at ${position.x}px ${position.y}px, #fff 5%, #000 50%, #fff 80%), linear-gradient(-45deg, #000 15%, #fff, #000 85%), url(/image/card-holo.webp)`,
    };
  }, [position.x, position.y]);

  return (
    <motion.div
      layoutId={name}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={cn(
        "aspect-[2/3]",
        isPresented
          ? "max-h-[calc(100vh-64px)] max-w-[calc(100vw-32px)]"
          : "max-h-[600px]",
      )}
    >
      <div
        ref={cardRef}
        style={cardStyles}
        className={cn(
          "size-full transform-gpu select-none relative rounded-2xl border-4 border-orange-500 hover:shadow-neon-orange transition-shadow ease-out duration-100 overflow-hidden font-jetbrains-mono",
          hidden && "invisible",
        )}
      >
        <div
          style={hologramStyle}
          className={cn(
            "absolute origin-center w-[300%] h-[300%] -translate-x-2/4 -translate-y-2/4 left-[50%] top-[50%] opacity-10",
            styles.hologram,
          )}
        />

        <div
          style={holoStyles}
          className={cn(
            styles.hologram,
            "absolute bg-center bg-cover size-full opacity-20",
          )}
        />

        <img
          className={"size-full pointer-events-none"}
          alt={`Zdjęcie ${name}`}
          src={img}
        />

        <div
          className={
            "absolute rounded-md bottom-2 left-2 right-2 flex flex-col gap-2 bg-orange-900/80 p-3"
          }
        >
          <div className={"self-center"}>
            <span className={"font-bold text-xl select-none"}>{name}</span>
            <span
              className={cn(
                isPresented ? "inline" : "sm:inline hidden",
                "ml-2 text-xs",
              )}
            >
              lvl {level}
            </span>
          </div>

          <div
            className={cn(
              isPresented ? "flex" : "sm:flex hidden",
              "flex-col w-full gap-2 sm:flex-row",
            )}
          >
            <div className={"w-full"}>
              <span className={"text-sm"}>Życie</span>
              <div className={"w-full h-1.5 rounded bg-orange-700"}>
                <div
                  className={"h-full rounded bg-orange-500"}
                  style={{ width: `${stats?.hp}%` }}
                />
              </div>
            </div>
            <div className={"w-full"}>
              <span className={"text-sm"}>Mana</span>
              <div className={"w-full h-1.5 rounded bg-orange-700"}>
                <div
                  className={"h-full rounded bg-orange-500"}
                  style={{ width: `${stats?.mana}%` }}
                />
              </div>
            </div>
          </div>

          {technologies && technologies.length > 0 && (
            <div className={cn(isPresented ? "block" : "sm:block hidden")}>
              <span className={"text-sm"}>Ekwipunek</span>
              <div className={"flex flex-row flex-wrap gap-2"}>
                {technologies?.map((tech, i) => (
                  <div
                    key={tech.name}
                    data-tooltip-id={`technology-tooltip-${name}-${i}`}
                  >
                    <img
                      className={"bg-orange-500 rounded size-6 xl:size-10"}
                      alt={`Ikona technologii ${tech.name}`}
                      src={tech.img}
                    />
                    <Portal type={"root"}>
                      <Tooltip
                        id={`technology-tooltip-${name}-${i}`}
                        content={tech.name}
                        place={"bottom"}
                      />
                    </Portal>
                  </div>
                ))}
              </div>
            </div>
          )}

          {achievements && achievements.length > 0 && (
            <div className={cn(isPresented ? "block" : "sm:block hidden")}>
              <span className={"text-sm"}>Osiągnięcia</span>
              <div className={"flex flex-row flex-wrap gap-2"}>
                {achievements?.map((ach, i) => (
                  <div
                    key={ach.tooltip}
                    data-tooltip-id={`achievement-tooltip-${name}-${i}`}
                  >
                    <img
                      className={"bg-orange-500 rounded-full size-8 xl:size-12"}
                      alt={`Ikona osiągnięcia ${ach.tooltip}`}
                      src={ach.img}
                    />
                    <Portal type={"root"}>
                      <Tooltip
                        id={`achievement-tooltip-${name}-${i}`}
                        content={ach.tooltip}
                        place={"bottom"}
                      />
                    </Portal>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

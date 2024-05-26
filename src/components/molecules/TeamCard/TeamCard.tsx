import { cn } from "@/utils/cn";
import { TeamMember } from "@public/content/members/members";
import { Portal } from "next/dist/client/portal";
import React, {
  CSSProperties,
  MouseEventHandler,
  createRef,
  useMemo,
  useState,
  useEffect,
} from "react";
import { Tooltip } from "react-tooltip";
import styles from "./TeamCard.module.css";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  member: { img, name, level, stats, technologies, achievements },
}) => {
  const cardRef = createRef<HTMLDivElement>();

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hologramStyle, setHologramStyle] = useState<CSSProperties>({});

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;

      if (beta === null || gamma === null) {
        return;
      }

      const normalize = (value: number) => {
        const maxDegree = 15;
        if (value > maxDegree) {
          return maxDegree;
        }

        if (value < -maxDegree) {
          return -maxDegree;
        }

        return value;
      };

      const rotationX = normalize(gamma);
      const rotationY = normalize(beta);

      setRotation({ x: rotationX, y: rotationY });
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
  }, []);

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
    <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div
        ref={cardRef}
        style={cardStyles}
        className={
          "transform-gpu relative aspect-[2/3] max-h-[600px] rounded-2xl border-4 border-orange-500 hover:shadow-neon-orange transition-shadow ease-out duration-100 overflow-hidden font-jetbrains-mono"
        }
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
            <span className={"hidden sm:inline ml-2 text-xs"}>lvl {level}</span>
          </div>

          <div className={"hidden sm:flex flex-row w-full gap-2"}>
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
            <div className={"hidden md:block"}>
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
            <div className={"hidden md:block"}>
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
    </div>
  );
};

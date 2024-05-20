import { cn } from "@/utils/cn";
import React, {
  CSSProperties,
  MouseEventHandler,
  createRef,
  useMemo,
  useState,
} from "react";
import styles from "./TeamCard.module.css";

interface TeamCardProps {
  img: string;
  name: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ img, name }) => {
  const cardRef = createRef<HTMLDivElement>();

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hologramStyle, setHologramStyle] = useState<CSSProperties>({});

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const cardDiv = cardRef.current;
    if (!cardDiv) {
      return;
    }

    const { clientHeight, clientWidth } = cardDiv;
    const boundingBox = cardDiv.getBoundingClientRect();

    const x = e.pageX - boundingBox.left - clientWidth / 2;
    const y = e.pageY - boundingBox.top - clientHeight / 2;

    const rotationX = (x / clientWidth) * 20;
    const rotationY = (y / clientHeight) * 20;

    setRotation({ x: rotationX, y: rotationY });
    setHologramStyle({
      backgroundPosition: `${-x}px ${-y}px`,
    });
  };

  const onMouseLeave = () => {
    const cardDiv = cardRef.current;
    if (!cardDiv) {
      return;
    }

    setRotation({ x: 0, y: 0 });
  };

  const cardStyles: CSSProperties = useMemo(() => {
    return {
      transform: `perspective(700px) rotateY(calc(${rotation.x} * 1deg)) rotateX(calc(${rotation.y} * -1deg))`,
    };
  }, [rotation.x, rotation.y]);

  return (
    <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div
        ref={cardRef}
        style={cardStyles}
        className={
          "transform-gpu relative aspect-[2/3] max-h-[600px] rounded-2xl border-4 border-orange-500 hover:shadow-neon-orange transition-shadow ease-in-out overflow-hidden"
        }
      >
        <img
          className={"size-full pointer-events-none"}
          alt={`Zdjęcie ${name}`}
          src={img}
        />

        {/*todo fix holo gradient*/}
        <div
          style={hologramStyle}
          className={cn(
            styles.hologram,
            "absolute bg-center bg-cover size-full opacity-10 z-10",
          )}
        />

        <div
          className={
            "absolute rounded-md bottom-2 left-2 right-2 bg-orange-900/90 p-3"
          }
        >
          {name}
        </div>
      </div>
    </div>
  );
};

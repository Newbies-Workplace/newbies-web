import React, {
  CSSProperties,
  MouseEventHandler,
  createRef,
  useMemo,
  useState,
} from "react";

interface TeamCardProps {
  img: string;
  name: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ img, name }) => {
  const cardRef = createRef<HTMLDivElement>();

  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const cardDiv = cardRef.current;
    if (!cardDiv) {
      return;
    }

    const { clientHeight, clientWidth } = cardDiv;

    const x = e.pageX - cardDiv.offsetLeft - clientWidth / 2;
    const y = e.pageY - cardDiv.offsetTop - clientHeight / 2;

    const rotationX = (x / clientWidth) * 20;
    const rotationY = (y / clientHeight) * 20;

    setRotation({ x: rotationX, y: rotationY });
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
  }, [rotation]);

  return (
    <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div
        ref={cardRef}
        style={cardStyles}
        className={
          "relative aspect-[2/3] max-h-[600px] rounded-2xl border-4 border-orange-500 shadow-neon-orange overflow-hidden"
        }
      >
        <img
          className={"size-full pointer-events-none"}
          alt={`Zdjęcie ${name}`}
          src={img}
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

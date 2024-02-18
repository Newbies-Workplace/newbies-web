"use client";

import { Html, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";

const unzoomedPosition = [21, 6, 0];
const zoomedPosition = [-24, 26, 0];
const maxRotationDegrees = 10;
const smoothness = 0.05;

const lerp = (start: number[], end: number[], t: number) => {
  return start.map((s, i) => s + (end[i] - s) * t);
};

const Camera = ({ isZoomed }: { isZoomed: boolean }) => {
  const { camera } = useThree();
  const [mouseX, setMouseX] = useState(window.innerWidth / 2);
  const data = useScroll();

  useEffect(() => {
    camera.position.set(...unzoomedPosition);
    camera.lookAt(0, 6, 0);
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = 60;
    }
    camera.updateProjectionMatrix();
  }, [camera]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useFrame((state) => {
    const minRotation = THREE.MathUtils.degToRad(-maxRotationDegrees + 90);
    const maxRotation = THREE.MathUtils.degToRad(maxRotationDegrees + 90);

    const targetRotation = isZoomed
      ? THREE.MathUtils.degToRad(90)
      : (1 - mouseX / window.innerWidth) * (maxRotation - minRotation) +
        minRotation;

    state.camera.rotation.y +=
      (targetRotation - state.camera.rotation.y) * smoothness;
    state.camera.rotation.y = THREE.MathUtils.clamp(
      state.camera.rotation.y,
      minRotation,
      maxRotation,
    );
  });

  useFrame(() => {
    const currentPositionBasedOnOffset = lerp(
      unzoomedPosition,
      zoomedPosition,
      data.offset,
    );
    camera.position.set(...currentPositionBasedOnOffset);
  });

  return null;
};

const ControlRoom = () => {
  const gltf = useGLTF("/model/control-room.glb", true);

  return <primitive object={gltf.scene} dispose={null} />;
};

const Video = () => {
  const scrollData = useScroll();

  const videoSrc = "/dvd";

  return (
    <Html
      transform
      position={[-14.2, 15, 0]}
      rotation={[0, Math.PI / 2, 0]}
      pointerEvents={"none"}
      portal={{ current: scrollData.fixed }}
    >
      <iframe width="1120" height="710" src={videoSrc} title={"Web"} />
    </Html>
  );
};

export default function ThreePage() {
  const [zoomed, setZoomed] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  // const { opacity } = useSSpring({
  //   opacity: zoomed ? 0 : 1,
  //   config: { mass: 5, tension: 280, friction: 80 },
  //   onRest: () => {
  //     setAnimationFinished(true);
  //   },
  // });

  if (animationFinished) {
    return null;
  }

  return (
    <div className={"flex h-screen w-screen"}>
      <Canvas>
        <ScrollControls>
          <directionalLight position={[13.5, 24.8, -12]} intensity={0.9} />
          <directionalLight position={[13.5, 24.8, 12]} intensity={0.9} />

          <Camera isZoomed={zoomed} />

          <ControlRoom />
          <Video />
        </ScrollControls>
      </Canvas>

      <div
        className={`absolute bottom-8 left-0 right-0 flex justify-center ${
          zoomed && "scale-0"
        }`}
      >
        <button
          type={"button"}
          className={
            "text-white hover:text-black bg-transparent py-1 px-8 rounded-full border-white border-2 hover:shadow-white transition-all hover:bg-white"
          }
          onClick={() => {
            setZoomed((z) => !z);
          }}
        >
          Cześć!
        </button>
      </div>
    </div>
  );
}

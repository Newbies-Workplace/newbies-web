"use client";

import { DVDWrapper } from "@/components/organisms/DVD/DVDWrapper";
import { scrollAtom } from "@/scrollAtom";
import { Html, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import * as THREE from "three";

const unzoomedPosition = new THREE.Vector3(21, 6, 0);
const zoomedPosition = new THREE.Vector3(-6, 18, 0);
const maxRotationDegrees = 10;
const smoothness = 0.05;

const lerp = (start: THREE.Vector3, end: THREE.Vector3, t: number) => {
  return start.clone().lerp(end, t);
};

const Camera = () => {
  const { camera } = useThree();
  const [mouseX, setMouseX] = useState(window.innerWidth / 2);
  const data = useScroll();

  useEffect(() => {
    camera.position.copy(unzoomedPosition);
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
    const interpolatedMaxRotation = maxRotationDegrees * (1 - data.offset);
    const minRotation = THREE.MathUtils.degToRad(-interpolatedMaxRotation + 90);
    const maxRotation = THREE.MathUtils.degToRad(interpolatedMaxRotation + 90);

    const targetRotation =
      (1 - mouseX / window.innerWidth) * (maxRotation - minRotation) +
      minRotation;

    state.camera.rotation.y +=
      (targetRotation - state.camera.rotation.y) * smoothness;
    state.camera.rotation.y = THREE.MathUtils.clamp(
      state.camera.rotation.y,
      minRotation,
      maxRotation,
    );
  });

  const setScroll = useSetAtom(scrollAtom);
  useFrame(() => {
    setScroll(data.offset);

    const positionBasedOnOffset = lerp(
      unzoomedPosition,
      zoomedPosition,
      data.offset,
    );
    camera.position.copy(positionBasedOnOffset);
  });

  return null;
};

const ControlRoom = () => {
  const gltf = useGLTF("/model/control-room.glb", true);

  return <primitive object={gltf.scene} dispose={null} />;
};

const Video = () => {
  const scrollData = useScroll();

  return (
    <Html
      transform
      position={[-14.2, 15, 0]}
      rotation={[0, Math.PI / 2, 0]}
      pointerEvents={"none"}
      portal={{ current: scrollData.fixed }}
      style={{ width: 1120, height: 710 }}
    >
      <DVDWrapper width={1120} height={710} />
    </Html>
  );
};

export const Home = ({ onTVZoomed }: { onTVZoomed: () => void }) => {
  const data = useScroll();

  useFrame(() => {
    if (data.offset > 0.99) {
      onTVZoomed();
    }
  });

  return (
    <>
      <directionalLight position={[13.5, 24.8, -12]} intensity={0.9} />
      <directionalLight position={[13.5, 24.8, 12]} intensity={0.9} />

      <Camera />

      <ControlRoom />
      <Video />
    </>
  );
};

export const ControlRoomHome = () => {
  const [zoomed, setZoomed] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  if (animationFinished) {
    return null;
  }

  return (
    <div className={"flex h-screen w-screen"}>
      <Canvas>
        <ScrollControls maxSpeed={1}>
          <Home
            onTVZoomed={() => {
              setTimeout(() => {
                setAnimationFinished(true);
              }, 1000);
            }}
          />
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
};

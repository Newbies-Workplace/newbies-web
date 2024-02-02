'use client'

import {Canvas, useFrame, useThree} from '@react-three/fiber';
import {useEffect, useRef, useState} from 'react';
import {useGLTF, Html} from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, a } from '@react-spring/three';

const maxRotationDegrees = 10;
const smoothness = 0.05;

const Camera = ({isZoomed}: {isZoomed: boolean}) => {
    const { camera } = useThree();
    const [mouseX, setMouseX] = useState(window.innerWidth / 2);

    const zoomedPosition = [4, 15, 0];
    const unzoomedPosition = [21,6, 0];
    const vec = new THREE.Vector3();

    const { position } = useSpring({
        position: isZoomed ? zoomedPosition : unzoomedPosition,
        config: { mass: 1, tension: 210, friction: 20 },
    });

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
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    useFrame(() => {
        const minRotation = THREE.MathUtils.degToRad(-maxRotationDegrees + 90);
        const maxRotation = THREE.MathUtils.degToRad(maxRotationDegrees + 90);

        console.log(isZoomed)
        const targetRotation = isZoomed
            ? THREE.MathUtils.degToRad(90)
            : (1 - mouseX / window.innerWidth) * (maxRotation - minRotation) + minRotation;

        camera.rotation.y += (targetRotation - camera.rotation.y) * smoothness;
        camera.rotation.y = THREE.MathUtils.clamp(camera.rotation.y, minRotation, maxRotation);

        const targetPosition = isZoomed ? zoomedPosition : unzoomedPosition;
        camera.position.lerp(vec.set(...targetPosition), .008)
    });

    return <a.perspectiveCamera ref={camera} position={position} />;
};

const ControlRoom = () => {
    const gltf = useGLTF('/model/control-room.glb', true);

    return <primitive object={gltf.scene} dispose={null} />;
};

const Video = () => {
    const videoRef = useRef<THREE.Object3D>();

    const videoSrc = "https://newbies.pl"; // replace with your YouTube video link

    return <primitive object={{}} dispose={null} ref={videoRef}>
        <Html transform position={[-14.2, 15, 0]} rotation={[0, Math.PI/2 ,0]}>
            <iframe width="1120" height="710" src={videoSrc}/>
        </Html>
    </primitive>;
};

export default function ThreePage() {
    const [zoomed, setZoomed] = useState(false);

    return (
        <div className={"flex h-screen w-screen"}>
            <Canvas>
                <directionalLight position={[13.5, 24.8, -12]} intensity={0.9}/>
                <directionalLight position={[13.5, 24.8, 12]} intensity={0.9}/>

                <Camera isZoomed={zoomed}/>

                <ControlRoom/>
                <Video/>
            </Canvas>

            <div className={`absolute bottom-8 left-0 right-0 flex justify-center ${zoomed && 'scale-0'}`}>
                <button
                    className={"text-white hover:text-black bg-transparent py-1 px-8 rounded-full border-white border-2 hover:shadow-white transition-all hover:bg-white"}
                    onClick={() => {
                        setZoomed((z) => !z)
                    }}>
                    Cześć!
                </button>
            </div>
        </div>
    );
}

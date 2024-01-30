'use client'

import {Canvas, useFrame, useThree} from '@react-three/fiber';
import {useEffect, useRef, useState} from 'react';
import {useGLTF, Html} from '@react-three/drei';
import * as THREE from 'three';

const maxRotationDegrees = 10;
const smoothness = 0.05;

const Camera = () => {
    const { camera } = useThree();
    const [mouseX, setMouseX] = useState(window.innerWidth / 2);


    useEffect(() => {
        camera.position.set(21,6, 0);
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

        const targetRotation = (1 - mouseX / window.innerWidth) * (maxRotation - minRotation) + minRotation;

        camera.rotation.y += (targetRotation - camera.rotation.y) * smoothness;
        camera.rotation.y = THREE.MathUtils.clamp(camera.rotation.y, minRotation, maxRotation);
    });

    return null;
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
    return (
        <Canvas className={"flex h-screen w-screen"}>
            <directionalLight position={[13.5, 24.8, -12]} intensity={0.9}/>
            <directionalLight position={[13.5, 24.8, 12]} intensity={0.9}/>

            <Camera/>

            <ControlRoom/>
            <Video/>
        </Canvas>
    );
}

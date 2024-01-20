'use client'

import {Canvas, extend, useFrame, useThree} from '@react-three/fiber';
import {Suspense, useEffect} from 'react';
import { useGLTF, OrbitControls as OrbitControlsDrei } from '@react-three/drei';
import { OrbitControls} from "three-stdlib";
import * as THREE from 'three';

extend({ OrbitControls });

function Model() {
    const { scene, camera } = useThree();
    const gltf = useGLTF('borgir.glb', true);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());

        camera.position.set(center.x + 30, center.y + 30, center.z + 30);
        camera.lookAt(center);

        gltf.scene.scale.set(0.2, 0.2, 0.2); // 50% of the original size
    }, [gltf, camera]);

    useFrame(() => {
        gltf.scene.rotation.y += 0.005;
    });

    return <primitive object={gltf.scene} dispose={null} />;
}

function ControlRoom() {
    const gltf = useGLTF('control-room2.glb', true);

    return <primitive object={gltf.scene} dispose={null} />;
}

export default function ThreePage() {
    return (
        <Canvas className={"flex h-screen w-screen"}>
            <directionalLight position={[10, 10, 5]} intensity={1}/>
            <OrbitControlsDrei />

            <ControlRoom/>
            <Model/>
        </Canvas>
    );
}

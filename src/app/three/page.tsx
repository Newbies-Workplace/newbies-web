'use client'

import {Canvas, extend, useThree} from '@react-three/fiber';
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
    }, [gltf, camera]);

    return <primitive object={gltf.scene} dispose={null} />;
}

export default function ThreePage() {
    return (
        <Canvas className={"flex h-screen w-screen"}>
            <ambientLight/>
            <OrbitControlsDrei />

            <Suspense fallback={null}>
                <Model/>
            </Suspense>
        </Canvas>
    );
}

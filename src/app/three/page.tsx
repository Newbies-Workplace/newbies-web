'use client'

import {Canvas, extend, useFrame, useThree} from '@react-three/fiber';
import {useEffect, useRef} from 'react';
import {useGLTF, OrbitControls as OrbitControlsDrei, Html} from '@react-three/drei';
import { OrbitControls} from "three-stdlib";
import * as THREE from 'three';

extend({ OrbitControls });

const useCodes = () => {
    const codes = useRef(new Set())
    useEffect(() => {
        const onKeyDown = (e) => codes.current.add(e.code)
        const onKeyUp = (e) => codes.current.delete(e.code)
        window.addEventListener('keydown', onKeyDown)
        window.addEventListener('keyup', onKeyUp)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
            window.removeEventListener('keyup', onKeyUp)
        }
    }, [])
    return codes
}

function Model() {
    const { scene, camera } = useThree();
    const gltf = useGLTF('/model/pc.glb', true);
    const code = useCodes()

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());

        camera.position.set(center.x + 30, center.y + 30, center.z + 30);
        camera.lookAt(center);

        gltf.scene.position.set(0, 0 , 0);
    }, [gltf, camera]);

    useFrame(() => {
        if (code.current.has('KeyD')) gltf.scene.position.z -= 0.1
        if  (code.current.has('KeyA'))  gltf.scene.position.z += 0.1;
        if  (code.current.has('KeyW'))  gltf.scene.position.x -= 0.1;
        if  (code.current.has('KeyS'))  gltf.scene.position.x += 0.1;
    });

    return <primitive object={gltf.scene} dispose={null} />;
}

function ControlRoom() {
    const gltf = useGLTF('/model/control-room.glb', true);

    return <primitive object={gltf.scene} dispose={null} />;
}

function Video() {
    const videoRef = useRef<THREE.Object3D>();
    const videoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // replace with your YouTube video link


    return <primitive object={{}} dispose={null} ref={videoRef}>
        <Html distanceFactor={9} transform position={[-13, 10, 0]} rotation={[0, Math.PI/2 ,0]} >
            <div dangerouslySetInnerHTML={{
                __html: `
                        <iframe width="560" height="315" src="${videoSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    `
            }}/>
        </Html>
    </primitive>;
}

export default function ThreePage() {
    const lightRef = useRef<THREE.Object3D>();

    useEffect(() => {

        lightRef.current?.lookAt(-13, 10, 0)
    }, [lightRef]);

    return (
        <Canvas className={"flex h-screen w-screen"}>
            <directionalLight position={[10, 10, 10]} intensity={1} ref={lightRef}/>

            <OrbitControlsDrei/>

            <ControlRoom/>
            <Model/>
            <Video/>
        </Canvas>
    );
}

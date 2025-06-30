import { useGSAP } from '@gsap/react'
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React ,{useEffect}from 'react'
import { gsap } from 'gsap'
import * as THREE from 'three'

export const TechIcon = ({model}) => {
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
      if (model.name === "Interactive Developer") {
        scene.scene.traverse((child) => {
          if (child.isMesh) {
            if (child.name && child.name === "Object_5") {
              child.material = new THREE.MeshStandardMaterial({ color: "white" });
            }
          }
        });
      }
    }, [scene]);
    return (
        <Canvas
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
            <ambientLight intensity={0.3} />
            <directionalLight position={[5,5,5]} intensity={1}/>
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={1}>
                <group scale={model.scale} rotation = {model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}

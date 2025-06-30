import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        intensity={100}
        penumbra={0.4}
        color="white"
      />
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={0.5}
        color="#4cc0f0"
      />
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4} 
        intensity={60}
        penumbra={1}
        color="#9d4edd"
      />

      <primitive object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)} 
      position={[1, 3, 4]}
      intensity={10}
      rotation={[-Math.PI / 2, 0, 0]}
      />

      <pointLight 
      position={[0,1,0]}
      intensity={10}
      color="#7209b7"
      />
      <pointLight 
      position={[1,2,-2]}
      intensity={10}
      color="#0d00a4"
      />

      {/* <ambientLight intensity={0.2} color="#1a1a40"/>//添加环境光，intensity强度，color颜色
        <directionalLight position={[5,5,5]} intensity={1}/>//添加定向光，position位置，intensity强度 */}
    </>
  );
};

export default HeroLights;

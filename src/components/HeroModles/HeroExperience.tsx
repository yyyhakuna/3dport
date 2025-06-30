import React from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import {Room} from './Room'
import HeroLights from './HeroLights' // 移除扩展名，让React自动解析



const HeroExperience = () => {
const isTablet = useMediaQuery({query: '(max-width: 1024px)'})
const isMobile = useMediaQuery({query: '(max-width: 768px)'})
  return (
    <Canvas camera={{position: [0,0,15],fov: 45}}>//从画布开始,camera架构相机位置fov角度

    <OrbitControls                                      //添加轨道控制，2d转换为3d
        enablePan={false}                               //禁止平移
        enableZoom={!isTablet}                              //禁止平板电脑缩放
        maxDistance={10}                                //缩放最大距离
        minDistance={1}                                 //缩放最小距离
        maxPolarAngle={Math.PI / 5}                     //转动最大角度
        minPolarAngle={Math.PI / 2}
    />
    {/* <mesh>//添加网格
        <boxGeometry args={[1,1,1]}/>       //添加盒子形状，args是盒子的长宽高
        <meshStandardMaterial color="blue"/> //添加材质,color颜色
    </mesh> */}
    <HeroLights />
    <group 
    scale={isMobile ? 0.5: 0.7}
    position={[0,-3.5,0]}
    rotation={[0,-Math.PI / 4,0]}
    >
    <Room />
    </group>
    </Canvas>
  )
}

export default HeroExperience
// Right-airpod.jsx
import React, { useEffect, useRef, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from "gsap"
import {useFrame} from "@react-three/fiber";
import {scrollStore} from "@/app/lib/scrollStore";
import {useMediaQuery} from "react-responsive";

export const RightAirpod = forwardRef((props, ref) => {

  const localRef = useRef()
  const activeRef = ref || localRef
  const { nodes, materials } = useGLTF('/models/right-airpod.glb')
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (!activeRef.current) return

    activeRef.current.position.y = -0.5

    gsap.to(activeRef.current.position, {
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    })
  }, [])


  const v = isMobile ? 0.5 : 1

  return (
      <group ref={activeRef} {...props} dispose={null}>
        <group position={[1 * v, 1.2, 0.7]} rotation={[1.254, 0.542, 1.864]} scale={0.5 * v}>
          <mesh geometry={nodes.Object_112.geometry} material={materials.uxJORKAoxKXCbDN} />
          <mesh geometry={nodes.Object_114.geometry} material={materials.vdKonUzpqPTDVLw} />
          <mesh geometry={nodes.Object_117.geometry} material={materials.FesGvQOXeqPgsWH} />
          <mesh geometry={nodes.Object_119.geometry} material={materials.BExwFhrXMdSkVou} />
          <mesh geometry={nodes.Object_122.geometry} material={materials.wlGBfgcDjjktGKi} />
          <mesh geometry={nodes.Object_124.geometry} material={materials.vdKonUzpqPTDVLw} />
          <mesh geometry={nodes.Object_126.geometry} material={materials.wlGBfgcDjjktGKi} />
          <mesh geometry={nodes.Object_128.geometry} material={materials.WwrjthXqFCMqrXz} />
          <mesh geometry={nodes.Object_132.geometry} material={materials.WwrjthXqFCMqrXz} />
          <mesh geometry={nodes.Object_134.geometry} material={materials.BCEMLtzLOrRpykF} />
          <mesh geometry={nodes.Object_137.geometry} material={materials.qUpSUfeNQBdmagr} />
          <mesh geometry={nodes.Object_139.geometry} material={materials.qUpSUfeNQBdmagr} />
          <mesh geometry={nodes.Object_141.geometry} material={materials.WwrjthXqFCMqrXz} />
          <mesh geometry={nodes.Object_144.geometry} material={materials.vdKonUzpqPTDVLw} />
          <mesh geometry={nodes.Object_146.geometry} material={materials.vdKonUzpqPTDVLw} />
          <mesh geometry={nodes.Object_149.geometry} material={materials.HsvhXbFCGvnKLqR} />
        </group>
      </group>
  )
})

useGLTF.preload('/models/right-airpod.glb')
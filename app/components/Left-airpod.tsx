// Left-airpod.jsx
import React, { useEffect, useRef, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import {useFrame} from "@react-three/fiber";
import {scrollStore} from "@/app/lib/scrollStore";
import {useMediaQuery} from "react-responsive";

export const LeftAirpod = forwardRef((props, ref) => {

  const localRef = useRef()
  const activeRef = ref || localRef
  const { nodes, materials } = useGLTF('/models/left-airpod.glb')
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

  useFrame(() => {
    if (!activeRef.current) return
    activeRef.current.rotation.y = Math.PI / 2 * scrollStore.progress
  })

  const v = isMobile ? 0.5 : 1

  return (
      <group ref={activeRef} {...props} dispose={null}>
        <group position={[-1 * v , 1.2, 0.7]} rotation={[1.286, -0.571, -1.874]} scale={0.5 * v}>
          <mesh geometry={nodes.Object_71.geometry} material={materials.FesGvQOXeqPgsWH} />
          <mesh geometry={nodes.Object_75.geometry} material={materials.vdKonUzpqPTDVLw} />
          <mesh geometry={nodes.Object_77.geometry} material={materials.vdKonUzpqPTDVLw} />
          <mesh geometry={nodes.Object_80.geometry} material={materials.WwrjthXqFCMqrXz} />
          <mesh geometry={nodes.Object_82.geometry} material={materials.qUpSUfeNQBdmagr} />
          <mesh geometry={nodes.Object_84.geometry} material={materials.qUpSUfeNQBdmagr} />
          <mesh geometry={nodes.Object_87.geometry} material={materials.BCEMLtzLOrRpykF} />
          <mesh geometry={nodes.Object_89.geometry} material={materials.WwrjthXqFCMqrXz} />
          <mesh geometry={nodes.Object_100.geometry} material={materials.BExwFhrXMdSkVou} />
          <mesh geometry={nodes.Object_103.geometry} material={materials.vdKonUzpqPTDVLw} />
          <mesh geometry={nodes.Object_105.geometry} material={materials.uxJORKAoxKXCbDN} />
          <mesh geometry={nodes.Object_108.geometry} material={materials.HsvhXbFCGvnKLqR} />
        </group>
      </group>
  )
})

useGLTF.preload('/models/left-airpod.glb')
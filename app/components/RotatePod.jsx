import React, {useEffect, useRef} from 'react'
import {gsap} from "gsap";
import {useFrame} from "@react-three/fiber";
import {PresentationControls} from "@react-three/drei";
import {RightAirpod} from "./Right-airpod";

const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: {mass:1, tension: 0, friction: 26}
}

function RotatingPod({ targetFeature }) {
    const ref = useRef()
    const currentTargetY = useRef(null)

    useFrame((state, delta) => {
        if (!ref.current) return
        if (currentTargetY.current !== null) return
        ref.current.rotation.y += delta * 0.001
    })

    return (
        <PresentationControls {...controlsConfig}>
            <group ref={ref}>
                <RightAirpod
                    rotation={[-0.05, -0.5, -0.6]}
                    position={[-1, 0, 1.5]}
                />
            </group>
        </PresentationControls>
    )
}
export default RotatingPod

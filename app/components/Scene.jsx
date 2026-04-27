'use client'

import React from 'react'
import {Canvas} from "@react-three/fiber";
import {Case} from "./Case";
import {LeftAirpod} from "./Left-airpod";
import {RightAirpod} from "./Right-airpod";
import {OrbitControls} from "@react-three/drei";
import StudioLights from "@/app/components/StudioLights";

const Scene = () => {
    return (
        <section className={"product-viewer"}>

            <div className={"w-screen h-screen"}>
        <Canvas camera={{ position: [0, 0, 5] }}>
            <Case />
            <LeftAirpod />
            <RightAirpod />

            <OrbitControls />
            <StudioLights />
        </Canvas>
            </div>

        </section>
    )
}
export default Scene

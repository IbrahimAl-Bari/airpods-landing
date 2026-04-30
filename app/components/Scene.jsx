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
        <section>

            <div className={"w-screen h-screen absolute mt-5"}>
                <Canvas dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: 'high-performance' }}>
            <Case />
            <LeftAirpod />
            <RightAirpod />

            {/*<OrbitControls />*/}
            <StudioLights />
        </Canvas>
            </div>

        </section>
    )
}
export default Scene

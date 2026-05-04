'use client'

import {Canvas} from "@react-three/fiber";
import {Case} from "./Case";
import {LeftAirpod} from "./Left-airpod";
import {RightAirpod} from "./Right-airpod";
import StudioLights from "@/app/components/StudioLights";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)


const Scene = () => {

    return (
        <section>
            <div className={"w-screen h-screen absolute z-10"}>
                <Canvas dpr={[1, 1.5]} gl={{antialias: false, powerPreference: 'high-performance'}}>
                    <Case/>
                    <LeftAirpod />
                    <RightAirpod />

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

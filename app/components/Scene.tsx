'use client'

import {Canvas} from "@react-three/fiber";
import {Case} from "./Case";
import {LeftAirpod} from "./Left-airpod";
import {RightAirpod} from "./Right-airpod";
import StudioLights from "./StudioLights";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import {Suspense} from "react";
import Loading from "@/app/loading";

gsap.registerPlugin(ScrollTrigger, useGSAP)


const Scene = () => {

    return (
        <section>
            <div className={"w-screen h-screen absolute z-10"}>
                <Canvas dpr={[1, 1.5]} gl={{antialias: false, powerPreference: 'high-performance'}}>
                    <Suspense fallback={<Loading />}>
                        <Case/>
                        <LeftAirpod />
                        <RightAirpod />
                    </Suspense>

            <StudioLights />
        </Canvas>
            </div>

        </section>
    )
}
export default Scene

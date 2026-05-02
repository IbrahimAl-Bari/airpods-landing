'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import {Canvas} from "@react-three/fiber";
import {LeftAirpod} from "@/app/components/Left-airpod";
import {RightAirpod} from "@/app/components/Right-airpod";
import StudioLights from "@/app/components/StudioLights";
import {scrollStore} from "@/app/lib/scrollStore";
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Showcase = () => {
    const showcaseRef = useRef(null)
    const div1 = useRef(null)
    const div2 = useRef(null)
    const div3 = useRef(null)
    const div4 = useRef(null)
    const div5 = useRef(null)
    const div6 = useRef(null)


    const airpodsref = useRef(null)
    const Rightairpodref = useRef(null)
    const Leftairpodref = useRef(null)


    const isMobile = useMediaQuery({ maxWidth: 768 });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: showcaseRef.current,
                start: "top top",
                end: "+=2000",
                scrub: 1,
                pin: true,
                onUpdate: (self) => {
                    scrollStore.progress = self.progress  // 0 to 1 as you scroll
                }
            }
        })

        tl.from(
            [div1.current, div2.current, div3.current, div4.current, div5.current, div6.current],
            { opacity: 0, y: 30, stagger: 0.3 }
        )
    }, { scope: showcaseRef })

    const imgsize = 50

    return (
        <section>

            <div ref={showcaseRef} className={"h-screen w-screen flex"}>

                <div ref={airpodsref} className={"w-screen h-screen absolute z-10"}>
                    <Canvas camera={{ position: [0, 1, 3.5], fov: 75 }} dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: 'high-performance' }}>
                        <LeftAirpod ref={Leftairpodref} position={[0.7,0,0]} rotation={[-0.5, 0.2, 0.5]}/>
                        <RightAirpod ref={Rightairpodref} position={[-0.7,0,0]} rotation={[0, -0.2, -0.5]}/>

                        <StudioLights />
                    </Canvas>
                </div>

                <div className={"w-[50%] h-full grid grid-rows-3 grid-cols-1 ml-5 z-50"}>

                    <div ref={div1} className={"flex justify-center items-center gap-5 w-[50%]"}>
                        <Image src={"/sound.svg"} alt={"sound"} width={imgsize} height={imgsize}/>
                        {isMobile ? null :  <h3 className={"h3-base"}><span className={"h3-semibold"}>World&#39;s Best ANC</span> — Removes up to 2x more noise than AirPods Pro 2.</h3>}
                    </div>

                    <div ref={div2} className={"flex justify-center items-center gap-5 w-[50%]"}>
                        <Image src={"/bass.svg"} alt={"bass"} width={imgsize} height={imgsize}/>
                        {isMobile ? null : <h3 className={"h3-base"}><span className={"h3-semibold"}>New Acoustic Architecture</span> — deeper bass, wider soundstage.</h3>}
                    </div>

                    <div ref={div3} className={"flex justify-center items-center gap-5 w-[50%]"}>
                        <Image src={"/battery.svg"} alt={"battery"} width={imgsize} height={imgsize}/>
                        {isMobile ? null : <h3 className={"h3-base"}><span className={"h3-semibold"}>Extended Battery Life</span> — Up to 8 hours with ANC enabled.</h3>}
                    </div>

                </div>


                <div className={"w-[50%] h-full grid grid-rows-3 grid-cols-1 mr-5 z-50"}>

                    <div ref={div4} className={"flex justify-end items-center w-[50%] gap-5 ml-auto"}>
                        <Image src={"/heart.svg"} alt={"heart"} width={imgsize} height={imgsize}/>
                        {isMobile ? null : <h3 className={"h3-base"}><span className={"h3-semibold"}>Heart Rate Sensing</span> — Apple&#39;s smallest custom-built heart rate sensor.</h3>}
                    </div>

                    <div ref={div5} className={"flex justify-end items-center gap-5 w-[50%] ml-auto"}>
                        <Image src={"/water.svg"} alt={"water"} width={imgsize} height={imgsize}/>
                        {isMobile ? null :  <h3 className={"h3-base"}><span className={"h3-semibold"}>IP57 Water Resistance</span> — built for intense workouts and downpours.</h3>}
                    </div>

                    <div ref={div6} className={"flex justify-end items-center gap-5 w-[50%] ml-auto"}>
                        <Image src={"/aid.svg"} alt={"aid"} width={imgsize} height={imgsize}/>
                        {isMobile ? null :  <h3 className={"h3-base"}><span className={"h3-semibold"}>Hearing Aid Capability</span> — For mild to moderate hearing loss.</h3>}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Showcase
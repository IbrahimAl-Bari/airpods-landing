'use client'

import React, {useRef, useState} from 'react'
import { Canvas } from "@react-three/fiber"
import StudioLights from "./StudioLights"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import RotatingPod from "./RotatePod";
import { features } from "@/app/constants";
import {useMediaQuery} from "react-responsive";
import {Suspense} from "react";
import Loading from "@/app/loading";

gsap.registerPlugin(ScrollTrigger, useGSAP)


const Look = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const sectionref = useRef(null)
    const [activeIndex, setActiveIndex] = useState(null)
    const [activeFeature, setActiveFeature] = useState(null) // Consider defining a proper type for 'feature'
    const [targetFeature, setTargetFeature] = useState(null) // Consider defining a proper type for 'feature'

    const handleClick = (feature, index) => { // Consider defining a proper type for 'feature'
        if (activeIndex === index) {
            setActiveIndex(null)
            setActiveFeature(null)
            setTargetFeature(null)
            return
        }
        setActiveIndex(index)
        setActiveFeature(feature)
        setTargetFeature(feature)
    }

    useGSAP(() => {
        if (!sectionref.current) return;

        gsap.timeline({
            scrollTrigger: {
                trigger: sectionref.current,
                start: "top top",
                end: "+=500",
                scrub: 1,
                pin: true,
            }
        })
    }, { scope: sectionref })

    return (
        <section>
            <div ref={sectionref} className={"w-screen h-screen flex"}>

                <div className={"w-[50%] h-full ml-10 flex flex-col mt-20 gap-15"}>
                    <h1 className={"text-5xl max-md:text-4xl"}>Take a Closer Look</h1>

                    <div className={"flex flex-col gap-5"}>

                        {features.map((f, i) => (
                            <button
                                key={f.id}
                                onClick={() => handleClick(f, i)}
                                className={`group text-left transition-all duration-300 pl-4 max-md:pl-0`}>

                            <div className={`w-[60%] max-md:w-full flex items-center transition-all duration-300 h-full gap-2 p-1 pl-1 rounded-full`}>
                                {isMobile ? null : activeIndex === i ? <img className={"plus"} src="/circle-minus.svg" alt="minus"/> : <img className={"plus"} src="/circle-plus.svg" alt="plus"/>}

                                <span className={`relative transition-all duration-200 small-medium max-md:text-md hover:scale-95
                                ${activeIndex === i && "scale-105"}
                                `}>
                                     {f.label}
                                    </span>

                                </div>
                            </button>
                        ))}

                    </div>


                    {isMobile ? null : <div className={`transition-all duration-500 ${activeFeature ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {activeFeature && (
                            <>
                                <div className={"w-[50%] max-md:w-[70%]"}>
                                    <h2>{activeFeature.title}</h2>
                                    <p className={"base-semibold text-base max-md:text-sm"}>{activeFeature.body}</p>
                                </div>
                            </>
                        )}
                    </div>}

                </div>



                <div className={"w-full h-full"}>
                    <Canvas dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: 'high-performance' }}>
                        <Suspense fallback={<Loading />}>
                        <RotatingPod targetFeature={targetFeature} />
                        </Suspense>
                        <StudioLights />
                    </Canvas>
                </div>

            </div>
        </section>
    )
}

export default Look
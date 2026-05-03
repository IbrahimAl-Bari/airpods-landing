'use client'

import React, { useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import StudioLights from "@/app/components/StudioLights"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import RotatingPod from "@/app/components/RotatePod";
import { features } from "@/app/constants";
import {useMediaQuery} from "react-responsive";

gsap.registerPlugin(ScrollTrigger, useGSAP)


const Look = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const sectionref = useRef(null)
    const [activeIndex, setActiveIndex] = useState(null)
    const [activeFeature, setActiveFeature] = useState(null)
    const [targetFeature, setTargetFeature] = useState(null)

    const handleClick = (feature, index) => {
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
                                className={`group text-left transition-all duration-300 border-l-2 pl-4 ${
                                    activeIndex === i
                                        ? 'border-white'
                                        : 'border-transparent'}`}>

                                <span className={"relative small-medium"}>
                                     {f.label}

                                    <span className={`absolute -bottom-0.5 left-0 h-px bg-white opacity-80 transition-all duration-300 ${
                                        activeIndex === i ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}/>
                                    </span>
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
                        <RotatingPod targetFeature={targetFeature} />
                        <StudioLights />
                    </Canvas>
                </div>

            </div>
        </section>
    )
}

export default Look
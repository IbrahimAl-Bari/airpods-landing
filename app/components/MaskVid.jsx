"use client"

import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const MaskVid = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' })
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/video/videoplayback.webm" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/h2.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Best In‑ear</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    The best thing you’ve never heard
                                </span>
                                . H2 powers
                            </p>
                            <p>
                                for the most immersive listening experience ever. Designed with an upgraded acoustic seal, AirPods Pro 3 automatically adapt to your environment and preferences.
                            </p>
                            <p>
                                And new ultra-low-noise microphones remove even more unwanted sound. So you only hear what you want — in an unheard-of audio experience.
                            </p>
                            <p className="text-primary">Learn more about Audio performance</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Removes up to</p>
                            <h3>2x more</h3>
                            <p>unwanted noise than AirPods Pro 2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Removes up to</p>
                            <h3>4x more</h3>
                            <p>unwanted noise than original AirPods Pro</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MaskVid
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const about = useRef<HTMLDivElement>(null);
    const borderRef = useRef<HTMLDivElement>(null);
    const borderRefNd = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const animationOne = gsap.context(() => {
            gsap.to(borderRef.current, {
                rotation: 360,
                duration: 3,
                repeat: -1,
                ease: "linear",
            });
        })
            
        const animationTwo = gsap.context(() => {
            gsap.to(borderRefNd.current, {
                rotation: 360,
                duration: 3,
                repeat: -1,
                ease: "linear",
            });
        })

        return () => {
            animationOne.revert();
            animationTwo.revert();
        };
        
    }, []);

    return (
        <section className="container mx-auto py-10 px-4" ref={about} id="skills">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-orange-400 font-semibold mb-4">My toolkit combines:</p>
            <div className="space-y-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                <div className="flex flex-col space-y-7 items-center justify-center">
                    <div>
                        <strong>React 🚀:</strong> For building lightning-fast, component-driven UIs
                    </div>
                    <div className="flex items-center justify-center img-field relative">
                        <div
                            ref={borderRef}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 grad-border absolute rounded-full"
                        ></div>
                        <Image
                            className="w-12 sm:w-16 md:w-20 rounded-full"
                            width={80}
                            height={80}
                            src="/skills-images/react.png"
                            alt="react logo"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-5 items-center justify-center">
                    <div>
                        <strong>Laravel 🎯:</strong> Creating robust backend architectures with MVC
                    </div>
                    <div className="flex items-center justify-center img-field relative">
                        <div
                            ref={borderRefNd}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 grad-border absolute rounded-full"
                        ></div>
                        <Image 
                        className="w-12 sm:w-14 md:w-16"
                        width={80}
                        height={80}
                        src="/skills-images/laravel.png"
                        alt="laravel logo"
                        />
                    </div>
                </div>
                
            </div>
            <div className="mt-8 space-y-4 text-md sm:text-lg md:text-xl lg:text-2xl">
                <p>
                    This powerful stack lets me deliver
                    <span className="font-semibold text-green-600"> full-cycle solutions </span>
                    where <span className="font-bold">pixel-perfect frontends</span> meet
                    <span className="font-bold"> scalable backends</span>.
                    By leveraging
                    <span className="italic text-cyan-300"> React&#39;s virtual DOM</span> with
                    <span className="italic text-red-300"> Laravel&#39;s API resources</span>,
                    I create applications that are as{' '}
                    <span className="underline text-fuchsia-300">performant</span>{' '}
                        as they are{' '}
                    <span className="underline text-fuchsia-300">maintainable</span>.
                </p>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:3xl text-blue-500 font-semibold mb-4 mt-8">Why This Combo Wins:</p>
            <ol className="list-decimal list-inside space-y-4 text-md sm:text-lg md:text-xl lg:text-2xl">
                <li>Speed + Stability: React&#39;s efficiency meets Laravel&#39;s secure backend</li>
                <li>Future-Proof: Easily extendable architecture for growing needs</li>
                <li>Perfect for agencies and startups needing flair & depth 🚀</li>
            </ol>
        </section>
    );
};

export default About;

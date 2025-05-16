"use client";
import React from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
interface ServiceCardProps {
    src: string;
    alt: string;
    title: string;
    description: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({src, alt, title, description}) => {
    const serviceCardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (serviceCardRef.current) {
            gsap.from(serviceCardRef.current, {
                opacity: 0,
                y: 300,
                duration: 1,
                scrollTrigger: {
                    trigger: serviceCardRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });
        }
    }, [])
    return(
        <div ref={serviceCardRef} className="w-96 sm:w-[400px] h-[500px] border border-black rounded-2xl 
        shadow-xl shadow-black flex flex-col items-center justify-center mx-1 sm:mx-2 lg:mx-4">  
            <div className="text-center flex flex-col items-center justify-center">
                <Image 
                src={src} 
                alt={alt} 
                width={190}
                height={200}
                />
                <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl m-4">{title}</h3>
            </div>
            <div className="text-center text-xs sm:text-sm md:text-md px-4 py-2">
                    {description}
            </div>
        </div>
    )
}
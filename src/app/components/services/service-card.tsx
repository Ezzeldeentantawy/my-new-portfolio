import React from "react";
import Image from "next/image";

interface ServiceCardProps {
    src: string;
    alt: string;
    title: string;
    description: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({src, alt, title, description, ref}) => {
    return(
        <div ref={ref} className="w-72 sm:w-80 md:w-92 service-card border border-black rounded-2xl 
        shadow-xl shadow-black flex flex-col items-center justify-center mx-1 sm:mx-2 lg:mx-4">  
            <div className="w-92 text-center flex flex-col items-center justify-center">
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
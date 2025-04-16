import React from "react";

interface ServiceCardProps {
    src: string;
    alt: string;
    title: string;
    description: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({src, alt, title, description}) => {
    return(
        <div className="w-72 sm:w-80 md:w-92 service-card border border-black rounded-2xl 
        shadow-xl shadow-black flex flex-col items-center justify-center mx-1 sm:mx-2 lg:mx-4">  
            <div className="w-92 text-center flex flex-col items-center justify-center">
                <img src={src} alt={alt} className="w-42 sm:w-50 md:w-64 mt-4" />
                <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl m-4">{title}</h3>
            </div>
            <div className="text-center text-xs sm:text-sm md:text-md px-4 py-2">
                    {description}
            </div>
        </div>
    )
}
import React from "react";
import Image from "next/image";

interface Props{
    link : string;
    title : string;
    src : string;
    alt : string;
}

export const ProjectWLink: React.FC<Props> = ({link, title, src, alt}) => {
    return(
        <div className="min-w-80 sm:min-w-96 h-80 flex items-center justify-center">
            <div className="flex items-center justify-center flex-col">
                <a 
                className="mb-5"
                href={link}
                target="_blank"
                rel="noreferrer"
                >
                    <Image src={src} 
                    className="gallery-image rounded-2xl" 
                    alt={alt}
                    loading="lazy"
                    width={1000}
                    height={1000}
                    />
                </a>
                <h3 className="text-2xl">{title}</h3>
            </div>
        </div>
    )
}
import React from "react";

interface Props{
    link : string;
    title : string;
    src : string;
    alt : string;
}

export const ProjectWLink: React.FC<Props> = ({link, title, src, alt}) => {
    return(
        <div className="min-w-64 sm:min-w-80 md:min-w-92 h-72 me-4 flex items-center justify-center">
            <div className="flex items-center justify-center flex-col">
                <a 
                className="mb-5"
                href={link}
                target="_blank"
                rel="noreferrer"
                >
                    <img src={src} 
                    className="gallery-image rounded-2xl" 
                    alt={alt}
                    loading="lazy"
                    />
                </a>
                <h3 className="text-2xl">{title}</h3>
            </div>
        </div>
    )
}
"use client";
import React, {useState} from "react";
import Image from "next/image";


export const ProjectCard = () => {
    const [show, setShow] = useState(false);
    return(
        <div className="min-w-80 sm:min-w-96 h-80 ms-4 flex items-center justify-center">
            <div className="flex items-center justify-center flex-col">
                <button 
                onClick={() => {
                setShow(!show)
                }}
                >
                    <Image src="/gallery/todo.webp" 
                    className="gallery-image rounded-2xl mb-5" 
                    alt="my old portfolio image"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    />
                </button>
                <h3 className="text-2xl">Todos website</h3>
            </div>
            {show && 
            <div className="fixed inset-0 bg-black flex items-center justify-center">
                <div>
                    <Image 
                    src="/coming-soon.jpeg" 
                    alt="coming soon image" 
                    width={1000}
                    height={1000}
                    />
                </div>
                <div>
                    <button 
                    onClick={() => {
                        setShow(false)
                    }}
                    className="absolute top-5 right-5 text-2xl">
                        ✕
                    </button>
                </div>
            </div>
            }
        </div>
    )
}
"use client";
import React, {useState} from "react";


export const ProjectCard = () => {
    const [show, setShow] = useState(false);
    return(
        <div className="h-72 min-w-64 sm:min-w-80 md:min-w-92 ms-4 flex items-center justify-center">
            <div className="flex items-center justify-center flex-col">
                <button 
                onClick={() => {
                setShow(!show)
                }}
                >
                    <img src="/gallery/todo.webp" 
                    className="gallery-image rounded-2xl mb-5" 
                    alt="my old portfolio image"
                    loading="lazy"
                    />
                </button>
                <h3 className="text-2xl">Todos website</h3>
            </div>
            {show && 
            <div className="fixed inset-0 bg-black flex items-center justify-center">
                <div>
                    <img className="w-92" src="/coming-soon.jpeg" alt="coming soon image" />
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
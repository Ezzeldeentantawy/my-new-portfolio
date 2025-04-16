"use client";

import { useState } from "react"


export const Layali = () => {
    const images = [
        '/gallery/layali-elhelmia/img-1.png',
        '/gallery/layali-elhelmia/img-2.png',
        '/gallery/layali-elhelmia/img-3.png',
        '/gallery/layali-elhelmia/img-4.png',
        '/gallery/layali-elhelmia/img-5.png',
        '/gallery/layali-elhelmia/img-6.png',
        '/gallery/layali-elhelmia/img-7.png'
    ]
    const [isShow, setIsShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev + 1));
        if(currentIndex == 6){
            setCurrentIndex((prev) => (prev) % 7);
        }
        };
    
        const prevPhoto = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        };
    return(
        <div className="flex justify-center items-center flex-col relative min-w-64 sm:min-w-80 md:min-w-92 h-72">
            <div className="flex items-center justify-center flex-col">
                <button 
                onClick={() => (
                    setIsShow(!isShow)
                )}
                >
                    <img className="mb-5 rounded-2xl gallery-image"
                    src={images[0]} 
                    alt="my restaurant website photo" />
                </button>
                <h3 className="text-2xl">Restaurant website</h3>
            </div>
            {isShow && (
            <div className="fixed inset-0 flex bg-black backdrop-opacity-10 flex-col items-center justify-center z-50">
                    <div className="object-cover w-6/12">
                        <img src={`/gallery/layali-elhelmia/img-${currentIndex + 1}.png`} 
                        alt="Gallery" 
                        className="rounded-2xl shadow-lg w-full h-full" 
                        loading="lazy"
                        />
                    </div>
                <div className="mt-4 flex gap-4">
                    <button onClick={prevPhoto} className="px-4 py-2 bg-white text-black rounded">
                        Previous
                    </button>
                    <button onClick={nextPhoto} className="px-4 py-2 bg-white text-black rounded">
                        Next
                    </button>
                </div>
                <button
                    onClick={() => setIsShow(false)}
                    className="absolute top-5 right-5 text-white text-2xl"
                >
                    ✕
                </button>
            </div>
        )}
    </div>
    )
}
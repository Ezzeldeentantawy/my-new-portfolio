"use client";

import { useState } from "react"
import Image from "next/image";


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
        <div className="flex justify-center items-center flex-col relative min-w-80 sm:min-w-96 h-80">
            <div className="flex items-center justify-center flex-col">
                <button 
                onClick={() => (
                    setIsShow(!isShow)
                )}
                >
                    <Image className="mb-5 rounded-2xl gallery-image"
                    src={images[0]} 
                    alt="my restaurant website photo" 
                    width={400}
                    height={400}
                    />
                </button>
                <h3 className="text-2xl">Restaurant website</h3>
            </div>
            {isShow && (
            <div className="fixed inset-0 flex bg-black flex-col items-center justify-center my-auto z-50">
                    <div className="object-cover w-[300px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[300px] md:h-[400px]">
                        <Image src={`/gallery/layali-elhelmia/img-${currentIndex + 1}.png`} 
                        alt="Gallery" 
                        className="rounded-2xl shadow-lg"
                        width={1000}
                        height={1000}
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
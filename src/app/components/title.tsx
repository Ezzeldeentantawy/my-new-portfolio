"use client";
import gsap from "gsap"
import { useEffect, useRef } from "react"
import Image from "next/image";

export const Title = () => {
    const title = useRef<HTMLHeadingElement>(null);
    const subject = useRef<HTMLHeadingElement>(null);
    const MyPhoto = useRef<HTMLDivElement>(null);
    const linksContainer = useRef<HTMLDivElement>(null);
    const MyAccounts = [
        {
            label: 'My Facebook Account',
            link: 'https://www.facebook.com/share/1BpCM3f79G/',
            icon: '/social-media-images/facebook.png',
            alt: 'my facebook account',
        },
        {
            label: 'My Instagram Account',
            link: 'https://www.instagram.com/ezzeldeen_tantawy?igsh=cmMzbW8xemIwZ2F1',
            icon: '/social-media-images/instagram.png',
            alt: 'my Instagram account',
        },
        {
            label: 'My LinkedIn Account',
            link: 'https://www.linkedin.com/in/ezzeldeen-tantawy-8a0393344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            icon: '/social-media-images/linkedin.png',
            alt: 'my LinkedIn account',
        },
        {
            label: 'My WhatsApp Account',
            link: 'https://wa.me/+201284124174',
            icon: '/social-media-images/whatsapp.png',
            alt: 'my Whatsapp account',
        },
        {
            label: 'My TikTok Account', 
            link: 'https://www.tiktok.com/@ezzeldeen11?_t=ZS-8vMcgrdv9p2&_r=1',
            icon: '/social-media-images/tiktok.png',
            alt: 'my Tiktok account',
        },
    ]
    useEffect(() => {
        gsap.fromTo(
            title.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.inOut" }
        )
        gsap.fromTo(
            subject.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 1.5, ease: "power2.inOut" }
        )
        gsap.fromTo(
            MyPhoto.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 2, delay: 1.2, ease: "back.inOut" }
        )
        const tl = gsap.timeline(); // Create a timeline

        // Add animations sequentially
        tl.fromTo("#element1", { y: 100, opacity:0 }, {y:0, opacity:1, duration: .3, delay: 2.5, ease:"back.in" })
            .fromTo("#element2", { y: 100, opacity:0 }, {y:0, opacity:1, duration:.3, delay: .001, ease:"back.in" })
            .fromTo("#element3", { y: 100, opacity:0 }, {y:0, opacity:1, duration:.3, delay: .001, ease:"back.in" })
            .fromTo("#element4", { y: 100, opacity:0 }, {y:0, opacity:1, duration:.3, delay: .001, ease:"back.in" })
            .fromTo("#element5", { y: 100, opacity:0 }, {y:0, opacity:1, duration: .3, delay: .001, ease:"back.in" });
    },[])
    return (
        <header>
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10  my-12">
                <div>
                    <h1 ref={title} className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-10 font-bold text-white">Hello, My name is
                        <span className="text-orange-400"> Ezzeldeen Tantawy</span>
                    </h1>
                    <h2 ref={subject} className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">I&#39;m a
                        <span className="text-orange-400"> Full stack Developer</span>
                    </h2>
                </div>
                <div ref={MyPhoto} className="mask-l-from-70% mask-b-from-90% mb-4 sm:mb-0">
                    <Image 
                    src="/me2.webp" 
                    alt="my photo" 
                    width={250}
                    height={250}
                    />
                </div>
            </div>
            <div ref={linksContainer} className="flex justify-center items-center gap-4 sm:gap-10">
                {MyAccounts.map((account, index) => (
                    <a className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" href={account.link}
                        key={index}
                        target="_blank" rel="noreferrer" aria-label={account.label}
                        id={`element${index + 1}`}
                        >
                        <Image 
                        src={account.icon} 
                        alt={account.alt} 
                        width={50}
                        height={50}
                        />
                    </a>
                ))}
            </div>
        </header>
    )
}

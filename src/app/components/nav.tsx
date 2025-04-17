'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
export const Nav = () => {
    const NavList = ['Home', 'Services', 'Skills', 'Gallery', 'Contact'];
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const mobileNavRef = useRef<HTMLDivElement>(null);

    
    useEffect(() => {
        gsap.fromTo(
            mobileNavRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: .2, ease: "power2.out" }
        );
        gsap.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: .2, ease: "power2.out" }
        );
    },[])

    return(
        <>
            <nav ref={navRef} className="hidden md:flex items-center justify-between width-full rounded-lg m-2 px-4 shadow shadow-white">
                <div className='w-52 h-20'>
                    <img src="/logo.png" className='w-full h-full object-cover' alt="my logo" />
                </div>
                <ul className="flex p-0 m-0 gap-8 text-lg font-medium">
                    {NavList.map((item, index) => (
                        <li
                            key={index}
                            className='nav-item'
                        >
                            <a href={`/#${item.toLowerCase()}`}>{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div ref={mobileNavRef} className='flex md:hidden items-center justify-between pe-4 shadow shadow-white rounded-lg m-2'>
                <div className='w-32 sm:52 h-20'>
                    <img src="/logo.png" className='w-full h-full object-cover' alt="my logo" />
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className='w-6 h-6'>
                    <img className='w-full h-full' src="/hamburger-menu.png" alt="nav bar" />
                </button>
            </div>
                {isOpen && 
                <nav className="flex md:hidden shadow shadow-white m-2 width-screen justify-center rounded-2xl">
                        <ul className="flex flex-col">
                            {NavList.map((item, index) => (
                            <li
                                key={index}
                                className='nav-item'
                            >
                                <a href={`/#${item.toLowerCase()}`}>{item}</a>
                            </li>
                        ))}
                        </ul>
                    </nav>
                }
        </>
    )
}
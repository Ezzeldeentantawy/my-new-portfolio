"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Title = () => {
  const title = useRef<HTMLHeadingElement>(null);
  const subject = useRef<HTMLHeadingElement>(null);
  const MyPhoto = useRef<HTMLDivElement>(null);
  const linksContainer = useRef<HTMLDivElement>(null);
  const scrollPrompt = useRef<HTMLDivElement>(null);
  const ctaButton = useRef<HTMLAnchorElement>(null);

  const MyAccounts = [
    {
      label: 'My GitHub Account',
      link: 'https://github.com/Ezzeldeentantawy',
      icon: '/social-media-images/github.png',
      alt: 'my GitHub account',
    },
    {
      label: 'My LinkedIn Account',
      link: 'https://www.linkedin.com/in/ezzeldeen-tantawy-8a0393344/',
      icon: '/social-media-images/linkedin.png',
      alt: 'my LinkedIn account',
    },
    {
      label: 'My WhatsApp',
      link: 'https://wa.me/+201284124174',
      icon: '/social-media-images/whatsapp.png',
      alt: 'my Whatsapp account',
    },
  ];

  useEffect(() => {
    // Enhanced animations with better timing and easing
    const tl = gsap.timeline();
    
    tl.fromTo(
      title.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(
      subject.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.8"
    )
    .fromTo(
      ctaButton.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
      "-=0.5"
    )
    .fromTo(
      MyPhoto.current,
      { scale: 0.8, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: 'back.out(1.7)' },
      "-=1"
    )
    .fromTo(
      linksContainer.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      "-=0.5"
    )
    .fromTo(
      scrollPrompt.current,
      { y: -20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power1.out',
        repeat: -1, 
        yoyo: true,
        repeatDelay: 0.5
      },
      "-=0.3"
    );
  }, []);


  return (
    <header className='min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-32 pb-16 custom-gradient transition-all duration-500'>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mb-16">
          
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1
                ref={title}
                className='text-3xl md:text-5xl lg:text-6xl font-bold leading-tight'
              >
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Ezzeldeen Tantawy
                </span>
              </h1>
              
              <h2
                ref={subject}
                className='text-xl md:text-3xl lg:text-4xl font-semibold'
              >
                I'm a{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Full-Stack Developer
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></span>
                </span>
              </h2>
            </div>

            <p className='text-lg md:text-xl max-w-2xl'>
              Passionate about creating innovative web solutions with modern technologies. 
              Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                ref={ctaButton}
                href="/Ezzeldeen_CV.docx"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                download
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  📄 Download CV
                </span>
              </a>
              
              <a
                href="#contact"
                className='inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 hover:scale-105'
              >
                💬 Let's Talk
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className="relative">
            <div
              ref={MyPhoto}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              
              {/* Photo container */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#f57812]">
                <Image
                  src="/me2.webp"
                  alt="Ezzeldeen Tantawy - Full Stack Developer"
                  width={384}
                  height={384}
                  className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div
          ref={linksContainer}
          className="flex justify-center gap-8 mb-16"
        >
          {MyAccounts.map((account, index) => (
            <a
              key={index}
              href={account.link}
              target="_blank"
              rel="noreferrer"
              aria-label={account.label}
              className='group relative p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2'
            >
              <Image
                src={account.icon}
                alt={account.alt}
                width={48}
                height={48}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
              
              {/* Tooltip */}
              <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'>
                {account.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Enhanced Scroll Prompt */}
        <div
          ref={scrollPrompt}
          className="flex flex-col items-center gap-2"
        >
          <span className='text-sm font-medium'>
            Scroll to explore
          </span>
          <a 
            href="#services" 
            aria-label="Scroll to services"
            className="group"
          >
            <div className='p-3 rounded-full transition-all duration-300 group-hover:scale-110'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className='w-6 h-6 transition-colors duration-300'
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};


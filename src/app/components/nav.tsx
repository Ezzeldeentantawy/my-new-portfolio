'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export const Nav = () => {
  const NavList = ['Home', 'Services', 'Skills', 'Gallery', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Animation on mount
  useEffect(() => {
    gsap.fromTo(
      mobileNavRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power2.out' }
    );
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power2.out' }
    );
  }, []);

  // Scroll spy effect
  useEffect(() => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href')?.substring(2) === entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, [isOpen]); // runs every time mobile menu opens


  return (
    <>
      {/* Desktop Nav */}
      <nav
        ref={navRef}
        className="hidden md:flex items-center justify-between rounded-lg m-2 px-4 shadow bg-gray-800 shadow-white fixed left-0 right-0 top-0 z-50"
      >
        <div className="w-52 h-20">
          <img src="/logo.png" className="w-full h-full object-cover" alt="my logo" />
        </div>
        <ul className="flex p-0 m-0 gap-8 text-lg font-medium">
          {NavList.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={`/#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Header */}
      <div
        ref={mobileNavRef}
        className="md:hidden fixed left-0 right-0 top-0 z-50"
      >
        <div className='flex items-center justify-between shadow shadow-white rounded-lg m-2 bg-gray-800 '>
            <div className="w-32 sm:52 h-20">
                <img src="/logo.png" className="w-full h-full object-cover" alt="my logo" />
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="w-6 h-6 me-4">
                <img className="w-full h-full" src="/hamburger-menu.png" alt="nav bar" />
            </button>
        </div>
        {isOpen && (
        <nav className="flex md:hidden m-2 justify-end">
          <ul className="flex flex-col self-end w-fit shadow shadow-white rounded-2xl p-5 bg-gray-800">
            {NavList.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={`/#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      </div>

      {/* Mobile Nav Dropdown */}
      
    </>
  );
};

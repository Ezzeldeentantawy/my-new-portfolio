"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const about = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const borderRefNd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rotateOptions = {
        rotation: 360,
        duration: 6,
        repeat: -1,
        ease: "linear",
      };

      gsap.to(borderRef.current, rotateOptions);
      gsap.to(borderRefNd.current, rotateOptions);
    }, about);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="container mx-auto py-16 px-6 max-w-6xl"
      ref={about}
      id="skills"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-8 text-center">
        My Toolkit Combines:
      </h2>

      <div className="grid md:grid-cols-2 gap-12 text-center text-lg sm:text-xl md:text-2xl">
        {/* React */}
        <div className="flex flex-col items-center space-y-6">
          <p>
            <strong>React 🚀:</strong> For building lightning-fast,
            component-driven UIs.
          </p>
          <div className="relative flex items-center justify-center">
            <div
              ref={borderRef}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full grad-border absolute animate-pulse"
            ></div>
            <Image
              className="w-16 sm:w-20 md:w-24 z-10 rounded-full shadow-md"
              width={80}
              height={80}
              src="/skills-images/react.png"
              alt="React logo"
            />
          </div>
        </div>

        {/* Laravel */}
        <div className="flex flex-col items-center space-y-6">
          <p>
            <strong>Laravel 🎯:</strong> Creating robust backend architectures
            with MVC.
          </p>
          <div className="relative flex items-center justify-center">
            <div
              ref={borderRefNd}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full grad-border absolute animate-pulse"
            ></div>
            <Image
              className="w-14 sm:w-18 md:w-20 z-10 rounded shadow-md"
              width={80}
              height={80}
              src="/skills-images/laravel.png"
              alt="Laravel logo"
            />
          </div>
        </div>
      </div>

      {/* Stack Explanation */}
      <div className="mt-12 space-y-6 text-center text-md sm:text-lg md:text-xl">
        <p>
          This powerful stack lets me deliver{" "}
          <span className="text-green-600 font-semibold">
            full-cycle solutions
          </span>{" "}
          where <span className="font-bold">pixel-perfect frontends</span> meet{" "}
          <span className="font-bold">scalable backends</span>.
        </p>
        <p>
          By leveraging{" "}
          <span className="italic text-cyan-400">React’s virtual DOM</span> with{" "}
          <span className="italic text-red-400">Laravel’s API resources</span>,
          I create apps that are both{" "}
          <span className="underline text-fuchsia-300">performant</span> and{" "}
          <span className="underline text-fuchsia-300">maintainable</span>.
        </p>
      </div>

      {/* Why this combo wins */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-blue-500 font-semibold mt-16 text-center">
        Why This Combo Wins:
      </h3>
      <ol className="list-decimal list-inside space-y-4 mt-6 text-md sm:text-lg md:text-xl lg:text-2xl">
        <li>
          <strong>Speed + Stability:</strong> React’s efficiency meets Laravel’s
          secure backend.
        </li>
        <li>
          <strong>Future-Proof:</strong> Easily extendable architecture for
          growing needs.
        </li>
        <li>
          <strong>Perfect for agencies & startups:</strong> Flair meets
          functionality 🚀.
        </li>
      </ol>
    </section>
  );
};

export default About;

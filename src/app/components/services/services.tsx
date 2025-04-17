"use client";
import { useRef, useEffect } from "react";
import { ServiceCard } from "./service-card";
import gsap from "gsap";

export const Services = () => {

    const serviceCardRef = useRef<HTMLDivElement>(null);
    const serviceCardRef2 = useRef<HTMLDivElement>(null);
    const serviceCardRef3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (serviceCardRef.current) {
            gsap.from(serviceCardRef.current, {
                opacity: 0,
                y: 300,
                duration: 1,
                scrollTrigger: {
                    trigger: serviceCardRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });
        }
        if (serviceCardRef2.current) {
            gsap.from(serviceCardRef2.current, {
                opacity: 0,
                y: 200,
                duration: 1,
                scrollTrigger: {
                    trigger: serviceCardRef2.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });
        }
        if (serviceCardRef3.current) {
            gsap.from(serviceCardRef3.current, {
                opacity: 0,
                y: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: serviceCardRef3.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });
        }
    },[])
    return(
        <section id="services">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mt-16">Our <span className="text-orange-400">services</span></h1>
            <div className="flex overflow-auto items-center justify-between px-4 mt-10">
                <ServiceCard
                    ref={serviceCardRef}
                    src="/services/api.png"
                    alt="api development integration"
                    title="API Development & Integration"
                    description={
                        <>
                            <p>&#128900; <span className="font-bold">RESTful APIs:</span> Build scalable and secure APIs for apps or services.</p>
                            <p>&#128900; <span className="font-bold">Third-party API Integrations:</span> Integrate services like Google Maps, payment gateways, or social logins.</p>
                        </>
                    }
                />
                <ServiceCard
                ref={serviceCardRef2}
                    src="/services/success.png"
                    alt="optimization & performance" 
                    title="Website Optimization & Performance"
                    description={
                        <>
                            <p className="text-md">&#128900;<span className="font-bold">Site Speed Optimization:</span>
                                I enhance your website&#39;s loading speed for better user experience and SEO rankings.
                            </p>
                            <p className="text-md">&#128900;<span className="font-bold">SEO Optimization:</span>
                                I help improve your site&#39;s visibility with SEO best practices.
                            </p>
                        </>
                    }
                />
                <ServiceCard
                ref={serviceCardRef3}
                    src="/services/support.png"
                    alt="mainhance & support"
                    title="Maintenance & Support"
                    description={
                        <>
                            <p>
                                I offer ongoing maintenance and support services to keep your website or app running smoothly. Whether it&#39;s updating content, 
                                fixing bugs, or implementing security patches, I ensure your digital presence is always up to date and secure.
                            </p>
                        </>
                    }
                />
            </div>
        </section>
    )
}
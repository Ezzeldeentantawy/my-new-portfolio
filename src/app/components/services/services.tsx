"use client";
import { ServiceCard } from "./service-card";

export const Services = () => {

    

    
    return(
        <section id="services">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mt-16">Our <span className="text-orange-400">services</span></h1>
            <div className="flex flex-wrap gap-y-5 items-center justify-center px-4 mt-10">
                <ServiceCard
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
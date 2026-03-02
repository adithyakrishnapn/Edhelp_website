import React from 'react';
import { Target, MailOpen, Linkedin, BriefcaseMedical, AtSign, Package } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <div className="text-[28px] leading-none mb-1">🇦🇪</div>,
            title: "UAE-Specific CVs",
            desc: ""
        },
        {
            icon: <AtSign strokeWidth={2.5} className="w-8 h-8 text-[#1d4ed8]" />,
            title: "ATS & Recruiter",
            desc: "Optimized"
        },
        {
            icon: <Package strokeWidth={2} className="w-8 h-8 text-[#1d4ed8]" />,
            title: "Strategic Job",
            desc: "Applications"
        },
        {
            icon: <div className="text-[#0a66c2] font-extrabold text-2xl tracking-tighter">in</div>,
            title: "Linkedin",
            desc: "Makeover"
        },
        {
            icon: <BriefcaseMedical strokeWidth={2.5} className="w-8 h-8 text-[#16a34a]" />,
            title: "Healthcare",
            desc: "(Specialized Support)"
        }
    ];

    return (
        <section className="pb-16 pt-6 bg-gradient-to-b from-white to-[#f4f9fc] relative z-20">
            <div className="container-padding w-full max-w-7xl mx-auto">

                {/* Section Header with decorative dots */}
                <div className="flex items-center justify-center gap-4 mb-10 pt-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                    <h2 className="text-[22px] md:text-[28px] font-extrabold text-[#0e1a4a] tracking-tight">
                        Why Choose Us?
                    </h2>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                </div>

                {/* Features Row */}
                <div className="flex flex-wrap justify-center gap-4 lg:gap-5 w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[14px] shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] p-5 flex flex-col items-center justify-center text-center w-[140px] md:w-[175px] lg:w-[195px] min-h-[150px] lg:min-h-[170px] transform hover:-translate-y-1.5 transition-transform border border-transparent hover:border-[#bae6fd] hover:shadow-xl"
                        >
                            <div className="bg-[#f0f9ff] w-[60px] h-[60px] rounded-[18px] flex items-center justify-center mb-4 shadow-inner">
                                {feature.icon}
                            </div>
                            <h3 className="text-[#0f172a] font-bold text-[14px] md:text-[15px] leading-tight">
                                {feature.title}
                            </h3>
                            {feature.desc && (
                                <p className="text-[#0f172a] font-bold text-[14px] md:text-[15px] leading-tight mt-0.5">
                                    {feature.desc}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;

import React from 'react';
import Layout from '../components/Layout';
import PackageCard from '../components/PackageCard';

import { packages } from '../data/packages';

const Services = () => {
    return (
        <Layout>
            <div className="pt-36 pb-20 bg-gradient-to-b from-[#f0f7fb] to-white min-h-screen">

                {/* Header */}
                <div className="container-padding text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6 animate-slide-up">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1930] tracking-tight">
                            Our Services
                        </h1>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                    </div>
                    <p className="text-[#334155] max-w-2xl mx-auto animate-slide-up font-medium text-lg leading-relaxed" style={{ animationDelay: '100ms' }}>
                        Choose the perfect package for your career goals. We offer transparent pricing, personalized strategies, and professional quality delivered on time.
                    </p>
                </div>

                {/* Career Support Services */}
                <section className="container-padding mb-24 mt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="animate-slide-up">
                            <span className="text-[#16a34a] font-bold tracking-wider uppercase text-sm mb-2 block">Career Success</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1930] mb-6">Our Career Support Packages</h2>
                            <p className="text-[#334155] text-lg leading-relaxed mb-6 font-medium">
                                In today's highly competitive Gulf job market, your application package is your most powerful asset. Select the pathway that best accelerates your career journey.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "ATS-Friendly Formatting to bypass automated HR filters.",
                                    "Keyword Optimization for Middle East industry standards.",
                                    "Strategic application support across key job platforms.",
                                    "LinkedIn optimization for organic recruiter discovery."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[#334155] font-medium">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#16a34a] mt-1.5 shrink-0"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden lg:block relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
                                    alt="Professional Career Support"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930]/90 to-transparent flex items-end p-8">
                                    <span className="text-white font-bold text-xl drop-shadow-md">Professional Career Support</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                        {packages.map((pkg, idx) => (
                            <PackageCard key={idx} {...pkg} />
                        ))}
                    </div>
                </section>

            </div>
        </Layout>
    );
};

export default Services;

import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

const About = () => {
    return (
        <Layout>
            <div className="bg-gradient-to-b from-[#eeeaf9] to-white min-h-screen pt-36 pb-20">

                {/* Header */}
                <div className="container-padding text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0e1a4a] tracking-tight animate-slide-up">
                            About NextStep
                        </h1>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                    </div>
                </div>

                <section className="container-padding grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        {/* Abstract Image Placeholder using CSS */}
                        <div className="aspect-video bg-gradient-to-br from-[#1e40af] to-[#0ea5e9] rounded-2xl overflow-hidden relative shadow-xl">
                            <div className="absolute inset-0 flex items-center justify-center text-white opacity-20 text-5xl md:text-6xl font-extrabold tracking-tighter">
                                NextStep
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#16a34a] rounded-xl -z-10 opacity-20"></div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0e1a4a]">Your Partner in Professional Preparation</h2>
                        <p className="text-[#334155] leading-relaxed font-medium">
                            At NextStep UAE Careers, we understand the power of a first impression in the highly competitive Emirates job market. Whether it's a CV that lands you an interview, an optimized LinkedIn profile, or targeted job applications, we are absolutely dedicated to your success.
                        </p>
                        <p className="text-[#334155] leading-relaxed font-medium">
                            Our team consists of expert writers, former recruiters, and UAE industry specialists who bring years of market experience to every client. We don't just deliver documents; we unlock opportunities.
                        </p>

                        <div className="grid grid-cols-2 gap-4 py-6">
                            <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-sm">
                                <h3 className="text-4xl font-extrabold text-[#16a34a] mb-1">500+</h3>
                                <p className="text-[15px] font-bold text-[#64748b] uppercase tracking-wide">CVs Optimized</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-[#e2e8f0] shadow-sm">
                                <h3 className="text-4xl font-extrabold text-[#16a34a] mb-1">98%</h3>
                                <p className="text-[15px] font-bold text-[#64748b] uppercase tracking-wide">Client Satisfaction</p>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/971500000000"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center bg-[#16a34a] hover:bg-[#15803d] text-white px-8 py-3.5 rounded-lg text-lg font-bold shadow-md transition-all hover:-translate-y-0.5"
                        >
                            Contact Us Today
                        </a>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default About;

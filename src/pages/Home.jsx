import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import PackageCard from '../components/PackageCard';
import Industries from '../components/Industries';

import { packages } from '../data/packages';

const Home = () => {

    return (
        <Layout>
            <Hero />
            <WhyChooseUs />

            {/* Pricing Section */}
            <section className="py-24 bg-[#eeeaf9] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-[#e0f2fe] opacity-50 z-0 pointer-events-none"></div>

                <div className="container-padding relative z-10 w-full max-w-6xl mx-auto">

                    {/* Section Header */}
                    <div className="flex items-center justify-center gap-4 mb-20">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                        <h2 className="text-3xl md:text-3xl font-extrabold text-[#0e1a4a] tracking-tight">
                            Our Career Support Packages
                        </h2>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                    </div>

                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
                        {packages.map((pkg, index) => (
                            <PackageCard key={index} {...pkg} />
                        ))}
                    </div>

                </div>
            </section>

            <Industries />
        </Layout>
    );
};

export default Home;

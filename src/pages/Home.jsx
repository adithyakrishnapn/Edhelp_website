import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import PackageCard from '../components/PackageCard';
import { cvPackages, academicPackages } from '../data/packages';

import { FileText, GraduationCap, Briefcase, Palette, Smartphone } from 'lucide-react';

const services = [
    {
        title: "ATS CVs & Cover Letters",
        description: "Stand out with professionally written, ATS-optimized resumes and compelling cover letters tailored to your career goals.",
        icon: <FileText size={32} className="text-[var(--color-accent)]" />,
        delay: 0
    },
    {
        title: "Academic Writing & Editing",
        description: "Expert assistance with essays, thesis, assignments, and detailed editing to ensure academic excellence.",
        icon: <GraduationCap size={32} className="text-[var(--color-accent)]" />,
        delay: 100
    },
    {
        title: "Business Proposals & Reports",
        description: "Win clients and impress stakeholders with structured, high-impact business proposals and corporate reports.",
        icon: <Briefcase size={32} className="text-[var(--color-accent)]" />,
        delay: 200
    },
    {
        title: "Graphic & Web Designs",
        description: "Visual identity that speaks volumes. Logo design, branding, and modern responsive websites.",
        icon: <Palette size={32} className="text-[var(--color-accent)]" />,
        delay: 300
    },
    {
        title: "Social Media Marketing",
        description: "Boost your online presence with strategic content creation and digital marketing campaigns.",
        icon: <Smartphone size={32} className="text-[var(--color-accent)]" />,
        delay: 400
    },
];

const Home = () => {
    return (
        <Layout>
            <Hero />

            {/* Services Section */}
            <section id="services" className="py-20 bg-[var(--color-bg-primary)]">
                <div className="container-padding">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Our <span className="text-[var(--color-accent)]">Premium Services</span></h2>
                        <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                            Tailored solutions to elevate your personal brand and business identity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Packages Section */}
            <section className="py-20 bg-[var(--color-bg-secondary)]">
                <div className="container-padding">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text-primary)]">Popular <span className="text-[var(--color-accent)]">Packages</span></h2>
                        <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                            Our most requested professional services, ready for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Displaying a mix of popular packages */}
                        <PackageCard {...cvPackages[1]} />
                        <PackageCard {...cvPackages[2]} />
                        <PackageCard {...academicPackages[1]} />
                    </div>

                    <div className="text-center mt-12">
                        <a href="/services" className="px-8 py-3 rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-bg-primary)] transition-colors text-[var(--color-text-primary)] font-semibold">
                            View All Packages
                        </a>
                    </div>
                </div>
            </section>

            {/* About / CTA Section */}
            <section id="about" className="py-20 bg-[var(--color-bg-primary)]">
                <div className="container-padding">
                    <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-3xl p-8 md:p-12 relative overflow-hidden text-center shadow-sm">

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-[var(--color-text-primary)]">
                            Ready to <span className="text-[var(--color-accent)]">Level Up?</span>
                        </h2>
                        <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto relative z-10">
                            Whether you're a student, a job seeker, or a business owner, EDhelp has the expertise to help you succeed. Let's create something amazing together.
                        </p>

                        <Button serviceName="General Consultation" className="text-lg px-10 py-3 relative z-10 shadow-md">
                            Start Your Journey
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;

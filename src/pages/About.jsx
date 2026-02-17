import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

const About = () => {
    return (
        <Layout>
            <div className="bg-[var(--color-bg-primary)] min-h-screen pt-10 pb-20">

                {/* Header */}
                <div className="container-padding text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)] animate-slide-up">
                        About <span className="text-[var(--color-accent)]">EDhelp</span>
                    </h1>
                </div>

                <section className="container-padding grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        {/* Abstract Image Placeholder using CSS */}
                        <div className="aspect-video bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-border)] rounded-2xl overflow-hidden relative shadow-xl">
                            <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-secondary)] opacity-20 text-6xl font-bold">
                                EDhelp
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-accent)] rounded-xl -z-10 opacity-20"></div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Your Partner in Professional Preparation</h2>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            At EDhelp Writing & Designs, we understand the power of a first impression. Whether it's a CV that lands you an interview, an academic paper that earns top grades, or a brand identity that captures your audience, we are dedicated to your success.
                        </p>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            Our team consists of expert writers, editors, and designers who bring years of industry experience to every project. We don't just deliver documents; we deliver confidence.
                        </p>

                        <div className="grid grid-cols-2 gap-4 py-6">
                            <div>
                                <h3 className="text-3xl font-bold text-[var(--color-accent)]">500+</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">CVs Written</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-[var(--color-accent)]">98%</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">Client Satisfaction</p>
                            </div>
                        </div>

                        <Button serviceName="General Consultation" className="px-8">
                            Contact Us Today
                        </Button>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default About;

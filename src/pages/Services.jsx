import React from 'react';
import Layout from '../components/Layout';
import PackageCard from '../components/PackageCard';

import { cvPackages, academicPackages } from '../data/packages';

const Services = () => {
    return (
        <Layout>
            <div className="pt-10 pb-20 bg-[var(--color-bg-primary)]">

                {/* Header */}
                <div className="container-padding text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)] animate-slide-up">
                        Our <span className="text-[var(--color-accent)]">Services</span>
                    </h1>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
                        Choose the perfect package for your needs. We offer transparent pricing and professional quality delivered on time.
                    </p>
                </div>

                {/* CV Services */}
                <section className="container-padding mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="animate-slide-up">
                            <span className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm">Career Success</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mt-2 mb-6">CV & Resume Writing</h2>
                            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
                                In today's competitive job market, your CV is your most powerful marketing tool.
                                Recruiters spend an average of 6 seconds scanning a resume. We ensure yours stands out.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "ATS-Friendly Formatting to pass automated filters.",
                                    "Keyword Optimization for your target industry.",
                                    "Compelling Professional Summaries that grab attention.",
                                    "Quantifiable Achievements to showcase your impact."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-[var(--color-text-primary)]">
                                        <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden lg:block relative">
                            <div className="aspect-square rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-lg relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
                                    alt="Professional CV Writing"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <span className="text-white font-bold text-lg">Professional CV Writing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {cvPackages.map((pkg, idx) => (
                            <PackageCard key={idx} {...pkg} animationDelay={idx * 100} />
                        ))}
                    </div>
                </section>

                {/* Academic Services */}
                <section className="bg-[var(--color-bg-secondary)] py-20">
                    <div className="container-padding">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="order-2 lg:order-1 hidden lg:block relative">
                                <div className="aspect-square rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-lg relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
                                        alt="Academic Writing"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                        <span className="text-white font-bold text-lg">Academic Support</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <span className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm">Academic Excellence</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mt-2 mb-6">Academic Support & Editing</h2>
                                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
                                    Achieve the grades you deserve with our expert academic assistance. We provide ethical support, proofreading, and editing to refine your ideas.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                                        <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Plagiarism Free</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)]">100% original content and rigorous checks.</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                                        <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Confidential</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)]">Your work and identity are strictly protected.</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                                        <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Expert Writers</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)]">Subject matter experts in various fields.</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                                        <h4 className="font-bold text-[var(--color-text-primary)] mb-2">On-Time Delivery</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)]">We never miss a deadline.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {academicPackages.map((pkg, idx) => (
                                <PackageCard key={idx} {...pkg} animationDelay={idx * 100} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Design Services */}
                <section className="container-padding py-20 text-center">
                    <div className="max-w-3xl mx-auto mb-16">
                        <span className="text-[var(--color-accent)] font-bold tracking-wider uppercase text-sm">Visual Identity</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mt-2 mb-6">Design & Digital Solutions</h2>
                        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                            From catchy logos to responsive websites, our creative team brings your vision to life.
                            We combine aesthetics with functionality to ensure your brand leaves a lasting impression.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Logo Design', desc: 'Memorable brand marks', price: 'AED 250' },
                            { title: 'Web Development', desc: 'Responsive & Modern', price: 'AED 999' },
                            { title: 'Social Media', desc: 'Engaging content & graphics', price: 'AED 350' },
                            { title: 'PowerPoint Decks', desc: 'Professional presentations', price: 'AED 150' }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300">
                                <h3 className="font-bold text-[var(--color-text-primary)] text-xl mb-2">{item.title}</h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mb-4">{item.desc}</p>
                                <span className="text-[var(--color-accent)] font-bold block">Start from {item.price}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </Layout>
    );
};

export default Services;

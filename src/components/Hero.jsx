import React from 'react';
import Button from './Button';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-[var(--color-bg-primary)]">
            {/* Subtle Background Geometric Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[var(--color-bg-secondary)] to-transparent -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full filter blur-3xl -z-10"></div>

            <div className="container-padding relative z-10 text-center">
                {/* Badge */}
                <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-accent)] text-sm font-semibold mb-8 animate-slide-up shadow-sm">
                    Elevate Your Professional Presence
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight animate-slide-up text-[var(--color-text-primary)]">
                    Welcome to <br />
                    <span className="text-[var(--color-accent)]">EDhelp</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-[var(--color-text-secondary)] animate-slide-up" style={{ animationDelay: '100ms' }}>
                    Your partner in academic excellence and professional branding.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-slide-up px-6" style={{ animationDelay: '300ms' }}>
                    <Button serviceName="All Services" className="w-full md:w-auto text-lg px-8 py-3 shadow-lg hover:shadow-xl">
                        Get Started via WhatsApp
                    </Button>
                    <a href="#services" className="px-8 py-3 rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition-colors text-[var(--color-text-primary)] font-semibold w-full md:w-auto">
                        View Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

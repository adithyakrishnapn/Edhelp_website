import React from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { openWhatsApp } from '../helpers/whatsapp';

const Hero = () => {
    return (
        <section
            className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-36 pb-32 bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            {/* Top dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1930] via-[#0a1930]/80 to-[#0a1930]/30 -z-10"></div>

            <div className="container-padding relative z-10 w-full max-w-5xl mx-auto md:ml-[10%] pt-8">
                {/* Headline */}
                <h1 className="text-[44px] md:text-[56px] lg:text-[72px] font-extrabold mb-5 tracking-tight leading-[1.1] text-white drop-shadow-xl animate-slide-up">
                    Crack the <span className="text-[#34d399]">UAE</span> Job Market Faster
                </h1>

                {/* Features List under headline */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-white/95 text-base md:text-lg mb-8 animate-slide-up font-medium drop-shadow-md tracking-wide" style={{ animationDelay: '100ms' }}>
                    <span>CV Optimization</span>
                    <span className="text-white/40 text-sm">•</span>
                    <span>Strategic Job Applications</span>
                    <span className="text-white/40 text-sm">•</span>
                    <span>Linkedin Visibility</span>
                </div>

                {/* Professionals Badge */}
                <div className="inline-block bg-white/90 backdrop-blur-md border border-white/20 text-[#0a1930] px-6 py-3 rounded-lg shadow-xl text-[15px] md:text-base font-bold mb-10 animate-slide-up tracking-wider" style={{ animationDelay: '200ms' }}>
                    For Professionals in Technology, Business & <span className="text-[#15803d]">Healthcare</span>
                </div>

                {/* WhatsApp Button Area */}
                <div className="animate-slide-up flex flex-col items-start gap-4" style={{ animationDelay: '300ms' }}>
                    <button
                        onClick={() => openWhatsApp('General Enquiry')}
                        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#16a34a] to-[#14532d] hover:from-[#15803d] hover:to-[#166534] text-white px-8 py-4 rounded-full text-xl font-bold shadow-[0_10px_30px_-10px_rgba(22,163,74,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(22,163,74,0.8)] transition-all hover:-translate-y-1 transform border border-[#22c55e]/40"
                    >
                        <MessageCircle size={26} className="text-white fill-white/10" strokeWidth={1.5} />
                        Start on WhatsApp
                    </button>

                    {/* Sub-features below button */}
                    <div className="flex items-center gap-3 text-white/80 text-[13px] md:text-sm drop-shadow pl-4">
                        <div className="flex items-center gap-1.5">
                            <Check size={14} className="text-[#34d399]" strokeWidth={3} />
                            <span className="font-semibold text-white/95">Fast</span>
                        </div>
                        <span className="text-white/40">•</span>
                        <div className="flex items-center">
                            <span className="font-semibold text-white/95">Confidential</span>
                        </div>
                        <span className="text-white/40">•</span>
                        <div className="flex items-center">
                            <span className="font-semibold text-white/95">UAE-Focused</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom curved fade out for white section transition */}
            <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none drop-shadow-sm">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px] md:h-[70px] block">
                    <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;

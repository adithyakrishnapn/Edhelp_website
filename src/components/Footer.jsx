import React from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#0a1930] to-[#042f2e] text-white pt-16 pb-6 relative overflow-hidden">
            {/* Subtle decorative background slash / tick */}
            <div className="absolute right-0 bottom-0 opacity-10 min-w-[300px] h-full pointer-events-none">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-[400px] h-[400px] absolute -right-20 -bottom-20 rotate-12">
                    <path d="M20 6L9 17l-5-5" />
                </svg>
            </div>

            <div className="container-padding relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                    Let Us Handle the Job Search Stress
                </h2>
                <p className="text-[#94a3b8] text-lg md:text-xl font-medium mb-10">
                    You Focus on Interviews — We Handle the Strategy
                </p>

                <a
                    href="https://wa.me/971500000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#16a34a] to-[#15803d] hover:from-[#15803d] hover:to-[#166534] text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 transform border border-[#22c55e]/30 mb-16"
                >
                    <MessageCircle size={28} className="fill-white/20" />
                    Talk to a Career Expert on WhatsApp
                </a>

                {/* Footer Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-[#94a3b8] font-medium border-t border-[#334155] pt-6 flex-wrap">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400">🔒</span>
                        <span>100% Confidential</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check size={18} className="text-[#22c55e]" />
                        <span>No Fake Promises</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check size={18} className="text-[#22c55e]" />
                        <span>Limited Monthly Slots</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

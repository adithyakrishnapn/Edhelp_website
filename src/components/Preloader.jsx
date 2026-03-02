import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reduced to 800ms for a snappier feel while still letting the animation play
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e1a4a] transition-opacity duration-300">
            <div className="flex flex-col items-center">
                {/* Animated Logo */}
                <div className="relative w-16 h-16 flex items-center justify-center mb-6">
                    <div className="absolute w-5 h-full bg-[#38bdf8] skew-x-[20deg] rounded-sm transform -translate-x-2 animate-pulse"></div>
                    <div className="absolute w-5 h-4/5 bg-[#16a34a] -skew-x-[20deg] rounded-sm transform translate-x-3 translate-y-2 animate-pulse shadow-[0_0_15px_rgba(22,163,74,0.5)]" style={{ animationDelay: '150ms' }}></div>
                </div>

                {/* Text Loading Animation */}
                <div className="flex flex-col items-center overflow-hidden">
                    <span className="text-2xl font-extrabold tracking-tight text-white leading-none animate-slide-up">
                        NextStep
                    </span>
                    <span className="text-xs font-semibold text-[#fbbf24] uppercase tracking-[0.2em] mt-1 leading-none animate-slide-up" style={{ animationDelay: '100ms' }}>
                        UAE Careers
                    </span>
                </div>

                {/* Loading Bar */}
                <div className="w-48 h-1 bg-[#1e293b] rounded-full mt-8 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#38bdf8] to-[#16a34a] animate-width-expand rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;

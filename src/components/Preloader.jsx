import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 500);
        }, 3000); // Allow time for animation to complete

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-bg-primary)] transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <div className="relative flex flex-col items-center">
                {/* Logo Animation */}
                <div className="text-4xl md:text-6xl font-bold flex gap-2 relative overflow-hidden">
                    <span className="text-[var(--color-accent)] animate-slide-up" style={{ animationDelay: '0ms' }}>
                        ED
                    </span>
                    <span className="text-[var(--color-text-primary)] animate-slide-up" style={{ animationDelay: '200ms' }}>
                        help
                    </span>
                </div>

                {/* Connecting Line */}
                <div className="w-0 h-1 bg-[var(--color-accent)] mt-4 rounded-full animate-width-expand"></div>

                {/* Subtext */}
                <p className="mt-4 text-sm text-[var(--color-text-secondary)] tracking-widest uppercase opacity-0 animate-fade-in-delayed">
                    Excellence Loading...
                </p>
            </div>
        </div>
    );
};

export default Preloader;

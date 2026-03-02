import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Clock } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setMobileMenuOpen(false), [location]);

    // Helper to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
            {/* Navbar Main */}
            <nav
                className={`w-full transition-all duration-300 ${scrolled || location.pathname !== '/'
                    ? 'bg-[#0a1930] py-3 shadow-lg'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="container-padding flex items-center justify-between">
                    {/* Logo Area */}
                    <div className="flex items-center gap-10">
                        <Link to="/" className="flex items-center gap-3 group">
                            {/* Simple Blue/Green Chevron Logo */}
                            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                <div className="absolute w-3 h-full bg-[#38bdf8] skew-x-[20deg] rounded-sm transform -translate-x-1 group-hover:scale-105 transition-transform"></div>
                                <div className="absolute w-3 h-4/5 bg-[#16a34a] -skew-x-[20deg] rounded-sm transform translate-x-2 translate-y-1 group-hover:scale-105 transition-transform"></div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-white leading-none">
                                    NextStep
                                </span>
                                <span className="text-[11px] md:text-[13px] font-semibold text-[#fbbf24] uppercase tracking-[0.15em] mt-0.5 leading-none">
                                    UAE Careers
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center gap-1">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/services', label: 'Services' },
                                { path: '/about', label: 'About' },
                                { path: '/contact', label: 'Contact' }
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 ${isActive(link.path)
                                            ? 'bg-white/10 text-[#34d399]'
                                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Right Side - Badge */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center gap-2 bg-[#fef08a]/20 backdrop-blur-sm border border-[#fef08a]/30 text-yellow-100 px-4 py-1.5 rounded-full text-sm font-medium">
                            <Clock size={16} className="text-[#fbbf24]" />
                            Limited slots available
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            className="focus:outline-none text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#0a1930] z-30 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
                style={{ top: '0', paddingTop: '80px' }}
            >
                <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-[200px]">
                    {[
                        { path: '/', label: 'Home' },
                        { path: '/services', label: 'Services' },
                        { path: '/about', label: 'About' },
                        { path: '/contact', label: 'Contact' }
                    ].map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`w-full text-center px-4 py-3 rounded-xl font-bold text-xl transition-all ${isActive(link.path)
                                    ? 'bg-white/10 text-[#34d399]'
                                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2 bg-[#fef08a]/20 border border-[#fef08a]/30 text-yellow-100 px-4 py-2 rounded-full text-sm font-medium mt-8">
                    <Clock size={16} className="text-[#fbbf24]" />
                    Limited slots available
                </div>
            </div>
        </header>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Instagram, Linkedin, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setMobileMenuOpen(false), [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
            {/* Top Bar - Hidden on scroll check or maybe always visible? 
                 User asked for "bar above the navbar". Let's keep it but hide it when scrolled to save space, 
                 or keep it if it's small. Let's hide it on scroll for a cleaner sticky effect.
             */}
            <div className={`bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-xs transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-10 py-2'}`}>
                <div className="container-padding flex justify-between items-center h-full">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Mail size={12} /> info@edhelp.com</span>
                        <span className="flex items-center gap-1"><Phone size={12} /> +971 50 000 0000</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><Instagram size={14} /></a>
                        <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><Linkedin size={14} /></a>
                        <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><Facebook size={14} /></a>
                        <a href="#" className="hover:text-[var(--color-accent)] transition-colors"><Twitter size={14} /></a>
                    </div>
                </div>
            </div>

            {/* Navbar Main */}
            <nav
                className={`w-full transition-all duration-300 border-b ${scrolled
                    ? 'bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-[var(--color-border)] py-3 shadow-sm'
                    : 'bg-[var(--color-bg-primary)] border-transparent py-4' // Changed to solid bg to prevent "popping" issues on mobile
                    }`}
            >
                <div className="container-padding flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-1">
                        <span className="text-[var(--color-accent)]">ED</span>
                        <span className="text-[var(--color-text-primary)]">help</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] transition-colors cursor-pointer"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <Button serviceName="General Enquiry" className="px-6 py-2 text-sm">
                            Chat with Us
                        </Button>
                    </div>

                    {/* Mobile Toggle & Menu */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            className="text-[var(--color-text-primary)] focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[var(--color-bg-primary)] z-30 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
                style={{ top: '0', paddingTop: '80px' }} // Ensure it covers screen but respects header z-index if needed
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="text-2xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)]"
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Mobile Socials */}
                <div className="flex gap-6 mt-4 text-[var(--color-text-primary)]">
                    <a href="#"><Instagram size={24} /></a>
                    <a href="#"><Linkedin size={24} /></a>
                    <a href="#"><Facebook size={24} /></a>
                </div>

                <Button serviceName="General Enquiry" className="mt-8">
                    Chat on WhatsApp
                </Button>
            </div>
        </header>
    );
};

export default Navbar;

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
    // Theme Tutorial Logic
    const [showTutorial, setShowTutorial] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenTutorial = localStorage.getItem('themeTutorialSeen');
            if (!hasSeenTutorial) {
                setShowTutorial(true);
            }
        }, 3000); // Delay slightly to let page load
        return () => clearTimeout(timer);
    }, []);

    const handleThemeToggle = () => {
        toggleTheme();
        if (showTutorial) {
            setShowTutorial(false);
            localStorage.setItem('themeTutorialSeen', 'true');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${mobileMenuOpen ? 'z-[200]' : 'z-40'}`}>
            {/* Top Bar */}
            <div className={`bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-xs transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-10 py-2'}`}>
                <div className="container-padding flex justify-between items-center h-full">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Mail size={12} /> info@edhelp.com</span>
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
                    : 'bg-[var(--color-bg-primary)] border-transparent py-4'
                    }`}
            >
                <div className="container-padding flex items-center justify-between relative">
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

                        {/* Theme Toggle & Tutorial */}
                        <div className="relative">
                            <button
                                onClick={handleThemeToggle}
                                className={`p-2 rounded-full hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] transition-colors cursor-pointer relative z-20 ${showTutorial ? 'ring-4 ring-[var(--color-accent)]/50 animate-pulse' : ''}`}
                                aria-label="Toggle Theme"
                                id="desktop-theme-toggle"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            {/* Tutorial Popup Desktop */}
                            {showTutorial && (
                                <div className="absolute top-14 -left-32 w-64 p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl shadow-2xl z-50 animate-fade-in-delayed">
                                    <div className="absolute -top-2 left-[8.5rem] w-4 h-4 bg-[var(--color-bg-secondary)] border-l border-t border-[var(--color-border)] transform rotate-45"></div>
                                    <h4 className="font-bold text-[var(--color-text-primary)] mb-1">Switch Modes Here!</h4>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        Tap the moon/sun icon to toggle between Light and Dark mode.
                                    </p>
                                    <button
                                        onClick={() => { setShowTutorial(false); localStorage.setItem('themeTutorialSeen', 'true'); }}
                                        className="text-xs text-[var(--color-accent)] font-semibold mt-2 hover:underline"
                                    >
                                        Got it!
                                    </button>
                                </div>
                            )}
                        </div>

                        <Button serviceName="General Enquiry" className="px-6 py-2 text-sm">
                            Chat with Us
                        </Button>
                    </div>

                    {/* Mobile Toggle & Menu */}
                    <div className="flex items-center gap-4 md:hidden">
                        <div className="relative">
                            <button
                                onClick={handleThemeToggle}
                                className={`p-2 rounded-full hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] transition-colors relative z-20 ${showTutorial ? 'ring-4 ring-[var(--color-accent)]/50 animate-pulse' : ''}`}
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            {/* Tutorial Popup Mobile */}
                            {showTutorial && (
                                <div className="absolute top-12 -right-10 w-56 p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl shadow-2xl z-50 animate-fade-in-delayed">
                                    <div className="absolute -top-2 right-14 w-4 h-4 bg-[var(--color-bg-secondary)] border-l border-t border-[var(--color-border)] transform rotate-45"></div>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        <span className="font-bold text-[var(--color-text-primary)]">Change theme between dark/light</span>
                                    </p>
                                    <button
                                        onClick={() => { setShowTutorial(false); localStorage.setItem('themeTutorialSeen', 'true'); }}
                                        className="text-xs text-[var(--color-accent)] font-semibold mt-2 hover:underline"
                                    >
                                        Got it!
                                    </button>
                                </div>
                            )}
                        </div>

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
                className={`fixed inset-0 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:rotate-90 transition-transform duration-300"
                    aria-label="Close Menu"
                >
                    <X size={32} />
                </button>

                <div className="flex flex-col items-center space-y-6">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-4xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-all transform hover:scale-110"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Socials */}
                <div className="flex gap-8 mt-8">
                    <a href="#" className="p-3 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:-translate-y-1"><Instagram size={28} /></a>
                    <a href="#" className="p-3 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:-translate-y-1"><Linkedin size={28} /></a>
                    <a href="#" className="p-3 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:-translate-y-1"><Facebook size={28} /></a>
                </div>

                <Button serviceName="General Enquiry" className="mt-8 text-lg px-8 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Chat on WhatsApp
                </Button>
            </div>
        </header>
    );
};

export default Navbar;

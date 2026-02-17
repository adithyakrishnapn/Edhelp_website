import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] pt-16 pb-8">
            <div className="container-padding">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-bold mb-4">
                            <span className="text-[var(--color-accent)]">ED</span>
                            <span className="text-[var(--color-text-primary)]">help</span>
                        </h2>
                        <p className="text-[var(--color-text-secondary)] max-w-sm mb-6">
                            Your partner for professional writing, academic excellence, and cutting-edge digital designs. We bring your ideas to life with style and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[var(--color-text-primary)] font-bold mb-6">Explore</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Home</Link></li>
                            <li><Link to="/services" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Services</Link></li>
                            <li><Link to="/about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[var(--color-text-primary)] font-bold mb-6">Connect</h3>
                        <p className="text-[var(--color-text-secondary)] mb-2">Dubai, UAE</p>
                        <p className="text-[var(--color-text-secondary)] mb-2">Coming Soon: App Store</p>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all cursor-pointer shadow-sm">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all cursor-pointer shadow-sm">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all cursor-pointer shadow-sm">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-white transition-all cursor-pointer shadow-sm">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[var(--color-border)] pt-8 text-center text-[var(--color-text-secondary)] text-sm">
                    &copy; {new Date().getFullYear()} EDhelp. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

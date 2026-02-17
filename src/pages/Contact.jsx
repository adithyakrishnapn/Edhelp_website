import React, { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'General Enquiry',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically integrate EmailJS or a backend
        alert("Thank you! This is a demo. In a real app, this would send an email.");
        console.log("Form Submitted:", formData);
    };

    return (
        <Layout>
            <div className="bg-[var(--color-bg-primary)] min-h-screen pt-10 pb-20">
                {/* Header */}
                <div className="container-padding text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)] animate-slide-up">
                        Contact <span className="text-[var(--color-accent)]">EDhelp</span>
                    </h1>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
                        Ready to elevate your career or business? Get in touch with us today.
                    </p>
                </div>

                <div className="container-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Contact Information</h2>
                            <p className="text-[var(--color-text-secondary)]">
                                Have a question or ready to start your project? Reach out to us via phone, email, or visit our office.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-accent)]">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[var(--color-text-primary)]">Phone</h3>
                                        <p className="text-[var(--color-text-secondary)]">+971 50 000 0000</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-accent)]">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[var(--color-text-primary)]">Email</h3>
                                        <p className="text-[var(--color-text-secondary)]">hello@labeeb.ae</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-accent)]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[var(--color-text-primary)]">Location</h3>
                                        <p className="text-[var(--color-text-secondary)]">Business Bay, Dubai, UAE</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Embed Placeholder */}
                            <div className="w-full h-64 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border)] overflow-hidden relative group">
                                <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-secondary)]">
                                    <MapPin size={48} className="opacity-20" />
                                    <span className="ml-2 font-bold opacity-50">Map Placeholder</span>
                                </div>
                                {/* In production, replace with actual iframe */}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-[var(--color-bg-secondary)] p-8 rounded-2xl border border-[var(--color-border)] shadow-lg">
                            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Service of Interest</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                    >
                                        <option>CV Writing</option>
                                        <option>Academic Help</option>
                                        <option>Graphic Design</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center gap-2"
                                >
                                    <Send size={18} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;

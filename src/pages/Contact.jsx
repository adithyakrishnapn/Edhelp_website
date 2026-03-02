import React, { useState } from 'react';
import Layout from '../components/Layout';
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
        alert("Thank you! This is a demo. In a real app, this would send an email.");
        console.log("Form Submitted:", formData);
    };

    return (
        <Layout>
            <div className="bg-gradient-to-b from-[#eeeaf9] to-white min-h-screen pt-36 pb-20">
                {/* Header */}
                <div className="container-padding text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6 animate-slide-up">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0e1a4a] tracking-tight">
                            Contact Us
                        </h1>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                    </div>
                    <p className="text-[#334155] max-w-2xl mx-auto animate-slide-up font-medium text-lg leading-relaxed" style={{ animationDelay: '100ms' }}>
                        Ready to elevate your career or professional brand? Get in touch with our UAE team today.
                    </p>
                </div>

                <div className="container-padding max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0e1a4a]">Get in Touch</h2>
                            <p className="text-[#334155] font-medium leading-relaxed">
                                Have a question about our packages or need a custom solution? Reach out to us via phone, email, or visit our specialized career center.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] flex items-center justify-center text-[#16a34a] shadow-sm shrink-0">
                                        <Phone size={26} strokeWidth={2.5} />
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-extrabold text-[#0e1a4a] text-lg">Phone / WhatsApp</h3>
                                        <p className="text-[#475569] font-medium mt-1">+971 50 000 0000</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] flex items-center justify-center text-[#16a34a] shadow-sm shrink-0">
                                        <Mail size={26} strokeWidth={2.5} />
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-extrabold text-[#0e1a4a] text-lg">Email Address</h3>
                                        <p className="text-[#475569] font-medium mt-1">careers@nextstep.ae</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] flex items-center justify-center text-[#16a34a] shadow-sm shrink-0">
                                        <MapPin size={26} strokeWidth={2.5} />
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-extrabold text-[#0e1a4a] text-lg">Office Location</h3>
                                        <p className="text-[#475569] font-medium mt-1 pb-2">Business Bay, Dubai, UAE</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative block */}
                            <div className="w-full h-48 bg-gradient-to-br from-[#1e40af] to-[#0ea5e9] rounded-2xl shadow-lg relative overflow-hidden mt-8">
                                <div className="absolute inset-0 flex items-center justify-center flex-col">
                                    <span className="text-white font-black text-2xl tracking-tight opacity-90 drop-shadow-md">NextStep</span>
                                    <span className="text-[#fbbf24] font-bold text-xs uppercase tracking-[0.2em] opacity-90">UAE Careers</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
                            <h2 className="text-3xl font-extrabold text-[#0e1a4a] mb-8">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-[#334155] mb-2 uppercase tracking-wide">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-[#0e1a4a] font-medium focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#334155] mb-2 uppercase tracking-wide">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-[#0e1a4a] font-medium focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all"
                                        placeholder="you@email.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#334155] mb-2 uppercase tracking-wide">Service Required</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-[#0e1a4a] font-medium focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all appearance-none cursor-pointer"
                                    >
                                        <option>CV & Resume Writing</option>
                                        <option>Academic Editing</option>
                                        <option>LinkedIn Optimization</option>
                                        <option>Design & Branding</option>
                                        <option>General Enquiry</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#334155] mb-2 uppercase tracking-wide">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-[#0e1a4a] font-medium focus:outline-none focus:ring-2 focus:ring-[#16a34a]/30 focus:border-[#16a34a] transition-all resize-none"
                                        placeholder="How can we help you achieve your goals?"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#16a34a] to-[#14532d] hover:from-[#15803d] hover:to-[#166534] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all hover:-translate-y-1"
                                >
                                    <Send size={20} />
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

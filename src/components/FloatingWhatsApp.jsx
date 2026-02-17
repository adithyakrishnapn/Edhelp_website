import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../helpers/whatsapp';

const FloatingWhatsApp = () => {
    return (
        <button
            onClick={() => openWhatsApp('General Enquiry')}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} fill="white" />
        </button>
    );
};

export default FloatingWhatsApp;

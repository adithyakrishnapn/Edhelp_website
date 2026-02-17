import React from 'react';
import Button from './Button';

const ServiceCard = ({ title, description, icon, delay }) => {
    return (
        <div
            className="group p-8 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] card-hover animate-slide-up flex flex-col h-full"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {title}
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed flex-grow">
                {description}
            </p>

            {/* Action */}
            <Button serviceName={title} className="w-full text-sm mt-auto">
                Verify & Order
            </Button>
        </div>
    );
};

export default ServiceCard;

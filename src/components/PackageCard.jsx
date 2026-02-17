import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

const PackageCard = ({ title, price, features, recommended = false, animationDelay = 0 }) => {
    return (
        <div
            className={`relative p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 animate-slide-up ${recommended
                    ? 'bg-[var(--color-bg-secondary)] border-[var(--color-accent)] shadow-xl scale-105 z-10'
                    : 'bg-[var(--color-bg-primary)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-lg'
                }`}
            style={{ animationDelay: `${animationDelay}ms` }}
        >
            {recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)] text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                    Recommended
                </div>
            )}

            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{title}</h3>
            <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--color-text-primary)]">{price}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-sm">
                        <Check size={18} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Button serviceName={`${title} Package`} className="w-full mt-auto">
                Choose {title}
            </Button>
        </div>
    );
};

export default PackageCard;

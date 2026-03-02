import React from 'react';
import { Check } from 'lucide-react';
import { openWhatsApp } from '../helpers/whatsapp';

const PackageCard = ({ title, price, features, type = 'basic', badge, buttonText }) => {

    // Style configurations based on type
    const styles = {
        basic: {
            wrapper: "bg-white border-[#e2e8f0] border shadow-md",
            header: "py-6 text-center border-b border-[#f1f5f9]",
            titleText: "text-[19px] font-bold text-[#0e1a4a]",
            priceText: "text-[32px] md:text-[40px] font-extrabold text-[#0e1a4a] leading-none",
            button: "bg-[#0e1a4a] hover:bg-[#1e3a8a] text-white shadow-md font-bold text-lg",
            checkIcon: "text-[#16a34a]"
        },
        popular: {
            wrapper: "bg-white border-2 border-[#16a34a] shadow-[0_10px_40px_-10px_rgba(22,163,74,0.3)] scale-[1.03] z-10 relative overflow-hidden",
            header: "bg-[#0e1a4a] py-8 text-center",
            titleText: "text-[19px] font-bold text-white",
            priceText: "text-[32px] md:text-[40px] font-extrabold text-[#fef08a] leading-none",
            button: "bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-lg shadow-[0_4px_14px_0_rgba(22,163,74,0.39)]",
            checkIcon: "text-[#16a34a]"
        },
        premium: {
            wrapper: "bg-white border-[#e2e8f0] border shadow-md relative mt-6 md:mt-0 overflow-hidden",
            header: "bg-[#0e1a4a] py-6 text-center",
            titleText: "text-[19px] font-bold text-white",
            priceText: "text-[32px] md:text-[40px] font-extrabold text-[#fef08a] leading-none",
            button: "bg-[#0e1a4a] hover:bg-[#1e3a8a] text-white shadow-md font-bold text-lg",
            checkIcon: "text-[#1e3a8a]"
        }
    };

    const currentStyle = styles[type];

    const handleClick = () => {
        openWhatsApp(title);
    };

    return (
        <div className={`rounded-2xl flex flex-col h-full transition-transform hover:-translate-y-1.5 duration-300 ${currentStyle.wrapper}`}>

            {/* Badge for Popular */}
            {type === 'popular' && badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#16a34a] text-white px-4 py-1 rounded-b-lg text-[11px] font-bold shadow-sm uppercase tracking-wider w-max">
                    {badge}
                </div>
            )}

            {/* Header Area */}
            <div className={`px-6 ${currentStyle.header}`}>
                <h3 className={`${currentStyle.titleText} mb-2`}>{title}</h3>
                <div className="flex items-end justify-center gap-1.5">
                    <span className="text-[15px] font-bold text-gray-400 uppercase tracking-widest mb-1">AED</span>
                    <span className={`${currentStyle.priceText}`}>{price}</span>
                </div>
            </div>

            {/* Badge for Premium (floating on the right of the header instead) */}
            {type === 'premium' && badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#0e1a4a] px-4 py-1.5 rounded-bl-xl text-[11px] font-bold shadow-md uppercase tracking-wide">
                    {badge}
                </div>
            )}

            {/* Content Area */}
            <div className="p-6 md:p-8 flex flex-col flex-grow bg-white/50 rounded-b-xl border-t border-gray-100">
                <ul className="space-y-4 mb-8 flex-grow">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-[#334155] text-[15px] font-medium leading-tight">
                            <Check size={18} strokeWidth={3} className={`${currentStyle.checkIcon} mt-0.5 flex-shrink-0`} />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={handleClick}
                    className={`block w-full text-center py-3 rounded-lg transition-all ${currentStyle.button}`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default PackageCard;

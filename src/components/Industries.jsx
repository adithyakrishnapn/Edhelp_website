import React from 'react';

const Industries = () => {
    const industries = [
        "Technology",
        "Logistics & Supply Chain",
        "Sales & Marketing",
        "Finance",
        "HR & Admin",
        "Operations",
        { name: "Healthcare", span: "(Specialized Support)", color: "text-[#15803d]" }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-[#f0f7fb] to-white relative overflow-hidden">
            <div className="container-padding max-w-5xl mx-auto">

                {/* Section Header */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0a1930] tracking-tight">
                        How It Works
                    </h2>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#15803d]"></div>
                </div>

                {/* Tags / Pills */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                    {industries.map((ind, index) => {
                        if (typeof ind === 'string') {
                            return (
                                <div key={index} className="bg-white px-5 py-2.5 rounded-md shadow-sm border border-[#e2e8f0] text-[#0a1930] font-semibold text-sm md:text-base tracking-wide hover:border-[#bae6fd] hover:shadow-md transition-all cursor-default">
                                    {ind}
                                </div>
                            );
                        } else {
                            // Specialized object rendering
                            return (
                                <div key={index} className="bg-white px-5 py-2.5 rounded-md shadow-sm border border-[#e2e8f0] text-[#0a1930] font-semibold text-sm md:text-base tracking-wide hover:border-[#bae6fd] hover:shadow-md transition-all cursor-default flex items-center gap-1.5">
                                    <span className={ind.color}>{ind.name}</span>
                                    <span className="text-[#64748b] text-[13px] font-medium">{ind.span}</span>
                                </div>
                            );
                        }
                    })}
                </div>

            </div>
        </section>
    );
};

export default Industries;

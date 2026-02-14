import React from 'react';

const Stats: React.FC = () => {
    const stats = [
        { label: "Research Time Reduction", value: "92%", suffix: "lower" },
        { label: "Cases Processed Daily", value: "4.8M", suffix: "global" },
        { label: "Citation Accuracy", value: "100%", suffix: "verified" },
        { label: "Average ROI", value: "14X", suffix: "annual" },
    ];

    return (
        <section className="py-16 bg-black border-y border-zinc-900 border-x-0 relative px-4 sm:px-6 lg:px-12">
            <div className="absolute inset-0 bg-stone-900/5 -z-10"></div>
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, i) => (
                        <div key={i} className="group">
                            <div className="text-4xl md:text-6xl font-bold text-white serif mb-2 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </div>
                            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 mb-1">
                                {stat.label}
                            </div>
                            <div className="text-[10px] text-zinc-600 italic">
                                {stat.suffix}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

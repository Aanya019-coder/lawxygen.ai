import React from 'react';

const Stats: React.FC = () => {
    const stats = [
        {
            value: "92%",
            label: "Research Time Reduction",
            description: "Average time saved vs. traditional methods"
        },
        {
            value: "98%",
            label: "Citation Accuracy",
            description: "AI-verified precedent matching (Post-Review)"
        },
        {
            value: "8 Min",
            label: "Document Processing",
            description: "Average synthesis time (Down from 4-6 Hours)"
        },
        {
            value: "24/7",
            label: "Continuous Intelligence",
            description: "Real-time legal database monitoring"
        },
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Flowing Waves Background */}
            <div className="flowing-waves"></div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02),transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-800/5 blur-[150px] glow-pulse"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-white/30 rounded-full particle-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white/20 rounded-full particle-float" style={{ animationDelay: '3s' }}></div>
                <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-white/25 rounded-full particle-float" style={{ animationDelay: '5s' }}></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-6 block font-bold">Performance Metrics</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white serif leading-none">
                        Lawxygen <span className="italic gold-gradient">by the Numbers</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="group relative"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            {/* Glass Card */}
                            <div className="glass-strong border border-white/5 rounded-sm p-10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                                {/* Subtle Glow Effect */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                {/* Animated Background Pattern */}
                                <div className="absolute inset-0 opacity-[0.02]">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px'
                                    }}></div>
                                </div>

                                <div className="relative z-10">
                                    {/* Large Number */}
                                    <div className="text-6xl md:text-7xl font-black serif text-white mb-6 group-hover:scale-105 transition-transform duration-500 italic">
                                        {stat.value}
                                    </div>

                                    {/* Label */}
                                    <h4 className="text-sm font-bold text-zinc-200 mb-3 uppercase tracking-wider group-hover:text-white transition-colors">
                                        {stat.label}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-xs text-zinc-500 leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-white/50 to-transparent group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

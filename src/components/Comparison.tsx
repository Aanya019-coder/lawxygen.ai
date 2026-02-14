import React from 'react';

const Comparison: React.FC = () => {
    const data = [
        { label: "Synthesis Latency", legacy: "48+ Hours", oxy: "14 Seconds", improvement: "99%" },
        { label: "Predictive Precision", legacy: "42% (Anecdotal)", oxy: "94% (Grounded)", improvement: "2.2x" },
        { label: "Jurisdictional Depth", legacy: "Manual/Siloed", oxy: "Global Real-time", improvement: "FULL" },
        { label: "Citation Integrity", legacy: "Subject to Error", oxy: "Deterministic", improvement: "100%" },
    ];

    return (
        <section id="comparison" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zinc-800/20 blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                <div className="grid lg:grid-cols-2 gap-32 items-center">
                    <div>
                        <span className="font-sans text-[10px] text-zinc-400 uppercase tracking-[0.4em] mb-10 block font-bold">Comparative Logic</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white serif leading-none mb-12">Systemic <br /><span className="italic gold-gradient">Superiority.</span></h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-16 font-light max-w-xl">
                            In the high-stakes theater of law, the gap between "fast" and "instant" is the difference between a settlement and a victory. Lawxygen removes the friction of history.
                        </p>
                        <div className="space-y-16">
                            {data.map((item, i) => (
                                <div key={i} className="relative group/bar">
                                    <div className="flex justify-between items-end mb-6">
                                        <div className="space-y-1">
                                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 block">{item.label}</span>
                                            <span className="text-xs uppercase text-zinc-400 font-bold tracking-widest transition-colors group-hover/bar:text-white">Legacy: {item.legacy}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="font-sans text-[10px] text-zinc-300 font-black tracking-widest mb-1 block">+{item.improvement}</span>
                                            <span className="text-xs text-white uppercase font-bold tracking-[0.2em]">{item.oxy}</span>
                                        </div>
                                    </div>
                                    <div className="h-[2px] w-full bg-zinc-900/50 overflow-hidden flex relative">
                                        <div className="h-full bg-zinc-800 w-[15%] relative z-10 transition-all duration-1000 group-hover/bar:bg-zinc-600"></div>
                                        {/* Revised Gradient Bar to White/Silver */}
                                        <div className="h-full bg-gradient-to-r from-zinc-500 via-zinc-300 to-white w-[85%] relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-1000 group-hover/bar:translate-x-1"></div>
                                        <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover/bar:translate-x-0 transition-transform duration-1000"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="aspect-square glass-strong rounded-sm border border-white/10 flex items-center justify-center p-24 overflow-hidden relative shadow-[0_40px_100px_rgba(0,0,0,0.8)] hover:border-white/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]"></div>
                            <div className="text-center relative z-10 space-y-4">
                                <div className="text-[10rem] font-black serif text-white opacity-5 mb-0 select-none italic absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    92%
                                </div>
                                <h4 className="text-8xl font-black serif text-white mb-4 select-none italic drop-shadow-2xl">92%</h4>
                                <p className="text-zinc-200 font-bold serif text-3xl mb-4 italic">Efficiency Singularity</p>
                                <p className="text-zinc-400 text-base max-w-[280px] mx-auto font-light leading-relaxed">Average reduction in discovery & synthesis cycles for Tier 1 firms.</p>
                            </div>
                        </div>
                        {/* HUD Decoration - White/Silver */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-white/20"></div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-white/20"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b border-l border-white/20"></div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-white/20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;

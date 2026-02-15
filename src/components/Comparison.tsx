import React from 'react';

const Comparison: React.FC = () => {
    const competitors = [
        { name: "Traditional Research", isPrimary: false },
        { name: "Generic AI", isPrimary: false },
        { name: "Lawxygen", isPrimary: true },
    ];

    const comparisonRows = [
        { feature: "Legal Accuracy", values: ["Low (Human Error)", "Variable (Hallucinations)", "High (Verified Citations)"] },
        { feature: "Speed", values: ["Days/Weeks", "Minutes", "Seconds"] },
        { feature: "Data Privacy", values: ["Secure but Slow", "Risk of Training", "SOC 2 Type II Encrypted"] },
        { feature: "Cost", values: ["High (Billable Hours)", "Low (Subscription)", "Optimized (Value-Based)"] },
    ];

    const metrics = [
        { label: "Synthesis Speed", legacy: "40 Hours", oxy: "8 Minutes", improvement: "300x" },
        { label: "Predictive Accuracy", legacy: "65%", oxy: "89%", improvement: "+24%" },
        { label: "Jurisdictional Coverage", legacy: "Limited", oxy: "50 States + Fed", improvement: "Complete" },
    ];

    return (
        <section id="comparison" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zinc-800/20 blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                {/* Competitive Landscape Table */}
                <div className="mb-32">
                    <span className="font-sans text-[10px] text-zinc-400 uppercase tracking-[0.4em] mb-10 block font-bold">Competitive Landscape</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white serif leading-none mb-6">The Advantage of <br /><span className="italic gold-gradient">Intelligence.</span></h2>
                    <p className="text-zinc-400 text-lg mb-16 max-w-2xl font-light border-l border-white/20 pl-6">
                        Why leading firms choose Lawxygen over traditional methods and generic AI.
                    </p>

                    <div className="glass-strong border border-white/5 rounded-sm overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-[minmax(150px,1fr)_repeat(3,minmax(120px,1fr))] border-b border-white/10 bg-black/40">
                            <div className="p-6 border-r border-white/5 flex items-center">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Feature</span>
                            </div>
                            {competitors.map((comp, idx) => (
                                <div key={idx} className={`p-6 text-center flex items-center justify-center ${comp.isPrimary ? 'bg-white/5 border-t-2 border-t-white relative' : ''} ${idx < competitors.length - 1 ? 'border-r border-white/5' : ''}`}>
                                    <span className={`text-xs uppercase tracking-wider font-bold ${comp.isPrimary ? 'text-white' : 'text-zinc-400'}`}>
                                        {comp.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Table Rows */}
                        {comparisonRows.map((row, rowIdx) => (
                            <div key={rowIdx} className="grid grid-cols-[minmax(150px,1fr)_repeat(3,minmax(120px,1fr))] border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                <div className="p-6 border-r border-white/5 flex items-center">
                                    <span className="text-sm text-zinc-300 font-medium">{row.feature}</span>
                                </div>
                                {row.values.map((val, colIdx) => (
                                    <div key={colIdx} className={`p-6 text-center flex items-center justify-center ${competitors[colIdx].isPrimary ? 'bg-white/[0.02] border-x border-white/5 font-semibold text-white' : 'text-zinc-400'} ${colIdx < row.values.length - 1 && !competitors[colIdx].isPrimary ? 'border-r border-white/5' : ''}`}>
                                        <span className="text-xs leading-relaxed">{val}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div>
                            <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-6 block font-bold">Performance Delta</span>
                            <h3 className="text-4xl font-bold text-white serif leading-none mb-8">Quantifiable <span className="italic gold-gradient">Impact.</span></h3>
                        </div>
                        {metrics.map((item, i) => (
                            <div key={i} className="relative group/bar">
                                <div className="flex justify-between items-end mb-4">
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 block">{item.label}</span>
                                        <span className="text-xs text-zinc-400 font-medium">Legacy: {item.legacy}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-sans text-sm text-white font-black tracking-wider">{item.improvement}</span>
                                    </div>
                                </div>
                                <div className="h-[3px] w-full bg-zinc-900/50 overflow-hidden flex relative rounded-full">
                                    <div className="h-full bg-zinc-800 w-[15%] relative z-10 transition-all duration-1000 group-hover/bar:bg-zinc-600"></div>
                                    <div className="h-full bg-gradient-to-r from-zinc-400 via-zinc-200 to-white w-[85%] relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-1000 group-hover/bar:shadow-[0_0_30px_rgba(255,255,255,0.5)]"></div>
                                </div>
                                <div className="mt-2 text-right">
                                    <span className="text-xs text-white font-bold">Lawxygen: {item.oxy}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative group">
                        <div className="aspect-square glass-strong rounded-sm border border-white/10 flex items-center justify-center p-16 overflow-hidden relative shadow-[0_40px_100px_rgba(0,0,0,0.8)] hover:border-white/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]"></div>
                            <div className="text-center relative z-10">
                                <div className="text-[12rem] font-black serif text-white opacity-5 mb-0 select-none italic absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    92%
                                </div>
                                <h4 className="text-9xl font-black serif text-white mb-6 select-none italic drop-shadow-2xl">92%</h4>
                                <p className="text-zinc-200 font-bold serif text-3xl mb-4 italic">Average Reduction</p>
                                <p className="text-zinc-400 text-sm max-w-[280px] mx-auto font-light leading-relaxed">Reduction in non-billable research time, increasing profitability.</p>
                            </div>
                        </div>
                        {/* HUD Decoration */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-white/20"></div>
                        <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-white/20"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-white/20"></div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-white/20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;

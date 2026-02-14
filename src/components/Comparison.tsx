import React from 'react';

const Comparison: React.FC = () => {
    const competitors = [
        {
            name: "Lawxygen.ai",
            scope: "Full Lifecycle",
            contextAwareness: true,
            evidenceHandling: "Intelligent OCR",
            strategicGuidance: "Predictive Analytics"
        },
        {
            name: "Traditional Research",
            scope: "Research Only",
            contextAwareness: false,
            evidenceHandling: "Manual Upload",
            strategicGuidance: "Basic Templates"
        },
        {
            name: "Generic AI Tools",
            scope: "Drafting Only",
            contextAwareness: false,
            evidenceHandling: "Manual Upload",
            strategicGuidance: "Limited"
        },
    ];

    const metrics = [
        { label: "Synthesis Latency", legacy: "48+ Hours", oxy: "14 Seconds", improvement: "99%" },
        { label: "Predictive Precision", legacy: "42%", oxy: "94%", improvement: "2.2x" },
        { label: "Jurisdictional Depth", legacy: "Manual", oxy: "Global", improvement: "∞" },
    ];

    return (
        <section id="comparison" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zinc-800/20 blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                {/* Competitive Landscape Table */}
                <div className="mb-32">
                    <span className="font-sans text-[10px] text-zinc-400 uppercase tracking-[0.4em] mb-10 block font-bold">Competitive Landscape</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white serif leading-none mb-16">Systemic <br /><span className="italic gold-gradient">Superiority.</span></h2>

                    <div className="glass-strong border border-white/5 rounded-sm overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-[minmax(200px,1fr)_repeat(3,minmax(150px,1fr))] border-b border-white/10 bg-black/40">
                            <div className="p-6 border-r border-white/5">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Capability</span>
                            </div>
                            {competitors.map((comp, idx) => (
                                <div key={idx} className={`p-6 text-center ${idx === 0 ? 'border-l-2 border-l-white/30' : ''} ${idx < competitors.length - 1 ? 'border-r border-white/5' : ''}`}>
                                    <span className={`text-xs uppercase tracking-wider font-bold ${idx === 0 ? 'text-white' : 'text-zinc-400'}`}>
                                        {comp.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Scope Row */}
                        <div className="grid grid-cols-[minmax(200px,1fr)_repeat(3,minmax(150px,1fr))] border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            <div className="p-6 border-r border-white/5">
                                <span className="text-sm text-zinc-300 font-medium">Scope</span>
                            </div>
                            {competitors.map((comp, idx) => (
                                <div key={idx} className={`p-6 text-center ${idx === 0 ? 'border-l-2 border-l-white/30 bg-white/[0.02]' : ''} ${idx < competitors.length - 1 ? 'border-r border-white/5' : ''}`}>
                                    <span className={`text-xs ${idx === 0 ? 'text-white font-semibold' : 'text-zinc-400'}`}>
                                        {comp.scope}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Context Awareness Row */}
                        <div className="grid grid-cols-[minmax(200px,1fr)_repeat(3,minmax(150px,1fr))] border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            <div className="p-6 border-r border-white/5">
                                <span className="text-sm text-zinc-300 font-medium">Context Awareness</span>
                                <p className="text-[10px] text-zinc-500 mt-1">Case Memory (Years+)</p>
                            </div>
                            {competitors.map((comp, idx) => (
                                <div key={idx} className={`p-6 flex items-center justify-center ${idx === 0 ? 'border-l-2 border-l-white/30 bg-white/[0.02]' : ''} ${idx < competitors.length - 1 ? 'border-r border-white/5' : ''}`}>
                                    {comp.contextAwareness ? (
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Evidence Handling Row */}
                        <div className="grid grid-cols-[minmax(200px,1fr)_repeat(3,minmax(150px,1fr))] border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            <div className="p-6 border-r border-white/5">
                                <span className="text-sm text-zinc-300 font-medium">Evidence Handling</span>
                            </div>
                            {competitors.map((comp, idx) => (
                                <div key={idx} className={`p-6 text-center ${idx === 0 ? 'border-l-2 border-l-white/30 bg-white/[0.02]' : ''} ${idx < competitors.length - 1 ? 'border-r border-white/5' : ''}`}>
                                    <span className={`text-xs ${idx === 0 ? 'text-white font-semibold' : 'text-zinc-400'}`}>
                                        {comp.evidenceHandling}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Strategic Guidance Row */}
                        <div className="grid grid-cols-[minmax(200px,1fr)_repeat(3,minmax(150px,1fr))] hover:bg-white/[0.02] transition-colors">
                            <div className="p-6 border-r border-white/5">
                                <span className="text-sm text-zinc-300 font-medium">Strategic Guidance</span>
                            </div>
                            {competitors.map((comp, idx) => (
                                <div key={idx} className={`p-6 text-center ${idx === 0 ? 'border-l-2 border-l-white/30 bg-white/[0.02]' : ''} ${idx < competitors.length - 1 ? 'border-r border-white/5' : ''}`}>
                                    <span className={`text-xs ${idx === 0 ? 'text-white font-semibold' : 'text-zinc-400'}`}>
                                        {comp.strategicGuidance}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div>
                            <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-6 block font-bold">Performance Delta</span>
                            <h3 className="text-4xl font-bold text-white serif leading-none mb-8">The <span className="italic gold-gradient">Invisible Advantage</span></h3>
                        </div>
                        {metrics.map((item, i) => (
                            <div key={i} className="relative group/bar">
                                <div className="flex justify-between items-end mb-4">
                                    <div className="space-y-1">
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 block">{item.label}</span>
                                        <span className="text-xs text-zinc-400 font-medium">Legacy: {item.legacy}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-sans text-sm text-white font-black tracking-wider">+{item.improvement}</span>
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
                                <p className="text-zinc-200 font-bold serif text-3xl mb-4 italic">Efficiency Singularity</p>
                                <p className="text-zinc-400 text-sm max-w-[280px] mx-auto font-light leading-relaxed">Average reduction in discovery & synthesis cycles for Tier 1 firms.</p>
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

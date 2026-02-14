import React from 'react';


const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden px-4 sm:px-6 lg:px-12">
            {/* Cinematic Lighting with pulse */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-amber-900/10 blur-[180px] rounded-full animate-pulse duration-[10s]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] bg-stone-900/40 blur-[150px] rounded-full animate-pulse duration-[8s] delay-1000"></div>

            <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-20 items-center relative z-10">
                <div className="lg:col-span-7 xl:col-span-8">
                    <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full glass border border-[#A88464]/20 mb-12 transform transition-transform hover:scale-105 cursor-pointer">
                        <span className="flex h-2 w-2 rounded-full bg-[#A88464] animate-pulse"></span>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#A88464] drop-shadow-[0_0_8px_rgba(168,132,100,0.4)]">The Singularity of Jurisprudence</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white serif leading-[0.9] mb-12 tracking-tight">
                        Jurisprudence,<br />
                        <span className="gold-gradient italic pb-4 block">Evolved.</span>
                    </h1>

                    <div className="max-w-2xl translate-y-4 opacity-0 animate-[reveal_1s_ease-out_forwards]">
                        <p className="text-xl md:text-2xl text-stone-400 font-light leading-relaxed mb-16 border-l-2 border-[#A88464]/30 pl-8 transition-colors hover:border-[#A88464]">
                            Lawxygen isn't a tool; it's a cognitive shift. We've synthesized the world's legal archives into a single, high-fidelity intelligence layer for the elite firm.
                        </p>

                        <div className="flex flex-wrap items-center gap-8">
                            <button className="group relative px-12 py-5 overflow-hidden rounded-sm transition-all duration-500 hover:scale-105 active:scale-95">
                                <div className="absolute inset-0 bg-[#A88464] group-hover:bg-[#8e6e52]"></div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[linear-gradient(45deg,transparent,white,transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <span className="relative z-10 text-white font-bold uppercase tracking-widest text-sm">Initiate Protocol</span>
                            </button>

                            <button className="px-8 py-5 border border-stone-800 text-stone-500 hover:text-white hover:bg-white/5 transition-all uppercase tracking-widest text-xs font-bold rounded-sm relative overflow-hidden group">
                                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A88464] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                                The Lab Report — 2025
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 xl:col-span-4 hidden lg:block opacity-0 animate-[reveal_1.2s_ease-out_0.3s_forwards]">
                    <div className="relative aspect-[4/5] glass-strong rounded-sm border border-[#A88464]/20 overflow-hidden animate-float hover:animate-none transition-all duration-700 hover:scale-[1.02] hover:border-[#A88464]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group/card">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

                        {/* THE INTERACTIVE LOADER SVG */}
                        <div className="absolute inset-0 opacity-40 group-hover/card:opacity-70 transition-opacity duration-700">
                            <svg
                                viewBox="0 0 900 900"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                className="w-full h-full"
                            >
                                <defs>
                                    <linearGradient id="traceGradient1" x1="250" y1="120" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#C5A059" stopOpacity="1"></stop>
                                        <stop offset="100%" stopColor="#A88464" stopOpacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="traceGradient2" x1="650" y1="120" x2="800" y2="300" gradientUnits="userSpaceOnUse" >
                                        <stop offset="0%" stopColor="#C5A059" stopOpacity="1"></stop>
                                        <stop offset="100%" stopColor="#A88464" stopOpacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="traceGradient3" x1="250" y1="380" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#C5A059" stopOpacity="1"></stop>
                                        <stop offset="100%" stopColor="#A88464" stopOpacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="traceGradient4" x1="650" y1="120" x2="500" y2="100" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#C5A059" stopOpacity="1"></stop>
                                        <stop offset="100%" stopColor="#A88464" stopOpacity="0.2"></stop>
                                    </linearGradient>
                                </defs>

                                <g id="grid">
                                    {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(x => (
                                        <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="100%" className="grid-line"></line>
                                    ))}
                                    {[0, 100, 200, 300, 400, 500, 600, 700, 800].map(y => (
                                        <line key={`h-${y}`} x1="0" y1={y} x2="100%" y2={y} className="grid-line"></line>
                                    ))}
                                </g>

                                <g id="browser" transform="translate(0, 150)">
                                    <rect x="200" y="80" width="500" height="350" rx="4" ry="4" className="browser-frame"></rect>
                                    <rect x="200" y="80" width="500" height="40" rx="4" ry="4" className="browser-top"></rect>
                                    <text x="240" y="105" className="loading-text">SYSTEM.ANALYSIS</text>

                                    <rect x="230" y="140" width="440" height="25" className="skeleton"></rect>
                                    <rect x="230" y="180" width="280" height="15" className="skeleton"></rect>
                                    <rect x="230" y="210" width="380" height="15" className="skeleton"></rect>
                                    <rect x="230" y="240" width="440" height="110" className="skeleton"></rect>
                                    <rect x="230" y="370" width="220" height="25" className="skeleton"></rect>
                                </g>

                                <g id="traces" transform="translate(0, 150)">
                                    <path d="M100 300 H200 V80" className="trace-flow" style={{ stroke: 'url(#traceGradient1)' }}></path>
                                    <path d="M800 200 H700 V380" className="trace-flow" style={{ stroke: 'url(#traceGradient2)' }}></path>
                                    <path d="M400 520 V380 H200" className="trace-flow" style={{ stroke: 'url(#traceGradient3)' }}></path>
                                    <path d="M500 50 V80 H700" className="trace-flow" style={{ stroke: 'url(#traceGradient4)' }}></path>
                                </g>
                            </svg>
                        </div>

                        <div className="p-8 h-full flex flex-col justify-end relative z-20">
                            <div className="mono text-[10px] text-stone-500 mb-4 tracking-tighter leading-none uppercase space-y-1">
                                <div className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-[#A88464] rounded-full animate-pulse shadow-[0_0_8px_rgba(168,132,100,0.8)]"></span>
                                    <span className="text-[#A88464] font-bold">// System Diagnostic: Active</span>
                                </div>
                                <div className="pl-3 opacity-70 tracking-widest">// Core: Neural-Legal-S3</div>
                                <div className="pl-3 opacity-70 tracking-widest">// Precision: 99.98%</div>
                            </div>
                            <h3 className="text-4xl serif text-white italic mb-2 drop-shadow-2xl">The Gentry Case</h3>
                            <p className="text-stone-500 text-[10px] leading-relaxed uppercase tracking-[0.3em] font-bold">
                                Reconstructed in 14.2 seconds.<br />
                                6,402 Documents Synthesized.
                            </p>
                        </div>

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
            {/* Flowing Waves Background */}
            <div className="flowing-waves"></div>

            {/* Background Texture - Refined White/Silver */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-zinc-800/20 blur-[180px] rounded-full glow-pulse"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] bg-zinc-900/40 blur-[150px] rounded-full glow-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-20 items-center relative z-10">
                <div className="lg:col-span-7 xl:col-span-8">
                    <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full glass border border-white/10 mb-12 transform transition-transform hover:scale-105 cursor-pointer bg-white/5 animate-reveal">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]"></span>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">The Singularity of Jurisprudence</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white serif leading-[0.9] mb-12 tracking-tight animate-reveal [animation-delay:0.2s]">
                        Your Legal Research Partner,<br />
                        <span className="gold-gradient italic pb-4 block">Reimagined.</span>
                    </h1>

                    <div className="max-w-2xl translate-y-4 opacity-0 animate-reveal [animation-delay:0.4s]">
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-16 border-l-2 border-white/20 pl-8 transition-colors hover:border-white">
                            Lawxygen handles the research, drafting, and analysis—so you can focus on strategy, advocacy, and winning cases. Built for attorneys who demand precision without the complexity.
                        </p>

                        <div className="flex flex-wrap items-center gap-8">
                            <button className="group relative px-12 py-5 overflow-hidden rounded-sm transition-all duration-500 hover:scale-105 active:scale-95 bg-white text-black btn-glow">
                                <span className="relative z-10 font-bold uppercase tracking-widest text-sm">Start Free Trial</span>
                            </button>

                            <button className="px-8 py-5 border border-white/20 text-zinc-400 hover:text-white hover:border-white transition-all uppercase tracking-widest text-xs font-bold rounded-sm relative overflow-hidden group">
                                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                                See How It Works
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 xl:col-span-4 hidden lg:block opacity-0 animate-reveal [animation-delay:0.6s]">
                    <div className="relative aspect-[4/5] glass-strong rounded-sm border border-white/10 overflow-hidden animate-float hover:animate-none transition-all duration-700 hover:scale-[1.02] hover:border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group/card">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

                        {/* RESTORED SVG LOADER - Updated Colors to White/Silver */}
                        <div className="absolute inset-0 opacity-40 group-hover/card:opacity-70 transition-opacity duration-700">
                            <svg
                                viewBox="0 0 900 900"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                className="w-full h-full"
                            >
                                <defs>
                                    <linearGradient id="traceGradient1" x1="250" y1="120" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"></stop>
                                        <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.1"></stop>
                                    </linearGradient>
                                    <linearGradient id="traceGradient2" x1="650" y1="120" x2="800" y2="300" gradientUnits="userSpaceOnUse" >
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"></stop>
                                        <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.1"></stop>
                                    </linearGradient>
                                    <linearGradient id="traceGradient3" x1="250" y1="380" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"></stop>
                                        <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.1"></stop>
                                    </linearGradient>
                                    <linearGradient id="traceGradient4" x1="650" y1="120" x2="500" y2="100" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"></stop>
                                        <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.1"></stop>
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
                            <div className="font-sans text-[10px] text-zinc-400 mb-4 tracking-tighter leading-none uppercase space-y-1">
                                <div className="flex items-center space-x-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                                    <span className="text-white font-bold">// System Diagnostic: Active</span>
                                </div>
                                <div className="pl-3 opacity-70 tracking-widest">// Core: Neural-Legal-S3</div>
                                <div className="pl-3 opacity-70 tracking-widest">// Precision: 99.98%</div>
                            </div>
                            <h3 className="text-4xl serif text-white italic mb-2 drop-shadow-2xl">The Gentry Case</h3>
                            <p className="text-zinc-500 text-[10px] leading-relaxed uppercase tracking-[0.3em] font-bold">
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

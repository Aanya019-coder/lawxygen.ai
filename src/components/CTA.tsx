import React from 'react';
import { Icons } from '../constants';

const CTA: React.FC = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Flowing Waves Background */}
            <div className="flowing-waves"></div>

            {/* Dramatic Background */}
            <div className="absolute inset-0">
                {/* Subtle gradient waves */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
                <div className="absolute top-0 left-1/4 w-1/2 h-full bg-zinc-800/5 blur-[200px] glow-pulse"></div>
            </div>

            {/* Blurred background image effect (simulated with gradients) */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-black"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full particle-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full particle-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/25 rounded-full particle-float" style={{ animationDelay: '4s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/20 rounded-full particle-float" style={{ animationDelay: '6s' }}></div>
            </div>

            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
                {/* Icon */}
                <div className="mb-12 flex justify-center">
                    <div className="relative group">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Icon container */}
                        <div className="relative w-32 h-32 rounded-sm border-2 border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-xl group-hover:border-white/40 transition-all duration-500 group-hover:scale-110">
                            <div className="text-white scale-150 group-hover:scale-[1.6] transition-transform duration-500">
                                <Icons.Scale />
                            </div>
                        </div>

                        {/* Corner accents */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-white/30"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-white/30"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-white/30"></div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-white/30"></div>
                    </div>
                </div>

                {/* Headline */}
                <h2 className="text-5xl md:text-7xl font-bold text-white serif leading-tight mb-8">
                    Your New <span className="italic gold-gradient">Silent Partner</span>
                </h2>

                {/* Subheadline */}
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
                    The intelligence that keeps litigation alive and thriving. From intake to judgment, we are the operating system for the future of law.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="group/btn relative px-12 py-6 bg-white text-black font-bold text-sm uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        <span className="relative z-10">Join the Revolution</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </button>

                    <button className="group/btn relative px-12 py-6 border-2 border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-white/50 hover:bg-white/5">
                        <span className="relative z-10">Request Access</span>
                        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </button>
                </div>

                {/* Trust indicators */}
                <div className="mt-16 pt-12 border-t border-white/5">
                    <div className="flex flex-wrap justify-center items-center gap-12 text-zinc-500 text-xs uppercase tracking-widest">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                            <span>SOC 2 Compliant</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                            <span>Bank-Grade Encryption</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                            <span>Trusted by 500+ Firms</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;

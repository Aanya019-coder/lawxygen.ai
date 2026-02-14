import React from 'react';
import { Icons } from '../constants';

const ProblemSolution: React.FC = () => {
    return (
        <section id="problem" className="py-24 bg-black relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-stretch gap-px bg-zinc-900 border border-[#A88464]/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    {/* THE ANALOG ERA */}
                    <div className="flex-1 p-16 md:p-24 bg-neutral-950 relative overflow-hidden group">
                        <div className="relative z-10">
                            <span className="font-sans text-[10px] text-zinc-400 uppercase tracking-[0.4em] mb-10 block font-bold">Legacy Systems</span>
                            <h2 className="text-5xl md:text-6xl font-bold text-zinc-400 serif mb-12 leading-none">The Burden of <br /><span className="italic">Manual Law.</span></h2>
                            <ul className="space-y-10">
                                {[
                                    "Obscure precedents buried in silos.",
                                    "Billable leakage through mechanical review.",
                                    "The fatal risk of human oversight.",
                                    "Cognitive fatigue in high-stakes litigation."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-6 group-hover:opacity-100 opacity-40 transition-all duration-700">
                                        <span className="text-[#A88464] font-sans text-[10px] pt-1.5 font-bold tracking-widest">0{i + 1}</span>
                                        <p className="text-zinc-400 text-base leading-relaxed font-light">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="absolute bottom-0 right-0 p-12 opacity-[0.03] grayscale select-none text-white transform translate-x-12 translate-y-12 scale-[3]">
                            <Icons.Scale />
                        </div>
                    </div>

                    {/* THE NEURAL ERA */}
                    <div className="flex-1 p-16 md:p-24 bg-black relative overflow-hidden">
                        {/* Subtle Intelligence Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#A88464]/5 blur-[120px]"></div>

                        <div className="relative z-10">
                            <span className="font-sans text-[10px] text-[#A88464] uppercase tracking-[0.4em] mb-10 block font-bold px-4 py-1 border border-[#A88464]/20 rounded-full w-fit">Lawxygen Protocol</span>
                            <h2 className="text-5xl md:text-6xl font-bold text-white serif mb-12 leading-none">The Clarity of <br /><span className="italic gold-gradient">Intelligence.</span></h2>

                            <div className="space-y-10">
                                <div className="p-10 rounded-sm glass-strong border border-white/5 border-l-4 border-l-[#A88464] hover:border-white/10 transition-all duration-500 transform hover:translate-x-2">
                                    <h4 className="text-white font-bold mb-4 serif text-2xl">Cognitive Synthesis</h4>
                                    <p className="text-stone-300 text-sm leading-relaxed font-light">
                                        Don't just search. Understand. Lawxygen maps judicial logic across billions of data points to reveal the winning path.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="p-8 glass border border-white/5 hover:border-[#A88464]/30 transition-all duration-500 group/item">
                                        <div className="text-[#C5A059] mb-6 transform group-hover/item:scale-110 transition-transform"><Icons.Brain /></div>
                                        <span className="text-white font-bold block mb-2 text-xs uppercase tracking-widest">Stress Analysis</span>
                                        <p className="text-[10px] text-zinc-400 leading-relaxed">Autonomous argument testing.</p>
                                    </div>
                                    <div className="p-8 glass border border-white/5 hover:border-[#A88464]/30 transition-all duration-500 group/item">
                                        <div className="text-[#C5A059] mb-6 transform group-hover/item:scale-110 transition-transform"><Icons.Shield /></div>
                                        <span className="text-white font-bold block mb-2 text-xs uppercase tracking-widest">Zero Loss</span>
                                        <p className="text-[10px] text-zinc-400 leading-relaxed">Grounded citation engine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;

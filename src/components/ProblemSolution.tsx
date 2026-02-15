import React from 'react';
import { Icons } from '../constants';
import LogicCore from './LogicCore';

const ProblemSolution: React.FC = () => {
    const workflowStages = [
        { name: "Intake", subtitle: "Capture Every Detail", icon: <Icons.Brain /> },
        { name: "Research", subtitle: "Find What Matters", icon: <Icons.FileText /> },
        { name: "Strategy", subtitle: "Know Your Position", icon: <Icons.Shield /> },
        { name: "Drafting", subtitle: "Generate First Drafts", icon: <Icons.Gavel /> },
        { name: "Execution", subtitle: "Stay on Track", icon: <Icons.Scale /> },
    ];

    return (
        <section id="problem" className="py-24 bg-black relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                {/* Workflow Process Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-6 block font-bold">Not a Tool. A Complete Legal Workflow.</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white serif leading-none mb-4">
                            Every Phase of Your Case. <span className="italic gold-gradient">One Intelligent Platform.</span>
                        </h2>
                        <p className="text-zinc-400 text-sm max-w-2xl mx-auto mt-6">
                            Lawxygen integrates seamlessly into your practice, from client intake to final brief. Stop switching between tools. Start working smarter.
                        </p>
                    </div>

                    {/* Process Flow Cards */}
                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block"></div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
                            {workflowStages.map((stage, idx) => (
                                <div key={idx} className="group relative">
                                    {/* Connector Dot */}
                                    {idx < workflowStages.length - 1 && (
                                        <div className="absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 group-hover:scale-150 transition-all duration-300"></div>
                                            <svg className="absolute w-4 h-4 text-white/10 group-hover:text-white/20 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}

                                    <div className="glass border border-white/5 rounded-sm p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group/card">
                                        {/* Card Background Pattern */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity"></div>

                                        <div className="relative z-10">
                                            <div className="w-12 h-12 mb-6 rounded-sm bg-black/50 border border-white/10 flex items-center justify-center text-zinc-400 group-hover/card:text-white group-hover/card:border-white/30 transition-all">
                                                {stage.icon}
                                            </div>
                                            <h4 className="text-white font-bold text-lg mb-2 serif">{stage.name}</h4>
                                            <p className="text-zinc-500 text-xs uppercase tracking-wider">{stage.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Original Problem/Solution Split */}
                <div className="flex flex-col lg:flex-row items-stretch gap-px bg-zinc-900 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    {/* THE ANALOG ERA */}
                    <div className="flex-1 p-16 md:p-24 bg-neutral-950 relative overflow-hidden group">
                        <div className="relative z-10">
                            <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-10 block font-bold">Legacy Systems</span>
                            <h2 className="text-5xl md:text-6xl font-bold text-zinc-500 serif mb-12 leading-none">The Burden of <br /><span className="italic">Traditional Research.</span></h2>
                            <ul className="space-y-10">
                                {[
                                    { title: "Lost Precedents", desc: "Critical cases buried in siloed databases, discoverable only through exhaustive manual search." },
                                    { title: "Billable Hour Leakage", desc: "Hours spent on mechanical review that could be spent on strategic thinking." },
                                    { title: "Human Oversight Risk", desc: "Even the best attorneys can miss details under deadline pressure." },
                                    { title: "Research Fatigue", desc: "Cognitive overload from managing multiple cases, jurisdictions, and sources simultaneously." }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-6 group-hover:opacity-100 opacity-40 transition-all duration-700">
                                        <span className="text-zinc-600 font-sans text-[10px] pt-1.5 font-bold tracking-widest">0{i + 1}</span>
                                        <div>
                                            <h4 className="text-zinc-400 font-bold text-sm mb-2">{item.title}</h4>
                                            <p className="text-zinc-500 text-sm leading-relaxed font-light">{item.desc}</p>
                                        </div>
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
                        {/* Logic Core Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15] scale-[1.5] md:scale-[2.5]">
                            <LogicCore />
                        </div>

                        {/* Subtle Intelligence Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-zinc-800/10 blur-[120px]"></div>

                        <div className="relative z-10">
                            <span className="font-sans text-[10px] text-zinc-400 uppercase tracking-[0.4em] mb-10 block font-bold px-4 py-1 border border-white/20 rounded-full w-fit">Lawxygen Protocol</span>
                            <h2 className="text-5xl md:text-6xl font-bold text-white serif mb-12 leading-none">The Power of <br /><span className="italic gold-gradient">Intelligent Assistance.</span></h2>

                            <div className="space-y-10">
                                <div className="p-10 rounded-sm glass-strong border border-white/5 border-l-4 border-l-white hover:border-white/20 transition-all duration-500 transform hover:translate-x-2">
                                    <h4 className="text-white font-bold mb-4 serif text-2xl">Cognitive Mapping</h4>
                                    <p className="text-stone-300 text-sm leading-relaxed font-light">
                                        Don't just search—understand. Lawxygen maps legal reasoning across millions of cases to reveal winning arguments.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="p-8 glass border border-white/5 hover:border-white/30 transition-all duration-500 group/item">
                                        <div className="text-zinc-300 mb-6 transform group-hover/item:scale-110 transition-transform group-hover/item:text-white"><Icons.Brain /></div>
                                        <span className="text-white font-bold block mb-2 text-xs uppercase tracking-widest">Automated Testing</span>
                                        <p className="text-[10px] text-zinc-400 leading-relaxed">Stress-test your arguments against counter-precedents.</p>
                                    </div>
                                    <div className="p-8 glass border border-white/5 hover:border-white/30 transition-all duration-500 group/item">
                                        <div className="text-zinc-300 mb-6 transform group-hover/item:scale-110 transition-transform group-hover/item:text-white"><Icons.Shield /></div>
                                        <span className="text-white font-bold block mb-2 text-xs uppercase tracking-widest">Verified Citations</span>
                                        <p className="text-[10px] text-zinc-400 leading-relaxed">Every result is traceable, citable, and court-ready.</p>
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

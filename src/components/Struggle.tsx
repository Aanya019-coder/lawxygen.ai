import React from 'react';
import { Icons } from '../constants';

const Struggle: React.FC = () => {
    return (
        <section className="py-24 bg-neutral-950 relative overflow-hidden group">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="flex-1">
                            <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-10 block font-bold">The Problem</span>
                            <h2 className="text-5xl md:text-6xl font-bold text-zinc-500 serif mb-8 leading-none">The Burden of <br /><span className="italic">Traditional Research.</span></h2>
                            <p className="text-zinc-600 text-lg font-light leading-relaxed max-w-xl">
                                You went to law school to practice law, not to spend 20 hours a week fighting with search engines. The old way of researching is broken.
                            </p>
                        </div>

                        <div className="flex-1 w-full">
                            <ul className="grid gap-10">
                                {[
                                    { title: "Lost Precedents", desc: "Critical cases buried in siloed databases, discoverable only through exhaustive manual search." },
                                    { title: "Billable Hour Leakage", desc: "Hours spent on mechanical review that you often can't bill fully to the client." },
                                    { title: "Human Oversight Risk", desc: "Even the best attorneys can miss details under deadline pressure when reviewing thousands of pages." },
                                    { title: "Research Fatigue", desc: "Cognitive overload from managing multiple cases, jurisdictions, and sources simultaneously." }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-6 opacity-60 hover:opacity-100 transition-all duration-700 group/item">
                                        <span className="text-zinc-600 font-sans text-[10px] pt-1.5 font-bold tracking-widest group-hover/item:text-white transition-colors">0{i + 1}</span>
                                        <div>
                                            <h4 className="text-zinc-400 font-bold text-lg mb-2 group-hover/item:text-white transition-colors">{item.title}</h4>
                                            <p className="text-zinc-500 text-sm leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Background Icon */}
                <div className="absolute bottom-0 right-0 p-12 opacity-[0.02] grayscale select-none text-white transform translate-x-1/3 translate-y-1/3 scale-[4] pointer-events-none">
                    <Icons.Scale />
                </div>
            </div>
        </section>
    );
};

export default Struggle;

import React from 'react';

const Pricing: React.FC = () => {
    const tiers = [
        { name: "Associate", price: "$299", desc: "Singular Intelligence", features: ["Full Research Core", "Drafting Logic", "Single Jurisdiction"] },
        { name: "Partner", price: "$899", desc: "The Collective Edge", features: ["Global Precedent Mapping", "Strategy Simulation", "Unlimited Synthesis", "Concierge Support"] },
        { name: "Enterprise", price: "POA", desc: "Firm-Wide Protocol", features: ["On-Premise Deployment", "Custom Neural Training", "Direct API Tunnel", "White-glove Strategist"] }
    ];

    return (
        <section id="pricing" className="py-24 bg-black relative">
            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl translate-y-4 opacity-0 animate-[reveal_1s_ease-out_forwards]">
                        <span className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest mb-6 block font-bold px-4 py-1.5 border border-[#A88464]/20 rounded-full w-fit">Investment Tiers</span>
                        <h2 className="text-6xl font-bold text-white serif leading-none">The Price of <br /><span className="italic gold-gradient">Absolute Certainty.</span></h2>
                    </div>
                    <p className="text-stone-400 text-sm max-w-sm italic border-l border-[#A88464]/20 pl-6">
                        Our pricing reflects the high-stakes nature of the results we deliver. Select the tier of power required for your firm's ambition.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 border-t border-zinc-900 group/container">
                    {tiers.map((tier, i) => (
                        <div key={i} className={`p-16 border-r border-zinc-900 last:border-r-0 group relative transition-all duration-700 hover:z-20 ${i === 1 ? 'glass-strong' : 'hover:bg-zinc-950/50'}`}>
                            {/* Hover Glimmer Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden pointer-events-none">
                                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] animate-[glimmer_5s_infinite]"></div>
                            </div>

                            <div className="mb-12 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                <span className="font-sans text-[10px] text-stone-400 mb-2 block uppercase tracking-tighter">{tier.desc}</span>
                                <h3 className="text-4xl font-bold text-white serif mb-4 italic transition-all duration-500 group-hover:text-[#C5A059]">{tier.name}</h3>
                                <div className="text-2xl text-stone-300 font-light font-sans group-hover:text-white transition-colors">{tier.price} <span className="text-[10px] uppercase tracking-widest opacity-50">/ session</span></div>
                            </div>

                            <ul className="space-y-6 mb-16 relative z-10">
                                {tier.features.map((f, j) => (
                                    <li key={j} className="flex items-center space-x-4 group/item">
                                        <div className="w-1 h-1 bg-zinc-800 transition-all duration-500 group-hover:bg-[#C5A059] group-hover:scale-150"></div>
                                        <span className="text-stone-400 text-sm transition-all duration-500 group-hover:text-stone-200 group-hover:translate-x-1">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-5 border border-zinc-800 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 relative overflow-hidden transition-all duration-500 hover:border-[#A88464] hover:text-white group/btn">
                                <span className="absolute inset-0 bg-[#A88464] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></span>
                                <span className="relative z-10">Request Engagement</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

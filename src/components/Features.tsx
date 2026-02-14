import React from 'react';
import { Icons } from '../constants';
import { Feature } from '../types';

const features: Feature[] = [
    {
        title: "Instant Research",
        description: "Navigate millions of case files and statutes in seconds. Our AI doesn't just search; it understands context.",
        icon: <Icons.Brain />,
    },
    {
        title: "Document Synthesis",
        description: "Generate ironclad contracts and briefs using pre-vetted legal architectures adapted to your specific case.",
        icon: <Icons.FileText />,
    },
    {
        title: "Risk Prediction",
        description: "Predict litigation outcomes with 89% accuracy using historical judicial data and semantic pattern matching.",
        icon: <Icons.Shield />,
    },
    {
        title: "Authority Mapping",
        description: "Visually trace citations and legal precedents to find the pivotal case that wins your argument.",
        icon: <Icons.Gavel />,
    },
];

const Features: React.FC = () => {
    return (
        <section id="features" className="py-48 neural-bg group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A88464]/5 blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
                    <div className="max-w-3xl">
                        <span className="mono text-[10px] text-[#A88464] uppercase tracking-[0.4em] mb-8 block font-bold">Core Capabilities</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white serif leading-none mb-8">Legal Intelligence <br /><span className="italic gold-gradient">Reimagined.</span></h2>
                    </div>
                    <p className="text-stone-500 text-lg max-w-md italic border-l border-[#A88464]/20 pl-8 leading-relaxed font-light">
                        We've distilled the complexity of law into a seamless cognitive companion for the world's most elite attorneys.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 group/container">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`p-12 rounded-sm border border-white/5 bg-[#0c0a09]/50 glass backdrop-blur-3xl hover:border-[#A88464]/30 transition-all duration-700 group relative overflow-hidden hover:-translate-y-2 shadow-2xl shadow-black/50`}
                        >
                            {/* Card Glow */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#A88464]/10 blur-3xl rounded-full transition-all group-hover:bg-[#A88464]/20"></div>

                            <div className={`mb-10 p-5 w-fit rounded-sm bg-black/50 text-[#C5A059] border border-white/5 group-hover:scale-110 group-hover:border-[#A88464]/30 transition-all duration-500`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 serif italic transition-colors group-hover:text-[#C5A059]">{feature.title}</h3>
                            <p className="text-stone-500 leading-relaxed text-sm font-light transition-colors group-hover:text-stone-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

import React from 'react';
import { Icons } from '../constants';
import { Feature } from '../types';

const features: Feature[] = [
    {
        title: "Instant Research",
        description: "Navigate millions of case files and statutes in seconds. Our AI doesn't just search; it understands context.",
        icon: <Icons.Brain />,
        bgPattern: (
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                {/* Neural Network / Data Flow - Radial gradient simulating a burst of data */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.03)_50%,transparent_55%)] bg-[length:20px_20px]"></div>
            </div>
        )
    },
    {
        title: "Document Synthesis",
        description: "Generate ironclad contracts and briefs using pre-vetted legal architectures adapted to your specific case.",
        icon: <Icons.FileText />,
        bgPattern: (
            <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                {/* Blueprint / Grid - Structured grid lines representing document assembly */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>
        )
    },
    {
        title: "Risk Prediction",
        description: "Predict litigation outcomes with 89% accuracy using historical judicial data and semantic pattern matching.",
        icon: <Icons.Shield />,
        bgPattern: (
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                {/* Probability / Analytics - Gradient wave representing statistical curves */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_top,rgba(255,255,255,0.05),transparent)]"></div>
            </div>
        )
    },
    {
        title: "Authority Mapping",
        description: "Visually trace citations and legal precedents to find the pivotal case that wins your argument.",
        icon: <Icons.Gavel />,
        bgPattern: (
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                {/* Network / Nodes - Scattered dots representing case connections */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`,
                    backgroundSize: '24px 24px'
                }}></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]"></div>
            </div>
        )
    },
];

const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 neural-bg group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-800/10 blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
                    <div className="max-w-3xl">
                        <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-8 block font-bold">Core Capabilities</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white serif leading-none mb-8">Legal Intelligence <br /><span className="italic gold-gradient">Reimagined.</span></h2>
                    </div>
                    <p className="text-stone-300 text-lg max-w-md italic border-l border-white/20 pl-8 leading-relaxed font-light">
                        We've distilled the complexity of law into a seamless cognitive companion for the world's most elite attorneys.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 group/container">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`p-12 rounded-sm border border-white/5 bg-[#0c0a09]/80 glass backdrop-blur-3xl hover:border-white/30 transition-all duration-700 group relative overflow-hidden hover:-translate-y-2 shadow-2xl shadow-black/50`}
                        >
                            {/* Feature-Specific Background Pattern */}
                            {feature.bgPattern}

                            {/* Global Card Glow */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/5 blur-3xl rounded-full transition-all group-hover:bg-white/10 pointer-events-none"></div>

                            <div className={`mb-10 p-5 w-fit rounded-sm bg-black/50 text-zinc-400 border border-white/5 group-hover:scale-110 group-hover:border-white/30 group-hover:text-white transition-all duration-500 relative z-10`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 serif italic transition-colors group-hover:text-zinc-200 relative z-10">{feature.title}</h3>
                            <p className="text-stone-400 leading-relaxed text-sm font-light transition-colors group-hover:text-stone-200 relative z-10">
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

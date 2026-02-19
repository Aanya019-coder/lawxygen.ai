import React, { useEffect, useRef, useState } from 'react';
import { Icons } from '../constants';

interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    bgImageClass: string;
}

const features: FeatureItem[] = [
    {
        title: "Conversational legal intelligence",
        description: "Ask questions in plain language, and Lawxygen responds with legally precise, citation-backed answers. No query syntax. No boolean searches.",
        icon: <Icons.Brain />,
        bgImageClass: "bg-feature-intel"
    },
    {
        title: "Voice input",
        description: "Dictate your legal questions naturally. Lawxygen processes spoken input with the same precision as typed queries.",
        icon: <Icons.Shield />,
        bgImageClass: "bg-feature-voice"
    },
    {
        title: "Document upload and analysis",
        description: "Upload contracts, judgments, or briefs. Lawxygen reads, extracts key provisions, and identifies risks against statutes.",
        icon: <Icons.FileText />,
        bgImageClass: "bg-feature-analysis"
    },
    {
        title: "Document generation",
        description: "Get draft legal opinions, case summaries, and research memos with proper citations, formatted and ready for review.",
        icon: <Icons.Gavel />,
        bgImageClass: "bg-feature-gen"
    },
    {
        title: "Legal research",
        description: "Deep research across Supreme Court judgments, Central Acts, and Constitutional provisions. Synthesized into coherent analysis.",
        icon: <Icons.Scale />,
        bgImageClass: "bg-feature-research"
    },
    {
        title: "Chain of thought visualization",
        description: "Watch Lawxygen think in real time. See which cases she's examining and how she's building her analysis. Full transparency.",
        icon: <Icons.Brain />,
        bgImageClass: "bg-feature-vision"
    },
];

const Features: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="features" className="py-24 neural-bg group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-800/10 blur-[150px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div
                    className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <div className="max-w-3xl">
                        <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-8 block font-bold">Six Capabilities</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white serif leading-tight mb-8">
                            One Thinking <br /><span className="gold-gradient">Partner.</span>
                        </h2>
                    </div>
                    <p className="text-zinc-500 text-sm max-w-xs border-l border-white/10 pl-6">
                        Everything you need to research, draft, and think through Indian law.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/container">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-10 rounded-sm border border-white/5 bg-[#0c0a09]/90 glass backdrop-blur-3xl hover:border-white/30 transition-all duration-700 group relative overflow-hidden hover:-translate-y-3 shadow-2xl shadow-black/50 h-full flex flex-col"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                                transition: `opacity 0.7s ease ${idx * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${idx * 0.1}s, border-color 0.3s ease, box-shadow 0.3s ease`,
                            }}
                        >
                            {/* Feature-Specific Background Image with Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${feature.bgImageClass} card-bg-common pointer-events-none`}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>

                            {/* Global Card Glow */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/5 blur-3xl rounded-full transition-all group-hover:bg-white/10 pointer-events-none"></div>

                            {/* Icon */}
                            <div className="mb-10 p-5 w-fit rounded-sm bg-black/50 text-zinc-400 border border-white/5 group-hover:scale-110 group-hover:border-white/30 group-hover:text-white transition-all duration-500 relative z-10">
                                {feature.icon}
                            </div>

                            {/* Feature number */}
                            <div className="absolute top-6 right-6 text-[10px] text-zinc-700 font-bold font-sans tracking-widest">
                                {String(idx + 1).padStart(2, '0')}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6 serif transition-colors group-hover:text-zinc-200 relative z-10">{feature.title}</h3>
                            <p className="text-stone-400 leading-relaxed text-sm font-light transition-colors group-hover:text-stone-200 relative z-10 flex-1">
                                {feature.description}
                            </p>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-white/40 to-transparent group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

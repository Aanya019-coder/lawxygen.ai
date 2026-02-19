import React, { useEffect, useRef, useState } from 'react';
import { Icons } from '../constants';

interface StruggleItem {
    title: string;
    desc: string;
    bgImageClass: string;
}

const Struggle: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const differentiators: StruggleItem[] = [
        {
            title: "Self-recovery and self-correction",
            desc: "When Lawxygen spots a flaw in her reasoning, she backtracks and tries a different approach.",
            bgImageClass: "bg-struggle-recovery"
        },
        {
            title: "Persistent memory",
            desc: "She remembers your past conversations, your preferences, and your research context. Your work compounds.",
            bgImageClass: "bg-struggle-memory"
        },
        {
            title: "Thinks with you, not for you",
            desc: "She flags ambiguities and pushes back when your question could be sharper. A true colleague.",
            bgImageClass: "bg-struggle-partner"
        },
        {
            title: "Handles the messiness of real work",
            desc: "Real legal questions are messy and full of edge cases. Lawxygen thrives in ambiguity.",
            bgImageClass: "bg-struggle-messy"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-neutral-950 relative overflow-hidden group bg-struggle-image">
            {/* Deep overlay to keep the moody feel */}
            <div className="absolute inset-0 bg-neutral-950/80 pointer-events-none"></div>
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Left: Headline */}
                    <div
                        className="flex-1"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                            transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                        }}
                    >
                        <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-10 block font-bold">What makes us different</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-zinc-500 serif mb-8 leading-tight">
                            Not another Chatbot <br /><span className="text-zinc-400">with a Law Degree.</span>
                        </h2>
                        <p className="text-zinc-600 text-lg font-light leading-relaxed max-w-xl">
                            Most AI tools give you answers. Lawxygen gives you a thinking partner who catches what you miss.
                        </p>

                        {/* Visual stat */}
                        <div className="mt-12 p-6 border border-white/5 rounded-sm bg-white/[0.02] inline-block shadow-2xl">
                            <div className="text-4xl font-bold serif text-white mb-1">Self-Recovery</div>
                            <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">And Self-Correction AI</div>
                        </div>
                    </div>

                    {/* Right: Differentiator Cards */}
                    <div className="flex-1 w-full grid gap-6">
                        {differentiators.map((item, i) => (
                            <div
                                key={i}
                                className="glass-strong border border-white/5 p-8 rounded-sm hover:border-white/20 transition-all duration-500 group relative overflow-hidden flex items-start space-x-6"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                                    transition: `opacity 0.7s ease ${0.1 + i * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s`,
                                }}
                            >
                                {/* Background Image with Overlay */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${item.bgImageClass} card-bg-common pointer-events-none`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>

                                <span className="text-zinc-700 font-sans text-[10px] pt-1.5 font-bold tracking-widest group-hover:text-white transition-colors shrink-0 relative z-10">
                                    0{i + 1}
                                </span>
                                <div className="border-l border-zinc-900 pl-6 group-hover:border-white/30 transition-colors relative z-10">
                                    <h4 className="text-zinc-400 font-bold text-lg mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                                    <p className="text-zinc-600 text-sm leading-relaxed font-light group-hover:text-zinc-400 transition-colors">{item.desc}</p>
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Icon */}
            <div className="absolute bottom-0 right-0 p-12 opacity-[0.02] grayscale select-none text-white transform translate-x-1/3 translate-y-1/3 scale-[4] pointer-events-none">
                <Icons.Scale />
            </div>
        </section>
    );
};

export default Struggle;

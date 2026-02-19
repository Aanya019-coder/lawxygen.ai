import React, { useEffect, useRef, useState } from 'react';

const Pricing: React.FC = () => {
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

    const tiers = [
        {
            name: "Counsel",
            price: "$299",
            desc: "For individual practitioners",
            features: ["Full Indian Law Node access", "Conversational research", "Chain of thought visualization", "Voice & Doc analysis", "Export to Word/PDF"],
            bgImageClass: "bg-pricing-counsel"
        },
        {
            name: "Chambers",
            price: "Custom",
            desc: "For mid-size firms & teams",
            features: ["Multiple user support", "Shared case memory", "Priority neural processing", "Team collaboration workflow", "Priority support"],
            bgImageClass: "bg-pricing-chambers"
        },
        {
            name: "Institutional",
            price: "Custom",
            desc: "For large firms & government",
            features: ["Dedicated infrastructure", "SSO & Audit logs", "Custom API integration", "On-premise deployment options", "Dedicated success partner"],
            bgImageClass: "bg-pricing-insto"
        }
    ];

    return (
        <section ref={sectionRef} id="pricing" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
                <div
                    className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <div className="max-w-2xl">
                        <span className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest mb-6 block font-bold px-4 py-1.5 border border-white/20 rounded-full w-fit">Investment</span>
                        <h2 className="text-6xl font-bold text-white serif leading-tight">Investment in <br /><span className="gold-gradient">Intelligence.</span></h2>
                    </div>
                    <p className="text-zinc-500 text-sm max-w-sm border-l border-white/20 pl-6">
                        Pricing designed for institutional stability and performance.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 border-t border-zinc-900 group/container">
                    {tiers.map((tier, i) => (
                        <div
                            key={i}
                            className={`p-16 border-r border-zinc-900 last:border-r-0 group relative transition-all duration-700 hover:z-20 flex flex-col h-full ${i === 1 ? 'glass-strong' : 'hover:bg-zinc-900/40'}`}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
                            }}
                        >
                            {/* Hover Glimmer Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden pointer-events-none">
                                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] animate-[glimmer_5s_infinite]"></div>
                            </div>

                            {/* Background Image with Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${tier.bgImageClass} card-bg-common pointer-events-none`}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>

                            <div className="mb-12 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                <span className="font-sans text-[10px] text-zinc-500 mb-2 block uppercase tracking-tighter">{tier.desc}</span>
                                <h3 className="text-4xl font-bold text-white serif mb-4 transition-all duration-500 group-hover:text-zinc-200">{tier.name}</h3>
                                <div className="text-2xl text-zinc-400 font-light font-sans group-hover:text-white transition-colors">{tier.price} <span className="text-[10px] uppercase tracking-widest opacity-50">{tier.price !== "Custom" && "/ month"}</span></div>
                            </div>

                            <ul className="space-y-6 mb-16 relative z-10 flex-1">
                                {tier.features.map((f, j) => (
                                    <li key={j} className="flex items-center space-x-4 group/item">
                                        <div className="w-1 h-1 bg-zinc-700 transition-all duration-500 group-hover:bg-white group-hover:scale-150"></div>
                                        <span className="text-zinc-500 text-sm transition-all duration-500 group-hover:text-zinc-300 group-hover:translate-x-1">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="mt-auto w-full py-5 border border-zinc-800 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 relative overflow-hidden transition-all duration-500 hover:border-white hover:text-black group/btn z-10">
                                <span className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></span>
                                <span className="relative z-10">Request Access</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

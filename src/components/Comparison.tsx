import React, { useEffect, useRef, useState } from 'react';

interface SegmentItem {
    title: string;
    desc: string;
    stats: string;
    bgImageClass: string;
}

const Comparison: React.FC = () => {
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

    const userSegments: SegmentItem[] = [
        {
            title: "Lawyers and mid-size firms",
            desc: "Do the work of a larger team. Handle complex research, draft opinions, and build case strategy without adding headcount. Lawxygen is the junior partner you can afford—sharp, prepared, and always available.",
            stats: "Do more with less",
            bgImageClass: "bg-segment-lawyers"
        },
        {
            title: "Law students",
            desc: "Learn legal reasoning alongside an AI that shows its work. Understand how arguments are constructed, not just what the answer is. The tool you'll bring to your first job.",
            stats: "Learn from reasoning",
            bgImageClass: "bg-segment-students"
        },
        {
            title: "Government and judiciary",
            desc: "Clear the backlog fairly. Process high-volume matters faster without cutting corners. Lawxygen's transparent reasoning ensures every analysis can be reviewed and verified by human judgment.",
            stats: "Clear the backlog",
            bgImageClass: "bg-segment-gov"
        }
    ];

    return (
        <section ref={sectionRef} id="comparison" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zinc-800/20 blur-[120px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/4 h-1/2 bg-zinc-900/30 blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                {/* Header */}
                <div
                    className="text-center mb-24"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-6 block font-bold">Who it's for</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white serif leading-tight">
                        Built for how legal <br /><span className="gold-gradient">professionals actually work.</span>
                    </h2>
                    <p className="text-zinc-500 text-sm mt-6 max-w-xl mx-auto">
                        Whether you're in court, in class, or clearing a docket.
                    </p>
                </div>

                {/* Segment Cards */}
                <div className="grid md:grid-cols-3 gap-12">
                    {userSegments.map((segment, i) => (
                        <div
                            key={i}
                            className="glass-strong border border-white/5 p-12 rounded-sm hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden flex flex-col h-full shadow-2xl shadow-black/40"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                            }}
                        >
                            {/* Segment-Specific Background Image with Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ${segment.bgImageClass} card-bg-common pointer-events-none`}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-1000"></div>

                            {/* Hover glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <span className="text-zinc-600 font-sans text-[10px] uppercase tracking-widest font-bold mb-6 block group-hover:text-white/40 transition-colors relative z-10">
                                Segment 0{i + 1}
                            </span>

                            <h4 className="text-white font-bold text-2xl mb-6 serif leading-tight relative z-10">{segment.title}</h4>
                            <p className="text-stone-400 text-base leading-relaxed mb-10 font-light flex-1 relative z-10 transition-colors group-hover:text-zinc-300">
                                {segment.desc}
                            </p>

                            <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between relative z-10">
                                <span className="text-zinc-500 font-sans text-[10px] uppercase tracking-widest font-bold group-hover:text-zinc-300 transition-colors">{segment.stats}</span>
                                <div className="w-8 h-[1px] bg-zinc-800 group-hover:w-12 group-hover:bg-white/30 transition-all duration-500"></div>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-white/40 to-transparent group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom trust bar */}
                <div
                    className="mt-24 pt-16 border-t border-zinc-900/50 flex flex-wrap justify-center gap-16"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.7s ease 0.5s',
                    }}
                >
                    {[
                        { label: 'Attorneys Trust Lawxygen', value: '2,400+' },
                        { label: 'Cases Researched', value: '50,000+' },
                        { label: 'Average Rating', value: '4.9 / 5' },
                        { label: 'Uptime SLA', value: '99.9%' },
                    ].map((item) => (
                        <div key={item.label} className="text-center">
                            <div className="text-2xl font-bold serif text-white mb-1">{item.value}</div>
                            <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Comparison;

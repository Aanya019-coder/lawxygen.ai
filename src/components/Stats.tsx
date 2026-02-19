import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
    value: string;
    numericValue: number;
    prefix?: string;
    suffix?: string;
    label: string;
    description: string;
    bgImageClass: string;
}

const StatCard: React.FC<{ stat: StatItem; index: number; isVisible: boolean }> = ({ stat, index, isVisible }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const end = stat.numericValue;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setDisplayValue(end);
                clearInterval(timer);
            } else {
                setDisplayValue(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, stat.numericValue]);

    return (
        <div
            className="group relative glass p-10 rounded-sm hover:border-white/20 border border-white/5 transition-all duration-700 hover:-translate-y-2 overflow-hidden h-full shadow-2xl shadow-black/40"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`,
            }}
        >
            {/* Background Image with Overlay */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${stat.bgImageClass} card-bg-common pointer-events-none`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] -skew-x-12 translate-x-12 -translate-y-12 group-hover:bg-white/[0.05] transition-colors"></div>

            <div className="relative z-10">
                {/* Large Number */}
                <div className="text-5xl md:text-6xl font-bold serif text-white mb-6 group-hover:scale-105 transition-transform duration-500 leading-none">
                    {stat.prefix}{displayValue}{stat.suffix}
                </div>

                {/* Label */}
                <h4 className="text-sm font-bold text-zinc-200 mb-3 uppercase tracking-wider group-hover:text-white transition-colors">
                    {stat.label}
                </h4>

                {/* Description */}
                <p className="text-zinc-500 text-xs leading-relaxed font-light group-hover:text-zinc-400 transition-colors">
                    {stat.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-white/50 to-transparent group-hover:w-full transition-all duration-700"></div>
            </div>
        </div>
    );
};

const Stats: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const stats: StatItem[] = [
        {
            value: 'Millions',
            numericValue: 10,
            suffix: 'M+',
            label: 'Court Judgments',
            description: 'Supreme Court to district courts, dating back to 1890',
            bgImageClass: 'bg-stat-judgments'
        },
        {
            value: '917+',
            numericValue: 917,
            suffix: '+',
            label: 'Central Acts',
            description: 'Complete statutory database across jurisdictions',
            bgImageClass: 'bg-stat-acts'
        },
        {
            value: '40%',
            numericValue: 40,
            suffix: '%',
            label: 'Lower Costs',
            description: 'Reduction in research overhead for legal teams',
            bgImageClass: 'bg-stat-costs'
        },
        {
            value: '24/7',
            numericValue: 24,
            suffix: '/7',
            label: 'Always Available',
            description: 'Your thinking partner doesn\'t take days off',
            bgImageClass: 'bg-stat-time'
        },
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden bg-stats-image">
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02),transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-800/5 blur-[150px] glow-pulse"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div
                    className="text-center mb-16"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-6 block font-bold">The knowledge behind the thinking</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white serif leading-tight">
                        Built on real <span className="gold-gradient">Indian legal data.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <StatCard key={i} stat={stat} index={i} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

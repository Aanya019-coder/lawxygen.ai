import React, { useEffect, useRef, useState } from 'react';

interface StepItem {
    number: string;
    title: string;
    description: string;
    bgImageClass: string;
}

const ProblemSolution: React.FC = () => {
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

    const steps: StepItem[] = [
        {
            number: "01",
            title: "Ask your question",
            description: "Type or speak your legal question in plain language. Lawxygen will ask clarifying questions if your query is ambiguous—just like a sharp colleague.",
            bgImageClass: "bg-step-ask"
        },
        {
            number: "02",
            title: "Lawxygen researches and thinks",
            description: "She searches across Supreme Court judgments, Central Acts, and Constitutional provisions. Watch her reasoning unfold in real time.",
            bgImageClass: "bg-step-think"
        },
        {
            number: "03",
            title: "Review your opinion",
            description: "Get a comprehensive legal opinion with proper citations, case references, and actionable analysis. Download as PDF or Word.",
            bgImageClass: "bg-step-review"
        }
    ];

    return (
        <section ref={sectionRef} id="how-it-works" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
                <div
                    className="mb-20 text-center"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-6 block font-bold">From messy question to polished opinion</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white serif leading-tight">
                        Three steps. <span className="gold-gradient">No learning curve.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="group"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
                            }}
                        >
                            <div className="glass border border-white/5 p-10 rounded-sm hover:border-white/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full shadow-2xl shadow-black/40">
                                {/* Step-Specific Background Image with Overlay */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${step.bgImageClass} card-bg-common pointer-events-none`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>

                                <div className="text-5xl font-black text-zinc-900 mb-6 group-hover:text-white/10 transition-colors select-none font-sans italic relative z-10">
                                    {step.number}
                                </div>
                                <h4 className="text-white font-bold text-xl mb-4 serif relative z-10">{step.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors relative z-10">
                                    {step.description}
                                </p>

                                {/* Accent line */}
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/40 group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Integration preview */}
                <div
                    className="mt-24 max-w-4xl mx-auto glass-strong border border-white/10 p-12 rounded-sm relative overflow-hidden group"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s',
                    }}
                >
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2"></div>
                    <div className="text-center relative z-10">
                        <div className="text-5xl text-zinc-800 font-serif leading-none mb-6 select-none opacity-50">"</div>
                        <p className="text-2xl text-white font-light serif leading-relaxed mb-8">
                            "Lawxygen gives you a thinking partner who catches what you miss. She doesn't just find relevant law — she synthesizes it into a coherent analysis."
                        </p>
                        <div className="flex flex-col items-center">
                            <span className="text-white font-bold text-xs uppercase tracking-widest">Built for Indian Legal Professionals</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;

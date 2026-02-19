import React, { useEffect, useRef, useState } from 'react';

const CTA: React.FC = () => {
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

    return (
        <section ref={sectionRef} id="cta" className="py-32 bg-[#050505] relative overflow-hidden bg-cta-image">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
                {/* Headline */}
                <h2
                    className="text-5xl md:text-7xl font-bold text-white serif leading-tight mb-8"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
                    }}
                >
                    Ready to meet your new <br /> <span className="gold-gradient">thinking partner?</span>
                </h2>

                {/* Subheadline */}
                <p
                    className="text-xl md:text-2xl text-stone-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
                    }}
                >
                    Start working with Lawxygen. Have a colleague who remembers everything, researches at machine speed, and pushes back when your question could be sharper.
                </p>

                {/* Action Buttons */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
                    }}
                >
                    <button className="group relative px-12 py-5 overflow-hidden rounded-sm transition-all duration-500 hover:scale-105 active:scale-95 bg-white text-black btn-glow shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                        <span className="relative z-10 font-bold uppercase tracking-widest text-sm">Request Early Access</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                </div>

                {/* Trust signals */}
                <div
                    className="flex flex-wrap justify-center gap-8 mt-12 mb-12"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.7s ease 0.45s',
                    }}
                >
                    {['Indian law specialist', 'Transparent reasoning', 'Private and secure'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-zinc-600 text-[10px] uppercase tracking-wider font-bold">
                            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                            {item}
                        </div>
                    ))}
                </div>

                {/* Subtext */}
                <p
                    className="mt-10 text-[10px] text-zinc-500 uppercase tracking-widest font-bold"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.7s ease 0.5s',
                    }}
                >
                    Currently in early access. We'll be in touch within 48 hours.
                </p>
            </div>
        </section>
    );
};

export default CTA;

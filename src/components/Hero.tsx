import React, { useEffect, useRef, Suspense, useState, lazy } from 'react';

// Lazy import Spline — only loaded when component mounts
const Spline = lazy(() => import('@splinetool/react-spline'));

// Lightweight skeleton shown before Spline loads
const SplineSkeleton = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/60">
        {/* Animated ring pulses to suggest 3D loading */}
        <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full border border-white/5 animate-ping" style={{ animationDuration: '2s' }} />
            <div className="absolute inset-4 rounded-full border border-white/8 animate-ping" style={{ animationDuration: '2.4s', animationDelay: '0.3s' }} />
            <div className="absolute inset-8 rounded-full border border-white/10 animate-ping" style={{ animationDuration: '2.8s', animationDelay: '0.6s' }} />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-pulse" />
            </div>
        </div>
        {/* Ambient glow blob */}
        <div className="absolute inset-0 bg-gradient-radial from-zinc-700/10 via-transparent to-transparent blur-2xl" />
    </div>
);

const Hero: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const splineContainerRef = useRef<HTMLDivElement>(null);
    const [splineVisible, setSplineVisible] = useState(false);
    const [splineLoaded, setSplineLoaded] = useState(false);

    // Lazy-load Spline only when the container enters the viewport
    useEffect(() => {
        const container = splineContainerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSplineVisible(true);
                    observer.disconnect(); // load once, never re-observe
                }
            },
            { rootMargin: '100px' } // start loading 100px before visible
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    // Parallax — rAF-throttled, only moves lightweight DOM elements
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const section = sectionRef.current;
                    if (!section) { ticking = false; return; }
                    const scrollY = window.scrollY;
                    section.querySelectorAll<HTMLElement>('.parallax-glow').forEach((el, i) => {
                        el.style.transform = `translateY(${scrollY * (i % 2 === 0 ? 0.15 : 0.1)}px)`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden select-none bg-hero-image"
        >
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
                <div className="parallax-glow absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-zinc-800/10 blur-[180px] rounded-full glow-pulse" />
                <div className="parallax-glow absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] bg-zinc-900/20 blur-[150px] rounded-full glow-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/20 particle-float"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            left: `${10 + i * 12}%`,
                            top: `${20 + (i % 3) * 25}%`,
                            animationDelay: `${i * 0.8}s`,
                            animationDuration: `${6 + i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-20 items-center relative z-10">
                {/* Left Content */}
                <div className="lg:col-span-7 xl:col-span-7">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full glass border border-white/10 mb-12 transform transition-transform hover:scale-105 cursor-pointer bg-white/5 animate-reveal">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]" />
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">Indian Law Focused</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white serif leading-tight mb-12 tracking-tight animate-reveal [animation-delay:0.2s]">
                        AI Legal Intelligence <br />
                        <span className="gold-gradient pb-2 block">for Indian Law.</span>
                    </h1>

                    {/* Description + CTAs */}
                    <div className="max-w-2xl translate-y-4 opacity-0 animate-reveal [animation-delay:0.4s]">
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-16 border-l-2 border-white/20 pl-8 transition-colors hover:border-white">
                            Your sharpest colleague just joined the team. Lawxygen is a legal thinking partner that researches with you, drafts with you, and remembers what matters.{' '}
                            <span className="text-white/60">Not a chatbot. A colleague who thinks at machine speed.</span>
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <button className="group relative px-12 py-5 overflow-hidden rounded-sm transition-all duration-500 hover:scale-105 active:scale-95 bg-white text-black btn-glow shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                                <span className="relative z-10 font-bold uppercase tracking-widest text-sm">Request Access</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>

                            <button
                                onClick={() => document.querySelector('#assistant')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-5 border border-white/20 text-zinc-400 hover:text-white hover:border-white transition-all uppercase tracking-widest text-xs font-bold rounded-sm relative overflow-hidden group"
                            >
                                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                See what she can do
                            </button>
                        </div>

                        {/* Trust signals */}
                        <div className="mt-12 flex flex-wrap items-center gap-8 opacity-0 animate-reveal [animation-delay:0.7s]">
                            {[
                                { label: 'Supreme Court & Central Acts', icon: '✓' },
                                { label: 'Private & Secure', icon: '✓' },
                                { label: 'Transparent Reasoning', icon: '✓' },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider">
                                    <span className="text-white font-bold">{item.icon}</span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Visual - Spline 3D Scene */}
                <div className="lg:col-span-5 xl:col-span-5 hidden lg:block relative group/spline">
                    {/*
                     * Key performance decisions:
                     * 1. `will-change: transform` promotes to GPU composite layer — no repaints on scroll
                     * 2. No scale transform on the wrapper (was scale-110/115) — avoids forced layout
                     * 3. Spline only mounts after IntersectionObserver fires (lazy by viewport)
                     * 4. React.lazy + Suspense splits the ~500KB Spline bundle from main chunk
                     * 5. onLoad callback fades in Spline over 600ms to hide any pop-in
                     */}
                    <div
                        ref={splineContainerRef}
                        className="relative w-full aspect-[3/4] xl:aspect-square flex items-center justify-center overflow-hidden rounded-[2.5rem] glass-strong border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
                        style={{ willChange: 'transform' }}
                    >
                        {/* Always render skeleton until Spline is loaded */}
                        {!splineLoaded && <SplineSkeleton />}

                        {/* Mount Spline only after observer fires */}
                        {splineVisible && (
                            <div
                                className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                                style={{ opacity: splineLoaded ? 1 : 0 }}
                            >
                                {/* pointer-events re-enabled inside so Spline can receive events */}
                                <div className="w-full h-full pointer-events-auto">
                                    <Suspense fallback={null}>
                                        <Spline
                                            scene="https://prod.spline.design/p-k89QaG8QNfIYnm/scene.splinecode"
                                            onLoad={() => setSplineLoaded(true)}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </Suspense>
                                </div>
                            </div>
                        )}

                        {/* Invisible interaction blocker sits above Spline */}
                        <div className="absolute inset-0 z-30 cursor-crosshair bg-transparent" />

                        {/* Logo mask */}
                        <div className="absolute bottom-4 right-4 w-[140px] h-10 bg-black/80 backdrop-blur-md rounded-full z-40 pointer-events-none opacity-0 lg:opacity-100 border border-white/5" />
                        <div className="absolute bottom-0 right-0 w-[160px] h-20 bg-gradient-to-tl from-[#050505] via-[#050505]/95 to-transparent z-40 pointer-events-none" />

                        {/* Ambient blend overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent z-10" />
                    </div>

                    {/* Subtle label */}
                    <div className="mt-8 flex flex-col items-center">
                        <div className="h-px w-12 bg-zinc-800 mb-4 opacity-50" />
                        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
                            Neural-Legal-S3 Interface
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-60 transition-opacity cursor-pointer animate-bounce"
                onClick={() => document.querySelector('#assistant')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-white text-[9px] uppercase tracking-[0.4em] font-bold">Scroll</span>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
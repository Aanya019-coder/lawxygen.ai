import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Stats from './components/Stats';
import Features from './components/Features';
import Comparison from './components/Comparison';
import LegalAssistant from './components/LegalAssistant';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Struggle from './components/Struggle';

const App: React.FC = () => {
    const progressRef = useRef<HTMLDivElement>(null);

    // Scroll progress bar
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen selection:bg-zinc-700 selection:text-white scroll-smooth">
            {/* Scroll Progress Bar */}
            <div ref={progressRef} className="scroll-progress-bar" aria-hidden="true"></div>

            <Navbar />

            <main>
                {/* Global Ambient Glows */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-white/[0.03] blur-[180px] rounded-full opacity-30 glow-pulse"></div>
                    <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-white/[0.03] blur-[150px] rounded-full opacity-20 glow-pulse" style={{ animationDelay: '3s' }}></div>
                </div>

                {/* Hero */}
                <Hero />

                {/* Section divider */}
                <div className="section-divider"></div>

                {/* Interactive Demo */}
                <LegalAssistant />

                <div className="section-divider"></div>

                {/* Paint Current Struggle */}
                <Struggle />

                <div className="section-divider"></div>

                {/* How It Works / Transformation */}
                <ProblemSolution />

                <div className="bg-black">
                    <div className="section-divider"></div>
                    <Features />
                </div>

                <div className="section-divider"></div>

                {/* Numbers */}
                <Stats />

                <div className="section-divider"></div>

                {/* Pricing */}
                <Pricing />

                <div className="section-divider"></div>

                {/* Testimonials */}
                <Comparison />

                <div className="section-divider"></div>

                {/* FAQ */}
                <FAQ />

                <div className="section-divider"></div>

                {/* Final CTA */}
                <CTA />
            </main>

            <Footer />
        </div>
    );
};

export default App;

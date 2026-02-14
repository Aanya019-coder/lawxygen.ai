import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Stats from './components/Stats';
import Features from './components/Features';
import Comparison from './components/Comparison';
import LegalAssistant from './components/LegalAssistant';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen selection:bg-amber-900 selection:text-amber-100 scroll-smooth">
            <Navbar />

            <main>
                {/* Global Ambient Glows */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-white/5 blur-[180px] rounded-full opacity-30"></div>
                    <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-white/5 blur-[150px] rounded-full opacity-20"></div>
                </div>

                <Hero />

                <Stats />

                <ProblemSolution />

                <div className="bg-black">
                    <Features />
                </div>

                <Comparison />

                <LegalAssistant />

                <Pricing />

                <FAQ />

                {/* Final CTA — Architectural Focus */}
                <section className="py-32 bg-black relative overflow-hidden border-t border-zinc-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-12 block font-black">Final Engagement</span>
                        <h2 className="text-6xl md:text-8xl font-bold text-white serif mb-12 leading-none">
                            The Future is <br />
                            <span className="italic gold-gradient">Lawxygen.</span>
                        </h2>
                        <p className="text-stone-300 mb-16 text-lg max-w-xl mx-auto font-light italic leading-relaxed">
                            Don't merely adapt to the new legal landscape. Shape it with the definitive intelligence engine.
                        </p>
                        <button className="px-20 py-8 bg-white hover:bg-zinc-200 text-black text-xs font-black rounded-sm transition-all transform hover:scale-105 shadow-2xl shadow-white/5 tracking-[0.4em] uppercase">
                            Schedule Private Briefing
                        </button>
                    </div>

                    {/* Abstract Geometric Background */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
                        <div className="text-[20rem] font-black serif text-white absolute -bottom-32 -left-32 transform -rotate-12">LAW</div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default App;

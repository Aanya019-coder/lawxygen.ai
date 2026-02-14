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
import CTA from './components/CTA';
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

                <CTA />
            </main>

            <Footer />
        </div>
    );
};

export default App;

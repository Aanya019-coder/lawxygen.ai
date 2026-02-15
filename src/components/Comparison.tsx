import React from 'react';

const Comparison: React.FC = () => {


    const testimonials = [
        {
            quote: "\"Saves time on routine research. I use it for the initial research phase. It's faster than clicking through Westlaw for 2 hours. I still verify everything, but I'm starting from better results.\"",
            author: "Lisa Chen",
            role: "Litigation Attorney",
            headline: "Saves time on routine research"
        },
        {
            quote: "\"We run all our briefs through the citation checker before filing. It's caught several errors that would have been embarrassing.\"",
            author: "Michael Roberts",
            role: "Partner",
            headline: "Good for citation checking"
        },
        {
            quote: "\"For complex novel legal issues, I still do manual research. But for routine motions, this gets me 80% of the way there in 10 minutes.\"",
            author: "Sarah Martinez",
            role: "Solo Practitioner",
            headline: "Works for straightforward cases"
        }
    ];

    return (
        <section id="comparison" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zinc-800/20 blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-12">



                {/* What Attorneys Say */}
                <div>
                    <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-10 block font-bold text-center">Testimonials</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white serif leading-none mb-16 text-center">What Attorneys <span className="italic gold-gradient">Say.</span></h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="glass-strong border border-white/5 p-8 rounded-sm hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                                <h4 className="text-white font-bold text-lg mb-4 serif italic">"{t.headline}"</h4>
                                <p className="text-stone-300 text-sm leading-relaxed mb-8 font-light">
                                    {t.quote}
                                </p>
                                <div className="mt-auto border-t border-white/5 pt-6">
                                    <span className="block text-white font-bold text-xs uppercase tracking-wider">{t.author}</span>
                                    <span className="block text-zinc-500 text-[10px] uppercase tracking-widest mt-1">{t.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Comparison;

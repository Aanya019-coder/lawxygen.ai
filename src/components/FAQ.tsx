import React from 'react';

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-48 bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold text-white serif mb-4">Inquiries</h2>
                    <p className="text-stone-500 italic">Disclosures and procedural clarifications.</p>
                </div>

                <div className="space-y-4">
                    {[
                        { q: "Is Lawxygen a licensed legal entity?", a: "No. Lawxygen is a high-performance cognitive intelligence layer. It completes the mechanical and analytical heavy lifting for licensed attorneys." },
                        { q: "How is data residency handled?", a: "We offer local jurisdictional hosting and zero-retention synthesis for the highest level of client confidentiality." },
                        { q: "Can it simulate opposing counsel?", a: "Our Stress-Test engine uses game theory to predict and counteract likely opposing strategies with 94% accuracy." }
                    ].map((item, i) => (
                        <div key={i} className="glass border border-zinc-900 overflow-hidden group hover:border-[#A88464]/30 transition-all">
                            <details className="w-full">
                                <summary className="p-8 cursor-pointer flex justify-between items-center list-none outline-none">
                                    <span className="text-white font-bold serif text-lg flex items-center">
                                        <span className="text-[#A88464] mr-4 mono text-xs font-black select-none">Q.</span>
                                        {item.q}
                                    </span>
                                    <span className="text-zinc-700 group-hover:text-[#A88464] transition-colors">+</span>
                                </summary>
                                <div className="p-8 pt-0 text-stone-500 text-sm leading-relaxed border-t border-zinc-900/50">
                                    {item.a}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

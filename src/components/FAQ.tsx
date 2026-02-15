import React from 'react';

const FAQ: React.FC = () => {
    const faqs = [
        { q: "Is this actually useful or just hype?", a: "It's useful for specific tasks: finding cases, checking citations, getting case summaries. It won't revolutionize your practice, but it will save time on routine research." },
        { q: "Can I trust the case citations?", a: "Check them yourself. We pull from verified databases, but you should verify citations before filing—same as you would with any research tool or junior attorney's work." },
        { q: "What happens if I rely on this and it's wrong?", a: "You're responsible for everything you file. Lawxygen is a research tool, not a lawyer. Use it the same way you'd use Westlaw or Google Scholar—as a starting point that requires verification." },
        { q: "How is this different from Westlaw?", a: "Westlaw is a comprehensive legal database. Lawxygen searches Westlaw (and other databases) and tries to find the most relevant results faster. Think of it as a better search interface, not a replacement database." },
        { q: "Why not just use ChatGPT?", a: "ChatGPT invents cases that don't exist. Multiple lawyers have been sanctioned for filing briefs with fake citations from ChatGPT. Lawxygen only shows real cases from real databases." },
        { q: "Do I need special training?", a: "No. If you can Google something, you can use Lawxygen. Type your question in plain English." },
        { q: "What if it doesn't find what I need?", a: "That happens sometimes. You can rephrase your search, use more specific terms, fall back to traditional Westlaw/Lexis search, or contact support for search tips." },
        { q: "Is my data secure?", a: "All searches are encrypted. We don't share your searches with anyone. You can delete your search history anytime. We don't use your data to train AI models." },
        { q: "What's your refund policy?", a: "14-day free trial (no credit card needed). After that, cancel anytime. We don't do refunds for partial months, but you won't be charged after you cancel." }
    ];

    return (
        <section id="faq" className="py-24 bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-4 block font-bold">FAQ</span>
                    <h2 className="text-5xl font-bold text-white serif mb-4">Honest <span className="italic gold-gradient">Answers.</span></h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div key={i} className="glass border border-zinc-900 overflow-hidden group hover:border-[#A88464]/30 transition-all">
                            <details className="w-full">
                                <summary className="p-8 cursor-pointer flex justify-between items-center list-none outline-none">
                                    <span className="text-white font-bold serif text-lg flex items-center pr-8">
                                        <span className="text-[#A88464] mr-4 font-sans text-xs font-black select-none">Q.</span>
                                        {item.q}
                                    </span>
                                    <span className="text-zinc-700 group-hover:text-[#A88464] transition-colors text-2xl">+</span>
                                </summary>
                                <div className="p-8 pt-0 text-stone-400 text-sm leading-relaxed border-t border-zinc-900/50 pl-16">
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

import React from 'react';

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-24 bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold text-white serif mb-4">Questions & Answers</h2>
                </div>

                <div className="space-y-4">
                    {[
                        { q: "Is Lawxygen a replacement for legal research skills?", a: "No. Lawxygen is designed to accelerate your research and drafting, not replace your judgment. Think of it as a highly efficient research assistant who handles the groundwork while you focus on strategy and client counsel." },
                        { q: "How accurate are the citations and legal analysis?", a: "Every citation is pulled directly from verified legal databases (Westlaw, LexisNexis, and others) and cross-referenced for accuracy. Our post-verification shows 98% citation accuracy. However, we always recommend reviewing AI-generated content as part of your standard due diligence." },
                        { q: "How is my confidential client data protected?", a: "Your data is encrypted end-to-end, never used to train our models, and never shared with third parties. We're SOC 2 Type II certified, undergo regular security audits, and maintain strict attorney-client privilege protocols." },
                        { q: "What if Lawxygen makes a mistake?", a: "We're transparent about AI limitations. Lawxygen flags low-confidence results and always provides source links for verification. Ultimate responsibility remains with you—as it should. We're a tool to enhance your practice, not a substitute for professional judgment." },
                        { q: "Can I try before committing?", a: "Absolutely. We offer a 14-day free trial with full access to research and drafting features. No credit card required. You'll see the time savings immediately." },
                        { q: "Does Lawxygen work with my existing practice management software?", a: "Yes. Lawxygen integrates with major legal tech platforms including Clio, MyCase, PracticePanther, and more. We also offer API access for custom integrations." }
                    ].map((item, i) => (
                        <div key={i} className="glass border border-zinc-900 overflow-hidden group hover:border-[#A88464]/30 transition-all">
                            <details className="w-full">
                                <summary className="p-8 cursor-pointer flex justify-between items-center list-none outline-none">
                                    <span className="text-white font-bold serif text-lg flex items-center">
                                        <span className="text-[#A88464] mr-4 font-sans text-xs font-black select-none">Q.</span>
                                        {item.q}
                                    </span>
                                    <span className="text-zinc-700 group-hover:text-[#A88464] transition-colors">+</span>
                                </summary>
                                <div className="p-8 pt-0 text-stone-400 text-sm leading-relaxed border-t border-zinc-900/50">
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

import React, { useState, useRef, useEffect } from 'react';

interface FAQItem {
    q: string;
    a: string;
}

const FAQAccordion: React.FC<{ item: FAQItem; index: number; isOpen: boolean; onToggle: () => void }> = ({
    item, index, isOpen, onToggle
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return (
        <div
            className={`border rounded-sm transition-all duration-500 overflow-hidden ${isOpen
                ? 'border-white/20 bg-white/[0.03]'
                : 'border-zinc-900 bg-transparent hover:border-white/10'
                }`}
        >
            <button
                className="w-full p-8 cursor-pointer flex justify-between items-center text-left outline-none focus-visible:ring-1 focus-visible:ring-white/30"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="text-white font-bold serif text-lg flex items-center pr-8">
                    <span className="text-zinc-500 mr-4 font-sans text-xs font-black select-none shrink-0">
                        {String(index + 1).padStart(2, '0')}.
                    </span>
                    {item.q}
                </span>
                <span
                    className={`shrink-0 w-8 h-8 border rounded-sm flex items-center justify-center transition-all duration-500 ${isOpen
                        ? 'border-white/30 bg-white/10 rotate-45'
                        : 'border-zinc-800 text-zinc-600 hover:border-white/20 hover:text-white'
                        }`}
                >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </span>
            </button>

            <div
                style={{ height: `${height}px`, transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
                className="overflow-hidden"
            >
                <div ref={contentRef} className="px-8 pb-8 pt-0 text-stone-400 text-sm leading-relaxed pl-[4.5rem]">
                    {item.a}
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
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

    const faqs: FAQItem[] = [
        {
            q: "Is Lawxygen specific to Indian Law?",
            a: "Yes. Our neural engine is trained specifically on Indian legal structures, including Supreme Court judgments dating back to 1890, all Central Acts, and Constitutional provisions. It understands the specific hierarchy and precedence of the Indian judicial system."
        },
        {
            q: "How does the 'Thinking Partner' concept work?",
            a: "Unlike standard chatbots that just give answers, Lawxygen collaborates with you. If your query is ambiguous, she will ask for clarification. If she spots a potential flaw in your reasoning, she'll flag it. She doesn't just find law; she helps you think through it."
        },
        {
            q: "Can I rely on the citations provided?",
            a: "Lawxygen provides direct, verifiable links to the original judgments and acts. Because she 'shows her work' through chain-of-thought visualization, you can see exactly which paragraphs she's citing and how she's building her analysis. No hallucinations."
        },
        {
            q: "Is my case data and research secure?",
            a: "We use enterprise-grade encryption for all interactions. Your research context, uploaded documents, and conversations are private to your account. We do not use your proprietary legal work to train our general models. Your intelligence remains yours."
        },
        {
            q: "How is this better than general AI like ChatGPT?",
            a: "General AI often hallucinates case law or uses foreign (US/UK) precedence for Indian cases. Lawxygen is grounded only in verified Indian legal databases. She won't invent a citation and will always provide the full context of a judgment."
        },
        {
            q: "Does it support regional jurisdictions?",
            a: "Currently, we offer comprehensive coverage of the Supreme Court and all Central statutory law. High Court and District Court coverage is being phased in selectively based on data availability and verification standards."
        },
        {
            q: "Do I need to learn complex search syntax?",
            a: "No. You can speak or type in plain language. Whether you're using voice input or uploading a brief for analysis, Lawxygen understands natural legal language without the need for boolean operators."
        }
    ];

    return (
        <section ref={sectionRef} id="faq" className="py-24 bg-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className="text-center mb-20"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-4 block font-bold">Understanding Lawxygen</span>
                    <h2 className="text-5xl font-bold text-white serif mb-4">Straight <span className="gold-gradient">Answers.</span></h2>
                    <p className="text-stone-500 text-sm mt-4">Transparent and direct information about your legal thinking partner.</p>
                </div>

                <div className="space-y-3">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: `opacity 0.5s ease ${0.05 * i}s, transform 0.5s ease ${0.05 * i}s`,
                            }}
                        >
                            <FAQAccordion
                                item={item}
                                index={i}
                                isOpen={openIndex === i}
                                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

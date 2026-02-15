import React from 'react';
import { Icons } from '../constants';

const ProblemSolution: React.FC = () => {
    const workflowStages = [
        { name: "Step 1", subtitle: "Ask Your Question", icon: <Icons.Brain />, description: "Type what you're looking for: \"breach of contract cases in California involving software licenses\"" },
        { name: "Step 2", subtitle: "Get Relevant Results", icon: <Icons.FileText />, description: "Lawxygen searches and shows you the most relevant cases, with the key points extracted." },
        { name: "Step 3", subtitle: "Read and Cite", icon: <Icons.Gavel />, description: "Click any case to see the full text. All citations are properly formatted and verified." },
    ];

    const users = [
        {
            title: "Solo Practitioners",
            description: "When you can't afford a research assistant",
            quote: "\"I handle everything myself—client calls, court appearances, research. Lawxygen cuts my research time in half, which means I can take on more clients without working 80-hour weeks.\""
        },
        {
            title: "Small Firms (2-10 attorneys)",
            description: "When you need consistent research quality",
            quote: "\"Before Lawxygen, research quality varied depending on which associate did it. Now everyone starts from the same high-quality database search.\""
        },
        {
            title: "Mid-Size Firms",
            description: "When you want to reduce associate research hours",
            quote: "\"Our associates use Lawxygen for the initial research phase. They find relevant cases faster, which means less time billed to clients and fewer revision rounds.\""
        }
    ];

    return (
        <section id="problem" className="py-24 bg-black relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                {/* Workflow Process Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-6 block font-bold">How It Works</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white serif leading-none mb-4">
                            Simple <span className="italic gold-gradient">Legal Research.</span>
                        </h2>
                        <p className="text-zinc-400 text-sm max-w-2xl mx-auto mt-6">
                            That's it. No complex queries. No Boolean operators unless you want them.
                        </p>
                    </div>

                    {/* Process Flow Cards */}
                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            {workflowStages.map((stage, idx) => (
                                <div key={idx} className="group relative">
                                    {/* Connector Dot */}
                                    {idx < workflowStages.length - 1 && (
                                        <div className="absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 group-hover:scale-150 transition-all duration-300"></div>
                                            <svg className="absolute w-4 h-4 text-white/10 group-hover:text-white/20 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}

                                    <div className="glass border border-white/5 rounded-sm p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group/card h-full">
                                        {/* Card Background Pattern */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity"></div>

                                        <div className="relative z-10">
                                            <div className="w-12 h-12 mb-6 rounded-sm bg-black/50 border border-white/10 flex items-center justify-center text-zinc-400 group-hover/card:text-white group-hover/card:border-white/30 transition-all">
                                                {stage.icon}
                                            </div>
                                            <h4 className="text-white font-bold text-lg mb-2 serif">{stage.name}</h4>
                                            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">{stage.subtitle}</p>
                                            <p className="text-zinc-400 text-sm leading-relaxed">{stage.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Who Uses Lawxygen Section */}
                <div className="bg-zinc-900/30 border border-white/5 p-12 lg:p-24 rounded-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)]"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-6 block font-bold">Target Audience</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white serif leading-none mb-12">Who Uses <span className="italic gold-gradient">Lawxygen?</span></h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {users.map((user, i) => (
                                <div key={i} className="group">
                                    <h3 className="text-2xl text-white font-bold serif mb-2">{user.title}</h3>
                                    <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6 font-bold">{user.description}</p>
                                    <div className="border-l-2 border-white/10 pl-6 group-hover:border-white/40 transition-colors">
                                        <p className="text-zinc-400 text-sm italic leading-relaxed">
                                            {user.quote}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;

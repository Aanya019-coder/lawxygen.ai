import React, { useState, useRef, useEffect } from 'react';
import { generateLegalResponse } from '../services/gemini';
import { Message } from '../types';

import SpinningNumbers from './SpinningNumbers';

const LegalAssistant: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Lawxygen initialized. Indian Law Node Active. Ready for case research or document analysis." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        // Simple mock response for specific demo question if needed, else use real service
        if (userMessage.toLowerCase().includes('evict a tenant during the pandemic')) {
            setTimeout(() => {
                setMessages(prev => [...prev, { role: 'assistant', content: "Before I dig in — are you asking about commercial or residential tenancy? And which state? The moratorium orders in India varied significantly by jurisdiction during the pandemic." }]);
                setIsLoading(false);
            }, 1000);
            return;
        }

        const response = await generateLegalResponse(userMessage);
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsLoading(false);
    };

    return (
        <section id="assistant" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <SpinningNumbers />
            </div>
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 grid lg:grid-cols-12 gap-16 relative z-10">

                <div className="lg:col-span-4 mb-16 lg:mb-0 lg:pr-12">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="flex space-x-1">
                            <span className="w-1 h-3 bg-white/20 rounded-full animate-bounce"></span>
                            <span className="w-1 h-4 bg-white/40 rounded-full animate-bounce [animation-delay:0.1s]"></span>
                            <span className="w-1 h-2 bg-white/20 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        </div>
                        <span className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest font-bold font-mono">Indian Case Law Intelligence</span>
                    </div>

                    <h2 className="text-5xl font-bold text-white serif leading-tight mb-8 transition-transform group-hover:translate-x-2 duration-700">Thinks with you, <br /><span className="gold-gradient">not for you.</span></h2>
                    <p className="text-stone-300 text-sm leading-relaxed mb-8 border-l border-white/20 pl-6 group-hover:border-white transition-colors">
                        Lawxygen is a legal thinking partner that researches across Supreme Court judgments, Central Acts, and Constitutional provisions dated back to 1890.
                    </p>

                    <div className="grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
                        <div className="text-left group/item">
                            <span className="block text-white font-sans text-2xl font-bold transition-all group-hover/item:text-zinc-200 group-hover/item:translate-x-1">Millions</span>
                            <span className="text-[10px] uppercase text-zinc-400 tracking-widest">Judgments</span>
                        </div>
                        <div className="text-left group/item">
                            <span className="block text-white font-sans text-2xl font-bold transition-all group-hover/item:text-zinc-200 group-hover/item:translate-x-1">917+</span>
                            <span className="text-[10px] uppercase text-zinc-400 tracking-widest">Central Acts</span>
                        </div>
                        <div className="text-left group/item col-span-2">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="block text-white font-sans text-sm font-bold transition-all group-hover/item:text-zinc-200">Remembers Context</span>
                            </div>
                            <span className="text-[10px] uppercase text-zinc-400 tracking-widest pl-4">Persistent Memory Active</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <div className="relative glass-strong border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] rounded-xl flex flex-col h-[750px] group/chat overflow-hidden">

                        {/* HUD Header - Refined */}
                        <div className="p-5 border-b border-zinc-900/50 flex items-center justify-between bg-black/60 backdrop-blur-xl px-10 relative z-40">
                            <div className="flex items-center space-x-5">
                                <div className="relative">
                                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_20px_white] animate-pulse"></div>
                                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-white blur-md animate-ping"></div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-sans text-[11px] text-white font-bold uppercase tracking-[0.3em]">Neural Intelligence Active</span>
                                    <span className="text-[8px] text-zinc-500 uppercase tracking-widest font-bold">Encrypted Node: INDIAN_LAW_V2</span>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center space-x-8">
                                <div className="flex flex-col items-end">
                                    <span className="font-sans text-[9px] text-zinc-400 uppercase tracking-tighter">Status</span>
                                    <span className="font-sans text-[10px] text-white font-bold">Researching...</span>
                                </div>
                            </div>
                        </div>

                        {/* HUD Body with Integrated Video */}
                        <div className="flex-1 relative overflow-hidden flex flex-col">

                            {/* Cinematic Background Video Integration - Enhanced Masking */}
                            <div className="absolute inset-0 z-0">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover scale-110 opacity-30 mix-blend-screen saturate-0"
                                >
                                    <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-and-data-23157-large.mp4" type="video/mp4" />
                                </video>

                                {/* Complex Multi-layered Masking */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 opacity-80"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10"></div>
                            </div>

                            {/* Messages Area - Floating on Glass */}
                            <div className="flex-1 overflow-y-auto p-12 space-y-12 relative custom-scrollbar z-30">
                                {messages.map((m, i) => (
                                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-[reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]`}>
                                        <div className={`max-w-[80%] relative ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                                            <div className="flex items-center space-x-3 mb-3 font-bold">
                                                {m.role !== 'user' && <div className="w-4 h-[1px] bg-zinc-700"></div>}
                                                <span className="font-sans text-[9px] text-zinc-500 uppercase tracking-[0.3em]">
                                                    {m.role === 'user' ? 'OPERATOR' : 'LAWXYGEN_AI'}
                                                </span>
                                                {m.role === 'user' && <div className="w-4 h-[1px] bg-zinc-700"></div>}
                                            </div>
                                            <div className={`p-8 rounded-xl text-base leading-relaxed font-sans transition-all duration-700 hover:scale-[1.02] border ${m.role === 'user'
                                                ? 'bg-white text-black border-white shadow-[0_10px_40px_rgba(255,255,255,0.1)]'
                                                : 'text-white border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.32)]'
                                                }`}>
                                                <div className="whitespace-pre-wrap font-light tracking-wide">
                                                    {m.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="p-6 bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-lg flex items-center space-x-4">
                                            <div className="flex space-x-1">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                            </div>
                                            <span className="font-sans text-zinc-400 text-[10px] tracking-[0.2em] font-bold">SEARCHING_JUDGMENTS...</span>
                                        </div>
                                    </div>
                                )}
                                <div ref={chatEndRef} />
                            </div>
                        </div>

                        {/* Input Area - Command Center Style */}
                        <form onSubmit={handleSend} className="p-8 border-t border-zinc-900 bg-black/80 backdrop-blur-2xl relative z-40 group/input">
                            <div className="relative flex items-center bg-zinc-900/50 rounded-full border border-white/5 focus-within:border-white/20 transition-all px-8 py-2">
                                <div className="text-zinc-600 mr-4 font-mono text-[10px] font-black opacity-30 select-none">CMD&gt;</div>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Execute legal research query..."
                                    className="flex-1 bg-transparent border-none py-4 text-white font-sans text-sm focus:outline-none placeholder:text-zinc-700 font-light tracking-wide"
                                />
                                <button
                                    type="submit"
                                    className="ml-4 p-4 bg-white rounded-full text-black hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:scale-100"
                                    disabled={isLoading}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegalAssistant;

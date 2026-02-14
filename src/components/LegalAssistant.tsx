import React, { useState, useRef, useEffect } from 'react';
import { generateLegalResponse } from '../services/gemini';
import { Message } from '../types';

import SpinningNumbers from './SpinningNumbers';

const LegalAssistant: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "SYSTEM INITIALIZED. LAWXYGEN CORE ACTIVE. READY FOR INQUIRY." }
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

        const response = await generateLegalResponse(userMessage);
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsLoading(false);
    };

    return (
        <section id="assistant" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <SpinningNumbers />
            </div>
            <div className="max-w-[1400px] mx-auto px-4 md:px-12 grid lg:grid-cols-12 gap-16 relative z-10">

                <div className="lg:col-span-4 self-center group">
                    <span className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest mb-6 block font-bold transition-all group-hover:text-[#A88464]">Protocol Lab 01</span>
                    <h2 className="text-5xl font-bold text-white serif leading-none mb-8 transition-transform group-hover:translate-x-2 duration-700">Interface with <br /><span className="italic gold-gradient">Pure Logic.</span></h2>
                    <p className="text-stone-300 text-sm leading-relaxed mb-8 border-l border-[#A88464]/30 pl-6 group-hover:border-[#A88464] transition-colors">
                        Access the secure sandbox. Every interaction is encrypted with end-to-end proprietary firm-level protocols. Ask about strategy, precedent, or procedural mechanics.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="text-left group/item">
                            <span className="block text-white font-sans text-2xl font-bold transition-all group-hover/item:text-[#C5A059] group-hover/item:translate-x-1">0.02s</span>
                            <span className="text-[10px] uppercase text-zinc-400 tracking-widest">Delay</span>
                        </div>
                        <div className="text-left group/item">
                            <span className="block text-white font-sans text-2xl font-bold transition-all group-hover/item:text-[#C5A059] group-hover/item:translate-x-1">256-Bit</span>
                            <span className="text-[10px] uppercase text-zinc-400 tracking-widest">Encryption</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <div className="relative glass-strong border border-[#A88464]/10 shadow-2xl rounded-sm flex flex-col h-[700px] group/chat">
                        {/* HUD Header */}
                        <div className="p-4 border-b border-zinc-900 flex items-center justify-between bg-black/40 px-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-2 h-2 rounded-full bg-[#A88464] shadow-[0_0_15px_rgba(168,132,100,0.8)] animate-pulse"></div>
                                <span className="font-sans text-[11px] text-zinc-200 font-bold uppercase tracking-[0.2em]">Neural Path Active</span>
                            </div>
                            <div className="hidden sm:flex space-x-6">
                                <span className="font-sans text-[9px] text-zinc-400 uppercase animate-pulse">Latency: 12ms</span>
                                <span className="font-sans text-[9px] text-zinc-400 uppercase opacity-50">Core: Law-01</span>
                            </div>
                        </div>

                        {/* Scanline Effect */}
                        <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-12 space-y-10 relative custom-scrollbar">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-[reveal_0.5s_ease-out_forwards]`}>
                                    <div className={`max-w-[85%] relative ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                                        <span className="font-sans text-[8px] text-stone-400 uppercase tracking-widest mb-2 block font-bold transition-colors hover:text-[#A88464] cursor-default">
                                            {m.role === 'user' ? 'AUTH_PARTNER_01' : 'CORE_ENGINE_ALPHA'}
                                        </span>
                                        <div className={`p-6 rounded-sm text-sm leading-relaxed font-sans transition-all duration-500 hover:scale-[1.01] ${m.role === 'user'
                                            ? 'bg-[#A88464]/10 text-white border-r-2 border-[#A88464] shadow-[0_0_20px_rgba(168,132,100,0.05)]'
                                            : 'text-stone-300 border-l-2 border-zinc-800 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.02)]'
                                            }`}>
                                            <div className="whitespace-pre-wrap">
                                                {m.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="font-sans text-[#C5A059] text-xs animate-pulse tracking-widest flex items-center">
                                        <span className="mr-2">[</span>
                                        <span className="typing-animation">ANALYZING_CORE_DATABASES...</span>
                                        <span className="ml-2">]</span>
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-8 border-t border-zinc-900 bg-black/40 group/input">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="INPUT_LEGAL_QUERY_HERE_..."
                                    className="w-full bg-black/50 border border-zinc-900 rounded-sm px-6 py-5 text-stone-100 font-sans text-xs focus:outline-none focus:border-[#A88464]/50 transition-all duration-500 pr-16 placeholder:text-zinc-800 focus:shadow-[0_0_15px_rgba(168,132,100,0.1)]"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-[#C5A059] transition-all p-3 group/send"
                                    disabled={isLoading}
                                >
                                    <svg className="w-5 h-5 transform group-hover/send:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

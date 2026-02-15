import React from 'react';
import { Icons } from '../constants';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-3xl transition-all duration-500 hover:bg-black/90">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center h-24">
                    <div className="flex items-center space-x-3 group cursor-pointer overflow-hidden">
                        <div className="p-2.5 rounded-sm bg-white/5 text-white border border-white/10 group-hover:border-white/40 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-700 transform group-hover:rotate-[360deg]">
                            <Icons.Scale />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white serif uppercase italic group-hover:tracking-widest transition-all duration-1000 ease-in-out">
                            Lawxygen
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-12">
                        {[
                            { name: 'Workflow', href: '#problem' },
                            { name: 'Comparison', href: '#comparison' },
                            { name: 'Demo', href: '#assistant' },
                            { name: 'Pricing', href: '#pricing' }
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-sans text-[10px] text-zinc-400 hover:text-white uppercase tracking-[0.2em] transition-all relative group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:origin-left"></span>
                            </a>
                        ))}
                        <div className="w-px h-8 bg-zinc-800 mx-4"></div>
                        <button className="relative px-8 py-3.5 overflow-hidden group/btn border border-white/10 hover:border-white/30 transition-all duration-500 rounded-sm">
                            <span className="absolute inset-0 bg-white/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></span>
                            <span className="relative z-10 text-zinc-300 text-[10px] font-bold uppercase tracking-widest group-hover:text-white">
                                Login
                            </span>
                        </button>
                    </div>

                    <div className="lg:hidden">
                        <button className="text-zinc-500 hover:text-white transition-colors p-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h16M4 16h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

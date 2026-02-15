import React from 'react';
import { Icons } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-zinc-900 pt-32 pb-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-3 mb-8 group cursor-default">
                            <div className="p-2 rounded-sm bg-white/5 text-white border border-white/10 group-hover:border-white/40 transition-all duration-700">
                                <Icons.Scale />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white serif italic uppercase">
                                Law<span className="text-zinc-500">xygen</span>
                            </span>
                        </div>
                        <p className="text-zinc-500 text-base leading-relaxed font-light max-w-xs transition-colors hover:text-zinc-400">
                            Empowering attorneys with intelligent legal research and drafting tools.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">Platform</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            {['Legal Research', 'Case Analytics', 'Document Drafting', 'API Access'].map(link => (
                                <li key={link}><a href="#" className="hover:text-white transition-all hover:translate-x-1 inline-block">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">Resources</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            {['Blog & Insights', 'Case Studies', 'Help Center', 'Webinars'].map(link => (
                                <li key={link}><a href="#" className="hover:text-white transition-all hover:translate-x-1 inline-block">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">Company</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            {['About Us', 'Careers', 'Ethics & Responsible AI', 'Contact Support'].map(link => (
                                <li key={link}><a href="#" className="hover:text-white transition-all hover:translate-x-1 inline-block">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.3em]">Legal</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            {['Privacy Policy', 'Terms of Service', 'Data Security', 'Security Audit Report'].map(link => (
                                <li key={link}><a href="#" className="hover:text-white transition-all hover:translate-x-1 inline-block">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 space-y-6 md:space-y-0 uppercase tracking-widest font-bold">
                    <p>&copy; 2026 Lawxygen Technologies Inc. All rights reserved.</p>
                    <div className="flex space-x-10">
                        <a href="#" className="hover:text-white transition-all">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-all">Twitter</a>
                        <a href="#" className="hover:text-white transition-all text-zinc-400">Legal Tech Blog</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

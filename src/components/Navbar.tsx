import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const navLinks = [
        { name: 'Capabilities', href: '#features' },
        { name: 'How it Works', href: '#how-it-works' },
        { name: 'Who it\'s for', href: '#comparison' },
        { name: 'Demo', href: '#assistant' },
    ];

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'border-b border-white/10 bg-black/95 backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
                    : 'border-b border-white/5 bg-black/70 backdrop-blur-2xl'
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <a
                            href="#"
                            className="flex items-center space-x-3 group cursor-pointer overflow-hidden"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        >
                            <div className="p-2.5 rounded-sm bg-white/5 text-white border border-white/10 group-hover:border-white/40 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-700 transform group-hover:rotate-[360deg]">
                                <Icons.Scale />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-white serif uppercase group-hover:tracking-widest transition-all duration-1000 ease-in-out">
                                Lawxygen
                            </span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center space-x-12">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className="font-sans text-[10px] text-zinc-400 hover:text-white uppercase tracking-[0.2em] transition-all relative group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:origin-left"></span>
                                </a>
                            ))}
                            <div className="w-px h-8 bg-zinc-800 mx-4"></div>
                            <button className="relative px-8 py-3.5 overflow-hidden group/btn border border-white/10 hover:border-white/30 transition-all duration-500 rounded-sm">
                                <span className="absolute inset-0 bg-white/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></span>
                                <span className="relative z-10 text-zinc-300 text-[10px] font-bold uppercase tracking-widest group-hover/btn:text-white transition-colors">
                                    Request Access
                                </span>
                            </button>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            className="lg:hidden text-zinc-400 hover:text-white transition-colors p-2 relative z-50"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
                                <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                                <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    onClick={() => setMobileOpen(false)}
                ></div>

                {/* Menu Panel */}
                <div
                    className={`absolute top-20 left-0 right-0 bg-black border-b border-white/10 transition-all duration-500 ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                        }`}
                >
                    <div className="px-6 py-8 space-y-1">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                className="flex items-center justify-between py-5 border-b border-white/5 text-zinc-400 hover:text-white transition-colors group"
                                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
                            >
                                <span className="font-sans text-sm uppercase tracking-[0.2em] font-bold">{link.name}</span>
                                <span className="text-zinc-700 group-hover:text-white transition-colors">→</span>
                            </a>
                        ))}
                        <div className="pt-6">
                            <button className="w-full py-4 border border-white/20 text-zinc-300 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                                Request Access
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

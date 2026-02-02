"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useProspectus } from "@/context/ProspectusContext"; // 1. Import Context

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { openProspectus } = useProspectus(); // 2. Get open function

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const tasteUsHref = "/about#TasteUs";

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Taste Us", href: tasteUsHref },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "#footer" }
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-6 md:px-16 backdrop-blur-md ${isScrolled || isMobileMenuOpen ? "h-16 bg-brand-burgundy/95 border-b border-brand-gold/20 shadow-xl" : "h-24 bg-transparent"
                }`}
        >
            {/* --- Logo Group --- */}
            <Link href="/" className="flex items-center gap-4 pt-2 group z-50" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <Image
                        src="/logo.png"
                        alt="AR Biryani Logo"
                        fill
                        className={`object-contain transition-all duration-500 ${isScrolled ? 'brightness-125' : 'brightness-110'}`}
                    />
                </div>

                <div className="flex flex-col items-start leading-tight">
                    <span className={`font-serif text-[8px] md:text-[10px] font-bold tracking-[0.4em] uppercase transition-colors duration-500 ${isScrolled ? 'text-brand-gold' : 'text-brand-ivory/80'}`}>
                        Dindigul
                    </span>
                    <h1 className="font-display text-lg md:text-xl font-bold tracking-widest flex items-center gap-1">
                        <span className="text-brand-gold">AR</span>
                        <span className={`transition-colors duration-500 ${isScrolled ? 'text-brand-gold' : 'text-brand-ivory'}`}>
                            Biriyani
                        </span>
                    </h1>
                </div>
            </Link>

            {/* --- Desktop Navigation --- */}
            <div className="hidden md:flex items-center gap-8">
                <nav className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${pathname === item.href
                                    ? 'text-brand-gold'
                                    : isScrolled ? 'text-brand-gold/60 hover:text-brand-ivory' : 'text-brand-ivory/60 hover:text-brand-gold'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* --- FRANCHISE BUTTON (Desktop) --- */}
                <button
                    onClick={openProspectus}
                    className="bg-brand-gold text-brand-burgundy px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-lg"
                >
                    Franchise Enquire
                </button>
            </div>

            {/* --- Mobile Menu Button --- */}
            <button
                className="md:hidden text-brand-gold z-50 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* --- Mobile Navigation Overlay --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 w-full bg-brand-burgundy border-b border-brand-gold/20 shadow-2xl md:hidden flex flex-col pt-24 pb-10 px-8 gap-6"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-sm font-display font-bold uppercase tracking-[0.2em] py-4 border-b border-brand-gold/10 ${pathname === item.href ? "text-brand-gold" : "text-brand-ivory/80"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* --- FRANCHISE BUTTON (Mobile) --- */}
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                openProspectus();
                            }}
                            className="w-full bg-brand-gold text-brand-burgundy py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors mt-4"
                        >
                            Franchise Enquire
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- LOGIC: Always point to the About Page anchor ---
    const tasteUsHref = "/about#TasteUs";

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Taste Us", href: tasteUsHref },
        { name: "Gallery", href: "/gallery" }
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-8 md:px-16 backdrop-blur-md ${
                isScrolled ? "h-16 bg-brand-burgundy/95 border-b border-brand-gold/20 shadow-xl" : "h-24 bg-transparent"
            }`}
        >
            <Link href="/" className="flex items-center gap-4 pt-2">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <h1 className="font-display text-lg md:text-xl font-bold tracking-widest text-brand-ivory">
                    <span className="text-brand-gold">AR</span> Biryani
                </h1>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                            pathname === item.href ? 'text-brand-gold' : 'text-brand-ivory/60 hover:text-brand-gold'
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </motion.header>
    );
};
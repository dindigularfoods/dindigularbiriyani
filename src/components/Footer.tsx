"use client";

import React from "react";
import { Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
    const socialLinks = [
        { name: "Instagram", icon: <Instagram size={30} />, url: "https://www.instagram.com/dindigul_ar_mujeeb_official/" },
        { name: "Facebook", icon: <Facebook size={30} />, url: "https://www.facebook.com/share/1GwAYniRsj/" },
        { name: "YouTube", icon: <Youtube size={30} />, url: "https://www.youtube.com/@Dindigul_AR_Mujeeb_Official" },
    ];

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="relative bg-brand-burgundy pt-16 pb-8 overflow-hidden border-t-2 border-brand-bronze/30">
            {/* Ambient Spice Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] grayscale invert" />

            <div className="container mx-auto px-8 relative z-10 max-w-5xl">

                {/* 1. THE DECREE: Tamil Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <span className="font-serif italic text-brand-gold/90 text-lg md:text-2xl tracking-wide">
                        நிகழ்வு எதுவாயினும் உணவு எங்களுடன்
                    </span>
                    <div className="h-px w-12 bg-brand-bronze/40 mx-auto mt-4" />
                </motion.div>

                {/* 2. THE SOVEREIGN SIGNATURE */}
                <div className="text-center mb-12">
                    <h2 className="font-display italic text-3xl md:text-5xl text-brand-ivory tracking-tighter mb-2">
                        Dindigul <span className="text-brand-gold">AR</span> Biriyani
                    </h2>
                    <p className="text-[9px] uppercase tracking-[0.6em] text-brand-gold/50 font-bold">
                        Your beloved Dindigul Ar Mujeeb
                    </p>
                </div>

                {/* 3. MINIMALIST NAVIGATION & SOCIALS */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-brand-ivory/10 pt-10 gap-8">

                    {/* Social Suite */}
                    <div className="flex gap-8">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, color: "#C5A059" }}
                                className="text-brand-ivory/40 hover:text-brand-gold transition-colors duration-500"
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Back to Top - The "Glinting" Coin */}
                    <button
                        onClick={scrollToTop}
                        className="group relative w-12 h-12 flex items-center justify-center rounded-full border border-brand-bronze/30 bg-brand-burgundy hover:bg-brand-bronze transition-all duration-700 overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        <ArrowUp size={20} className="text-brand-gold group-hover:text-brand-burgundy transition-colors" />
                    </button>

                    {/* Quick Info */}
                    <div className="text-right hidden md:block">
                        <p className="text-[10px] uppercase tracking-widest text-brand-ivory/30 leading-loose">
                            Catering • Franchise • Legacy<br />
                            Tamil Nadu, India
                        </p>
                    </div>
                </div>

                {/* 4. THE LEGAL FOOTER */}
                <div className="mt-16 text-center">
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-brand-ivory/20 font-bold">
                        © 2026 Dindigul AR Biryani • Imperial Excellence Since 2008
                    </p>
                </div>
            </div>
        </footer>
    );
};
"use client";

import React from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {

    // Social Links with "Real" Brand Colors & Logos
    const socialLinks = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/dindigul_ar_mujeeb_official/",
            // Instagram Gradient Icon
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#insta_gradient)" />
                    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                    <defs>
                        <linearGradient id="insta_gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#f09433" />
                            <stop offset="0.25" stopColor="#e6683c" />
                            <stop offset="0.5" stopColor="#dc2743" />
                            <stop offset="0.75" stopColor="#cc2366" />
                            <stop offset="1" stopColor="#bc1888" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/share/1GwAYniRsj/",
            // Facebook Blue Icon
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" fill="#1877F2" />
                </svg>
            )
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/919092229177",
            // WhatsApp Green Icon
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366" />
                </svg>
            )
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/@Dindigul_AR_Mujeeb_Official",
            // Real YouTube Red Icon
            icon: (
                <svg viewBox="0 0 24 24" fill="#FF0000" className="w-8 h-8">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000" />
                    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white" />
                </svg>
            )
        },
    ];

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer
            id="footer" // <--- Added ID here for Contact Tab navigation
            className="relative bg-brand-burgundy pt-16 pb-8 overflow-hidden border-t-2 border-brand-bronze/30"
        >
            {/* Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] grayscale invert" />

            <div className="container mx-auto px-8 relative z-10 max-w-5xl">

                {/* 1. THE DECREE */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <span className="font-serif font-bold text-brand-gold/90 text-lg md:text-2xl tracking-wide">
                        நிகழ்வு எதுவாயினும் உணவு எங்களுடன்
                    </span>
                    <div className="h-px w-12 bg-brand-bronze/40 mx-auto mt-4" />
                </motion.div>

                {/* 2. THE SIGNATURE */}
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl md:text-5xl text-brand-gold tracking-tighter mb-2">
                        Dindigul AR Biriyani
                    </h2>
                    <p className="text-[12px] uppercase tracking-[0.6em] text-brand-gold font-bold">
                        Your beloved Dindigul Ar Mujeeb
                    </p>
                </div>

                {/* 3. NAVIGATION, SOCIALS & CONTACT */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-brand-ivory/10 pt-10 gap-8">

                    {/* Left: Social Logos */}
                    <div className="flex gap-8 items-center">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="transition-transform duration-300 drop-shadow-2xl"
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Center: Scroll Top */}
                    <button
                        onClick={scrollToTop}
                        className="group relative w-12 h-12 flex items-center justify-center rounded-full border border-brand-bronze/30 bg-brand-burgundy hover:bg-brand-bronze transition-all duration-700 overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        <ArrowUp size={20} className="text-brand-gold group-hover:text-brand-burgundy transition-colors" />
                    </button>

                    {/* Right: Contact Information */}
                    <div className="text-center md:text-right flex flex-col gap-3">
                        <a href="tel:+919842112345" className="group flex items-center justify-end gap-3 text-brand-ivory/60 hover:text-brand-gold transition-colors">
                            <span className="text-[10px] md:text-xs font-bold tracking-widest font-display">+91 9092229177</span>
                            <Phone size={14} className="text-brand-gold/50 group-hover:text-brand-gold" />
                        </a>
                        <a href="tel:+919842167890" className="group flex items-center justify-end gap-3 text-brand-ivory/60 hover:text-brand-gold transition-colors">
                            <span className="text-[10px] md:text-xs font-bold tracking-widest font-display">+91 9092229179</span>
                            <Phone size={14} className="text-brand-gold/50 group-hover:text-brand-gold" />
                        </a>
                        <a href="mailto:contact@dindigularbiryani.com" className="group flex items-center justify-end gap-3 text-brand-ivory/60 hover:text-brand-gold transition-colors">
                            <span className="text-[10px] md:text-xs font-bold tracking-widest lowercase">dindigularfoods@gmail.com</span>
                            <Mail size={14} className="text-brand-gold/50 group-hover:text-brand-gold" />
                        </a>
                    </div>
                </div>

                {/* 4. COPYRIGHT */}
                <div className="mt-16 text-center">
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-brand-ivory/20 font-bold">
                        © 2026 Dindigul AR Biryani • Imperial Excellence
                    </p>
                </div>
            </div>
        </footer>
    );
};
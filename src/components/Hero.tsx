"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useProspectus } from "@/context/ProspectusContext";
import { ChevronDown, History } from "lucide-react";

export const Hero = () => {
    const { openProspectus } = useProspectus();

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#1A0505] pt-32 md:pt-20">
            {/* ^ Added pt-32 to push everything down below the fixed Header */}

            {/* === BACKGROUND LAYER === */}
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-[1.05] opacity-60">
                    <source src="/images/background_video.mp4" type="video/mp4" />
                </video>

                {/* Dark Brown Overlay */}
                <div className="absolute inset-0 bg-[#2A0A0A]/25 mix-blend-multiply" />
                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1A0505]/50 to-[#1A0505]" />
            </div>

            {/* === CONTENT LAYER === */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 max-w-5xl mx-auto"
            >
                {/* 1. CENTER BADGE LOGO */}
                {/* Now sits nicely below the header due to section padding */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#C5A059]/20 blur-[60px] rounded-full" />
                        <img 
                            src="/logo.png" 
                            alt="AR Biryani Seal" 
                            className="relative w-32 h-32 md:w-56 md:h-56 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
                        />
                    </div>
                </div>

                {/* 2. ESTABLISHED TAGLINE */}
                <div className="flex items-center justify-center gap-4 mb-4 opacity-90">
                    <div className="h-[1px] w-8 md:w-16 bg-[#C5A059]/60" />
                    <span className="font-sans text-[#C5A059] font-bold uppercase text-[10px] md:text-xs tracking-[0.3em]">
                        Est • 2008 • The Legacy of Dindigul
                    </span>
                    <div className="h-[1px] w-8 md:w-16 bg-[#C5A059]/60" />
                </div>

                {/* 3. MAIN HEADING */}
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#C5A059] uppercase tracking-tight drop-shadow-2xl leading-none">
                    Dindigul AR Biriyani
                </h1>

                {/* 4. SUBHEADING */}
                <p className="font-serif text-lg md:text-2xl text-[#C5A059] uppercase tracking-[0.15em] font-light mb-6">
                    Authentic Dindigul Seeraga Samba Biriyani
                </p>

                {/* 5. ITALIC QUOTE */}
                <p className="font-serif text-base md:text-xl text-[#C5A059] italic mb-10 max-w-3xl mx-auto">
                    &quot;Where catering precision meets the secret spice blend of the South.&quot;
                </p>

                {/* 6. BUTTONS */}
               <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-12">
                    {/* Primary: Scroll to Franchise Models */}
                    <Link href="#tiers">
                        <button
                            className="min-w-[220px] px-8 py-4 bg-[#C5A059] text-[#2A0A0A] text-xs font-bold tracking-[0.25em] uppercase rounded-full shadow-lg hover:bg-[#E5C079] transition-all duration-300"
                        >
                            Explore Franchise
                        </button>
                    </Link>

                    <Link href="/about">
                        <button className="min-w-[220px] px-8 py-4 bg-transparent border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase rounded-full hover:bg-[#C5A059]/10 hover:border-[#C5A059] transition-all duration-300 flex items-center justify-center gap-2">
                            <History size={14} /> The AR Legacy
                        </button>
                    </Link>
                </div>

            </motion.div>

            {/* === SCROLL INDICATOR === */}
            {/* Positioned safely at bottom-10 with z-20 to ensure visibility */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C5A059]/60 z-20"
            >
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</span>
                <ChevronDown size={20} className="animate-bounce" />
            </motion.div>

        </section>
    );
};
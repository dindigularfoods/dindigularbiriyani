"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Added for navigation
import { useProspectus } from "@/context/ProspectusContext";
import { ChevronDown, History } from "lucide-react"; // Added History icon

export const Hero = () => {
    const { openProspectus } = useProspectus();

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#1A0505]">

            {/* === SPICE NEBULA & VIDEO ENGINE === */}
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-[1.05] opacity-100">
                    <source src="/images/background_video.mp4" type="video/mp4" />
                </video>

                {/* MODIFIED LAYER OPACITY: Midnight Burgundy Multiply */}
                <div className="absolute inset-0 bg-[#1A0505]/50 mix-blend-multiply" />

                {/* SpiceNebula Pulses */}
                <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-brand-gold/15 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-brand-burgundy/40 blur-[150px]" />

                {/* Depth Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A0505] via-transparent to-[#1A0505]" />
            </div>

            {/* === CORE CONTENT LAYER === */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="max-w-4xl z-10 pt-24 md:pt-36"
            >
                {/* LARGE SOVEREIGN LOGO */}
                <motion.div className="flex justify-center mb-10">
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-gold/20 blur-[100px] rounded-full scale-150" />
                        <img src="/logo.png" alt="AR Biryani" className="relative w-48 h-48 md:w-64 md:h-64 object-contain brightness-110 drop-shadow-2xl" />
                    </div>
                </motion.div>

                <motion.span className="font-sans text-brand-gold font-bold uppercase text-[9px] md:text-[11px] mb-8 block tracking-[0.4em]">
                    EST. 2008 • THE LEGACY OF DINDIGUL
                </motion.span>

                <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] text-brand-ivory uppercase tracking-tighter drop-shadow-lg">
                    DINDIGUL <span className="text-brand-gold italic font-serif">AR BIRIYANI</span><br />
                    <span className="text-xl md:text-3xl tracking-[0.2em] font-light text-brand-ivory/80 mt-2 block">
                        AUTHENTIC <span className="text-brand-gold">DINDIGUL</span> SEERAGA SAMBA
                    </span>
                </h2>

                <p className="font-serif text-base md:text-xl text-brand-ivory/60 mb-12 italic max-w-2xl mx-auto leading-relaxed">
                    &quot;Where catering precision meets the secret spice blend of the South.&quot;
                </p>

                {/* === ACTION BUTTONS === */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    {/* Primary Action: Franchise */}
                    <motion.button
                        onClick={openProspectus}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full md:w-auto px-12 py-5 bg-brand-gold text-brand-burgundy text-[11px] font-bold tracking-[0.2em] uppercase rounded-full shadow-2xl hover:bg-brand-ivory transition-colors duration-500"
                    >
                        Explore Franchise
                    </motion.button>

                    {/* Secondary Action: About Page */}
                    <Link href="/about" className="w-full md:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full md:w-auto px-12 py-5 bg-transparent border border-brand-gold/40 text-brand-gold text-[11px] font-bold tracking-[0.2em] uppercase rounded-full backdrop-blur-sm hover:bg-brand-gold/10 transition-all duration-500 flex items-center justify-center gap-2"
                        >
                            <History size={14} className="opacity-70" />
                            The AR Legacy
                        </motion.button>
                    </Link>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                <div className="w-[1.5px] h-12 bg-gradient-to-b from-brand-gold via-brand-gold/50 to-transparent" />
                <ChevronDown size={14} className="text-brand-gold opacity-40" />
            </motion.div>
        </section>
    );
};
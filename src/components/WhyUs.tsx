"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown, Scroll, Soup, ClipboardCheck, TrendingUp, Globe, ChevronRight } from "lucide-react";
import { useProspectus } from "@/context/ProspectusContext";
import { SpiceNebula } from "@/components/SpiceNebula";

const pillars = [
    { title: "Proven Identity", description: "A powerful brand identity system backed by 18+ years of Dindigul legacy.", icon: <Crown className="w-10 h-10" /> },
    { title: "Strategic Growth", description: "Data-driven site selection and micro-location strategy reports.", icon: <TrendingUp className="w-10 h-10" /> },
    { title: "Operational Precision", description: "End-to-end Restaurant Operations SOPs and control checklists.", icon: <ClipboardCheck className="w-10 h-10" /> },
    { title: "Staff Training", description: "Standardized cooking manuals and hands-on staff training.", icon: <Scroll className="w-10 h-10" /> },
    { title: "The AR Secret", description: "Uninterrupted supply of our real authentic AR Masalas and spices.", icon: <Soup className="w-10 h-10" /> },
    { title: "360° Ecosystem", description: "Ongoing marketing, brand audits, and 24x7 central assistance.", icon: <Globe className="w-10 h-10" /> },
];

export const WhyUs = () => {
    const { openProspectus } = useProspectus();

    return (
        <section className="pt-0 pb-20 px-8 md:px-16 bg-brand-ivory relative overflow-hidden">

            {/* === SPICE NEBULA BACKGROUND === */}
            <SpiceNebula />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <span className="text-brand-bronze font-sans font-bold uppercase tracking-[0.4em] text-[12px] mb-4 block">Strategic Advantage</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-burgundy mb-6 uppercase">Why Choose AR?</h2>
                    <div className="h-1 w-32 bg-brand-bronze mx-auto opacity-60" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative group p-10 bg-white/90 backdrop-blur-sm border-4 border-brand-bronze/80 rounded-[3rem] transition-all duration-500 overflow-hidden"
                            style={{ boxShadow: "0 0 40px 10px rgba(153, 115, 43, 0.2), 0 15px 25px -5px rgba(0, 0, 0, 0.05)" }}
                            whileHover={{ y: -15, scale: 1.03, boxShadow: "0 0 80px 15px rgba(153, 115, 43, 0.45), 0 50px 70px -20px rgba(0, 0, 0, 0.3)" }}
                        >
                            {/* THE GLINT ENGINE */}
                            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer opacity-0 group-hover:opacity-100" />
                            </div>

                            {/* HOVER CURTAIN */}
                            <motion.div className="absolute top-0 left-0 w-full h-[45%] bg-brand-burgundy origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 z-0" />

                            {/* WATERMARK */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700 z-0">
                                <span className="font-display text-[240px] text-brand-burgundy uppercase">AR</span>
                            </div>

                            {/* CONTENT */}
                            <div className="relative z-10">
                                <div className="mb-6 text-brand-bronze transition-all duration-500 group-hover:text-brand-ivory group-hover:scale-110 group-hover:translate-y-2">
                                    {pillar.icon}
                                </div>
                                <div className="mt-8 transition-transform duration-500 group-hover:translate-y-2">
                                    <h3 className="font-serif text-2xl font-bold text-brand-burgundy mb-4">{pillar.title}</h3>
                                    <p className="font-sans text-brand-burgundy/80 leading-relaxed text-sm">{pillar.description}</p>
                                </div>
                            </div>

                            {/* Glass-Edge Highlight */}
                            <div className="absolute inset-0 rounded-[2.8rem] border border-white/20 pointer-events-none z-20" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 md:mt-24 text-center px-4">
                    <motion.button
                        onClick={openProspectus}
                        whileHover={{ scale: 1.05, backgroundColor: "#99732B", color: "#FFFFFF" }}
                        whileTap={{ scale: 0.95 }}
                        className="
            group
            w-full md:w-auto
            px-8 py-5 md:px-16 md:py-6 
            bg-brand-burgundy 
            text-brand-ivory 
            text-xs md:text-sm 
            font-extrabold 
            uppercase 
            tracking-[0.25em] md:tracking-[0.4em] 
            rounded-full 
            transition-all 
            shadow-2xl
            flex items-center justify-center gap-3 mx-auto
        "
                    >
                        Franchise Enquiry
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}; 
"use client";

import React from "react";
import { motion } from "framer-motion";

export const PressHero = () => {
    return (
        /* FIX 1: Added pb-32 (Padding Bottom) to create a safe distance 
           from the next section. Increased pt-32 for better vertical balance.
        */
        <section className="relative min-h-[90vh] flex items-center bg-brand-ivory overflow-hidden pt-32 pb-32 px-8 md:px-16 lg:px-24">
            {/* Textured Background Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Visual Element: 3D Newspaper Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: -100, rotate: -5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative group cursor-pointer"
                >
                    {/* Featured Story Badge */}
                    <div className="absolute -top-4 -right-4 z-20 bg-brand-gold text-brand-burgundy px-4 py-2 font-display text-[10px] tracking-[0.2em] uppercase font-bold shadow-xl">
                        Featured Story
                    </div>

                    {/* The "Newspaper" Clipping Mockup */}
                    <div className="relative aspect-[3/4] md:aspect-[4/5] max-w-md mx-auto bg-[#Fdfbf2] shadow-[20px_40px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-black/5 transform-gpu transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-0">
                        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] z-10 pointer-events-none" />

                        <div className="p-8 md:p-12 h-full flex flex-col font-serif text-brand-burgundy/80">
                            {/* Masthead */}
                            <div className="border-b-2 border-brand-burgundy/20 pb-4 mb-6 flex justify-between items-end">
                                <span className="font-display text-[10px] tracking-widest uppercase opacity-60">The Culinary Chronicle</span>
                                <span className="text-[10px] opacity-60">Est. 2008</span>
                            </div>

                            {/* Main Title (Tamil) */}
                            <h2 className="font-display text-2xl md:text-3xl text-brand-burgundy mb-4 leading-tight">
                                ஒரு தேக்கரண்டியிலிருந்து... <br />
                                பல ஆயிரம் இதயங்களை வென்ற கதை!
                            </h2>

                           
                            <div className="relative aspect-video mb-6 grayscale sepia-[0.3] brightness-95 overflow-hidden border border-brand-burgundy/10">
                                <img
                                    src="/images/chapter3-image.jpeg"
                                    alt="AR Mujeeb Rahman Story"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-brand-burgundy/5 mix-blend-multiply" />
                            </div>
                            

                            {/* Article Body Snippet */}
                            <div className="space-y-4 text-xs md:text-sm leading-relaxed opacity-80 columns-1 md:columns-2 gap-6">
                                <p>In the heart of Dindigul, a legacy was born not from gold, but from grain. AR Mujeeb Rahman, with nothing but a single spoon and a vision for authenticity...</p>
                                <p>The secret of the Seeraga Samba rice became the foundation of an empire that today stands as a beacon of Tamil culinary heritage...</p>
                            </div>

                            <div className="mt-auto pt-8 border-t border-brand-burgundy/10 italic text-[10px] opacity-60 text-center">
                                Reproduced with permission from the 2024 Retrospective.
                            </div>
                        </div>
                    </div>

                    <div className="absolute -z-10 top-10 left-10 w-full h-full bg-brand-burgundy/5 rotate-3 shadow-xl border border-black/5" />
                    <div className="absolute -z-20 top-20 left-20 w-full h-full bg-brand-gold/5 -rotate-6 shadow-lg border border-black/5" />
                </motion.div>

                {/* Narrative Content */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <span className="font-display text-brand-gold text-xs tracking-[0.5em] uppercase mb-6 block">The Origins & Press</span>
                    <h1 className="font-display text-4xl md:text-6xl text-brand-burgundy mb-8 leading-[1.1]">
                        An Empire Built on <br />
                        <span className="text-brand-gold italic">Pure Conviction.</span>
                    </h1>

                    <p className="font-display text-lg text-brand-gold mb-8 leading-relaxed tracking-wide">
                        &quot;ஒரு தேக்கரண்டியிலிருந்து... பல ஆயிரம் இதயங்களை வென்ற கதை!&quot;
                    </p>

                    <p className="font-sans text-brand-burgundy/70 text-base md:text-lg mb-4 tracking-wider uppercase text-xs font-bold">
                        A chronicle of how a single visionary’s dream and a humble spoon captured the hearts of ten thousand.
                    </p>

                    {/* FIX 2: Reduced mb-8 to mb-6 to pull the button slightly higher */}
                    <p className="font-sans text-brand-burgundy/80 text-lg leading-relaxed mb-6 max-w-xl">
                        From a small catering service in Dindigul to a culinary empire, AR Mujeeb Rahman transformed a single dream into a legacy of love and authenticity.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <a
                            href="/ar-biriyani-article.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 px-10 py-5 bg-brand-gold text-brand-burgundy font-display text-xs tracking-[0.3em] uppercase hover:bg-brand-burgundy hover:text-brand-ivory transition-all duration-500 shadow-2xl interactive inline-block"
                        >
                            <span>View Original Press Release</span>
                            <motion.img
                                src="/images/spices/clove.png"
                                alt=""
                                className="w-5 h-5 object-contain brightness-0 group-hover:invert transition-all"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Drift Spices in Background */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-10 blur-sm">
                <img src="/images/spices/cinnamon.png" alt="" className="absolute top-20 right-[5%] w-32 rotate-45" />
                <img src="/images/spices/star-anise.png" alt="" className="absolute bottom-20 left-[10%] w-24 -rotate-12" />
            </div>
        </section>
    );
};
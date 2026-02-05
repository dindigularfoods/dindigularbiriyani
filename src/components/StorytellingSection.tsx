"use client";

import React, { useRef, useEffect, useState } from "react";
import {
    motion,
    useInView,
    useMotionValue,
    useSpring,
    animate,
} from "framer-motion";

/* ---------------------- Shared Chapter Wrapper ---------------------- */

const ChapterSection = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 50 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="min-h-screen flex items-center justify-center py-20"
        >
            {children}
        </motion.div>
    );
};

/* ---------------------- Chapter II Stats ---------------------- */

const ChapterTwoStats = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { amount: 0.6, once: false });

    const eventCount = useMotionValue(0);
    const stateCount = useMotionValue(0);

    const eventSpring = useSpring(eventCount, { stiffness: 90, damping: 15 });
    const stateSpring = useSpring(stateCount, { stiffness: 90, damping: 15 });

    const [eventDisplay, setEventDisplay] = useState(0);
    const [stateDisplay, setStateDisplay] = useState(0);

    useEffect(() => {
        let eventControls: ReturnType<typeof animate> | undefined;
        let stateControls: ReturnType<typeof animate> | undefined;

        if (inView) {
            eventCount.set(0);
            stateCount.set(0);
            eventControls = animate(eventCount, 2500, { duration: 1.2, ease: "easeOut" });
            stateControls = animate(stateCount, 4, { duration: 1.2, ease: "easeOut" });
        }

        return () => {
            eventControls?.stop();
            stateControls?.stop();
        };
    }, [inView, eventCount, stateCount]);

    useEffect(() => {
        const unsubscribeEvents = eventSpring.on("change", (v) => setEventDisplay(Math.round(v)));
        const unsubscribeStates = stateSpring.on("change", (v) => setStateDisplay(Math.round(v)));
        return () => {
            unsubscribeEvents();
            unsubscribeStates();
        };
    }, [eventSpring, stateSpring]);

    return (

        <div ref={ref} className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-12">
            {/* 1. Regional States (Now First) */}
            <div className="flex flex-col gap-2">
                <div className="w-16 h-[1px] bg-brand-gold/60" />
                <div className="flex flex-col">
                    <span className="font-display text-4xl md:text-5xl text-brand-gold">
                        {stateDisplay}+
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-ivory/60 mt-1">
                        Regional States
                    </span>
                </div>
            </div>

            {/* 2. Events Catered (Now Second) */}
            <div className="flex flex-col gap-2">
                <div className="w-16 h-[1px] bg-brand-gold/60" />
                <div className="flex flex-col">
                    <span className="font-display text-4xl md:text-5xl text-brand-gold">
                        {eventDisplay.toLocaleString()}+
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-ivory/60 mt-1">
                        Events Catered
                    </span>
                </div>
            </div>
        </div>
    );
};

/* ---------------------- Main Storytelling Section ---------------------- */

export const StorytellingSection = () => {
    return (
        <section className="relative bg-brand-burgundy text-brand-ivory overflow-x-hidden">
            <div className="absolute inset-0 pointer-events-none z-[5] opacity-[0.08] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />

            {/* Chapter I: THE CROWN ARCH (NEW SHAPE) */}
            <ChapterSection>
                <div className="container mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
                        {/* SHAPE: Deep Crown Arch (Rounded TL/TR) */}
                        <div className="aspect-[4/5] relative overflow-hidden border-4 border-brand-gold/60 rounded-t-[140px] rounded-b-[2rem] shadow-2xl">
                            <img src="/images/chapter-1-final.jpeg" alt="Chapter 1" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/60 to-transparent" />
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }}>
                        <span className="font-display text-brand-gold text-xs tracking-[0.5em] uppercase mb-4 block">Chapter I</span>
                        <h2 className="font-display text-4xl md:text-6xl text-brand-gold mb-8 leading-tight">The Lone Warrior’s Spark (2008)</h2>
                        <div className="font-serif text-lg md:text-xl text-brand-ivory/80 leading-relaxed space-y-6">
                            <p>In 2008, a journey began not with a grand restaurant, but with a single flame and a solitary warrior. AR Mujeeb Rahman didn&apos;t just cook; he dreamt.</p>
                            <p>Armed with a single ladle and a passion for the legendary <span className="text-brand-gold italic">Seeraga Samba</span> grain, he set out to prove that authentic taste doesn&apos;t need a palace—it just needs a soul.</p>
                        </div>
                    </motion.div>
                </div>
            </ChapterSection>

            {/* Chapter II: THE SOVEREIGN BOWL (NEW SHAPE) */}
            <ChapterSection>
                <div className="container mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="order-2 md:order-1">
                        <span className="font-display text-brand-gold text-xs tracking-[0.5em] uppercase mb-4 block">Chapter II</span>
                        <h2 className="font-display text-4xl md:text-6xl text-brand-gold mb-8 leading-tight">The Catering Titan</h2>
                        <div className="font-serif text-lg md:text-xl text-brand-ivory/80 leading-relaxed space-y-6 mb-8">
                            <p>The dream evolved from a kitchen into a movement. AR Mujeeb Rahman founded his catering company amidst immense struggle, turning every challenge into a lesson in precision.</p>
                            <p>Today, that perseverance has mastered the art of large-scale hospitality across our region without losing the soul of Dindigul.</p>
                        </div>
                        <ChapterTwoStats />
                    </motion.div>

                    <motion.div className="order-1 md:order-2 flex justify-center" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                        {/* SHAPE: Sovereign Foundation Bowl */}
                        <div className="aspect-[2/3] relative overflow-hidden border-4 border-brand-gold/60 rounded-t-[140px] rounded-b-[2rem] shadow-2xl">
                            <img
                                src="/images/chapter-2-final.jpeg"
                                alt="Chapter 2 - The Catering Titan"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/60 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </ChapterSection>
            {/* Chapter III: THE ORIGINAL ASYMMETRIC SHIELD (REUSED FROM CHAPTER 1) */}
            <ChapterSection>
                <div className="container mx-auto max-w-10xl px-8 md:px-16 grid lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7 relative"
                    >
                        <div className="relative aspect-[4/5] w-full overflow-hidden border-4 border-brand-gold/60 rounded-[2rem] rounded-tr-[120px] rounded-bl-[120px] shadow-2xl">
                            <img
                                src="/images/ar_hero_image.jpeg"
                                alt="Chapter 3"
                                className="w-full h-full object-cover object-[center_20%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-burgundy/40 to-transparent" />
                        </div>


                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-brand-gold/20 -z-10" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-5">
                        <span className="font-display text-brand-gold text-xs tracking-[0.5em] uppercase mb-4 block">Chapter III</span>
                        <h2 className="font-display text-4xl md:text-6xl text-brand-gold mb-8 leading-tight">The Mentor’s Legacy</h2>
                        <div className="font-serif text-lg md:text-xl text-brand-ivory/80 leading-relaxed space-y-6">
                            <p>Today, the ladle has become a torch. Having built a successful empire, AR Mujeeb Rahman’s mission has evolved: <span className="text-brand-gold italic">to mentor the youth of tomorrow.</span></p>
                            <p className="italic border-l-2 border-brand-gold/40 pl-6 py-2">He is no longer just serving Biryani; he is serving opportunity.</p>
                        </div>
                    </motion.div>
                </div>
            </ChapterSection>
            {/* SEAL OF AUTHENTICITY */}
            <div className="relative min-h-screen flex items-center justify-center py-24 border-t border-brand-gold/20">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="relative">
                                <div className="relative border-4 border-brand-gold/40 overflow-hidden rounded-[2.5rem] shadow-sovereign">
                                    <img src="/images/seal_replacement.jpeg" alt="Portrait" className="w-full h-full object-cover" />
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-left">
                                <h3 className="font-display text-3xl md:text-5xl text-brand-gold mb-8 leading-tight">The Seal of Authenticity</h3>
                                <div className="border-l-4 border-brand-gold pl-8 py-6 mb-12">
                                    <p className="font-display text-2xl md:text-3xl text-brand-gold tracking-wide mb-4">எப்போதும் உங்கள் அன்போடு</p>
                                    <p className="font-serif italic text-xl md:text-2xl text-brand-gold/90">— திண்டுக்கல் AR முஜீப்</p>
                                </div>
                                <p className="font-sans text-brand-ivory/70 text-sm leading-relaxed uppercase tracking-[0.2em] font-bold">
                                    Founder & Chairman <br /> Dindigul AR Biriyani <br /> Est. 2008
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
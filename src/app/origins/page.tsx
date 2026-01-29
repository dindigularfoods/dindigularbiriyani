"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiceNebula } from "@/components/SpiceNebula";

const ChapterSection = ({ children }: { children: React.ReactNode; _index?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 50 }}
            transition={{
                duration: 1.2,
                ease: "easeOut"
            }}
            className="min-h-screen flex items-center justify-center py-20"
        >
            {children}
        </motion.div>
    );
};

const OriginsPage = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    // Floating spoon animation
    const spoonY = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const spoonOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
    const spoonRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <main className="relative bg-brand-burgundy text-brand-ivory overflow-x-hidden selection:bg-brand-gold selection:text-brand-burgundy">
            <SpiceNebula speed={0.3} />
            <Header />

            {/* Parchment Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[5] opacity-[0.08] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />

            {/* Hero Section: The Single Spoon */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070"
                        alt="Traditional Kitchen"
                        className="w-full h-full object-cover opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-burgundy/80 via-brand-burgundy/60 to-brand-burgundy" />
                </div>

                {/* Spotlight Effect */}
                <div className="absolute inset-0 z-[1]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px]" />
                </div>

                {/* Floating Spoon */}
                <motion.div
                    style={{ y: spoonY, opacity: spoonOpacity, rotate: spoonRotate }}
                    className="relative z-10 mb-16"
                >
                    <div className="relative w-32 h-32 md:w-48 md:h-48">
                        <div className="absolute inset-0 bg-brand-gold/30 rounded-full blur-3xl animate-pulse" />
                        <div className="relative w-full h-full flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(197,160,89,0.8)]">
                                <ellipse cx="50" cy="30" rx="18" ry="22" fill="#C5A059" />
                                <rect x="46" y="50" width="8" height="45" rx="4" fill="#C5A059" />
                                <circle cx="50" cy="30" r="12" fill="#E5C585" opacity="0.6" />
                            </svg>
                        </div>
                    </div>
                </motion.div>

                <div className="relative z-10 text-center px-8 max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="font-display text-5xl md:text-7xl text-brand-gold mb-8 leading-tight"
                    >
                        ஒரு தேக்கரண்டியிலிருந்து...
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="font-serif text-xl md:text-3xl text-brand-ivory/90 italic max-w-3xl mx-auto"
                    >
                        &quot;The chronicle of a visionary dream that captured ten thousand hearts.&quot;
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
                >
                    <span className="font-sans text-[10px] uppercase tracking-widest text-brand-gold/60">Scroll to Begin</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent"
                    />
                </motion.div>
            </section>

            {/* Chapter I: The Lone Warrior */}
            <ChapterSection _index={1}>
                <div className="container mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="aspect-[4/5] relative overflow-hidden border border-brand-gold/20">
                            <img
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070"
                                alt="The Lone Warrior"
                                className="w-full h-full object-cover grayscale sepia-[0.4] brightness-75"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/60 to-transparent" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <span className="font-display text-brand-gold text-xs tracking-[0.5em] uppercase mb-4 block">Chapter I</span>
                        <h2 className="font-display text-4xl md:text-6xl text-brand-gold mb-8 leading-tight">
                            The Lone Warrior
                        </h2>
                        <div className="font-serif text-lg md:text-xl text-brand-ivory/80 leading-relaxed space-y-6">
                            <p className="text-brand-gold/60 text-sm uppercase tracking-widest font-sans">2008: The Genesis</p>
                            <p>
                                In 2008, at the threshold of a small catering service, AR Mujeeb Rahman&apos;s confidence took flight
                                alongside the fragrance of his first biryani. He fought as a <span className="text-brand-gold font-bold">lone warrior</span> against
                                every challenge, learning that to win a heart, food must be an act of complete devotion.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </ChapterSection>

            {/* Chapter II: The Penance of Tavam */}
            <ChapterSection _index={2}>
                <div className="container mx-auto px-8 md:px-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="font-display text-brand-gold text-xs tracking-[0.5em] uppercase mb-4 block">Chapter II</span>
                            <h2 className="font-display text-4xl md:text-6xl text-brand-gold mb-12 leading-tight">
                                The Penance of &apos;Tavam&apos;
                            </h2>
                        </motion.div>

                        <div className="flex justify-center gap-8 md:gap-16 mb-12">
                            {["Love", "Hard Work", "Dreams"].map((word, idx) => (
                                <motion.span
                                    key={word}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                                    className="font-display text-2xl md:text-4xl text-brand-gold"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="aspect-[21/9] relative overflow-hidden border border-brand-gold/20 mb-12"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=2070"
                                alt="The Royal Secret"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-gold/10 mix-blend-overlay" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="font-serif text-xl md:text-2xl text-brand-ivory/80 leading-relaxed italic"
                        >
                            To Mujeeb, biryani was never just a business; it was a <span className="text-brand-gold font-bold">Tavam</span> (Penance).
                            Every grain was infused with his dreams, his hard work, and his love.
                        </motion.p>
                    </div>
                </div>
            </ChapterSection>

            {/* Chapter III: The Empire & The Mentor */}
            <ChapterSection _index={3}>
                <div className="container mx-auto px-8 md:px-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative aspect-[21/9] overflow-hidden border border-brand-gold/20 mb-16"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070"
                            alt="The Empire"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy via-brand-burgundy/40 to-transparent" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center px-8">
                                <span className="font-display text-brand-gold text-xs tracking-[0.5em] uppercase mb-4 block">Chapter III</span>
                                <h2 className="font-display text-4xl md:text-6xl text-brand-gold mb-6 leading-tight">
                                    The Empire &amp; The Mentor
                                </h2>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <p className="font-serif text-xl md:text-2xl text-brand-ivory/80 leading-relaxed">
                            Today, that single spoon has built an empire. Beyond the flavors, he now mentors the next generation,
                            teaching that the ingredients of a successful life are the same as a perfect biryani:
                            <span className="text-brand-gold font-bold">faith, resilience, and love</span>.
                        </p>
                    </motion.div>
                </div>
            </ChapterSection>

            {/* The Seal of Authenticity */}
            <section className="relative min-h-screen flex items-center justify-center py-20 border-t border-brand-gold/20">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2 }}
                                className="relative"
                            >
                                <div className="aspect-[3/4] relative border border-brand-gold/20 overflow-hidden">
                                    <img
                                        src="/uploads/founder-portrait.jpg"
                                        alt="AR Mujeeb Rahman"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-64 h-64 rounded-full border-8 border-brand-gold/20 flex items-center justify-center">
                                            <span className="font-display text-9xl text-brand-gold/10">AR</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="text-left"
                            >
                                <h3 className="font-display text-3xl md:text-5xl text-brand-gold mb-8 leading-tight">
                                    The Seal of Authenticity
                                </h3>

                                <div className="border-l-4 border-brand-gold pl-8 py-6 mb-12">
                                    <p className="font-display text-2xl md:text-3xl text-brand-gold tracking-wide mb-4">
                                        எப்போதும் உங்கள் அன்போடு
                                    </p>
                                    <p className="font-serif italic text-xl md:text-2xl text-brand-gold/90">
                                        — AR முஜீப் ரஹ்மான்
                                    </p>
                                    <span className="text-xs uppercase tracking-[0.3em] text-brand-ivory/60 mt-4 block">
                                        Always with Love — AR Mujeeb Rahman
                                    </span>
                                </div>

                                <p className="font-sans text-brand-ivory/70 text-sm leading-relaxed">
                                    Founder &amp; Chairman <br />
                                    Dindigul AR Biryani <br />
                                    Est. 2008
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default OriginsPage;
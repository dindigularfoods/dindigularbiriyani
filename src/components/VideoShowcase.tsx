"use client";

import React from "react";
import { motion } from "framer-motion";

export const VideoShowcase = () => {
    return (
        <section className="py-24 bg-brand-ivory relative overflow-hidden">
            <div className="container mx-auto px-8 md:px-16">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-3xl md:text-5xl font-bold mb-4"
                    >
                        The <span className="text-brand-gold italic">Story</span> of DINDIGUL AR MUJEEB
                    </motion.h2>
                    <div className="h-1 w-24 bg-brand-gold mx-auto"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-video max-w-5xl mx-auto gold-border overflow-hidden shadow-2xl"
                >
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/837f1kNSSXw?autoplay=0&mute=0&controls=1&rel=0"
                        title="Dindigul AR Biryani - The Soul of Dindigul"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </motion.div>

                <div className="mt-12 text-center">
                    <p className="font-serif text-xl text-brand-burgundy font-bold italic max-w-2xl mx-auto">
                        &quot;A journey through the aromatic lanes of Dindigul, where every grain of Seeraga Samba tells a story of royalty.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
};

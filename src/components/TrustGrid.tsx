"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
    {
        title: "20+ Years Legacy",
        desc: "A heritage forged in the fires of traditional clay deghs and royal patronage.",
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=600&auto=format&fit=crop", // Traditional cooking
        filter: "sepia(0.8) contrast(1.1)",
    },
    {
        title: "Practical Academy",
        desc: "World-class training systems ensuring every grain meets the AR standard.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop", // Clean kitchen/chef
        filter: "none",
    },
    {
        title: "Sovereign Kitchen",
        desc: "Polished precision. Industrial-grade equipment engineered for consistency.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop", // Modern kitchen
        filter: "grayscale(1) brightness(0.8)",
    },
    {
        title: "Spice Alchemy",
        desc: "Freshly ground secretions of Dindigul—the soul of our signature aroma.",
        image: "https://images.unsplash.com/photo-1596797038558-477088d4cf54?q=80&w=600&auto=format&fit=crop", // Spices
        filter: "contrast(1.2)",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export const TrustGrid = () => {
    return (
        <section id="about" className="py-24 px-8 md:px-16 container mx-auto">
            <div className="text-center mb-16">
                <h3 className="font-display text-4xl font-bold mb-4">The Trust <span className="text-brand-gold">Pillars</span></h3>
                <p className="font-serif italic text-brand-burgundy/60">Excellence etched in every grain.</p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {pillars.map((pillar, idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className="group relative flex flex-col items-center"
                    >
                        <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden gold-border p-2 bg-brand-ivory">
                            <div className="w-full h-full overflow-hidden relative">
                                <img
                                    src={pillar.image}
                                    alt={pillar.title}
                                    style={{ filter: pillar.filter }}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-burgundy/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            {/* Filigree Corner Decoration (CSS based) */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-gold"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-gold"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-gold"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-gold"></div>
                        </div>

                        <h4 className="font-display text-lg font-bold mb-2 group-hover:text-brand-gold transition-colors">
                            {pillar.title}
                        </h4>
                        <p className="text-center text-sm text-brand-burgundy/70 px-4">
                            {pillar.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

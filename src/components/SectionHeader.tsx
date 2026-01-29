"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    light?: boolean;
}

export const SectionHeader = ({ title, subtitle, light = false }: SectionHeaderProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-left"
        >
            <h2 className={`font-display text-4xl md:text-6xl mb-6 ${light ? "text-brand-ivory" : "text-brand-burgundy"
                }`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`font-serif text-lg md:text-xl italic max-w-2xl ${light ? "text-brand-ivory/70" : "text-brand-burgundy/60"
                    }`}>
                    {subtitle}
                </p>
            )}
            <div className="w-24 h-[1px] bg-brand-gold mt-8" />
        </motion.div>
    );
};
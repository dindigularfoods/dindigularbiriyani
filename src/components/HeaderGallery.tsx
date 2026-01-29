"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * OWNER'S EDITABLE SECTION
 * Change image paths or captions here.
 */
const galleryConfig = [
    { id: 1, src: "/images/gallery/event-1.jpg", alt: "Royal Catering", span: "md:col-span-2 md:row-span-2" },
    { id: 2, src: "/images/gallery/food-1.jpg", alt: "Seeraga Samba Legacy", span: "md:col-span-1 md:row-span-1" },
    { id: 3, src: "/images/gallery/event-2.jpg", alt: "Celebration", span: "md:col-span-1 md:row-span-2" },
    { id: 4, src: "/images/ar_hero_image.jpeg", alt: "The Empire", span: "md:col-span-1 md:row-span-1" },
    { id: 5, src: "/images/gallery/food-2.jpg", alt: "Signature Dish", span: "md:col-span-2 md:row-span-1" },
];

export const HeaderGallery = () => {
    return (
        <section id="gallery" className="py-24 bg-brand-ivory overflow-hidden px-8 md:px-16 lg:px-24 scroll-mt-20">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="font-display text-brand-gold text-xs tracking-[0.5em] uppercase mb-4 block">
                        Visual Legacy
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl text-brand-burgundy mb-6">
                        The <span className="text-brand-gold italic">Gallery</span> of Royalty
                    </h2>
                    <div className="w-24 h-[1px] bg-brand-gold mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
                    {galleryConfig.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className={`relative group overflow-hidden rounded-sm ${item.span}`}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <p className="font-display text-brand-gold text-[10px] tracking-widest uppercase">Archive {item.id}</p>
                                <h4 className="font-serif text-brand-ivory text-lg italic">{item.alt}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="font-serif text-2xl text-brand-burgundy font-bold italic max-w-2xl mx-auto leading-relaxed">
                        &quot;A journey through the aromatic lanes of Dindigul, where every grain of Seeraga Samba tells a story of royalty.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
};
"use client";

import React from "react";
import { motion } from "framer-motion";

interface GalleryItem {
    url: string;
    caption: string;
    colSpan: string;
    aspect: string;
}

const galleryItems: GalleryItem[] = [
    {
        url: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80",
        caption: "Sacred Spices",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-[3/4]"
    },
    {
        url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
        caption: "Traditional Handi",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-[1/1]"
    },
    {
        url: "https://images.unsplash.com/photo-1563379091339-03b21ef4a4f8?auto=format&fit=crop&q=80",
        caption: "Heritage Flavor",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-[3/4]"
    },
    {
        url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80",
        caption: "Seeraga Samba",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-[1/1]"
    },
    {
        url: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80",
        caption: "18 Years",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-[1/1]"
    },
    {
        url: "https://images.unsplash.com/photo-1516714435131-44eb18ce9214?auto=format&fit=crop&q=80",
        caption: "The Secret Blend",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-[1/1]"
    }
];

export const HeritageGallery = () => {
    return (
        <section className="py-24 px-8 md:px-16 container mx-auto relative z-10 h-auto">
            <div className="text-center mb-16">
                <span className="font-display text-brand-gold text-xs tracking-[0.3em] uppercase mb-4 block">
                    Visual Heritage
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-burgundy mb-4">
                    Royal Gallery Wall
                </h2>
                <div className="h-1 w-24 bg-brand-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-12 gap-4 items-start">
                {galleryItems.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className={`${item.colSpan} group relative overflow-hidden border-[10px] border-white shadow-xl hover:border-brand-gold transition-all duration-500 max-h-[500px]`}
                    >
                        <div className={`${item.aspect} w-full overflow-hidden`}>
                            <img
                                src={item.url}
                                alt={item.caption}
                                loading="lazy"
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Caption Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <span className="font-serif text-brand-gold italic text-base md:text-lg drop-shadow-md">
                                {item.caption}
                            </span>
                        </div>

                        {/* Corner Gold Accent */}
                        <div className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute top-2 right-2 w-full h-full border-t border-r border-brand-gold/50"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
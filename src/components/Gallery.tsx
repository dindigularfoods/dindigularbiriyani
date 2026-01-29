"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ZoomIn, Film } from "lucide-react";

interface MediaItem {
    id: number;
    type: "image" | "video";
    url: string;
    thumbnail: string;
    title: string;
    category?: string;
}

// Example data structure that matches the Admin outputs
const galleryData: MediaItem[] = [
    { 
        id: 1, 
        type: "image", 
        url: "/images/gallery/dish1.jpg", 
        thumbnail: "/images/gallery/dish1.jpg", 
        title: "The Sovereign Platter",
        category: "Cuisine"
    },
    { 
        id: 2, 
        type: "video", 
        url: "/videos/heritage_reel.mp4", 
        thumbnail: "/images/gallery/video_cover.jpg", 
        title: "A Legacy in Motion",
        category: "Heritage"
    },
];

export const Gallery = () => {
    const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

    return (
        <section className="py-32 bg-brand-ivory relative overflow-hidden">
            <div className="container mx-auto px-8 md:px-16">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-display text-brand-gold text-xs tracking-[0.6em] uppercase block mb-4"
                    >
                        The Media Vault
                    </motion.span>
                    <h2 className="font-display text-5xl md:text-7xl text-brand-burgundy italic">
                        Visual <span className="text-brand-gold">Heritage</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {galleryData.map((item) => (
                        <motion.div
                            key={item.id}
                            layoutId={`media-${item.id}`}
                            whileHover={{ y: -15 }}
                            onClick={() => setSelectedMedia(item)}
                            className="group relative aspect-[4/5] cursor-pointer rounded-[3rem] overflow-hidden border-2 border-brand-bronze/10 shadow-xl bg-white"
                        >
                            <img 
                                src={item.thumbnail} 
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                            />
                            
                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/90 via-brand-burgundy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center shadow-2xl">
                                        {item.type === "video" ? (
                                            <Play size={20} className="text-brand-burgundy fill-brand-burgundy ml-1" />
                                        ) : (
                                            <ZoomIn size={20} className="text-brand-burgundy" />
                                        )}
                                    </div>
                                    <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                                        {item.type}
                                    </span>
                                </div>
                                <h3 className="text-brand-ivory font-display text-2xl italic">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-brand-burgundy/98 backdrop-blur-xl flex items-center justify-center p-6 md:p-20"
                    >
                        <button 
                            onClick={() => setSelectedMedia(null)} 
                            className="absolute top-10 right-10 text-brand-gold hover:rotate-90 transition-transform duration-500 z-[110]"
                        >
                            <X size={48} strokeWidth={1} />
                        </button>

                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 50 }} 
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            className="relative max-w-6xl w-full aspect-video bg-black rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(197,160,89,0.2)] border border-brand-gold/20"
                        >
                            {selectedMedia.type === "video" ? (
                                <video 
                                    src={selectedMedia.url} 
                                    controls 
                                    autoPlay 
                                    className="w-full h-full object-cover" 
                                />
                            ) : (
                                <img 
                                    src={selectedMedia.url} 
                                    className="w-full h-full object-contain p-4" 
                                    alt={selectedMedia.title}
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
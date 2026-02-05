"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// 1. INCREASED COUNT (More Density)
const SPICE_COUNT = 65;

const SPICE_ASSETS = [
    "/images/spices/cinnamon.png",
    "/images/spices/cinnamon-stick.png",
    "/images/spices/clove.png",
    "/images/spices/star-anise.png",
];

interface SpiceProps {
    index: number;
}

const SpiceElement = ({ index }: SpiceProps) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [scatter, setScatter] = useState({ x: 0, y: 0 });

    const config = useMemo(() => {
        const depth = Math.random(); // 0 (back) to 1 (front)
        const isMovingDown = Math.random() > 0.5; // 50% chance to move down instead of up

        return {
            // SPREAD FIX: Distribute from -20% to 120% so edges aren't empty
            x: Math.random() * 100,
            y: Math.random() * 140 - 20, 
            
            // 2. INCREASED SIZE
            // Previous: 40 + depth * 100 (40px to 140px)
            // New: 80 + depth * 150 (80px to 230px)
            size: 80 + depth * 150, 
            depth,
            asset: SPICE_ASSETS[Math.floor(Math.random() * SPICE_ASSETS.length)],
            
            // Animation speeds
            rotationDuration: 25 + Math.random() * 25,
            bobDuration: 3 + Math.random() * 5,
            rotationDirection: Math.random() > 0.5 ? 1 : -1,
            
            // Parallax direction
            direction: isMovingDown ? 1 : -1
        };
    }, []);

    const { scrollY } = useScroll();

    // Parallax Logic
    const parallaxY = useTransform(
        scrollY,
        [0, 2000],
        [0, 300 * config.direction * (config.depth + 0.5)]
    );

    // Mouse Scatter Logic
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!elementRef.current) return;
            const rect = elementRef.current.getBoundingClientRect();
            
            // Calculate distance from mouse to spice center
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Interaction Radius: 200px
            if (distance < 200) {
                const force = (200 - distance) / 5; // Gentle push
                setScatter({
                    x: -(dx / distance) * force,
                    y: -(dy / distance) * force,
                });
            } else {
                setScatter({ x: 0, y: 0 });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div
            ref={elementRef}
            className="absolute pointer-events-none select-none z-0"
            style={{
                left: `${config.x}%`,
                top: `${config.y}%`,
                width: config.size,
                height: config.size,
                y: parallaxY,
                opacity: 0.15 + config.depth * 0.4, // Visibility range
                filter: config.depth < 0.3 ? "blur(2px)" : "blur(0px)", // Blur background ones
            }}
        >
            <motion.div
                className="w-full h-full"
                style={{ x: scatter.x, y: scatter.y }}
                animate={{
                    y: [0, -15, 0], // Gentle Bobbing
                    rotate: [0, 360 * config.rotationDirection], // Continuous Rotation
                }}
                transition={{
                    y: { duration: config.bobDuration, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: config.rotationDuration, repeat: Infinity, ease: "linear" },
                }}
            >
                <img
                    src={config.asset}
                    alt="spice"
                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                    className="w-full h-full object-contain opacity-80"
                />
            </motion.div>
        </motion.div>
    );
};

export const SpiceNebula = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Optional: Add a texture layer if you want the paper feel */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

            {Array.from({ length: SPICE_COUNT }).map((_, i) => (
                <SpiceElement key={i} index={i} />
            ))}
        </div>
    );
}; 
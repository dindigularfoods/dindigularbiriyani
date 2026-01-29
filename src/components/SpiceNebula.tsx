"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SPICE_COUNT = 25;

const SPICE_ASSETS = [
    "/images/spices/cinnamon.png",
    "/images/spices/cinnamon-stick.png",
    "/images/spices/clove.png",
    "/images/spices/star-anise.png",
];

interface SpiceProps {
    index: number;
    speedMultiplier: number;
}

const SpiceElement = ({ index, speedMultiplier }: SpiceProps) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [scatter, setScatter] = useState({ x: 0, y: 0 });

    // Randomized properties for variety
    const config = useMemo(() => {
        const depth = Math.random(); // 0 is furthest, 1 is closest (foreground)
        return {
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 60 + depth * 140, // Range from 60px to 200px
            depth,
            asset: SPICE_ASSETS[Math.floor(Math.random() * SPICE_ASSETS.length)],
            rotationDuration: (20 + Math.random() * 20) / speedMultiplier,
            bobDuration: (4 + Math.random() * 4) / speedMultiplier,
            bobAmount: 20 + Math.random() * 30,
            rotationDirection: Math.random() > 0.5 ? 1 : -1,
            delay: Math.random() * 5,
        };
    }, [speedMultiplier]);

    const { scrollY } = useScroll();

    // High-Velocity Parallax Logic
    // Foreground (depth=1) -> moves 2.5x scroll speed
    // Background (depth=0) -> moves 0.5x scroll speed
    const parallaxY = useTransform(
        scrollY,
        [0, 1000],
        [0, -1000 * (config.depth * 2 + 0.5) * speedMultiplier]
    );

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!elementRef.current) return;
            const rect = elementRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Scatter Interaction: drift away slightly if mouse is within 250px
            if (distance < 250) {
                const force = (250 - distance) / 3;
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
            className="fixed pointer-events-none select-none z-0"
            style={{
                left: `${config.x}%`,
                top: `${config.y}%`,
                width: config.size,
                height: config.size,
                y: parallaxY,
                filter: `
          sepia(0.7) 
          saturate(1.4) 
          brightness(0.85)
          ${config.depth < 0.4 ? "blur(3px)" : "blur(0px)"}
        `,
                opacity: 0.2 + config.depth * 0.5,
            }}
        >
            <motion.div
                className="w-full h-full"
                style={{
                    x: scatter.x,
                    y: scatter.y,
                }}
                animate={{
                    // Bobbing & Continuous 360 Rotation
                    y: [0, -config.bobAmount, 0],
                    rotate: [0, 360 * config.rotationDirection],
                }}
                transition={{
                    y: {
                        duration: config.bobDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: config.delay,
                    },
                    rotate: {
                        duration: config.rotationDuration,
                        repeat: Infinity,
                        ease: "linear",
                    },
                    x: { type: "spring", stiffness: 40, damping: 15 },
                }}
            >
                <img
                    src={config.asset}
                    alt="spice"
                    className="w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]"
                />
            </motion.div>
        </motion.div>
    );
};

export const SpiceNebula = ({ speed = 1 }: { speed?: number }) => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

            {Array.from({ length: SPICE_COUNT }).map((_, i) => (
                <SpiceElement key={i} index={i} speedMultiplier={speed} />
            ))}
        </div>
    );
};

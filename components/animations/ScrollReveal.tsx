"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export function ScrollReveal({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: ScrollRevealProps) {
    const directions = {
        up: { y: 50, x: 0 },
        down: { y: -50, x: 0 },
        left: { x: 50, y: 0 },
        right: { x: -50, y: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

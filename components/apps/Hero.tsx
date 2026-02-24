"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Hero: React.FC = () => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
            >
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={cn(
                        "inline-block px-3 py-1 rounded-full bg-os-accent/10 border border-os-accent/20 text-os-accent text-[10px] font-bold uppercase tracking-widest mb-6"
                    )}
                >
                    Welcome to my digital workspace
                </motion.span>
                <h1 className="text-5xl md:text-7xl font-bold text-os-text tracking-tight mb-4 opacity-80">
                    Avoy Sasmal — Full Stack Developer
                </h1>
                <p className="text-xl md:text-2xl text-os-muted mb-8 font-light italic">
                    "Full-Stack Web Developer who enjoys building impactful projects and scalable backend applications.."
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-os-accent/60 font-medium">
                        Developer OS v1.0
                    </span>
                    <p className="text-[10px] text-os-muted/40">
                        Open terminal and type <span className="text-os-accent/60">'help'</span>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

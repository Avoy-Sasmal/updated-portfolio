"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface PreloaderProps {
    onLoadingComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onLoadingComplete, 500); // Slight delay for smoothness
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={cn("fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden")}
        >
            <div className="relative z-10 flex flex-col items-center gap-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">
                        AVOY <span className="text-blue-500">SASMAL</span>
                    </h1>
                    <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-4">Initialising System...</p>

                    <div className="w-48 h-28 rounded-xl overflow-hidden  mb-4">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-80"
                        >
                            <source src="/vdo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </motion.div>

                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                <p className="text-blue-500/80 text-[10px] font-mono tracking-widest uppercase">
                    Core v2.4.0 • System Ready
                </p>
            </div>

            <div className="absolute bottom-10 left-10 flex flex-col gap-1">
                <p className="text-white/20 text-[10px] font-mono">BOOT_SEQUENCE_INTIATED...</p>
                <p className="text-white/20 text-[10px] font-mono">LOADING_ASSETS...</p>
                <p className="text-white/20 text-[10px] font-mono">SYSTEM_CHECK_OK</p>
            </div>
        </motion.div>
    );
};

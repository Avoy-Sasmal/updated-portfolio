"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import { useWindowStore, WindowType } from "@/lib/store/useWindowStore";
import { cn } from "@/lib/utils";

interface WindowProps {
    id: WindowType;
    children: React.ReactNode;
}

export const Window: React.FC<WindowProps> = ({ id, children }) => {
    const { windows, activeWindow, closeWindow, minimizeWindow, maximizeWindow, focusWindow } = useWindowStore();
    const windowState = windows[id];

    if (!windowState.isOpen || windowState.isMinimized) return null;

    const isActive = activeWindow === id;

    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onMouseDown={() => focusWindow(id)}
            style={{ zIndex: windowState.zIndex }}
            className={cn(
                "absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col overflow-hidden rounded-xl border border-os-border bg-os-window shadow-2xl",
                isActive && "ring-1 ring-os-accent/30",
                windowState.isMaximized
                    ? "inset-0 !h-full !w-full !max-w-none !transform-none !left-0 !top-0 rounded-none border-b-0"
                    : "h-[500px] w-full max-w-2xl"
            )}
        >
            {/* Window Header */}
            <div
                className="flex h-10 items-center justify-between bg-os-panel px-4 select-none cursor-grab active:cursor-grabbing"
            >
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <button
                            onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                            className="flex h-3 w-3 items-center justify-center rounded-full bg-red-500/80 hover:bg-red-500 group"
                        >
                            <X className="h-2 w-2 opacity-0 group-hover:opacity-100 text-black/50" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
                            className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-500/80 hover:bg-yellow-500 group"
                        >
                            <Minus className="h-2 w-2 opacity-0 group-hover:opacity-100 text-black/50" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); maximizeWindow(id); }}
                            className="flex h-3 w-3 items-center justify-center rounded-full bg-green-500/80 hover:bg-green-500 group"
                        >
                            <Square className="h-2 w-2 opacity-0 group-hover:opacity-100 text-black/50" />
                        </button>
                    </div>
                    <span className={`ml-4 text-xs font-medium ${isActive ? "text-os-text" : "text-os-muted"}`}>
                        {windowState.title}
                    </span>
                </div>
            </div>

            {/* Window Body */}
            <div className="flex-1 overflow-auto p-6 custom-scrollbar">
                {children}
            </div>
        </motion.div>
    );
};

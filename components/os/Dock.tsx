"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Terminal,
    FolderIcon,
    User,
    Code2,
    FolderGit2,
    FileText,
    Mail,
    Cpu
} from "lucide-react";
import { useWindowStore, WindowType } from "@/lib/store/useWindowStore";
import { cn } from "@/lib/utils";

const dockItems = [
    { id: "terminal" as WindowType, icon: Terminal, label: "Terminal" },
    { id: "about" as WindowType, icon: User, label: "About" },
    { id: "skills" as WindowType, icon: Cpu, label: "Skills" },
    { id: "projects" as WindowType, icon: FolderGit2, label: "Projects" },
    { id: "explorer" as WindowType, icon: FolderIcon, label: "Explorer" },
    { id: "vscode" as WindowType, icon: Code2, label: "VS Code" },
    { id: "contact" as WindowType, icon: Mail, label: "Contact" },
    { id: "resume" as any, icon: FileText, label: "Resume" },
];

export const Dock: React.FC = () => {
    const { openWindow, windows, activeWindow } = useWindowStore();

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-os-bg/60 backdrop-blur-xl border border-os-border/50 shadow-2xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            >
                {dockItems.map((item) => {
                    const isOpen = item.id in windows ? windows[item.id as WindowType].isOpen : false;
                    const isActive = activeWindow === item.id;

                    return (
                        <div key={item.id} className="relative group">
                            <motion.button
                                onClick={() => {
                                    if (item.id === "resume" as any) {
                                        window.open("/resume.pdf", "_blank");
                                    } else {
                                        openWindow(item.id);
                                    }
                                }}
                                whileHover={{ scale: 1.2, y: -10 }}
                                whileTap={{ scale: 0.9 }}
                                className={cn(
                                    "relative flex items-center justify-center h-12 w-12 rounded-xl transition-all duration-200",
                                    isActive ? "bg-os-accent/20" : "hover:bg-os-panel/50"
                                )}
                            >
                                <item.icon className={cn(
                                    "h-6 w-6",
                                    isActive ? "text-os-accent" : "text-os-text"
                                )} />

                                {/* Status Indicator */}
                                {isOpen && (
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-os-text/50" />
                                )}
                            </motion.button>

                            {/* Tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-os-panel border border-os-border text-[10px] text-os-text opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                {item.label}
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

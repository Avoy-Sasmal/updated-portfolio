"use client";

import React, { useState, useEffect } from "react";
import { Wifi, Battery, Volume2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export const SystemBar: React.FC = () => {
    const [time, setTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const formattedDate = time.toLocaleDateString([], {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="fixed top-0 left-0 right-0 h-9 flex items-center justify-between px-4 bg-os-bg/60 backdrop-blur-md border-b border-os-border/50 z-50 select-none">
            <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-os-text tracking-wide">Avoy Sasmal</span>
                <div className="hidden md:flex gap-4">
                    <span className="text-xs text-os-muted hover:text-os-text transition-colors cursor-default">File</span>
                    <span className="text-xs text-os-muted hover:text-os-text transition-colors cursor-default">Edit</span>
                    <span className="text-xs text-os-muted hover:text-os-text transition-colors cursor-default">View</span>
                    <span className="text-xs text-os-muted hover:text-os-text transition-colors cursor-default">Go</span>
                    <span className="text-xs text-os-muted hover:text-os-text transition-colors cursor-default">Window</span>
                    <span className="text-xs text-os-muted hover:text-os-text transition-colors cursor-default">Help</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 mr-2">
                    <Search className="h-3.5 w-3.5 text-os-muted hover:text-os-text transition-colors cursor-default" />
                    <Wifi className="h-3.5 w-3.5 text-os-muted hover:text-os-text transition-colors cursor-default" />
                    <Volume2 className="h-3.5 w-3.5 text-os-muted hover:text-os-text transition-colors cursor-default" />
                    <Battery className="h-3.5 w-3.5 text-os-muted hover:text-os-text transition-colors cursor-default" />
                </div>
                {mounted && (
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] font-medium text-os-text">{formattedDate}</span>
                        <span className="text-[11px] font-medium text-os-text">{formattedTime}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

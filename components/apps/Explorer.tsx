"use client";

import React from "react";
import { FolderIcon, FileText, ChevronRight, Home, Star, Clock } from "lucide-react";
import { useWindowStore } from "@/lib/store/useWindowStore";
import { cn } from "@/lib/utils";

const sidebarItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: Star, label: "Starred", id: "starred" },
    { icon: Clock, label: "Recent", id: "recent" },
];

const folders = [
    { name: "Projects", icon: FolderIcon, count: 5, id: "projects" },
    { name: "Resume.pdf", icon: FileText, count: 0, id: "resume" },
    { name: "About_Me.txt", icon: FileText, count: 0, id: "about" },
];

export const Explorer: React.FC = () => {
    const { openWindow } = useWindowStore();

    const handleItemClick = (id: string) => {
        if (id === "projects") openWindow("projects");
        if (id === "about") openWindow("about");
        if (id === "resume") window.open("/resume.pdf", "_blank");
    };

    return (
        <div className="flex h-full w-full bg-os-window text-os-text">
            {/* Sidebar */}
            <div className="w-48 border-r border-os-border/50 p-4 hidden md:block">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-[10px] font-bold text-os-muted uppercase tracking-wider mb-4">Favorites</h3>
                        <div className="space-y-1">
                            {sidebarItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={cn(
                                        "flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-os-panel transition-colors cursor-default group"
                                    )}
                                >
                                    <item.icon className="h-4 w-4 text-os-accent/70 group-hover:text-os-accent" />
                                    <span className="text-xs font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <div className="flex items-center gap-2 text-os-muted mb-8">
                    <span className="text-xs hover:text-os-text cursor-pointer">Home</span>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-xs text-os-text font-medium">Desktop</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {folders.map((folder) => (
                        <div
                            key={folder.id}
                            onClick={() => handleItemClick(folder.id)}
                            className={cn(
                                "flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-os-panel/50 border border-transparent hover:border-os-border/50 transition-all cursor-pointer group"
                            )}
                        >
                            <folder.icon className="h-12 w-12 text-os-accent/80 group-hover:text-os-accent group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-medium text-center">{folder.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

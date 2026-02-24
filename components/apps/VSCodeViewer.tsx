"use client";

import React, { useState } from "react";
import {
    FileCode2,
    FileText,
    ChevronRight,
    Search,
    Layout,
    FolderTree,
    Github,
    ExternalLink,
    ChevronDown,
    Terminal
} from "lucide-react";
import { cn } from "@/lib/utils";

const fileTree = {
    name: "portfolio-os",
    children: [
        { name: "README.md", type: "file" },
        {
            name: "components",
            type: "folder",
            children: [
                { name: "Window.tsx", type: "file" },
                { name: "Dock.tsx", type: "file" },
                { name: "Terminal.tsx", type: "file" },
            ]
        },
        { name: "lib", type: "folder", children: [{ name: "store.ts", type: "file" }] },
        { name: "package.json", type: "file" },
    ],
};

export const VSCodeViewer: React.FC = () => {
    const [activeFile, setActiveFile] = useState("README.md");

    return (
        <div className="h-full w-full flex bg-[#1e1e1e] text-[#d4d4d4] -m-6 rounded-b-xl overflow-hidden font-sans">
            {/* Activity Bar */}
            <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-4 border-r border-black/20">
                <FolderTree className="h-6 w-6 text-white cursor-pointer" />
                <Search className="h-6 w-6 text-gray-500 cursor-pointer hover:text-white transition-colors" />
                <Github className="h-6 w-6 text-gray-500 cursor-pointer hover:text-white transition-colors" />
                <Terminal className="h-6 w-6 text-gray-500 cursor-pointer hover:text-white transition-colors mt-auto" />
            </div>

            {/* Sidebar */}
            <div className="w-56 bg-[#252526] flex flex-col border-r border-black/20">
                <div className="flex items-center justify-between px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <span>Explorer: Portfolio OS</span>
                </div>

                <div className="flex-1 px-2 space-y-0.5">
                    <div className="flex items-center gap-1.5 py-1 px-2 hover:bg-[#2a2d2e] cursor-pointer">
                        <ChevronDown className="h-3.5 w-3.5" />
                        <span className="text-xs font-bold text-white uppercase tracking-tight">Portfolio-OS</span>
                    </div>

                    <div className="pl-4 space-y-0.5">
                        <div className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2a2d2e] cursor-pointer">
                            <ChevronRight className="h-3.5 w-3.5" />
                            <Layout className="h-3.5 w-3.5 text-blue-400" />
                            <span className="text-xs">components</span>
                        </div>
                        <div className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2a2d2e] cursor-pointer">
                            <ChevronRight className="h-3.5 w-3.5" />
                            <Layout className="h-3.5 w-3.5 text-blue-400" />
                            <span className="text-xs">lib</span>
                        </div>
                        <div
                            onClick={() => setActiveFile("README.md")}
                            className={cn(
                                "flex items-center gap-2 py-1 px-2 rounded cursor-pointer",
                                activeFile === "README.md" ? "bg-[#37373d]" : "hover:bg-[#2a2d2e]"
                            )}
                        >
                            <FileCode2 className="h-3.5 w-3.5 text-blue-400" />
                            <span className="text-xs">README.md</span>
                        </div>
                        <div className="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#2a2d2e] cursor-pointer">
                            <FileCode2 className="h-3.5 w-3.5 text-yellow-400" />
                            <span className="text-xs">package.json</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e]">
                {/* Tabs */}
                <div className="flex bg-[#252526] h-9 overflow-x-auto">
                    <div className="flex items-center gap-2 px-4 bg-[#1e1e1e] border-t-2 border-os-accent min-w-[120px]">
                        <FileCode2 className="h-3.5 w-3.5 text-blue-400" />
                        <span className="text-xs text-white">README.md</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 border-r border-black/10 min-w-[120px] hover:bg-[#1e1e1e]/60 cursor-pointer">
                        <FileText className="h-3.5 w-3.5 text-gray-400" />
                        <span className="text-xs text-gray-400">api.ts</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 overflow-auto font-mono text-sm leading-relaxed">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-3xl font-bold text-white"># Developer OS Portfolio</h1>
                        <p className="text-gray-400 italic">
                            A high-performance portfolio application simulating a desktop operating system.
                        </p>

                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-white border-b border-gray-800 pb-2">Architecture</h2>
                            <div className="bg-[#2d2d2d] p-4 rounded-lg border border-gray-700">
                                <code className="text-os-accent block">Frontend: Next.js + Framer Motion</code>
                                <code className="text-os-accent block">State Management: Zustand</code>
                                <code className="text-os-accent block">Styling: Tailwind CSS + Shadcn UI</code>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-white border-b border-gray-800 pb-2">Core Features</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                <li>Draggable & focusable window management system</li>
                                <li>Interactive terminal with custom commands</li>
                                <li>Smooth animations and glassmorphism effects</li>
                                <li>Responsive layout for all screen sizes</li>
                            </ul>
                        </div>

                        <div className="flex gap-4 pt-8">
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-os-accent text-white font-bold hover:opacity-90 transition-opacity">
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#333333] text-white font-bold hover:bg-[#444444] transition-colors border border-gray-700">
                                <Github className="h-4 w-4" />
                                View Repository
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

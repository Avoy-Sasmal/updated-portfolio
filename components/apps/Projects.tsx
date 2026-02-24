"use client";

import React from "react";
import { FolderGit2, ExternalLink, Github, Code } from "lucide-react";
import { useWindowStore } from "@/lib/store/useWindowStore";
import { cn } from "@/lib/utils";

const projects = [
    {
        id: "uniprep",
        title: "UniPrep Copilot",
        description: "Academic assistant for syllabus-aware content generation and personalized study workflows.",
        tags: ["React.js", "Node.js", "MongoDB", "OpenRouter AI", "JWT", "Tailwind CSS"],
        github: "https://github.com/Avoy-Sasmal/UniPrep.git",
        demo: "https://uni-prep-nyvz.vercel.app/",
        image: "/uniprep.png"
    },
    {
        id: "coderoom",
        title: "Code Room",
        description: "Real-time collaborative code editor with multi-language execution and WebSocket support.",
        tags: ["Node.js", "Express.js", "Socket.io", "React.js", "Tailwind CSS"],
        github: "https://github.com/Avoy-Sasmal/online-code-editor.git",
        demo: "https://online-code-editor-igalj8eaz-avoys-projects-c20cf169.vercel.app/",
        image: "/coderoom.png"
    },
    {
        id: "unified-async",
        title: "Unified Async Workflow",
        description: "Microservices backend featuring JWT-secured API gateway, Redis rate limiting, and RabbitMQ.",
        tags: ["Node.js", "Redis", "RabbitMQ", "Docker", "MongoDB", "Nginx"],
        github: "https://github.com/bhutuklearning/Unified-Async-Workflow-and-Notification-Platform",
        demo: "#",
        image: "/unified_async_notification.png"
    },
    {
        id: "portfolio",
        title: "Developer OS Portfolio",
        description: "A unique desktop-style portfolio built with Next.js, Zustand, and Tailwind CSS.",
        tags: ["Next.js", "Zustand", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/Avoy-Sasmal/portfolio-os",
        demo: "/",
        image: "/portfolio.png"
    },
    {
        id: "previous-portfolio",
        title: "Previous Portfolio",
        description: "My previous personal portfolio website showcasing earlier projects and experience.",
        tags: ["React js", "Framer motion", "Tailwind", "Email.js"],
        github: "#",
        demo: "#",
        image: "/previous.png"
    },
];

export const Projects: React.FC = () => {
    const { openWindow } = useWindowStore();

    return (
        <div className="h-full w-full p-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={cn(
                            "group relative flex flex-col bg-os-panel border border-os-border/50 rounded-2xl overflow-hidden hover:border-os-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-os-accent/5"
                        )}
                    >
                        <div className={cn(
                            "aspect-video w-full bg-os-bg/50 overflow-hidden group-hover:scale-105 transition-transform duration-500"
                        )}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-os-text mb-2">{project.title}</h3>
                            <p className="text-sm text-os-muted mb-4 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-os-bg text-os-accent/80 border border-os-accent/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex gap-3">
                                <button
                                    onClick={() => openWindow("vscode")}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-os-accent text-white text-xs font-bold hover:bg-os-accent/90 transition-colors"
                                >
                                    <Code className="h-4 w-4" />
                                    View Code
                                </button>
                                <div className="flex gap-2">
                                    <a href={project.github} target="_blank" className="p-2 rounded-xl bg-os-bg border border-os-border hover:bg-os-panel transition-colors">
                                        <Github className="h-4 w-4" />
                                    </a>
                                    <a href={project.demo} target="_blank" className="p-2 rounded-xl bg-os-bg border border-os-border hover:bg-os-panel transition-colors">
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

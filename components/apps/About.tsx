"use client";

import React from "react";
import { Mail, Github, Linkedin, Calendar, MapPin, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export const About: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 text-os-text p-2">
            {/* Left Column: Profile */}
            <div className={cn("flex flex-col items-center md:items-start md:w-1/3")}>
                <div className={cn("h-40 w-40 rounded-2xl bg-os-panel border border-os-border overflow-hidden mb-6 shadow-xl")}>
                    <div className={cn("h-full w-full bg-gradient-to-br from-os-accent/20 to-os-bg flex items-center justify-center text-4xl font-bold text-os-accent/40")}>
                        A
                    </div>
                </div>

                <div className="space-y-4 w-full">
                    <div className="flex items-center gap-3 text-os-muted">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">Kolkata, WB</span>
                    </div>
                    <div className="flex items-center gap-3 text-os-muted">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">B.Tech IT Student (2022-2026)</span>
                    </div>

                    <hr className="border-os-border/50" />

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="https://github.com/Avoy-Sasmal" target="_blank" className="p-2 rounded-lg bg-os-panel hover:bg-os-accent/20 transition-colors border border-os-border">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/avoy-sasmal/" target="_blank" className="p-2 rounded-lg bg-os-panel hover:bg-os-accent/20 transition-colors border border-os-border">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="mailto:avoysasmal483@gmail.com" className="p-2 rounded-lg bg-os-panel hover:bg-os-accent/20 transition-colors border border-os-border">
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-os-accent text-white text-xs font-bold hover:bg-os-accent/90 transition-colors mt-2"
                    >
                        <FileText className="h-4 w-4" />
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Right Column: Bio */}
            <div className="flex-1 space-y-6">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Avoy Sasmal</h2>

                    <p className="text-os-accent font-medium mb-4">
                        Full-Stack Developer | Backend-Focused Engineer
                    </p>

                    <p className="text-os-muted leading-relaxed">
                        I am a passionate Full-Stack Web Developer who enjoys building impactful projects and scalable backend applications.
                        I focus on designing efficient architectures, developing robust APIs, and creating systems that are reliable, maintainable, and performance-driven.

                        With a strong interest in solving complex technical challenges, I strive to deliver clean, optimized, and user-centric digital experiences through modern web technologies.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-3 border-b border-os-border/50 pb-2">Academic Achievements</h3>
                    <div className="space-y-4">
                        <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-os-accent">
                            <h4 className="text-sm font-bold">Smart India Hackathon (SIH) 2023</h4>
                            <p className="text-xs text-os-muted italic">Finalist</p>
                            <p className="text-xs mt-1 text-os-muted/80">Demonstrated strong collaboration and innovation in a team-based project environment.</p>
                        </div>
                        <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-os-muted">
                            <h4 className="text-sm font-bold">Hacktoberfest 2025</h4>
                            <p className="text-xs text-os-muted italic">Contributor</p>
                            <p className="text-xs mt-1 text-os-muted/80">Selected as a contributor among applicants across India.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-3 border-b border-os-border/50 pb-2">Education</h3>
                    <p className="text-sm font-medium">Techno International New Town, Kolkata</p>
                    <p className="text-xs text-os-muted italic">B.Tech. in Information Technology, 2022 — 2026</p>
                    <p className="text-xs text-os-accent mt-1">SGPA: 7.3/10</p>
                </div>
            </div>
        </div>
    );
};

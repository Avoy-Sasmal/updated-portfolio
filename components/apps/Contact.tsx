"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export const Contact: React.FC = () => {
    return (
        <div className={cn("h-full w-full flex flex-col items-center justify-center gap-12 p-8 text-center")}>
            <div className="max-w-md space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-os-text">Get in touch</h2>
                <p className="text-os-muted text-lg leading-relaxed">
                    Have a project in mind? Or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                <a
                    href="mailto:avoysasmal483@gmail.com"
                    title="Email"
                    className={cn("p-6 rounded-2xl bg-os-panel border border-os-border hover:border-os-accent/50 hover:bg-os-accent/5 transition-all group shadow-xl hover:scale-110")}
                >
                    <Mail className={cn("h-10 w-10 text-os-muted group-hover:text-os-accent")} />
                </a>
                <a
                    href="https://www.linkedin.com/in/avoy-sasmal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className={cn("p-6 rounded-2xl bg-os-panel border border-os-border hover:border-os-accent/50 hover:bg-os-accent/5 transition-all group shadow-xl hover:scale-110")}
                >
                    <Linkedin className={cn("h-10 w-10 text-os-muted group-hover:text-os-accent")} />
                </a>
                <a
                    href="https://github.com/Avoy-Sasmal"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className={cn("p-6 rounded-2xl bg-os-panel border border-os-border hover:border-os-accent/50 hover:bg-os-accent/5 transition-all group shadow-xl hover:scale-110")}
                >
                    <Github className={cn("h-10 w-10 text-os-muted group-hover:text-os-accent")} />
                </a>
            </div>
        </div>
    );
};

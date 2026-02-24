"use client";

import React from "react";
import {
    Monitor,
    Server,
    Database,
    Cloud,
    Settings2,
    Code2
} from "lucide-react";
import { cn } from "@/lib/utils";

const skillSections = [
    {
        title: "Frontend",
        icon: Monitor,
        skills: [
            { name: "React.js / Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "JavaScript (ES6+)", level: 92 },
            { name: "Tailwind CSS", level: 95 },
            { name: "HTML / CSS", level: 95 },
        ],
    },
    {
        title: "Backend & Systems",
        icon: Server,
        skills: [
            { name: "Node.js / Express.js", level: 92 },
            { name: "C / C++ / Java", level: 85 },
            { name: "Python", level: 80 },
            { name: "RabbitMQ / Microservices", level: 75 },
            { name: "REST APIs / JWT", level: 90 },
        ],
    },
    {
        title: "Database",
        icon: Database,
        skills: [
            { name: "MongoDB", level: 88 },
            { name: "PostgreSQL / MySQL", level: 85 },
            { name: "Redis", level: 80 },
        ],
    },
    {
        title: "DevOps & Tools",
        icon: Cloud,
        skills: [
            { name: "Docker", level: 82 },
            { name: "Nginx", level: 78 },
            { name: "Linux / Git", level: 85 },
            { name: "VS Code / GitHub", level: 95 },
        ],
    },
];

export const Skills: React.FC = () => {
    return (
        <div className="h-full w-full space-y-8 p-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillSections.map((section) => (
                    <div key={section.title} className={cn(
                        "bg-os-panel/30 border border-os-border/50 rounded-2xl p-6 hover:border-os-accent/30 transition-colors"
                    )}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-os-accent/10">
                                <section.icon className="h-5 w-5 text-os-accent" />
                            </div>
                            <h3 className="text-lg font-bold">{section.title}</h3>
                        </div>

                        <div className="space-y-5">
                            {section.skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="font-medium text-os-text">{skill.name}</span>
                                        <span className="text-os-muted">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-os-bg rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-os-accent rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-os-accent/5 border border-os-accent/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Settings2 className="h-5 w-5 text-os-accent" />
                    <h3 className="text-lg font-bold">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Communication", "Teamwork", "Problem Solving", "Leadership", "Adaptability"].map((tool) => (
                        <span key={tool} className={cn(
                            "px-3 py-1 rounded-full bg-os-panel border border-os-border text-[11px] font-medium text-os-muted hover:text-os-text hover:border-os-accent/30 transition-colors"
                        )}>
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

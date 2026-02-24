"use client";

import React, { useState, useRef, useEffect } from "react";
import { useWindowStore } from "@/lib/store/useWindowStore";
import { cn } from "@/lib/utils";

const WELCOME_MESSAGE = [
    "Abhay OS v1.0.0 (x86_64-pc-linux-gnu)",
    "Type 'help' to see available commands.",
    "",
];

export const Terminal: React.FC = () => {
    const [history, setHistory] = useState<string[]>(WELCOME_MESSAGE);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);
    const { openWindow } = useWindowStore();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response: string[] = [];

        switch (cleanCmd) {
            case "help":
                response = [
                    "Available commands:",
                    "  about    - Learn more about me",
                    "  skills   - View my technical stack",
                    "  projects - Explore my work",
                    "  contact  - Get in touch",
                    "  resume   - View my resume",
                    "  clear    - Clear the terminal",
                ];
                break;
            case "about":
                openWindow("about");
                response = ["Opening About window..."];
                break;
            case "skills":
                openWindow("skills");
                response = ["Opening Skills window..."];
                break;
            case "projects":
                openWindow("projects");
                response = ["Opening Projects window..."];
                break;
            case "contact":
                openWindow("contact");
                response = ["Opening Contact window..."];
                break;
            case "clear":
                setHistory([]);
                return;
            case "resume":
                response = ["Opening resume..."];
                window.open("/resume.pdf", "_blank");
                break;
            default:
                response = [`Command not found: ${cleanCmd}. Type 'help' for assistance.`];
        }

        setHistory((prev) => [...prev, `user@portfolio:~$ ${cmd}`, ...response, ""]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input) return;
        handleCommand(input);
        setInput("");
    };

    return (
        <div
            ref={scrollRef}
            className={cn(
                "h-full w-full bg-terminal-bg font-mono text-sm text-terminal-text overflow-y-auto p-2"
            )}
            onClick={() => document.getElementById("terminal-input")?.focus()}
        >
            <div className="flex flex-col gap-1">
                {history.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap">
                        {line}
                    </div>
                ))}
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <span className="shrink-0 text-os-accent">user@portfolio:~$</span>
                    <input
                        id="terminal-input"
                        type="text"
                        autoFocus
                        autoComplete="off"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-terminal-text"
                    />
                </form>
            </div>
        </div>
    );
};

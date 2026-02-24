"use client";

import React, { useState } from "react";
import { SystemBar } from "./SystemBar";
import { Dock } from "./Dock";
import { Window } from "./Window";
import { Hero } from "../apps/Hero";
import { Terminal } from "../apps/Terminal";
import { Explorer } from "../apps/Explorer";
import { About } from "../apps/About";
import { Skills } from "../apps/Skills";
import { Projects } from "../apps/Projects";
import { VSCodeViewer } from "../apps/VSCodeViewer";
import { Contact } from "../apps/Contact";
import { Preloader } from "./Preloader";
import { useWindowStore } from "@/lib/store/useWindowStore";
import { AnimatePresence } from "framer-motion";

export const Desktop: React.FC = () => {
    const { windows } = useWindowStore();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <Preloader key="preloader" onLoadingComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            <main className={`relative h-screen w-screen overflow-hidden bg-os-bg grid-bg transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <div className="noise" />

                <SystemBar />

                <div className="relative h-full w-full pt-9 pb-24 px-4">
                    <Hero />

                    {/* Render Windows */}
                    {windows.terminal.isOpen && (
                        <Window id="terminal">
                            <Terminal />
                        </Window>
                    )}

                    {windows.explorer.isOpen && (
                        <Window id="explorer">
                            <Explorer />
                        </Window>
                    )}

                    {windows.about.isOpen && (
                        <Window id="about">
                            <About />
                        </Window>
                    )}

                    {windows.skills.isOpen && (
                        <Window id="skills">
                            <Skills />
                        </Window>
                    )}

                    {windows.projects.isOpen && (
                        <Window id="projects">
                            <Projects />
                        </Window>
                    )}

                    {windows.vscode.isOpen && (
                        <Window id="vscode">
                            <VSCodeViewer />
                        </Window>
                    )}

                    {windows.contact.isOpen && (
                        <Window id="contact">
                            <Contact />
                        </Window>
                    )}
                </div>

                <Dock />
            </main>
        </>
    );
};

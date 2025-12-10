"use client";

import { useState } from "react";
import PillNav from "@/components/PillNav";
import ModeToggle from "@/components/mode-toggle";
import CameraScene from "@/components/CameraScene";
import FilmGallery from "@/components/FilmGallery"; // Import the new gallery
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Image as ImageIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function PhotographyContent() {
    const navItems = [
        { label: "Home", href: "/" },
        { label: "Photography", href: "#" },
        { label: "Urban", href: "#urban-exploration" },
        { label: "Nature", href: "#nature-landscapes" },
        { label: "Portraits", href: "#portraits" },
    ];



    return (
        <div className="min-h-screen bg-transparent text-foreground transition-colors duration-300">
            {/* Navigation */}
            <div className="sticky top-0 z-50 w-full flex justify-center pt-4 pb-2">
                <PillNav
                    logo="/profile_picture.png"
                    logoAlt="Yuhao Cheng"
                    items={navItems}
                    activeHref="#"
                    className="custom-nav"
                    ease="power2.easeOut"
                    baseColor="var(--foreground)"
                    pillColor="var(--primary)"
                    hoveredPillTextColor="var(--primary-foreground)"
                    pillTextColor="var(--foreground)"
                />
                <div className="absolute right-4 top-4 z-40">
                    <ModeToggle />
                </div>
            </div>

            <main className="container mx-auto px-4 py-8">

                {/* Hero Section with 3D Camera */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6 relative z-10 bg-background/30 backdrop-blur-sm p-6 rounded-3xl border border-white/10 shadow-lg">
                            <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium whitespace-nowrap border border-primary/20">
                                <Camera size={16} />
                                <span>Photography Portfolio</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
                                Capturing Moments in <span className="text-primary">Light & Time</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-medium">
                                A collection of my visual stories. Whether it&apos;s the symmetry of urban architecture or the raw emotion of a portrait, I strive to find the extraordinary in the ordinary.
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" className="rounded-full group shadow-md hover:shadow-lg transition-all">
                                    View Galleries <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm">
                                    Contact Me
                                </Button>
                            </div>
                        </div>

                        <div className="w-full">
                            <CameraScene />
                        </div>
                    </div>
                </section>

                <Separator className="my-16 opacity-50" />

                {/* Portfolio Grid */}
                <section id="galleries" className="space-y-8">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                <ImageIcon className="h-8 w-8 text-primary" />
                                Featured Galleries
                            </h2>
                            <p className="text-muted-foreground mt-2">Select a film roll to view the collection.</p>
                        </div>
                    </div>

                    {/* Replaced 2D Grid with 3D Film Gallery */}
                    <FilmGallery onSelect={(id) => console.log(`Selected gallery: ${id}`)} />
                </section>

            </main>
        </div>
    );
}

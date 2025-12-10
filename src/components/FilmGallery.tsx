"use client";

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { View, Preload, OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import FilmCanister from './FilmCanister';
import { photographyPortfolios } from '@/data/photographyPortfolios';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface FilmGalleryProps {
    onSelect: (id: string) => void;
}

export default function FilmGallery({ onSelect }: FilmGalleryProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative w-full">
            {/* 
              Global Canvas for all Views. 
              We use a fixed position canvas that covers the viewport to handle all 3D instances.
              pointer-events-none ensures we can click through to the DOM, 
              but eventSource={containerRef} allows the canvas to capture events for the Views if needed.
            */}
            <Canvas
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none',
                    zIndex: 50
                }}
                eventSource={containerRef as React.RefObject<HTMLElement>}
            >
                <View.Port />
                <Preload all />
            </Canvas>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-0">
                {photographyPortfolios.map((item) => (
                    <Card
                        key={item.id}
                        className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/40 bg-card/80 backdrop-blur-sm cursor-pointer hover:border-primary/50"
                        onClick={() => onSelect(item.id)}
                    >
                        {/* 3D Viewport container 
                             Important: We set opacity-0 on the background here or keep it transparent so the 3D model (which is on z-50 fixed canvas) is visible.
                             Actually, the standard practice is the Canvas is on top, so the DOM behind it should be visible if Canvas is transparent.
                             BUT, the Canvas is clear. The 3D model is rendered on the clear canvas.
                             If the Canvas is z=50, it is ON TOP of the Card (z=0).
                             So the 3D model will obstruct the card background.
                             This is what we want. The model will appear floating above the card.
                         */}
                        <div className="h-[240px] w-full relative transition-colors">
                            <View className="absolute h-full w-full">
                                <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={45} />
                                <ambientLight intensity={0.6} />
                                <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
                                <Environment preset="city" />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    minPolarAngle={Math.PI / 4}
                                    maxPolarAngle={Math.PI / 2}
                                />
                                <group position={[0, 0, 0]} rotation={[0.2, 0, 0]}>
                                    <FilmCanister
                                        label={item.category.toUpperCase()}
                                        position={[0, 0, 0]}
                                        color={item.color}
                                    />
                                </group>
                            </View>
                        </div>

                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                            </div>
                            <CardDescription className="text-xs font-mono uppercase tracking-wider">{item.date} • {item.category}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

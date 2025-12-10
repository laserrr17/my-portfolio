"use client";

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface FilmCanisterProps extends React.ComponentProps<'group'> {
    label?: string;
    onClick?: () => void;
    // We assume array format for simplicity in this specific component usage
    position?: [number, number, number];
    rotation?: [number, number, number];
    color?: string;
}

export default function FilmCanister({ label = "FILM", onClick, position = [0, 0, 0], rotation = [0, 0, 0], color = "#FFC107", ...props }: FilmCanisterProps) {
    const group = useRef<THREE.Group>(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Animation for hover state
    useFrame((state, delta) => {
        if (group.current) {
            if (hovered) {
                group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, position[1] + 0.5, delta * 10);
            } else {
                group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, position[1], delta * 10);
            }
        }
    });

    return (
        <group
            ref={group}
            position={position}
            rotation={rotation}
            onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer'; }}
            onPointerOut={(e) => { setHover(false); document.body.style.cursor = 'auto'; }}
            onClick={() => {
                setActive(!active);
                if (onClick) onClick();
            }}
        >
            {/* Canister Body */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.65, 0.65, 1.8, 32]} />
                <meshStandardMaterial color={color} metalness={0.1} roughness={0.2} />
            </mesh>

            {/* Cap (Top) - Black Plastic */}
            <mesh position={[0, 0.95, 0]}>
                <cylinderGeometry args={[0.68, 0.68, 0.15, 32]} />
                <meshStandardMaterial color="#111" metalness={0.2} roughness={0.8} />
            </mesh>

            {/* Cap (Bottom) - Black Plastic */}
            <mesh position={[0, -0.95, 0]}>
                <cylinderGeometry args={[0.68, 0.68, 0.15, 32]} />
                <meshStandardMaterial color="#111" metalness={0.2} roughness={0.8} />
            </mesh>

            {/* Spindle Top */}
            <mesh position={[0, 1.1, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
                <meshStandardMaterial color="#222" />
            </mesh>

            {/* Film Strip Stick sticking out */}
            <mesh position={[0.6, 0.2, 0.5]} rotation={[0, Math.PI / 4, 0]}>
                <boxGeometry args={[0.8, 1.2, 0.02]} />
                <meshStandardMaterial color="#5c4033" side={THREE.DoubleSide} transparent opacity={0.9} />
            </mesh>

            {/* Label/Brand Text */}
            <group position={[0, 0, 0.67]}>
                <Text
                    fontSize={0.4}
                    color="#000"
                    anchorX="center"
                    anchorY="middle"
                    rotation={[0, 0, Math.PI / 2]}
                    maxWidth={1.5}
                >
                    {label}
                </Text>
                <Text
                    fontSize={0.2}
                    color="#c62828"
                    position={[0, -0.5, 0]}
                    rotation={[0, 0, Math.PI / 2]}
                >
                    200
                </Text>
            </group>

            {/* Decorative text small */}
            <group position={[0.4, 0, 0.5]} rotation={[0, Math.PI / 4, Math.PI / 2]}>
                <Text fontSize={0.15} color="#333">36 EXP</Text>
            </group>
        </group>
    );
}

"use client";

import { useRef, useLayoutEffect, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, Preload, Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Particle Field Component
function ParticleField({ count = 800 }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#06B6D4");
    const blue = new THREE.Color("#3B82F6");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const mixedColor = Math.random() > 0.5 ? cyan : blue;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Interactive Central Code Mesh & Geometry
function SceneGeometry({ isMobile }: { isMobile: boolean }) {
  const centralRef = useRef<THREE.Group>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const icoRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (centralRef.current) {
      centralRef.current.rotation.y += delta * 0.2;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.z += delta * 0.1;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y -= delta * 0.25;
    }
  });

  return (
    <group ref={centralRef}>
      {/* Outer Wireframe Tech Sphere */}
      <mesh>
        <sphereGeometry args={[2.4, isMobile ? 16 : 32, isMobile ? 16 : 32]} />
        <meshStandardMaterial
          wireframe
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={0.5}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Core Glowing Orb */}
      <mesh>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#3B82F6"
          emissive="#3B82F6"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Torus Knot */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={torusRef} position={[3.5, 1.5, -2]}>
          <torusKnotGeometry args={[0.9, 0.25, isMobile ? 48 : 96, 16]} />
          <meshStandardMaterial
            color="#06B6D4"
            roughness={0.1}
            metalness={0.9}
            wireframe
          />
        </mesh>
      </Float>

      {/* Orbiting Icosahedron */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={icoRef} position={[-3.8, -1.8, -1]}>
          <icosahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial
            color="#8B5CF6"
            wireframe
            emissive="#8B5CF6"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Scroll Camera Controller with GSAP
function ScrollCameraController({ heroContainerRef }: { heroContainerRef: React.RefObject<HTMLDivElement | null> }) {
  const { camera } = useThree();

  useLayoutEffect(() => {
    if (!heroContainerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Zoom camera in along Z axis as user scrolls down
      tl.to(camera.position, {
        z: 2.2,
        y: -0.5,
        ease: "none",
      }).to(
        camera.rotation,
        {
          z: Math.PI * 0.15,
          ease: "none",
        },
        0
      );
    }, heroContainerRef);

    return () => ctx.revert();
  }, [camera, heroContainerRef]);

  return null;
}

interface Hero3DProps {
  heroContainerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Hero3D({ heroContainerRef }: Hero3DProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#06B6D4" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#3B82F6" />

        <ParticleField count={isMobile ? 350 : 800} />
        <SceneGeometry isMobile={isMobile} />
        <ScrollCameraController heroContainerRef={heroContainerRef} />

        <Preload all />
      </Canvas>
    </div>
  );
}

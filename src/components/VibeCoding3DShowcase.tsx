"use client";

import { useRef, useLayoutEffect, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, Preload, Float, Text } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { Sparkles, DollarSign, Zap, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Falling 3D Golden Money Coins Component
function FallingCoins({ count = 70 }: { count?: number }) {
  const coinsRef = useRef<THREE.Group>(null!);

  const coinData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 35,
        Math.random() * 30 - 15,
        (Math.random() - 0.5) * 25,
      ] as [number, number, number],
      rotationSpeed: Math.random() * 2 + 1,
      fallSpeed: Math.random() * 0.05 + 0.02,
      scale: Math.random() * 0.2 + 0.25,
    }));
  }, [count]);

  useFrame((_, delta) => {
    if (!coinsRef.current) return;
    coinsRef.current.children.forEach((child, i) => {
      const data = coinData[i];
      child.rotation.x += delta * data.rotationSpeed;
      child.rotation.y += delta * data.rotationSpeed * 0.8;
      child.position.y -= data.fallSpeed;

      // Reset coin back to top when it falls below screen
      if (child.position.y < -15) {
        child.position.y = 15;
      }
    });
  });

  return (
    <group ref={coinsRef}>
      {coinData.map((data, idx) => (
        <mesh key={idx} position={data.position} scale={data.scale}>
          <cylinderGeometry args={[1, 1, 0.15, 24]} />
          <meshStandardMaterial
            color="#F59E0B"
            metalness={0.9}
            roughness={0.1}
            emissive="#F59E0B"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

// 3D Student Laptop Mesh
function LaptopMesh({ position, rotation, label, codeColor }: { position: [number, number, number]; rotation: [number, number, number]; label: string; codeColor: string }) {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation[1] + Math.sin(t * 0.8) * 0.08;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      {/* Laptop Base Plate */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.1, 2.2]} />
        <meshStandardMaterial color="#1E293B" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Laptop Screen Bezel */}
      <mesh position={[0, 1.1, -1.0]} rotation={[Math.PI * 0.08, 0, 0]}>
        <boxGeometry args={[3.2, 2.1, 0.08]} />
        <meshStandardMaterial color="#0F172A" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Screen Display with Code Lines */}
      <mesh position={[0, 1.1, -0.95]} rotation={[Math.PI * 0.08, 0, 0]}>
        <planeGeometry args={[2.9, 1.8]} />
        <meshStandardMaterial color={codeColor} emissive={codeColor} emissiveIntensity={0.8} />
      </mesh>

      {/* Code Text Badge Floating Above */}
      <Float speed={2} floatIntensity={1.2}>
        <Text position={[0, 2.6, -0.8]} fontSize={0.3} color="#FFFFFF" anchorX="center">
          {label}
        </Text>
      </Float>
    </group>
  );
}

// 3D Scene Controller
function VibeCodingScene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.8} color="#F59E0B" />
      <pointLight position={[-8, 0, 5]} intensity={2} color="#EC4899" />
      <pointLight position={[8, 0, 5]} intensity={2} color="#10B981" />

      {/* Falling Rain of Golden Money Coins */}
      <FallingCoins count={isMobile ? 35 : 75} />

      {/* 3D Student Laptops */}
      <LaptopMesh
        position={[-3.5, 0.5, 1]}
        rotation={[0.2, 0.4, 0]}
        label="VibeCoding.build() ✓"
        codeColor="#10B981"
      />
      <LaptopMesh
        position={[3.5, -0.5, 0.5]}
        rotation={[0.1, -0.4, 0]}
        label="ClientRevenue: $5,000+"
        codeColor="#EC4899"
      />
      <LaptopMesh
        position={[0, -2.5, 2]}
        rotation={[0.15, 0, 0]}
        label="AI Speed: 10x Scale"
        codeColor="#06B6D4"
      />
    </>
  );
}

// GSAP Scroll Camera Flight
function ScrollCameraController({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { camera } = useThree();

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(camera.position, {
        y: -3,
        z: 4,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [camera, containerRef]);

  return null;
}

// 3D Canvas Canvas Component
function VibeCanvas({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }}
        dpr={1}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <AdaptiveDpr />
        <VibeCodingScene isMobile={isMobile} />
        <ScrollCameraController containerRef={containerRef} />
        <Preload all />
      </Canvas>
    </div>
  );
}

const DynamicVibeCanvas = dynamic(() => Promise.resolve(VibeCanvas), {
  ssr: false,
});

export default function VibeCoding3DShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[140vh] w-full flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <DynamicVibeCanvas containerRef={containerRef} />

      {/* Radial Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600/15 via-purple-600/10 to-transparent blur-3xl" />

      {/* HTML Section Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-widest font-inter uppercase backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Vibe Coding & Financial Scale</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          Turn AI Vibe Coding into <br />
          <span className="text-vibrant-gradient text-glow-multicolor">Unlimited Scale & Revenue</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          How students and developers use AI tools to build high-converting client platforms, automate business workflows, and unlock real financial freedom.
        </motion.p>

        {/* 3 Luminous Feature Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto text-left">
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-2xl bg-[#060814]/90 border border-amber-500/30 backdrop-blur-2xl shadow-[0_0_25px_rgba(245,158,11,0.2)] space-y-3"
          >
            <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-400 inline-block">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-space font-bold text-lg text-white">10x Speed Development</h3>
            <p className="font-inter text-slate-300 text-xs leading-relaxed">
              Architect and ship full-stack React and Next.js applications in hours instead of months.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-2xl bg-[#060814]/90 border border-emerald-500/30 backdrop-blur-2xl shadow-[0_0_25px_rgba(16,185,129,0.2)] space-y-3"
          >
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 inline-block">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-space font-bold text-lg text-white">Unlimited Client Income</h3>
            <p className="font-inter text-slate-300 text-xs leading-relaxed">
              Deliver 17+ live client projects and build high-ticket recurring business revenues.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="p-6 rounded-2xl bg-[#060814]/90 border border-pink-500/30 backdrop-blur-2xl shadow-[0_0_25px_rgba(236,72,153,0.2)] space-y-3"
          >
            <div className="p-3 rounded-xl bg-pink-950/60 border border-pink-500/40 text-pink-400 inline-block">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-space font-bold text-lg text-white">Production Scale</h3>
            <p className="font-inter text-slate-300 text-xs leading-relaxed">
              Automated deployment pipelines on Vercel with 99.8% Lighthouse performance scores.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

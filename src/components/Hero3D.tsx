"use client";

import { useRef, useLayoutEffect, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, Preload, Float, Text } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sfx } from "@/utils/soundEffects";

gsap.registerPlugin(ScrollTrigger);

// Ultra-Optimized Particle Field
function MultiColorParticles({ count = 400 }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color("#EC4899"), // Pink
      new THREE.Color("#8B5CF6"), // Purple
      new THREE.Color("#06B6D4"), // Cyan
      new THREE.Color("#10B981"), // Emerald
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = randomColor.r;
      col[i * 3 + 1] = randomColor.g;
      col[i * 3 + 2] = randomColor.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 3D Dropping Word Component with Gravity Bounce
function DroppingWord({ text, position, color, delay }: { text: string; position: [number, number, number]; color: string; delay: number }) {
  const wordGroupRef = useRef<THREE.Group>(null!);

  useLayoutEffect(() => {
    if (!wordGroupRef.current) return;

    // Set initial position high up above camera
    wordGroupRef.current.position.y = 12;

    // GSAP Drop & Bounce animation
    gsap.to(wordGroupRef.current.position, {
      y: position[1],
      duration: 1.2,
      delay: delay,
      ease: "bounce.out",
      onComplete: () => {
        sfx.playWordDropSound();
      },
    });
  }, [position, delay]);

  return (
    <group ref={wordGroupRef} position={[position[0], 12, position[2]]}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        {/* 3D Backdrop Mesh */}
        <mesh position={[0, 0, -0.05]}>
          <planeGeometry args={[text.length * 0.24 + 0.6, 0.6]} />
          <meshBasicMaterial color="#060814" transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, 0, -0.04]}>
          <planeGeometry args={[text.length * 0.24 + 0.65, 0.65]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
        </mesh>

        {/* 3D Text */}
        <Text
          position={[0, 0, 0.05]}
          fontSize={0.32}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </Float>
    </group>
  );
}

// 3D Dropping Words Stage
function DroppingWordsStage() {
  const words = [
    { text: "⚡ VIBE CODING", pos: [-3.6, 3.2, 2] as [number, number, number], color: "#EC4899", delay: 0.2 },
    { text: "💰 ₹2.5L / MONTH", pos: [3.6, 3.0, 1.8] as [number, number, number], color: "#F59E0B", delay: 0.5 },
    { text: "🎯 50+ META ADS", pos: [-3.8, 1.2, 1] as [number, number, number], color: "#8B5CF6", delay: 0.8 },
    { text: "🌐 17+ LIVE SITES", pos: [3.8, 1.0, 1.2] as [number, number, number], color: "#06B6D4", delay: 1.1 },
    { text: "🚀 AI-POWERED SPEED", pos: [0, 3.6, 2.5] as [number, number, number], color: "#10B981", delay: 1.4 },
  ];

  return (
    <group position={[0, 0, 0]}>
      {words.map((w, i) => (
        <DroppingWord key={i} text={w.text} position={w.pos} color={w.color} delay={w.delay} />
      ))}
    </group>
  );
}

// Stage 1: Holographic Tech Globe
function GlobeStage({ isMobile }: { isMobile: boolean }) {
  const globeGroupRef = useRef<THREE.Group>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += delta * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group ref={globeGroupRef} position={[0, 0, 0]}>
      {/* Central Globe Core */}
      <mesh>
        <sphereGeometry args={[2.5, isMobile ? 16 : 32, isMobile ? 16 : 32]} />
        <meshBasicMaterial wireframe color="#EC4899" transparent opacity={0.6} />
      </mesh>

      {/* Atmosphere Shell */}
      <mesh>
        <sphereGeometry args={[2.2, 24, 24]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.35} />
      </mesh>

      {/* Orbiting Satellites Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[3.8, 0.06, 12, 64]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.7} />
      </mesh>

      {/* Satellite Nodes */}
      {[0, 1.5, 3.0, 4.5].map((angle, idx) => (
        <mesh
          key={idx}
          position={[
            Math.cos(angle) * 3.8,
            Math.sin(angle) * 1.2,
            Math.sin(angle) * 3.8,
          ]}
        >
          <icosahedronGeometry args={[0.22, 0]} />
          <meshBasicMaterial color={idx % 2 === 0 ? "#F59E0B" : "#10B981"} />
        </mesh>
      ))}
    </group>
  );
}

// Stage 2: 3D Computer Workstation & Coding Setup
function ComputerSetupStage() {
  const computerRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (computerRef.current) {
      computerRef.current.rotation.y = Math.sin(t * 0.4) * 0.06;
    }
  });

  return (
    <group ref={computerRef} position={[0, -1, -11]}>
      {/* Monitor Bezel */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[5.2, 3.2, 0.2]} />
        <meshStandardMaterial color="#1E293B" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Monitor Screen Display */}
      <mesh position={[0, 1.8, 0.11]}>
        <planeGeometry args={[4.8, 2.8]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.9} />
      </mesh>

      {/* Code Lines */}
      <group position={[0, 1.8, 0.12]}>
        {[-0.8, -0.3, 0.2, 0.7].map((yPos, i) => (
          <mesh key={i} position={[-0.8 + (i % 2) * 0.3, yPos, 0]}>
            <planeGeometry args={[2.4 - i * 0.3, 0.14]} />
            <meshBasicMaterial color={i % 2 === 0 ? "#EC4899" : "#10B981"} />
          </mesh>
        ))}
      </group>

      {/* Stand & Keyboard */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.6, 1.4, 0.3]} />
        <meshStandardMaterial color="#0F172A" />
      </mesh>
      <mesh position={[0, -0.55, 1.2]}>
        <boxGeometry args={[3.8, 0.12, 1.4]} />
        <meshStandardMaterial color="#0F172A" />
      </mesh>

      {/* Floating 3D Code Labels */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Text position={[-3.2, 2.5, 1]} fontSize={0.4} color="#EC4899" anchorX="center" anchorY="middle">
          {"<TeamAurora.AI />"}
        </Text>
      </Float>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <Text position={[3.4, 2.2, 0.5]} fontSize={0.38} color="#10B981" anchorX="center" anchorY="middle">
          {"AI.build(FullStack)"}
        </Text>
      </Float>
    </group>
  );
}

// Stage 3: Freelance Digital Build Hub
function FreelanceBuildStage() {
  const hubRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (hubRef.current) {
      hubRef.current.rotation.y = -0.1 + Math.sin(t * 0.3) * 0.08;
    }
  });

  return (
    <group ref={hubRef} position={[0, -0.5, -23]}>
      {/* Website Window Canvas */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[6.2, 3.6, 0.12]} />
        <meshStandardMaterial color="#0A0A0F" />
      </mesh>
      <mesh position={[0, 1.2, 0.07]}>
        <planeGeometry args={[6.0, 3.4]} />
        <meshBasicMaterial color="#10B981" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Wireframe Blocks */}
      <group position={[0, 1.2, 0.1]}>
        <mesh position={[0, 1.3, 0]}>
          <planeGeometry args={[5.4, 0.28]} />
          <meshBasicMaterial color="#EC4899" />
        </mesh>
        <mesh position={[-1.2, 0.3, 0]}>
          <planeGeometry args={[2.6, 1.2]} />
          <meshBasicMaterial color="#06B6D4" />
        </mesh>
        <mesh position={[1.4, 0.3, 0]}>
          <planeGeometry args={[1.8, 1.2]} />
          <meshBasicMaterial color="#8B5CF6" />
        </mesh>
      </group>

      {/* 3D Deploy Button */}
      <group position={[0, -0.8, 0.4]}>
        <mesh>
          <boxGeometry args={[3.4, 0.65, 0.15]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>
        <Text position={[0, 0, 0.1]} fontSize={0.26} color="#FFFFFF" anchorX="center" anchorY="middle">
          {"✓ DEPLOY CLIENT SITE"}
        </Text>
      </group>

      {/* Floating Badges */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Text position={[-3.6, 2.6, 1]} fontSize={0.38} color="#F59E0B" anchorX="center" anchorY="middle">
          {"17+ Live Client Sites"}
        </Text>
      </Float>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <Text position={[3.6, 2.4, 1]} fontSize={0.36} color="#EC4899" anchorX="center" anchorY="middle">
          {"WhatsApp + SEO Integrated"}
        </Text>
      </Float>
    </group>
  );
}

// Butter-Smooth GSAP Scroll Camera Controller
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
          scrub: 0.5,
        },
      });

      tl.to(camera.position, {
        z: -11,
        y: 0.4,
        ease: "none",
      })
        .to(camera.rotation, { x: -0.05, y: Math.PI * 0.06, ease: "none" }, 0)
        .to(camera.position, {
          z: -22,
          y: 0,
          ease: "none",
        })
        .to(camera.rotation, { x: 0.04, y: -Math.PI * 0.04, ease: "none" }, ">");
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
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={1}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <AdaptiveDpr />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} color="#EC4899" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#06B6D4" />

        <MultiColorParticles count={isMobile ? 150 : 350} />
        <DroppingWordsStage />
        <GlobeStage isMobile={isMobile} />
        <ComputerSetupStage />
        <FreelanceBuildStage />
        <ScrollCameraController heroContainerRef={heroContainerRef} />

        <Preload all />
      </Canvas>
    </div>
  );
}

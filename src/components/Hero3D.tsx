"use client";

import { useRef, useLayoutEffect, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, Preload, Float, Text } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Multi-Color Particle Field
function MultiColorParticles({ count = 1000 }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color("#EC4899"), // Pink
      new THREE.Color("#8B5CF6"), // Purple
      new THREE.Color("#06B6D4"), // Cyan
      new THREE.Color("#10B981"), // Emerald
      new THREE.Color("#F59E0B"), // Amber
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 45;

      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = randomColor.r;
      col[i * 3 + 1] = randomColor.g;
      col[i * 3 + 2] = randomColor.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        vertexColors
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Stage 1: Holographic Tech Globe
function GlobeStage({ isMobile }: { isMobile: boolean }) {
  const globeGroupRef = useRef<THREE.Group>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += delta * 0.25;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.x += delta * 0.1;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group ref={globeGroupRef} position={[0, 0, 0]}>
      {/* Central Holographic Globe Core */}
      <mesh>
        <sphereGeometry args={[2.5, isMobile ? 24 : 48, isMobile ? 24 : 48]} />
        <meshStandardMaterial
          wireframe
          color="#EC4899"
          emissive="#EC4899"
          emissiveIntensity={0.6}
          roughness={0.1}
        />
      </mesh>

      {/* Inner Glowing Atmosphere Shell */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={0.8}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Orbiting Tech Satellites Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[3.8, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.7}
        />
      </mesh>

      {/* Orbiting Satellite Nodes */}
      {[0, 1.25, 2.5, 3.75, 5].map((angle, idx) => (
        <mesh
          key={idx}
          position={[
            Math.cos(angle) * 3.8,
            Math.sin(angle) * 1.5,
            Math.sin(angle) * 3.8,
          ]}
        >
          <icosahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial
            color={idx % 2 === 0 ? "#F59E0B" : "#10B981"}
            emissive={idx % 2 === 0 ? "#F59E0B" : "#10B981"}
            emissiveIntensity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

// Stage 2: 3D Computer Workstation & Coding Setup
function ComputerSetupStage() {
  const computerRef = useRef<THREE.Group>(null!);
  const screenGlowRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (computerRef.current) {
      computerRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
      computerRef.current.position.y = -1 + Math.sin(t * 1.5) * 0.15;
    }
    if (screenGlowRef.current) {
      (screenGlowRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.8 + Math.sin(t * 3) * 0.3;
    }
  });

  return (
    <group ref={computerRef} position={[0, -1, -12]}>
      {/* Monitor Outer Bezel */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[5.2, 3.2, 0.2]} />
        <meshStandardMaterial color="#1E293B" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Monitor Screen (Glowing Code Display) */}
      <mesh ref={screenGlowRef} position={[0, 1.8, 0.11]}>
        <planeGeometry args={[4.8, 2.8]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Animated Screen Code Lines Overlay */}
      <group position={[0, 1.8, 0.12]}>
        {[-0.9, -0.4, 0.1, 0.6].map((yPos, i) => (
          <mesh key={i} position={[-0.8 + (i % 2) * 0.3, yPos, 0]}>
            <planeGeometry args={[2.5 - i * 0.3, 0.15]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#EC4899" : "#10B981"}
              transparent
              opacity={0.85}
            />
          </mesh>
        ))}
      </group>

      {/* Monitor Stand */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.6, 1.4, 0.3]} />
        <meshStandardMaterial color="#0F172A" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[2.2, 0.15, 1.4]} />
        <meshStandardMaterial color="#1E293B" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Keyboard Base */}
      <mesh position={[0, -0.55, 1.2]}>
        <boxGeometry args={[3.8, 0.12, 1.4]} />
        <meshStandardMaterial color="#0F172A" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Glowing Keycaps Grid */}
      <group position={[0, -0.47, 1.2]}>
        <mesh>
          <boxGeometry args={[3.4, 0.08, 1.1]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      </group>

      {/* Floating 3D Code Labels */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Text
          position={[-3.2, 2.5, 1]}
          fontSize={0.45}
          color="#EC4899"
          anchorX="center"
          anchorY="middle"
        >
          {"<TeamAurora.AI />"}
        </Text>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2}>
        <Text
          position={[3.4, 2.2, 0.5]}
          fontSize={0.4}
          color="#10B981"
          anchorX="center"
          anchorY="middle"
        >
          {"AI.build(FullStack)"}
        </Text>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.8}>
        <Text
          position={[-3.0, 0.2, 1.5]}
          fontSize={0.35}
          color="#F59E0B"
          anchorX="center"
          anchorY="middle"
        >
          {"SEO: 100% Rank"}
        </Text>
      </Float>

      {/* Ambient Neon Desk Lights */}
      <pointLight position={[-3, 0, -2]} intensity={2.5} color="#EC4899" />
      <pointLight position={[3, 0, -2]} intensity={2.5} color="#06B6D4" />
    </group>
  );
}

// Scroll Camera Controller: Globe -> Zoom -> Computer Setup
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
          scrub: 1.2,
        },
      });

      // Stage 1 to Stage 2 flight: Camera zooms into Globe (z=10 -> z=0) and lands in front of Computer Setup (z=-8)
      tl.to(camera.position, {
        z: -8,
        y: 0.8,
        ease: "none",
      }).to(
        camera.rotation,
        {
          x: -0.1,
          y: Math.PI * 0.1,
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
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} color="#EC4899" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#06B6D4" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#8B5CF6" />

        <MultiColorParticles count={isMobile ? 400 : 1000} />
        <GlobeStage isMobile={isMobile} />
        <ComputerSetupStage />
        <ScrollCameraController heroContainerRef={heroContainerRef} />

        <Preload all />
      </Canvas>
    </div>
  );
}

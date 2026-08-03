"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Sparkles, Cpu, Layers, Zap, GitBranch, Palette, LucideIcon } from "lucide-react";

interface ToolItem {
  name: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  glowColor: string;
  iconColor: string;
}

const tools: ToolItem[] = [
  {
    name: "Claude (Anthropic)",
    desc: "AI pair-programmer for architecture, content, and complex problem-solving",
    icon: Sparkles,
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "group-hover:border-amber-500/50",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]",
    iconColor: "text-amber-400",
  },
  {
    name: "Antigravity",
    desc: "AI-powered agentic code editor for rapid full-stack engineering",
    icon: Cpu,
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "group-hover:border-cyan-500/50",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
    iconColor: "text-cyan-400",
  },
  {
    name: "Next.js",
    desc: "React framework for production-grade, lightning-fast web applications",
    icon: Layers,
    color: "from-slate-500/20 to-zinc-500/20",
    borderColor: "group-hover:border-slate-400/50",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
    iconColor: "text-white",
  },
  {
    name: "Vercel",
    desc: "Instant serverless deployment and global hosting infrastructure",
    icon: Zap,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "group-hover:border-blue-500/50",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
    iconColor: "text-blue-400",
  },
  {
    name: "GitHub",
    desc: "Version control, automated CI/CD workflows, and code collaboration",
    icon: GitBranch,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/50",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]",
    iconColor: "text-purple-400",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first CSS engine for pixel-perfect, highly responsive styling",
    icon: Palette,
    color: "from-teal-500/20 to-emerald-500/20",
    borderColor: "group-hover:border-teal-500/50",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]",
    iconColor: "text-teal-400",
  },
];

// Interactive 3D Tilt Card Component
function TiltCard({ tool, idx }: { tool: ToolItem; idx: number }) {
  const Icon = tool.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative p-8 rounded-2xl bg-[#0A0A0F]/80 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 ${tool.borderColor} ${tool.glowColor} perspective-1000 cursor-pointer`}
    >
      {/* Card Gradient Background Layer */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      <div className="relative z-10 space-y-4" style={{ transform: "translateZ(30px)" }}>
        <div className="inline-block p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
          <Icon className={`w-6 h-6 ${tool.iconColor}`} />
        </div>

        <h3 className="font-space font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
          {tool.name}
        </h3>

        <p className="font-inter text-slate-400 text-sm leading-relaxed">
          {tool.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest font-inter uppercase"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Modern Tech & AI Stack</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          My Vibe Coding <span className="text-cyan-400 text-glow-cyan">Stack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-400 text-base sm:text-lg"
        >
          The AI-powered toolchain behind every high-performance project I build
        </motion.p>
      </div>

      {/* Grid of Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {tools.map((tool, idx) => (
          <TiltCard key={tool.name} tool={tool} idx={idx} />
        ))}
      </div>
    </section>
  );
}

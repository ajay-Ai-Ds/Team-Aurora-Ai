"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Terminal, Cpu, Cloud, Globe, Code2, Zap } from "lucide-react";

// Count-up Stat Item
function AnimatedStat({ value, suffix, label }: { value: number | string; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = typeof value === "number" ? value : parseInt(value, 10);
  const isNumber = !isNaN(numericValue);

  useEffect(() => {
    if (!isInView || !isNumber) return;

    let start = 0;
    const end = numericValue;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start >= end) clearInterval(timer);
    }, Math.max(stepTime, 30));

    return () => clearInterval(timer);
  }, [isInView, numericValue, isNumber]);

  return (
    <div ref={ref} className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-md">
      <div className="font-space text-3xl sm:text-4xl font-extrabold text-cyan-400 text-glow-cyan mb-1">
        {isNumber ? `${displayValue}${suffix || ""}` : value}
      </div>
      <div className="font-inter text-xs text-slate-400 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest font-inter uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who Am I</span>
          </div>

          {/* Heading */}
          <h2 className="font-space text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            I&apos;m Ajay — I Build Digital Experiences with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              AI-Assisted Development
            </span>
          </h2>

          {/* Paragraph */}
          <p className="font-inter text-slate-300 text-base sm:text-lg leading-relaxed">
            I am a full-stack web developer and digital builder who leverages state-of-the-art AI workflows (Claude, Antigravity) to rapidly architect, engineer, and deploy production-ready web platforms for real businesses. By combining AI speed with battle-tested frontend and backend practices, I transform complex ideas into high-converting, 60fps digital engines that deliver real client results.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <AnimatedStat value={6} suffix="+" label="Live Client Sites" />
            <AnimatedStat value={18} suffix="+" label="Services Built" />
            <AnimatedStat value={100} suffix="%" label="Deployed on Vercel" />
            <AnimatedStat value="AI-First" label="Dev Workflow" />
          </div>
        </motion.div>

        {/* Right Column - 3D Floating Glassmorphic Tool Stack */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[380px]"
        >
          {/* Decorative Glowing Rings */}
          <div className="absolute w-72 h-72 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full border border-blue-500/10 pointer-events-none" />

          {/* Floating Cards Container */}
          <div className="relative w-full max-w-sm space-y-4">
            {/* Card 1: Claude AI */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-5 rounded-2xl bg-[#060814]/85 border border-pink-500/30 backdrop-blur-2xl shadow-[0_8px_32px_rgba(236,72,153,0.2)] flex items-center gap-4 hover:border-pink-400 transition-colors"
            >
              <div className="p-3 rounded-xl bg-pink-950/60 border border-pink-500/40 text-pink-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-space text-white font-bold text-base">Claude AI (Anthropic)</h4>
                <p className="font-inter text-xs text-slate-400">AI Architect & Logic Engine</p>
              </div>
            </motion.div>

            {/* Card 2: Antigravity IDE */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="ml-6 p-5 rounded-2xl bg-[#060814]/85 border border-purple-500/30 backdrop-blur-2xl shadow-[0_8px_32px_rgba(139,92,246,0.2)] flex items-center gap-4 hover:border-purple-400 transition-colors"
            >
              <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-space text-white font-bold text-base">Antigravity IDE</h4>
                <p className="font-inter text-xs text-slate-400">Autonomous Agentic Coding</p>
              </div>
            </motion.div>

            {/* Card 3: Next.js + Vercel */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="p-5 rounded-2xl bg-[#060814]/85 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_8px_32px_rgba(6,182,212,0.2)] flex items-center gap-4 hover:border-cyan-400 transition-colors"
            >
              <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-space text-white font-bold text-base">Next.js & Vercel</h4>
                <p className="font-inter text-xs text-slate-400">Production Cloud Infrastructure</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

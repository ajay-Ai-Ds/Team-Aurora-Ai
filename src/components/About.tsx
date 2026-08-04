"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Cpu, Cloud, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

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
    <div ref={ref} className="p-4 rounded-xl bg-slate-900/70 border border-cyan-500/25 backdrop-blur-md">
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
            <span>WHO AM I</span>
          </div>

          {/* Heading */}
          <h2 className="font-space text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            I&apos;m Ajay — I Build Digital Experiences with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500">
              AI-Assisted Development
            </span>
          </h2>

          {/* Paragraph */}
          <p className="font-inter text-slate-300 text-base sm:text-lg leading-relaxed">
            I am a full-stack web developer and digital entrepreneur who leverages state-of-the-art AI workflows (Claude, Antigravity) to rapidly architect, engineer, and deploy production-ready web platforms for real businesses. By combining AI speed with battle-tested frontend and backend practices, I transform complex ideas into high-converting, 60fps digital engines that deliver real client results.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <AnimatedStat value={17} suffix="+" label="Live Client Sites" />
            <AnimatedStat value={50} suffix="+" label="Meta Ads Managed" />
            <AnimatedStat value={100} suffix="%" label="Deployed on Vercel" />
            <AnimatedStat value="AI-First" label="Dev Workflow" />
          </div>
        </motion.div>

        {/* Right Column - Founder Face Portrait Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Founder Card Container */}
          <div className="relative group p-4 rounded-3xl bg-[#060814]/90 border border-pink-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(236,72,153,0.25)] hover:border-pink-400 transition-all duration-500">
            {/* Image Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full">
              <img
                src="/portfolio/myimage.jpg"
                alt="Ajay - Founder of TeamAurora.AI"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-transparent to-black/20 pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 border border-pink-500/50 text-pink-300 text-xs font-space font-bold backdrop-blur-md shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Ajay — Founder & Lead Developer</span>
                </span>
              </div>

              {/* Floating Bottom Status Pill */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between p-3 rounded-xl bg-slate-950/85 border border-cyan-500/30 backdrop-blur-md font-inter text-xs text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  <span className="font-semibold text-slate-200">AI Vibe Coding Specialist</span>
                </div>
                <span className="font-space font-bold text-cyan-300">₹2.5L / Mo</span>
              </div>
            </div>

            {/* Bottom Tech Badges Bar */}
            <div className="pt-4 px-2 grid grid-cols-3 gap-2 text-center font-inter text-[11px] text-slate-400">
              <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-pink-400 font-bold block">Claude AI</span>
                <span>Architect</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-purple-400 font-bold block">Antigravity</span>
                <span>Agentic IDE</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-cyan-400 font-bold block">Next.js</span>
                <span>Vercel Cloud</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

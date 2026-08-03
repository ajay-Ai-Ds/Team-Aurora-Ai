"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, MapPin, Layers, Zap, TrendingUp, Sparkles, Trophy, LucideIcon } from "lucide-react";

interface ResultCardProps {
  icon: LucideIcon;
  value: number | string;
  suffix?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  delay?: number;
}

function StatCard({ icon: Icon, value, suffix, title, subtitle, badge, delay = 0 }: ResultCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = typeof value === "number" ? value : parseInt(value as string, 10);
  const isNumber = !isNaN(numericValue);

  useEffect(() => {
    if (!isInView || !isNumber) return;

    let start = 0;
    const end = numericValue;
    const duration = 1600;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start >= end) clearInterval(timer);
    }, Math.max(stepTime, 25));

    return () => clearInterval(timer);
  }, [isInView, numericValue, isNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-8 rounded-2xl bg-[#0A0A0F]/80 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/40 text-cyan-400 transition-colors">
          <Icon className="w-6 h-6" />
        </div>

        {badge ? (
          <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold font-inter tracking-wider">
            {badge}
          </span>
        ) : (
          <div className="w-2 h-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 animate-pulse" />
        )}
      </div>

      <div>
        <div className="font-space font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors text-glow-cyan">
          {isNumber ? `${displayValue}${suffix || ""}` : value}
        </div>
        <h3 className="font-space font-bold text-lg text-slate-200 mb-1">{title}</h3>
        {subtitle && <p className="font-inter text-xs text-slate-400">{subtitle}</p>}
      </div>
    </motion.div>
  );
}

export default function Results() {
  return (
    <section id="results" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest font-inter uppercase"
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>The Impact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          Real Results for <span className="text-cyan-400 text-glow-cyan">Real Businesses</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-400 text-base sm:text-lg"
        >
          From concept to deployment to measurable client growth
        </motion.p>
      </div>

      {/* 3x2 Grid of Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <StatCard
          icon={Globe}
          value={11}
          title="Websites Delivered"
          subtitle="Fully custom, high-converting platforms"
          delay={0}
        />
        <StatCard
          icon={MapPin}
          value={5}
          title="Cities Across India"
          subtitle="Chennai, Hyderabad, Bangalore, Vizag & more"
          delay={0.1}
        />
        <StatCard
          icon={Layers}
          value={18}
          suffix="+"
          title="Services Per Site Average"
          subtitle="In-depth service cataloging & architecture"
          delay={0.2}
        />
        <StatCard
          icon={Zap}
          value={100}
          suffix="%"
          title="Deployed on Vercel"
          subtitle="Serverless global edge network hosting"
          delay={0.3}
        />
        <StatCard
          icon={TrendingUp}
          value="Meta Ads"
          title="Campaign Case Studies"
          subtitle="Data-driven ad funnels & conversion tracking"
          badge="Updating Soon"
          delay={0.4}
        />
        <StatCard
          icon={Sparkles}
          value="AI-First"
          title="Development Workflow"
          subtitle="Rapid iteration powered by Claude & Antigravity"
          delay={0.5}
        />
      </div>
    </section>
  );
}

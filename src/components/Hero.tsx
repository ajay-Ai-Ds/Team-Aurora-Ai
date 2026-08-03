"use client";

import { useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/data/siteConfig";

gsap.registerPlugin(ScrollTrigger);

// Lazy load 3D Canvas with ssr: false for SSR performance & stability
const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0D1527] to-[#0A0A0F] animate-pulse opacity-40" />
  ),
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Fade out text overlay as user scrolls down through hero
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -60,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background Canvas */}
      <Hero3D heroContainerRef={containerRef} />

      {/* Radial Gradient Glow Behind Text */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent blur-3xl" />

      {/* HTML Hero Overlay Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider font-inter mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>Next-Gen Web Architecture</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-space font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-4"
        >
          {siteConfig.hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-space font-semibold text-lg sm:text-2xl text-cyan-300/90 mb-4 max-w-2xl text-glow-cyan"
        >
          {siteConfig.hero.subheading}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-inter text-slate-400 text-sm sm:text-base max-w-2xl mb-10 leading-relaxed"
        >
          {siteConfig.hero.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-space font-semibold text-base shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 -rotate-90" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 font-space font-semibold text-base backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Get In Touch</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-xs font-inter text-slate-400/80 pointer-events-none"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

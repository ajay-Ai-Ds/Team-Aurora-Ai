"use client";

import { useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles, ChevronDown, Monitor } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/data/siteConfig";

gsap.registerPlugin(ScrollTrigger);

// Lazy load 3D Canvas with ssr: false for SSR stability & maximum speed
const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#1E1035] to-[#0A0A0F] animate-pulse opacity-50" />
  ),
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Fade out text overlay as 3D camera zooms from Globe into Computer setup
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -70,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "55% top",
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
      className="relative min-h-[180vh] w-full flex items-start sm:items-center justify-center overflow-hidden pt-24 sm:pt-20"
    >
      {/* 3D Background Canvas */}
      <Hero3D heroContainerRef={containerRef} />

      {/* Vibrant Radial Multi-Color Glow Behind Text */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-600/20 via-purple-600/15 to-transparent blur-3xl" />

      {/* HTML Hero Overlay Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-12 sm:py-16"
      >
        {/* Vibrant Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-950/60 via-purple-950/60 to-cyan-950/60 border border-pink-500/40 text-pink-300 text-xs font-semibold tracking-wider font-inter mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.3)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin-slow" />
          <span>Multi-Stage 3D AI Platform</span>
          <Monitor className="w-3.5 h-3.5 text-cyan-400" />
        </motion.div>

        {/* Main Title with Multi-Color Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-space font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-4"
        >
          TeamAurora<span className="text-vibrant-gradient text-glow-multicolor">.AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-space font-semibold text-xl sm:text-3xl text-cyan-300 mb-4 max-w-3xl text-glow-cyan"
        >
          {siteConfig.hero.subheading}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-inter text-slate-300 text-sm sm:text-base max-w-2xl mb-10 leading-relaxed"
        >
          {siteConfig.hero.tagline}
        </motion.p>

        {/* CTA Buttons with Multi-Color Glows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-space font-semibold text-base shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:shadow-[0_0_40px_rgba(236,72,153,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 -rotate-90" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/50 text-cyan-300 hover:text-white hover:border-pink-500/50 font-space font-semibold text-base backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-xs font-inter text-slate-300/80 pointer-events-none"
      >
        <span className="text-cyan-300 font-semibold tracking-wider">Scroll: 3D Globe → Computer Setup → Freelance Build Hub</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-pink-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

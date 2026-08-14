"use client";

import { Sparkles } from "lucide-react";

export default function AaaLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-xl p-[2px] bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_20px_rgba(236,72,153,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300 ${className}`}>
      {/* Dark Luminous Interior */}
      <div className="w-full h-full bg-[#060814] rounded-[10px] flex items-center justify-center relative overflow-hidden px-1">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 via-purple-600/20 to-cyan-500/30 blur-sm pointer-events-none" />

        {/* Clean Ultra-Visible AAA Monogram */}
        <div className="relative z-10 flex items-center justify-center gap-[1px] font-space font-black tracking-tighter leading-none select-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-pink-500 to-pink-300 text-[13px] font-black -mr-[2px] drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
            A
          </span>
          <span className="text-white text-[15px] font-black drop-shadow-[0_0_12px_rgba(255,255,255,1)] scale-110 z-10">
            A
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-cyan-200 text-[13px] font-black -ml-[2px] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
            A
          </span>
        </div>

        {/* AI Sparkle Badge Accent */}
        <Sparkles className="w-2.5 h-2.5 text-cyan-300 absolute top-0.5 right-0.5 animate-pulse" />
      </div>
    </div>
  );
}

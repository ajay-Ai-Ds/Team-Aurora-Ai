"use client";

import { Sparkles, Zap, Globe, TrendingUp, ShieldCheck, Flame, Cpu } from "lucide-react";

const tickerItems = [
  { icon: Sparkles, text: "AI-Powered Web Development", color: "text-pink-400" },
  { icon: Globe, text: "17+ Live Client Websites", color: "text-cyan-400" },
  { icon: Zap, text: "60 FPS React & Next.js", color: "text-purple-400" },
  { icon: TrendingUp, text: "₹2.5L / Month Revenue Proof", color: "text-emerald-400" },
  { icon: Flame, text: "Meta Ads & Lead Gen Specialist", color: "text-amber-400" },
  { icon: Cpu, text: "Vibe Coding Expert", color: "text-pink-400" },
  { icon: ShieldCheck, text: "100% Deployed on Vercel Cloud", color: "text-cyan-400" },
];

export default function ScrollingTicker() {
  return (
    <div className="w-full bg-[#060814]/95 border-y border-pink-500/30 py-2.5 sm:py-3.5 overflow-hidden relative shadow-[0_0_30px_rgba(236,72,153,0.15)] z-20">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#060814] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#060814] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap gap-4 sm:gap-8 items-center">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm font-space font-medium text-slate-200 shadow-sm"
            >
              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${item.color}`} />
              <span className="tracking-wide">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

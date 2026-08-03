"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, PieChart, Landmark, ArrowUpRight, DollarSign, Sparkles } from "lucide-react";

export default function InvestmentShowcase() {
  return (
    <section id="investments" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold tracking-widest font-inter uppercase backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          <Landmark className="w-3.5 h-3.5 text-emerald-400" />
          <span>BUILDING LONG-TERM WEALTH</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          Zerodha Stocks & <span className="text-emerald-400 text-glow-cyan">Mutual Funds Proof</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-300 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Proof over promises. Allocating ₹60,000+ of AI Vibe Coding revenues directly into Zerodha Kite & Coin equity portfolios.
        </motion.p>
      </div>

      {/* Investment Showcase Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto p-8 rounded-3xl bg-[#060814]/95 border border-emerald-500/35 backdrop-blur-2xl shadow-[0_0_50px_rgba(16,185,129,0.2)] space-y-8"
      >
        {/* Top Zerodha Broker Badge Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6 font-inter">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="font-space font-bold text-white text-base">Zerodha Kite & Coin Portfolio</div>
              <div className="text-xs text-emerald-300 font-medium">Verified Active Equity & SIP Allocation</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-space font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>₹60,000 Total Capital Invested</span>
          </div>
        </div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-emerald-400">
              <PieChart className="w-5 h-5" />
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </div>
            <div className="font-space font-extrabold text-2xl text-white">₹35,000</div>
            <div className="font-inter font-bold text-xs text-emerald-300">Mutual Funds Portfolio</div>
            <p className="font-inter text-xs text-slate-400">Monthly SIPs in Nifty 50 & Technology Index Funds via Zerodha Coin.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-cyan-400">
              <DollarSign className="w-5 h-5" />
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </div>
            <div className="font-space font-extrabold text-2xl text-white">₹25,000</div>
            <div className="font-inter font-bold text-xs text-cyan-300">Stock Market Equity</div>
            <p className="font-inter text-xs text-slate-400">Direct equity holdings in bluechip tech & growth companies via Zerodha Kite.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-pink-400">
              <Sparkles className="w-5 h-5" />
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </div>
            <div className="font-space font-extrabold text-2xl text-white">50%+ Income</div>
            <div className="font-inter font-bold text-xs text-pink-300">Re-Investment Allocation</div>
            <p className="font-inter text-xs text-slate-400">Systematic capital allocation from AI client earnings into long-term compounding assets.</p>
          </div>
        </div>

        {/* Visual Allocation Progress Bar */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-xs font-inter font-semibold">
            <span className="text-emerald-300">Mutual Funds (58.3%)</span>
            <span className="text-cyan-300">Direct Stocks (41.7%)</span>
          </div>
          <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden flex">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[58.3%]" />
            <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[41.7%]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

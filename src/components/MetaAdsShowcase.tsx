"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Target, ShieldCheck, MapPin, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from "lucide-react";
import { metaAdsClients } from "@/data/metaAdsClients";

export default function MetaAdsShowcase() {
  const [showAll, setShowAll] = useState(false);

  const displayedClients = showAll ? metaAdsClients : metaAdsClients.slice(0, 20);

  return (
    <section id="meta-ads" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* PART 1: SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/40 text-purple-300 text-xs font-semibold tracking-widest font-inter uppercase backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.3)]"
        >
          <Megaphone className="w-3.5 h-3.5 text-purple-400" />
          <span>DIGITAL MARKETING RESULTS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          Meta Ads Campaigns <span className="text-purple-400 text-glow-purple">Managed by Our Team</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-300 text-base sm:text-lg max-w-3xl mx-auto"
        >
          Running and optimizing Facebook & Instagram ad accounts for 49+ safety nets and invisible grills businesses across India.
        </motion.p>
      </div>

      {/* PART 2: STATS ROW */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 max-w-4xl mx-auto"
      >
        <div className="p-6 rounded-2xl bg-[#060814]/85 border border-purple-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(139,92,246,0.2)] text-center space-y-2">
          <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400 inline-block mb-1">
            <Target className="w-6 h-6" />
          </div>
          <div className="font-space font-extrabold text-3xl sm:text-4xl text-white text-glow-purple">
            49+
          </div>
          <div className="font-inter font-semibold text-sm text-purple-300">
            Ad Accounts Managed
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#060814]/85 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)] text-center space-y-2">
          <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 inline-block mb-1">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="font-space font-extrabold text-3xl sm:text-4xl text-white text-glow-cyan">
            India-Wide
          </div>
          <div className="font-inter font-semibold text-sm text-cyan-300">
            Client Coverage
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#060814]/85 border border-pink-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(236,72,153,0.2)] text-center space-y-2">
          <div className="p-3 rounded-xl bg-pink-950/60 border border-pink-500/40 text-pink-400 inline-block mb-1">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="font-space font-extrabold text-3xl sm:text-4xl text-white text-glow-pink">
            Safety & Security Niche
          </div>
          <div className="font-inter font-semibold text-sm text-pink-300">
            Industry Focus
          </div>
        </div>
      </motion.div>

      {/* PART 3: CLIENT GRID */}
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div layout className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <AnimatePresence>
            {displayedClients.map((client, idx) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.3, delay: (idx % 20) * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#060814]/85 border border-purple-500/25 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all cursor-default"
              >
                <div className="p-1 rounded-full bg-purple-950/60 text-purple-400 group-hover:text-pink-400 transition-colors">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <span className="font-inter font-medium text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors">
                  {client}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button for 49 Clients */}
        {metaAdsClients.length > 20 && (
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/90 border border-purple-500/40 text-purple-300 hover:text-white font-space font-semibold text-sm backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-pink-500/60 hover:scale-105 transition-all cursor-pointer"
            >
              <span>{showAll ? "Show Top 20 Clients" : `Show All ${metaAdsClients.length} Meta Ads Clients`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* PART 4: TRUST STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6 text-center max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 font-inter"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>
            Every account actively managed with campaign optimization, audience targeting, and performance tracking - proof of real-world digital marketing operations at scale.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

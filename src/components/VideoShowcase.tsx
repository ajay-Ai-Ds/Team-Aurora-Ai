"use client";

import { motion } from "framer-motion";
import { Play, Camera, ExternalLink, Sparkles, Video, Volume2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function VideoShowcase() {
  return (
    <section id="video" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-pink-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-950/50 border border-pink-500/40 text-pink-300 text-xs font-semibold tracking-widest font-inter uppercase backdrop-blur-md shadow-[0_0_15px_rgba(236,72,153,0.3)]"
        >
          <Video className="w-3.5 h-3.5 text-pink-400" />
          <span>Featured Video & Instagram Showcase</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          Watch How We Build <span className="text-pink-400 text-glow-pink">With AI</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-300 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Behind-the-scenes web development, client site walk-throughs, and AI workflow demonstrations by Ajay.
        </motion.p>
      </div>

      {/* Video Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto rounded-3xl bg-[#060814]/90 border border-pink-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(236,72,153,0.2)] overflow-hidden"
      >
        {/* Video Player Chrome Top Bar */}
        <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between font-inter">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-pink-950/60 border border-pink-500/40 text-pink-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="font-space font-bold text-white text-sm">@ajay_teamaurora</div>
              <div className="text-xs text-slate-400">Official Instagram Reel & Video Channel</div>
            </div>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-space font-semibold text-xs shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:scale-105 transition-all"
          >
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Embedded Video Display Canvas */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden flex items-center justify-center group">
          {/* Background Gradient Artwork Placeholder & Animated Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-950/80 via-purple-950/70 to-cyan-950/80 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-black/60" />

          {/* Instagram Embedded Reel Frame */}
          <iframe
            src="https://www.instagram.com/p/Czzzzzzzzzz/embed"
            className="w-full h-full border-0 relative z-10 hidden"
            allowTransparency
            allow="encrypted-media"
          />

          {/* Interactive Play Overlay / Direct Video Launch Card */}
          <div className="relative z-20 flex flex-col items-center text-center p-8 space-y-6">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white shadow-[0_0_35px_rgba(236,72,153,0.6)] hover:scale-110 transition-all duration-300 group/btn"
              aria-label="Play Instagram Video"
            >
              <span className="absolute -inset-2 rounded-full bg-pink-500 opacity-40 animate-ping pointer-events-none" />
              <Play className="w-10 h-10 fill-white translate-x-0.5 relative z-10" />
            </a>

            <div className="space-y-2 max-w-lg">
              <h3 className="font-space font-bold text-2xl text-white">
                Watch Ajay&apos;s Latest Web Build Reel
              </h3>
              <p className="font-inter text-slate-300 text-sm">
                Click to watch live client site walk-throughs and AI coding demos directly on Instagram (@ajay_teamaurora).
              </p>
            </div>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900/90 border border-pink-500/50 text-pink-300 hover:text-white font-space font-semibold text-sm backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <Camera className="w-4 h-4 text-pink-400" />
              <span>Watch on Instagram @ajay_teamaurora</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Video Card Bottom Features Bar */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-inter text-xs text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>AI-Assisted Workflow Demos</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Volume2 className="w-4 h-4 text-purple-400" />
            <span>Real Client Site Walkthroughs</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Camera className="w-4 h-4 text-cyan-400" />
            <span>Follow @ajay_teamaurora</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

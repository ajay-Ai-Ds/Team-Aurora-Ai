"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import { sfx } from "@/utils/soundEffects";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    sfx.playButtonClickSound();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/portfolio/teamaurora-main.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Interactive Unmute / Mute Video Sound Button */}
      <div className="absolute top-28 right-6 z-30 pointer-events-auto">
        <motion.button
          onClick={toggleMute}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border backdrop-blur-2xl transition-all duration-300 cursor-pointer shadow-2xl ${
            !isMuted
              ? "bg-gradient-to-r from-pink-500 to-purple-600 border-pink-400 text-white shadow-[0_0_25px_rgba(236,72,153,0.6)] animate-pulse"
              : "bg-[#060814]/85 border-cyan-500/40 text-cyan-300 hover:border-pink-500/60 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          }`}
          aria-label={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
        >
          {!isMuted ? (
            <>
              <Volume2 className="w-4 h-4 text-white" />
              <span className="font-space font-bold text-xs tracking-wider">Sound ON 🔊</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-pink-400" />
              <span className="font-space font-bold text-xs tracking-wider">Unmute Video 🔊</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Bottom Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-xs font-inter text-white pointer-events-none drop-shadow-xl"
      >
        <span className="text-white font-semibold tracking-wider drop-shadow-md">Scroll to Explore TeamAurora.AI</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-pink-400 drop-shadow" />
        </motion.div>
      </motion.div>
    </section>
  );
}

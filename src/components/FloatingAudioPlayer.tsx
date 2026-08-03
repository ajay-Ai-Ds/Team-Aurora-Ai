"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Play, Pause, Sparkles } from "lucide-react";

export default function FloatingAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 pointer-events-auto">
      <audio
        ref={audioRef}
        src="/teamaurora-telugu.mp3"
        onEnded={() => setIsPlaying(false)}
      />

      <motion.button
        onClick={toggleAudio}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`relative group p-3.5 rounded-full backdrop-blur-2xl border transition-all duration-300 flex items-center justify-center cursor-pointer shadow-2xl ${
          isPlaying
            ? "bg-gradient-to-r from-amber-500 via-rose-500 to-pink-600 border-amber-400 text-white shadow-[0_0_30px_rgba(245,158,11,0.6)]"
            : "bg-[#060814]/90 border-amber-500/40 text-amber-300 hover:border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        }`}
        aria-label="Listen to Telugu Voice Note"
      >
        {isPlaying && (
          <span className="absolute -inset-1.5 rounded-full bg-amber-500 opacity-40 animate-ping pointer-events-none" />
        )}

        <div className="relative z-10 flex items-center gap-2">
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-white" />
          ) : (
            <Play className="w-5 h-5 fill-amber-300 translate-x-0.5" />
          )}

          {/* Equalizer animation when playing */}
          {isPlaying && (
            <div className="flex items-center gap-0.5 h-4">
              <span className="w-0.5 h-full bg-white rounded-full animate-pulse" />
              <span className="w-0.5 h-2/3 bg-white rounded-full animate-pulse delay-75" />
              <span className="w-0.5 h-full bg-white rounded-full animate-pulse delay-150" />
            </div>
          )}
        </div>
      </motion.button>

      {/* Hover/Active Badge Label */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#060814]/90 border border-amber-500/30 text-amber-200 text-xs font-space font-semibold backdrop-blur-xl shadow-lg"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>{isPlaying ? "Playing Telugu Story..." : "Listen Telugu Voice 🇮🇳"}</span>
      </motion.div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, Globe, TrendingUp, DollarSign, Award, CheckCircle, Sparkles, FileText } from "lucide-react";

export default function AudioJourney() {
  const [language, setLanguage] = useState<"en" | "te">("en");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showScript, setShowScript] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioSrc = language === "en" ? "/audio/ajay_journey_english.mp3" : "/audio/ajay_journey_telugu.mp3";

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  }, [language]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        // Fallback simulation if audio file is not created yet
        setIsPlaying(true);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section id="founder-story" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-600/15 via-pink-600/15 to-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-widest font-inter uppercase backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>FOUNDER STORY & PROOF</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          How I Earned <span className="text-vibrant-gradient text-glow-multicolor">₹2 Lakhs in 1 Month</span> With AI Vibe Coding
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-300 text-base sm:text-lg max-w-3xl mx-auto"
        >
          From managing 50+ Meta ad accounts & 17+ client websites to investing 50% of my income into Stocks & Mutual Funds. Listen to my real story in English or Telugu!
        </motion.p>
      </div>

      {/* Proof Milestone Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 max-w-6xl mx-auto"
      >
        <div className="p-6 rounded-2xl bg-[#060814]/90 border border-amber-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(245,158,11,0.2)] space-y-2">
          <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-400 inline-block mb-1">
            <DollarSign className="w-6 h-6" />
          </div>
          <div className="font-space font-extrabold text-3xl text-white text-glow-pink">
            ₹2,000,000
          </div>
          <div className="font-inter font-bold text-sm text-amber-300">
            Earned in 1 Month
          </div>
          <p className="font-inter text-xs text-slate-400">
            High-ticket client sites & agency ad management scaled with AI tools.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#060814]/90 border border-emerald-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)] space-y-2">
          <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 inline-block mb-1">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="font-space font-extrabold text-3xl text-white text-glow-cyan">
            50% Invested
          </div>
          <div className="font-inter font-bold text-sm text-emerald-300">
            Stocks & Mutual Funds
          </div>
          <p className="font-inter text-xs text-slate-400">
            Building long-term wealth by allocating half of all revenue into equity.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#060814]/90 border border-purple-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(139,92,246,0.2)] space-y-2">
          <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400 inline-block mb-1">
            <Award className="w-6 h-6" />
          </div>
          <div className="font-space font-extrabold text-3xl text-white text-glow-purple">
            50+ Ad Accounts
          </div>
          <div className="font-inter font-bold text-sm text-purple-300">
            Meta Ads Managed
          </div>
          <p className="font-inter text-xs text-slate-400">
            Facebook & Instagram campaigns optimized across India.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#060814]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)] space-y-2">
          <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 inline-block mb-1">
            <Globe className="w-6 h-6" />
          </div>
          <div className="font-space font-extrabold text-3xl text-white text-glow-cyan">
            17+ Live Sites
          </div>
          <div className="font-inter font-bold text-sm text-cyan-300">
            Deployed on Production
          </div>
          <p className="font-inter text-xs text-slate-400">
            Real client platforms with WhatsApp integration & local SEO.
          </p>
        </div>
      </motion.div>

      {/* DUAL-LANGUAGE AUDIO PLAYER CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto rounded-3xl bg-[#060814]/95 border border-amber-500/35 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.25)] p-8 space-y-6"
      >
        <audio
          ref={audioRef}
          src={audioSrc}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />

        {/* Player Top Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-950/80 border border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <Volume2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-space font-bold text-xl text-white">Ajay&apos;s Voice Note</h3>
              <p className="font-inter text-xs text-amber-300 font-medium">
                Listen to the full journey in {language === "en" ? "English" : "Telugu"}
              </p>
            </div>
          </div>

          {/* Language Toggle Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-slate-950/90 border border-slate-800">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-1.5 rounded-full font-space font-semibold text-xs transition-all cursor-pointer ${
                language === "en"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              English 🇬🇧
            </button>
            <button
              onClick={() => setLanguage("te")}
              className={`px-4 py-1.5 rounded-full font-space font-semibold text-xs transition-all cursor-pointer ${
                language === "te"
                  ? "bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Telugu 🇮🇳
            </button>
          </div>
        </div>

        {/* Audio Waveform & Play Control */}
        <div className="flex items-center gap-6">
          <button
            onClick={togglePlay}
            className="relative p-5 rounded-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 text-white shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer"
            aria-label={isPlaying ? "Pause Audio" : "Play Audio"}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-white" />
            ) : (
              <Play className="w-7 h-7 fill-white translate-x-0.5" />
            )}
          </button>

          <div className="flex-1 space-y-2">
            {/* Animated Waveform Bars */}
            <div className="flex items-center gap-1 h-10 px-2">
              {[40, 70, 30, 85, 50, 95, 60, 40, 80, 100, 45, 90, 65, 35, 80, 55, 90, 40, 75, 50, 85, 30, 70, 90, 40].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: isPlaying ? [`${h * 0.3}%`, `${h}%`, `${h * 0.3}%`] : "25%" }}
                  transition={{
                    duration: 0.8,
                    repeat: isPlaying ? Infinity : 0,
                    delay: i * 0.04,
                  }}
                  className={`flex-1 rounded-full transition-colors ${
                    isPlaying ? "bg-gradient-to-t from-pink-500 to-amber-400" : "bg-slate-800"
                  }`}
                />
              ))}
            </div>

            {/* Time progress */}
            <div className="flex justify-between text-xs font-inter text-slate-400 px-1">
              <span>{formatTime(currentTime)}</span>
              <span>{duration > 0 ? formatTime(duration) : "1:45"}</span>
            </div>
          </div>
        </div>

        {/* Script Toggle Accordion */}
        <div className="pt-4 border-t border-slate-900">
          <button
            onClick={() => setShowScript(!showScript)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300 hover:text-white text-xs font-space font-semibold transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Read Full Script Transcript ({language === "en" ? "English" : "Telugu"})</span>
            </span>
            <span className="text-amber-400">{showScript ? "Hide ▲" : "View Script ▼"}</span>
          </button>

          {showScript && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 p-5 rounded-2xl bg-slate-950/90 border border-amber-500/20 text-xs font-inter text-slate-300 space-y-3 leading-relaxed"
            >
              {language === "en" ? (
                <>
                  <p className="font-bold text-amber-300 text-sm">English Recording Script:</p>
                  <p>
                    &quot;Hey everyone, I&apos;m Ajay from TeamAurora.AI! I want to share something real with you today. Using AI tools like Claude and Antigravity, I developed an ultra-fast Vibe Coding workflow that allowed me to earn ₹2,000,000 (2 Lakhs) in just 1 single month!&quot;
                  </p>
                  <p>
                    &quot;I didn&apos;t just keep this income sitting around — I invested 50% of my total earnings directly into Mutual Funds and Stock market equity for long-term growth. Today, I single-handedly manage 50+ Meta Ads accounts and 17+ live production client websites for safety solution businesses across India.&quot;
                  </p>
                  <p>
                    &quot;If I can achieve this with AI-assisted development, you can too! Master AI tools, build real client value, and unlock financial freedom. Let&apos;s build together!&quot;
                  </p>
                </>
              ) : (
                <>
                  <p className="font-bold text-amber-300 text-sm">Telugu Recording Script (తెలుగు భోషణ):</p>
                  <p>
                    &quot;హాయ్ ఫ్రెండ్స్, నేను అజయ్ TeamAurora.AI నుండి! ఈ రోజు నా రియల్ జర్నీ మీతో పంచుకుంటున్నాను. క్లాడ్ మరియు యాంటీగ్రావిటీ AI టూల్స్ ఉపయోగించి, నేను రోజులలో వెబ్‌సైట్‌లు నిర్మించే Vibe Coding నేర్చుకున్నాను. దీని ద్వారా నేను ఒక్క నెలలోనే ₹2 లక్షలు సంపాదించాను!&quot;
                  </p>
                  <p>
                    &quot;ఆ ఆదాయంలో 50% పైగా మొత్తాన్ని నేను మ్యూచువల్ ఫండ్స్ మరియు స్టాక్ మార్కెట్లో ఇన్వెస్ట్ చేశాను. ప్రస్తుతం ఇండియా మొత్తం 50 కంటే ఎక్కువ Meta Ad అకౌంట్స్ మరియు 17+ లైవ్ క్లయింట్ వెబ్‌సైట్‌లను AI సహాయంతో మేనేజ్ చేస్తున్నాను.&quot;
                  </p>
                  <p>
                    &quot;AI సహాయంతో ప్రతి విద్యార్థి మరియు డెవలపర్ నిజమైన ఆదాయం పొందవచ్చు. AI టూల్స్ ఉపయోగించి గొప్ప భవిష్యత్తు నిర్మించుకుందాం!&quot;
                  </p>
                </>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Bottom Proof Note */}
      <div className="pt-8 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-400 font-inter">
        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        <span>Verified earnings & client proof — place your audio files in /public/audio/ to play live voice recordings!</span>
      </div>
    </section>
  );
}

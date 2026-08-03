"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, Globe, TrendingUp, DollarSign, Award, CheckCircle, Sparkles, FileText, Target, ShieldCheck } from "lucide-react";

export default function AudioJourney() {
  const [language, setLanguage] = useState<"en" | "te">("en");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showScript, setShowScript] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioSrc = language === "en" ? "/teamaurora-english.mp3" : "/teamaurora-telugu.mp3";

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
          <span>AJAY&apos;S STORY & PROOF</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-space text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
        >
          How I Earned <span className="text-vibrant-gradient text-glow-multicolor">₹2.5 Lakhs in Month 1</span> With AI Vibe Coding
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-slate-300 text-base sm:text-lg max-w-3xl mx-auto"
        >
          From building 17+ client websites to managing Meta & Google Ads and investing ₹60,000 into Zerodha Stocks & Mutual Funds. Listen to my story in English or Telugu!
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
            ₹250,000
          </div>
          <div className="font-inter font-bold text-sm text-amber-300">
            Earned in 1st Month
          </div>
          <p className="font-inter text-xs text-slate-400">
            Building websites & managing digital marketing projects for real businesses.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#060814]/90 border border-emerald-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)] space-y-2">
          <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 inline-block mb-1">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="font-space font-extrabold text-3xl text-white text-glow-cyan">
            ₹60,000 Invested
          </div>
          <div className="font-inter font-bold text-sm text-emerald-300">
            Zerodha Stocks & Mutual Funds
          </div>
          <p className="font-inter text-xs text-slate-400">
            Building long-term wealth immediately by allocating income into equity.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#060814]/90 border border-purple-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(139,92,246,0.2)] space-y-2">
          <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-400 inline-block mb-1">
            <Target className="w-6 h-6" />
          </div>
          <div className="font-space font-extrabold text-3xl text-white text-glow-purple">
            Meta & Google Ads
          </div>
          <div className="font-inter font-bold text-sm text-purple-300">
            Digital Marketing Scale
          </div>
          <p className="font-inter text-xs text-slate-400">
            Running targeted campaigns to generate real customer enquiries across India.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#060814]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)] space-y-2">
          <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 inline-block mb-1">
            <Globe className="w-6 h-6" />
          </div>
          <div className="font-space font-extrabold text-3xl text-white text-glow-cyan">
            Proof Over Promises
          </div>
          <div className="font-inter font-bold text-sm text-cyan-300">
            Live Client Proofs
          </div>
          <p className="font-inter text-xs text-slate-400">
            Real portfolio, live website URLs, payment proofs & investment screenshots.
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

        {/* Bottom Proof Note */}
        <div className="pt-8 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-300 font-inter">
          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>Verified earnings & client proof — Listen to Ajay&apos;s real voice recordings in English & Telugu!</span>
        </div>

        {/* Player Top Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-950/80 border border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <Volume2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-space font-bold text-xl text-white">Ajay&apos;s Personal Voice Note</h3>
              <p className="font-inter text-xs text-amber-300 font-medium">
                Listen in {language === "en" ? "English" : "Telugu"}
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
              <span>{duration > 0 ? formatTime(duration) : "2:10"}</span>
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
              <span>Read Ajay&apos;s Full Story Transcript ({language === "en" ? "English" : "Telugu"})</span>
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
                  <p className="font-bold text-amber-300 text-sm">English Story Script:</p>
                  <p>&quot;Hello everyone. I&apos;m Ajay. And this is my story.&quot;</p>
                  <p>&quot;Just one month ago, I started my journey into AI-powered web development, also known as vibe coding. I wasn&apos;t an expert. I simply decided to learn, build, and take action.&quot;</p>
                  <p>&quot;Within my very first month, I earned around ₹2.5 lakhs by building websites and managing digital marketing projects for businesses. This wasn&apos;t from a job. This wasn&apos;t from YouTube. This wasn&apos;t from luck. It came from solving real problems for real clients.&quot;</p>
                  <p>&quot;Today, I manage websites and digital marketing for many businesses across India. I build modern websites, manage Google Ads, manage Meta Ads, and help businesses generate real customer enquiries. Everything is powered by AI and my own skills.&quot;</p>
                  <p>&quot;If you think this sounds unbelievable... I understand. That&apos;s why I&apos;m sharing everything on this website. You&apos;ll find my client websites, project portfolio, payment proofs, and even my investment journey.&quot;</p>
                  <p>&quot;I believe proof is more powerful than promises. Instead of spending all my earnings, I started investing immediately. Today, I&apos;ve already invested ₹60,000 into mutual funds and the stock market through Zerodha. For me, earning money is only the first step. Building long-term wealth is the real goal.&quot;</p>
                  <p>&quot;If you&apos;re a student like me, don&apos;t underestimate what one month of focused learning can do. You don&apos;t need a big office or a huge team. You need skills, consistency, the courage to take action, and AI tools. If I can build this in one month... imagine what is possible in one year.&quot;</p>
                </>
              ) : (
                <>
                  <p className="font-bold text-amber-300 text-sm">Telugu Story Script (తెలుగు ట్రాన్స్‌స్క్రిప్ట్):</p>
                  <p>&quot;అందరికీ నమస్కారం. నేను అజయ్. ఇది నా కథ.&quot;</p>
                  <p>&quot;కేవలం ఒక నెల క్రితమే నేను AI-పవర్డ్ వెబ్ డెవలప్‌మెంట్ మరియు వైబ్ కోడింగ్ ప్రయాణం ప్రారంభించాను. నేను ఎక్స్‌పర్ట్‌ని కాదు. నేర్చుకోవాలి, నిర్మించాలి, ముందడుగు వేయాలి అని నిర్ణయించుకున్నాను.&quot;</p>
                  <p>&quot;నా మొదటి నెలలోనే వ్యాపారాలకు వెబ్‌సైట్‌లు నిర్మించడం మరియు డిజిటల్ మార్కెటింగ్ ప్రాజెక్ట్‌లు మేనేజ్ చేయడం ద్వారా సుమారు ₹2.5 లక్షలు సంపాదించాను. ఇది ఉద్యోగం నుండి కాదు, యూట్యూబ్ నుండి కాదు, అదృష్టం వల్ల అసలే కాదు. నిజమైన క్లయింట్ల సమస్యలను పరిష్కరించడం ద్వారా వచ్చింది.&quot;</p>
                  <p>&quot;ఈ రోజు నేను భారతదేశం నలుమూలలా అనేక వ్యాపారాలకు వెబ్‌సైట్‌లు, గూగుల్ యాడ్స్, మెటా యాడ్స్ మేనేజ్ చేస్తున్నాను. AI మరియు నా నైపుణ్యాలతో వ్యాపారాలకు నిజమైన కస్టమర్ ఎన్‌క్వైరీలు తెచ్చిపెడుతున్నాను.&quot;</p>
                  <p>&quot;నమ్మశక్యంగా లేదనుకుంటే నేను అర్థం చేసుకోగలను. అందుకే నా క్లయింట్ వెబ్‌సైట్‌లు, పోర్ట్‌ఫోలియో, పేమెంట్ ప్రూఫ్‌లు, నా పెట్టుబడుల ప్రయాణం అన్నీ ఈ వెబ్‌సైట్‌లో పంచుకుంటున్నాను.&quot;</p>
                  <p>&quot;మాటల కంటే ఆధారాలే శక్తివంతమైనవని నేను నమ్ముతాను. వచ్చిన సంపాదన అంతా ఖర్చు చేయకుండా, జీరోధా ద్వారా ₹60,000 మ్యూచువల్ ఫండ్స్ మరియు స్టాక్ మార్కెట్లో ఇన్వెస్ట్ చేశాను.&quot;</p>
                  <p>&quot;నాలాంటి విద్యార్థులకు నేను చెప్పేది ఒక్కటే — ఒక నెల శ్రద్ధతో కూడిన నేర్చుకోవడం ఎంత మార్పు తెస్తుందో తక్కువగా అంచనా వేయకండి. AI ఇచ్చే అవకాశాలను ఉపయోగించుకుని మన భవిష్యత్తును మనమే నిర్మించుకుందాం!&quot;</p>
                </>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Bottom Proof Note */}
      <div className="pt-8 text-center max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-300 font-inter">
        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        <span>Verified earnings & client proof — Listen to Ajay&apos;s real voice recordings in English & Telugu!</span>
      </div>
    </section>
  );
}

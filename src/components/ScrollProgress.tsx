"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed right-1 top-0 bottom-0 w-1 z-50 pointer-events-none flex flex-col justify-start">
      <motion.div
        style={{ scaleY }}
        className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 origin-top shadow-[0_0_12px_#06b6d4] rounded-full"
      />
    </div>
  );
}

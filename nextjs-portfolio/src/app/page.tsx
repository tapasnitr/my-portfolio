"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

type Props = {
  className?: string;
};

// Container variants for staggered children
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

// Individual item animation (uses numeric bezier easing supported by Framer Motion v11+)
const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero({ className = "" }: Props) {
  return (
    <header className={`relative overflow-hidden ${className}`}> 
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white to-slate-50 dark:from-[#060609] dark:via-[#070616] dark:to-[#070714]">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" />
        <div className="absolute -right-28 top-8 w-[520px] h-[520px] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-[#6ee7ff]/40 to-[#8b5cf6]/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Left column */}
          <div className="md:col-span-7 lg:col-span-6">
            <motion.div variants={item}>
              <p className="inline-block text-sm font-medium text-sky-400/80 mb-3 rounded-full px-3 py-1 backdrop-blur-sm">
                Full Stack • MERN • AI • LLM
              </p>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white"
            >
              Tapas Manna
              <span className="block mt-2 text-gradient text-slate-700 dark:text-slate-300/80 text-lg font-medium sm:inline sm:ml-3">
                Full Stack Developer • MERN • AI • LLM • Fuzzy Time Series Researcher
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              I build scalable applications and intelligent systems — combining production-ready MERN
              engineering with research-driven ML solutions (LLMs, time series forecasting and hybrid
              models). Available for freelance or full-time roles.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-gradient-to-r from-[#4fd1c5] to-[#7c3aed] text-black font-semibold shadow-lg hover:scale-[1.02] active:scale-100 transform transition">
  Contact Me
</Link>

              <Link href="#projects" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-800/60 transition">
  View Projects
</Link>
            </motion.div>

            <motion.div variants={item} className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <span>Open to:</span>
              <ul className="flex gap-3">
                <li className="px-2 py-1 rounded-md bg-white/3">Remote</li>
                <li className="px-2 py-1 rounded-md bg-white/3">Full-time</li>
                <li className="px-2 py-1 rounded-md bg-white/3">Contract</li>
              </ul>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="md:col-span-5 lg:col-span-6 flex items-center justify-end">
            {/* Keep the right visual separate from the staggered variants to avoid conflicts */}
            <motion.div
              className="relative w-full max-w-md lg:max-w-xl pt-6"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative rounded-2xl bg-gradient-to-b from-white/4 to-white/3 border border-white/6 backdrop-blur-md p-5 shadow-2xl">
                <div className="absolute -left-10 -top-10 w-36 h-36 rounded-full blur-2xl opacity-30 bg-gradient-to-tr from-[#56f3ff]/30 to-[#9b8cff]/20" />
                <div className="absolute -right-12 -bottom-12 w-44 h-44 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-[#7ee3b8]/18 to-[#6b46c1]/12" />

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-slate-800/70 to-slate-900/70 flex items-center justify-center text-slate-900 dark:text-white font-semibold text-xl">
                    TM
                  </div>

                  <div className="flex-1">
                    <div className="h-3 rounded-full bg-white/6 w-40 mb-3" />
                    <div className="h-2 rounded-full bg-white/5 w-28" />
                  </div>
                </div>

                <div className="mt-5 rounded-lg overflow-hidden border border-white/6">
                  <div className="bg-slate-100 dark:bg-[#0b1020] p-4">
                    <pre className="text-xs font-mono text-slate-700 dark:text-slate-300/80 leading-tight">
{`// latest stack
const stack = ['React', 'Next.js', 'Node', 'Express', 'MongoDB'];

// research
function forecast(ts) {
  // LSTM + fuzzy decomposition
  return model.predict(ts);
}`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute -left-6 -bottom-6 w-12 h-12 rounded-lg bg-gradient-to-br from-[#4fd1c5]/20 to-[#7c3aed]/18 blur-sm"
                />

                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 7.5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute -right-8 top-6 w-10 h-10 rounded-full bg-gradient-to-tr from-[#56f3ff]/18 to-[#8b5cf6]/14 blur-md"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-slate-900 text-slate-900 dark:text-white px-3 py-2 rounded-md">
        Skip to content
      </a>
    </header>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  PlayCircle,
  TrendingUp,
  Shield,
  Zap,
  Award,
  Rocket,
  Building2,
} from 'lucide-react';

interface DashFrame {
  headline: string[];
  subtext: string;
  bullets?: string[];
  builtDescription?: string;
}

const dashFrames: DashFrame[] = [
  {
    headline: ["We Don't Just Advise.", "We Build."],
    subtext: "From first prototype to real users, in production."
  },
  {
    headline: ["Khayal: Our First Venture, Live Today"],
    subtext: "A voice-first AI companion for elderly care, already in pilot with real families in Islamabad and the diaspora."
  },
  {
    headline: ["One Playbook. Every Industry."],
    subtext: "The same applied-AI approach, built to extend across care-tech, voice automation, and beyond.",
    bullets: ["Extensive engineering leadership", "Founder-led, hands-on execution", "Built with real users from day one"]
  }
];

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % dashFrames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const stats = [
    { value: 'Extensive Experience', label: 'Founder-led AI & engineering leadership', icon: Award },
    { value: 'Our Flagship Venture', label: 'Khayal — elder-care AI, live today', icon: Rocket },
    { value: 'Multi-Industry Studio', label: 'One playbook, applied across industries', icon: Building2 },
  ];

  const floatingBadges = [
    { icon: Shield, text: 'Founder-Led', delay: '0s', position: 'top-20 right-10' },
    { icon: TrendingUp, text: 'Applied, Not Slideware', delay: '0.5s', position: 'top-40 right-32' },
    { icon: Zap, text: 'Built With Real Users', delay: '1s', position: 'bottom-32 right-20' },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[720px] md:min-h-[780px] lg:h-screen flex items-start lg:items-center overflow-hidden pt-32 lg:pt-6 md:pt-40 mt-0 md:mt-0 hero-no-padding"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
          style={{
            backgroundImage: 'url(/hero-bg.png)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-900 dark:to-red-950/30" />
        <div className="absolute -top-24 -left-10 w-96 h-96 bg-gradient-to-br from-red-400/30 to-rose-400/30 dark:from-red-600/20 dark:to-rose-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-tl from-cyan-400/20 to-blue-400/20 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Floating Badges */}
      <div className="hidden xl:block absolute inset-0 z-10 pointer-events-none">
        {floatingBadges.map((badge, index) => (
          <div
            key={index}
            className={`absolute ${badge.position} animate-float`}
            style={{ animationDelay: badge.delay }}
          >
            <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-2xl px-4 py-3 shadow-xl border border-gray-200/50 dark:border-gray-700/50 flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <badge.icon className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{badge.text}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-10 relative z-20">
        <div className="max-w-7xl mx-auto hidden lg:grid items-center gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] transform scale-100 xl:scale-[0.9] origin-center">
          {/* Left Side (Static) */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex flex-col gap-4 items-start -ml-36 mr-14">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 * index, ease: 'easeOut' }}
                    className="group flex flex-col items-start gap-2 w-40 sm:w-44 backdrop-blur-md bg-white/80 dark:bg-gray-900/70 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-xl px-4 py-4 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-200 dark:hover:border-red-800/50 transition-all duration-300"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-400 dark:via-red-400 dark:to-rose-400 text-transparent bg-clip-text leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-gray-600 dark:text-gray-400 mt-1 font-medium leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex-1 space-y-6 ml-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-tight leading-tight max-w-xl">
                  <span className="block text-gray-900 dark:text-white mb-1">
                    We Build AI <span className="bg-gradient-to-r from-red-600 via-red-500 to-rose-500 dark:from-red-400 dark:via-red-400 dark:to-rose-400 text-transparent bg-clip-text">Ventures.</span>
                  </span>
                  <span className="block text-gray-900 dark:text-white">
                    That Actually <span className="bg-gradient-to-r from-red-600 via-red-500 to-rose-500 dark:from-red-400 dark:via-red-400 dark:to-rose-400 text-transparent bg-clip-text">Ship.</span>
                  </span>
                </h1>

                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                    ISRA AI is a multi-industry AI studio. We design, build, and pilot products with real users — starting with Khayal, our elder-care platform already in the hands of families today.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-1 md:pt-2">
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-7 py-3.5 text-sm md:text-base font-semibold text-white shadow-2xl shadow-red-500/40 transition-transform duration-300 hover:scale-[1.05]"
                  >
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  {/* <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 px-6 py-3 text-sm md:text-base font-medium text-gray-900 dark:text-white backdrop-blur transition-colors hover:bg-white dark:hover:bg-gray-800"
                  >
                    <PlayCircle className="h-5 w-5 text-red-500 dark:text-red-400" />
                    <span>Explore Our Services</span>
                  </a> */}
                </div>
                {/* <p className="text-lg font-medium text-gray-900 dark:text-white pt-4">This is how AI delivers measurable results at scale.</p> */}
              </div>
            </div>
          </div>

          {/* Right: Premium Animated Dashboard Mockup */}
          <div
            className="relative mt-2 lg:mt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Dashboard Container */}
            <div className="relative mx-auto max-w-md rounded-[32px] bg-slate-50 dark:bg-slate-950 p-[1px] shadow-[0_40px_120px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_120px_rgba(255,0,0,0.1)] backdrop-blur-xl border border-white/20 dark:border-white/5 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]">
              {/* Browser bar */}
              <div className="mx-3 mt-3 h-9 rounded-2xl bg-white/40 dark:bg-slate-900 px-4 flex items-center justify-between shadow-sm border border-white/20 dark:border-white/5">
                <div className="flex items-center gap-1.5 font-sans">
                  <span className="h-2 w-2 rounded-full bg-red-400/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-bold">dashboard</span>
                </div>
                <div className="h-4 w-28 rounded-full bg-gray-200/50 dark:bg-gray-700/50" />
              </div>

              {/* Animated Content Area */}
              <div className="m-3 mb-4 rounded-[24px] bg-white dark:bg-slate-900 p-8 shadow-inner border border-white/20 dark:border-white/5 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                <AnimatePresence>
                  <motion.div
                    key={currentFrame}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1] // ease-out cubic
                    }}
                    className="absolute inset-0 p-8 flex flex-col items-center justify-center"
                  >
                    <div className="text-center space-y-5 w-full">
                      {/* Headlines */}
                      <div className="space-y-1">
                        {dashFrames[currentFrame].headline.map((line, i) => (
                          <motion.h3
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1 * i,
                              ease: "easeOut"
                            }}
                            className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight"
                          >
                            {line}
                          </motion.h3>
                        ))}
                      </div>

                      {/* Subtext */}
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.15,
                          ease: "easeOut"
                        }}
                        className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed"
                      >
                        {dashFrames[currentFrame].subtext}
                      </motion.p>

                      {/* Bullets (Frame 3 only) */}
                      {dashFrames[currentFrame].bullets && (
                        <div className="grid grid-cols-1 gap-2 pt-2">
                          {dashFrames[currentFrame].bullets.map((bullet, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.3 + (i * 0.1),
                                ease: "easeOut"
                              }}
                              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-red-50/50 dark:bg-slate-800 border border-red-100/50 dark:border-white/10"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                              <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                                {bullet}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative Bottom Chart Lines */}
                <div className="absolute bottom-6 left-8 right-8 h-12 flex items-end justify-between gap-1 opacity-20">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [20, 40, 30, 45, 25][i % 5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.1
                      }}
                      className="w-full bg-red-400/40 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>

              {/* Status bar */}
              <div className="mx-6 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">Live Venture: Khayal</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-1 rounded-full transition-all duration-500 ${currentFrame === i ? "w-4 bg-red-500" : "bg-gray-300/40 dark:bg-gray-700"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Simplified Premium) */}
        <div className="max-w-3xl mx-auto px-4 flex flex-col gap-8 lg:hidden pb-12 items-center text-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="block text-gray-900 dark:text-white mb-1">
                We Build AI <span className="bg-gradient-to-r from-red-600 via-red-500 to-rose-500 dark:from-red-400 dark:via-red-400 dark:to-rose-400 text-transparent bg-clip-text">Ventures.</span>
              </span>
              <span className="block text-gray-900 dark:text-white">
                That Actually <span className="bg-gradient-to-r from-red-600 via-red-500 to-rose-500 dark:from-red-400 dark:via-red-400 dark:to-rose-400 text-transparent bg-clip-text">Ship.</span>
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed px-4">
                A multi-industry AI studio. We design, build, and pilot real products — starting with Khayal, our elder-care platform live with families today.
              </p>
            </div>

            {/* Mobile Dashboard Animation */}
            <div
              className="mt-4 w-full max-w-sm mx-auto rounded-[24px] bg-white dark:bg-slate-900 shadow-xl p-6 min-h-[220px] flex items-center justify-center relative overflow-hidden ring-1 ring-gray-100 dark:ring-white/10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence>
                <motion.div
                  key={currentFrame}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 p-6 flex flex-col items-center justify-center"
                >
                  <div className="w-full space-y-4">
                    <div className="space-y-1">
                      {dashFrames[currentFrame].headline.map((line, i) => (
                        <h3 key={i} className="text-lg font-bold text-gray-900 dark:text-white">{line}</h3>
                      ))}
                    </div>
                    <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-tight">{dashFrames[currentFrame].subtext}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-300 ${currentFrame === i ? "w-3 bg-red-400" : "w-1 bg-gray-200 dark:bg-gray-700"}`} />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
              <a href="#contact" className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg">Schedule Consultation</a>
              {/* <a href="#services" className="rounded-full border border-gray-200 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100 dark:bg-slate-800 hover:dark:bg-slate-700 transition-colors">Explore Services</a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10" />
    </section>
  );
};

export default Hero;
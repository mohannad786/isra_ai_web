import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // Floating animation keyframes
  const floatingBadges = [
    { icon: Shield, text: "Trusted AI", delay: "0s", position: "top-20 right-10" },
    { icon: TrendingUp, text: "Proven Results", delay: "0.5s", position: "top-40 right-32" },
    { icon: Zap, text: "Fast Integration", delay: "1s", position: "bottom-32 right-20" },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen flex items-center overflow-hidden pt-20 mt-0 md:mt-0"
    >
      {/* Animated Background with Custom Image */}
      <div className="absolute inset-0 z-0">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
          style={{
            backgroundImage: 'url(/hero-bg.png)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-900 dark:to-red-950/30" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-400/30 to-rose-400/30 dark:from-red-600/20 dark:to-rose-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-400/20 to-blue-400/20 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Floating Badges - Hidden on Mobile */}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-6xl mx-auto transform scale-75 md:scale-80">
          <div className="text-center space-y-4 md:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-950/50 dark:to-rose-950/50 border border-red-200 dark:border-red-800/50 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400 text-transparent bg-clip-text">
                Next-Generation AI Solutions
              </span>
            </div>

            {/* Main Headline with Animated Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-up leading-tight">
              <span className="block text-gray-900 dark:text-white mb-1">
                From Automation to
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-600 dark:from-red-400 dark:via-rose-400 dark:to-pink-400 text-transparent bg-clip-text animate-gradient-x">
                  Autonomy
                </span>
                <span className="text-gray-900 dark:text-white">.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-4 animate-fade-in-delay">
              <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                AI agents are no longer tools — they are a digital workforce.
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                They plan, decide, and act across systems, autonomously executing workflows and optimizing outcomes in real time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 animate-fade-in-delay-2">
              <a
                href="#contact"
                className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
              </a>

              <a
                href="#services"
                className="px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold hover:border-red-500 dark:hover:border-red-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Explore Our Services
              </a>
            </div>

            {/* Stats Row - Proven Impact */}
            <div className="space-y-6 pt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 animate-fade-in-delay-3">
                Proven Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto animate-fade-in-delay-3">
                {[
                  { value: "30–60%", label: "Reduction in manual effort", delay: "0.1s" },
                  { value: "24/7", label: "Autonomous operations", delay: "0.2s" },
                  { value: "Seconds", label: "Decisions in seconds, not days", delay: "0.3s" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-red-300 dark:hover:border-red-900/50"
                    style={{ transitionDelay: stat.delay }}
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400 text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-lg font-medium text-gray-900 dark:text-white animate-fade-in-delay-4 pt-4">
                This is how AI delivers measurable results at scale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10" />
    </section>
  );
};

export default Hero;
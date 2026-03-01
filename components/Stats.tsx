import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

const Stats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [splashScreenDone, setSplashScreenDone] = useState(false);

  // Wait for splash screen to finish (2s timer + 1.5s exit animation = 3.5s total)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreenDone(true);
    }, 3500); // Match the splash screen duration
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Only animate if splash screen is done AND component is in view
    if (splashScreenDone && isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [splashScreenDone, isInView, hasAnimated]);

  const stats: StatItem[] = [
    { value: 500, label: 'AI Models Deployed', suffix: '+' },
    { value: 150, label: 'Projects Completed', suffix: '+' },
    { value: 80, label: 'Satisfied Clients', suffix: '+' },
    { value: 5, label: 'Years of Innovation' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white/95 to-gray-50/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-sm relative">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center relative"
            >
              <div className="text-3xl md:text-5xl lg:text-6xl font-logo font-extrabold bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-400 dark:to-rose-400 text-transparent bg-clip-text mb-2">
                {hasAnimated && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    delay={index * 0.2}
                  />
                )}
                {!hasAnimated && <span>0</span>}
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-0 right-0 w-[1px] h-full bg-gray-200 dark:bg-gray-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Stats;


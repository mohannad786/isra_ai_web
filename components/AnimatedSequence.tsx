import React, { useState, useEffect } from 'react';

interface Frame {
    headline: string;
    subtext: string;
    bullets?: string[];
}

const frames: Frame[] = [
    {
        headline: "AI Is No Longer a Tool. It’s a Workforce.",
        subtext: "From automation to autonomy."
    },
    {
        headline: "AI Agents Execute Work — End to End",
        subtext: "They monitor systems, reason over data, and act across workflows without human bottlenecks."
    },
    {
        headline: "Real Impact. Real Scale.",
        subtext: "Built for enterprises that demand trust.",
        bullets: ["30–60% efficiency gains", "Always-on intelligence", "Faster, safer decisions"]
    }
];

const AnimatedSequence: React.FC = () => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % frames.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <div
            className="w-full bg-gray-50/50 dark:bg-gray-900/50 py-12 border-y border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container mx-auto px-4 overflow-hidden h-[120px] md:h-[140px] relative">
                {frames.map((frame, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${index === currentFrame
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4 pointer-events-none'
                            }`}
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            {frame.headline}
                        </h2>

                        {!frame.bullets ? (
                            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-both delay-150">
                                {frame.subtext}
                            </p>
                        ) : (
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-red-600 dark:text-red-400 font-semibold text-xs md:text-sm mb-1">
                                    {frame.bullets.map((bullet, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-both"
                                            style={{ animationDelay: `${300 + i * 100}ms` }}
                                        >
                                            • {bullet}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-base animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-both delay-150">
                                    {frame.subtext}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedSequence;

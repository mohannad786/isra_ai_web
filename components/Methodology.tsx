import React from 'react';
import { Target, Database, Rocket, Eye, Lock, Plug, TrendingUp } from 'lucide-react';

const Methodology: React.FC = () => {
  const pillars = [
    {
      icon: <Eye size={24} />,
      title: 'Honest Positioning',
      description: "We describe features as they exist today, not as roadmap ambitions. If something's still in pilot, we say so."
    },
    {
      icon: <Lock size={24} />,
      title: 'Privacy by Default',
      description: "Especially for health data, protection is built in from the first line of code, not added before a launch."
    },
    {
      icon: <Plug size={24} />,
      title: 'Fits Into Real Life',
      description: 'Our products work within the phones, routines, and habits people already have, not new hardware or workflows.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Built to Scale When Proven',
      description: 'We start small, with a handful of pilot households, and expand only once real usage validates the approach.'
    }
  ];

  const steps = [
    {
      icon: <Target size={28} />,
      number: '1',
      title: 'Start With a Real Problem',
      description: "We don't chase technology trends. Every venture starts from a gap we've observed firsthand, in our own family's life or in direct conversations with the people who'd use it."
    },
    {
      icon: <Database size={28} />,
      number: '2',
      title: 'Build With Real Users From Day One',
      description: 'We pilot early with a small group of real users, in real households, and let their actual usage, not our assumptions, shape what gets built next.'
    },
    {
      icon: <Rocket size={28} />,
      number: '3',
      title: 'Ship, Then Refine Relentlessly',
      description: "We obsess over the details that decide whether people actually use the product day to day, like how long it takes a voice assistant to start listening, not just feature completeness."
    }
  ];

  return (
    <section id="methodology" className="py-0 md:py-6 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 transform scale-90">
        {/* Header - Mobile optimized */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-logo font-bold mb-3 md:mb-4 text-gray-900 dark:text-white leading-tight px-2">
            How We Build: From Problem to Pilot to Product
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 italic px-4 leading-relaxed">
            Successful AI isn't built on algorithms alone, it's built on a foundation of real users, honest iteration, and hands-on execution.
          </p>
        </div>

        {/* Three Steps - Mobile: Vertical centered, Desktop: Horizontal */}
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
              {/* Number Circle - Centered on mobile */}
              <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-400 dark:to-rose-400 flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Content - Centered on mobile */}
              <div className="flex-1 text-center md:text-left">
                {/* Icon and Title - Stacked on mobile */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-3 mb-3 md:mb-3">
                  <div className="hidden md:flex justify-center md:justify-start">
                    <div className="text-red-600 dark:text-red-400">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-logo font-bold text-gray-900 dark:text-white leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Four Pillars - Mobile: Single column centered, Desktop: Grid */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="p-5 md:p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
              >
                {/* Mobile: Centered, Desktop: Left aligned */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 text-center md:text-left">
                  <div className="flex justify-center md:justify-start flex-shrink-0">
                    <div className="text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-logo font-semibold text-gray-900 dark:text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Tagline */}
        <div className="text-center px-4">
          <p className="text-xl md:text-2xl lg:text-3xl font-logo font-bold text-gray-900 dark:text-white leading-tight">
            We don't build demos. We build things people actually use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

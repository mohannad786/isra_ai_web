import React from 'react';
import { Target, Database, Rocket, Eye, Lock, Plug, TrendingUp } from 'lucide-react';

const Methodology: React.FC = () => {
  const pillars = [
    {
      icon: <Eye size={24} />,
      title: 'Radical Transparency',
      description: '"Black box" AI is a liability. We build explainable models so you can trust every decision the system makes.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Privacy-by-Architecture',
      description: "Security isn't a layer; it's the core. We use advanced encryption and privacy-preserving techniques to protect your IP."
    },
    {
      icon: <Plug size={24} />,
      title: 'Frictionless Integration',
      description: 'Our solutions are designed to live within your current tech stack, not disrupt it.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Elastic Scalability',
      description: 'We build for the "Day 2" reality, ensuring your solution grows from a localized pilot to an enterprise-wide asset.'
    }
  ];

  const steps = [
    {
      icon: <Target size={28} />,
      number: '1',
      title: 'Intentional Design (Problem-First)',
      description: "We don't chase technology; we solve for outcomes. By identifying high-impact business and societal challenges first, we ensure every AI implementation serves a specific, measurable purpose."
    },
    {
      icon: <Database size={28} />,
      number: '2',
      title: 'The Trusted Data Foundation',
      description: 'Reliable AI requires a "clean-room" data strategy. We architect robust data pipelines with built-in governance, lineage tracking, and security to ensure your systems are compliant and audit-ready from day one.'
    },
    {
      icon: <Rocket size={28} />,
      number: '3',
      title: 'Enterprise-Grade Implementation',
      description: 'We bridge the gap between "experimental" and "operational." Our deployment framework focuses on four critical pillars:'
    }
  ];

  return (
    <section id="methodology" className="py-0 md:py-6 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 transform scale-90">
        {/* Header - Mobile optimized */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-logo font-bold mb-3 md:mb-4 text-gray-900 dark:text-white leading-tight px-2">
            The ISRA Methodology: From Purpose to Production
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 italic px-4 leading-relaxed">
            Successful AI isn't built on algorithms alone—it's built on a foundation of integrity, security, and measurable intent.
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
            We don't build demos. We build systems that endure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

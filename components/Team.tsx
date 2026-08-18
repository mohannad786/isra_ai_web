import React from 'react';

const Team: React.FC = () => {

  return (
    <section id="leadership" className="py-20 bg-gray-50/95 dark:bg-gray-800/95 backdrop-blur-sm relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-logo font-bold mb-8 text-gray-900 dark:text-white text-center">
            Leadership
          </h2>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
            <p>
              ISRA AI is founder-led. Our leadership brings extensive international, hands-on experience across enterprise technology, data platforms, and AI-enabled systems, leading teams and delivering large-scale digital transformations across North America, Europe, Asia, and the Middle East.
            </p>
            <p>
              That same hands-on approach carries into every ISRA AI venture: not just setting strategy from a distance, but staying close to the code, the users, and the day-to-day details that decide whether a product actually gets used.
            </p>
            <p className="font-medium text-gray-900 dark:text-white">
              Strategic vision, backed by direct execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
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
              Our leadership brings 30+ years of international, hands-on experience across enterprise technology, data platforms, and mission-critical systems in regulated and asset-intensive industries.
            </p>
            <p>
              With a strong technical foundation in enterprise applications, and AI-enabled systems data architecture, data governance and quality, we have designed, implemented, and operated large-scale digital solutions while leading global delivery teams across North America, Europe, Asia, and the Middle East.
            </p>
            <p className="font-medium text-gray-900 dark:text-white">
              Clients benefit from a rare combination of strategic vision and hands-on execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
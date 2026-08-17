import React from 'react';
import { Shield, Target, Scale, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield size={24} />,
      title: 'Built, Not Just Advised',
      description: "We ship working products, starting with Khayal, our elder-care platform in active pilot with real families."
    },
    {
      icon: <Target size={24} />,
      title: 'Problem-First',
      description: 'Every venture starts from a gap we’ve observed firsthand, not a trend we’re chasing.'
    },
    {
      icon: <Scale size={24} />,
      title: 'Hands-On Through Iteration',
      description: 'Our founders write the code, talk to users, and adjust based on what actually happens in the field.'
    },
    {
      icon: <Users size={24} />,
      title: 'Multi-Industry by Design',
      description: "The same applied-AI approach extends across care-tech, voice automation, and beyond, so one sector never defines us."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm relative">
      <div className="container mx-auto px-4 md:px-6 transform scale-90">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Vision & Mission */}
          <div>
            <h2 className="text-3xl md:text-4xl font-logo font-bold mb-6 text-gray-900 dark:text-white">
              Our Purpose
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              ISRA AI is a multi-industry AI studio. We identify problems worth solving, build the product ourselves, and stay hands-on through launch and iteration with real users — proving the approach with Khayal before extending it into new industries.
            </p>
          </div>

          {/* Right Column - Values Grid */}
          <div>
            <h2 className="text-3xl md:text-4xl font-logo font-bold mb-6 text-gray-900 dark:text-white">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-logo font-semibold text-gray-900 dark:text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

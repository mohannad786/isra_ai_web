import React from 'react';
import { Brain, Shield, Database, Zap, Heart } from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
}

interface PrimaryService {
  icon: React.ReactNode;
  title: string;
  features: ServiceFeature[];
}

interface EnterpriseService {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SpecializedService {
  icon: React.ReactNode;
  title: string;
  features: ServiceFeature[];
}

const Services: React.FC = () => {
  // Live Ventures
  const primaryServices: PrimaryService[] = [
    {
      icon: <Heart size={36} />,
      title: 'Khayal (خیال) — AI Elder Care',
      features: [
        {
          title: 'Voice-First Companion',
          description:
            'Elderly users interact by speaking naturally in Urdu or English — no typing, no complex menus, no learning curve.'
        },
        {
          title: 'Caregiver Portal',
          description:
            'Remote family members get an urgency-sorted view across every parent or relative they’re looking after, with real-time alerts.'
        },
        {
          title: 'Built Around the Household',
          description:
            'A role model for Health Users, Caregivers, and hired Care Providers, reflecting how families actually use it, not how we assumed they would.'
        }
      ]
    },
    {
      icon: <Zap size={36} />,
      title: 'Awaz — Voice Automation',
      features: [
        {
          title: 'Built on Khayal’s Voice Stack',
          description:
            'The same speech, reasoning, and text-to-speech pipeline that powers Khayal, adapted for business voice automation.'
        },
        {
          title: 'Pakistan, GCC & US Markets',
          description:
            'Urdu, Arabic, and English voice automation, with the Gulf as our priority second market given the underserved demand for Arabic voice AI.'
        }
      ]
    }
  ];

  // How We Build
  const enterpriseServices: EnterpriseService[] = [
    {
      icon: <Shield size={24} />,
      title: 'Privacy by Default',
      description:
        'Sensitive data, especially health data, is protected by design from day one, not bolted on after launch.'
    },
    {
      icon: <Database size={24} />,
      title: 'Grounded in Real Usage',
      description:
        'Product decisions come from pilot data and direct user feedback, not assumptions about what buyers want to hear.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Obsessed With What Users Feel',
      description:
        'We treat details like voice-response latency and interaction friction as core product work, not polish.'
    }
  ];

  // Where We're Expanding
  const specializedServices: SpecializedService[] = [
    {
      icon: <Heart size={36} />,
      title: 'Healthcare & Care-Tech',
      features: [
        {
          title: 'Elder Care & Remote Monitoring',
          description:
            'Voice-first AI companions and caregiver tools for aging-in-place, proven through Khayal’s active pilots.'
        },
        {
          title: 'Clinical & Patient Monitoring',
          description:
            'Early-stage exploration of light-touch patient monitoring, informed by direct interest from clinicians in our network.'
        }
      ]
    },
    {
      icon: <Brain size={36} />,
      title: 'New Industries',
      features: [
        {
          title: 'One Playbook, Applied Elsewhere',
          description:
            'The same problem-first, hands-on approach we used to build Khayal, now being evaluated for other regulated and asset-intensive sectors.'
        },
        {
          title: 'Oil & Gas: On Our Radar',
          description:
            'Early-stage exploration of applied AI for asset-intensive operations — still validating real problems before we build anything.'
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-4 md:py-6 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 transform scale-90">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-logo font-bold text-gray-900 dark:text-white mb-3 md:mb-4 leading-tight">
            What We're Building
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed px-2">
            Live ventures, the practices behind them, and where we're headed next
          </p>
        </div>

        <div className="w-full md:max-w-7xl md:mx-auto md:bg-gray-50/50 md:dark:bg-gray-800/30 md:rounded-2xl lg:rounded-3xl md:p-8 lg:p-12 space-y-10 md:border border-gray-200/50 dark:border-gray-700/30">

          {/* Strategic AI Solutions */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-logo font-bold text-gray-900 dark:text-white mb-6">
              Live Ventures
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {primaryServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:border-red-500/50 transition-all hover:shadow-lg"
                >
                  <div className="flex gap-6">
                    <div className="text-red-600 dark:text-red-400">{service.icon}</div>
                    <div>
                      <h4 className="text-xl font-logo font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h4>
                      <div className="space-y-4">
                        {service.features.map((feature, i) => (
                          <div key={i}>
                            <h5 className="font-semibold text-gray-900 dark:text-white">
                              {feature.title}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-300">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Governance */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-logo font-bold text-gray-900 dark:text-white mb-6">
              How We Build
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {enterpriseServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-red-500/50 transition-all hover:shadow-lg"
                >
                  <div className="text-red-600 dark:text-red-400 mb-4">{service.icon}</div>
                  <h4 className="font-logo font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Sectors */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-logo font-bold text-gray-900 dark:text-white mb-6">
              Where We're Expanding
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:border-red-500/50 transition-all hover:shadow-lg"
                >
                  <div className="flex gap-6">
                    <div className="text-red-600 dark:text-red-400">{service.icon}</div>
                    <div>
                      <h4 className="text-xl font-logo font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h4>
                      <div className="space-y-4">
                        {service.features.map((feature, i) => (
                          <div key={i}>
                            <h5 className="font-semibold text-gray-900 dark:text-white">
                              {feature.title}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-300">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
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

export default Services;

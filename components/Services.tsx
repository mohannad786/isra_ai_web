import React from 'react';
import { Brain, Eye, Shield, Database, Zap, Heart } from 'lucide-react';

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
  // Primary Service Tier: Strategic AI Solutions
  const primaryServices: PrimaryService[] = [
    {
      icon: <Brain size={36} />,
      title: 'GenAI & Enterprise Intelligence',
      features: [
        {
          title: 'The Copilot Engine',
          description:
            'Secure internal AI assistants that transform fragmented enterprise knowledge into actionable intelligence and reporting.'
        },
        {
          title: 'Precision RAG (Retrieval-Augmented Generation)',
          description:
            'High-fidelity AI grounded in private data using advanced vector search and semantic indexing to eliminate hallucinations.'
        },
        {
          title: 'Agentic Workflows',
          description:
            'Autonomous AI agents that orchestrate complex, end-to-end business workflows across your existing systems.'
        }
      ]
    },
    {
      icon: <Eye size={36} />,
      title: 'Advanced Predictive & Visual AI',
      features: [
        {
          title: 'Predictive Analytics',
          description:
            'Custom machine learning models for forecasting, risk scoring, anomaly detection, and fraud prevention.'
        },
        {
          title: 'Cognitive Vision',
          description:
            'Image and video intelligence for industrial inspection, safety monitoring, and automated visual analysis.'
        }
      ]
    }
  ];

  // Enterprise-Ready Layer
  const enterpriseServices: EnterpriseService[] = [
    {
      icon: <Shield size={24} />,
      title: 'Responsible & Explainable AI (XAI)',
      description:
        'Transparent, auditable AI systems with built-in bias detection, explainability, and regulatory compliance.'
    },
    {
      icon: <Database size={24} />,
      title: 'Data Integrity & Lineage',
      description:
        'Automated data profiling, lineage tracking, and anomaly detection to ensure high-quality AI inputs.'
    },
    {
      icon: <Zap size={24} />,
      title: 'MLOps & Cost Efficiency',
      description:
        'Continuous monitoring, drift detection, and intelligent resource optimization to control AI costs at scale.'
    }
  ];

  // Specialized Sector Intelligence
  const specializedServices: SpecializedService[] = [
    {
      icon: <Heart size={36} />,
      title: 'Healthcare & Care-Tech',
      features: [
        {
          title: 'AI-Powered Healthcare Intelligence',
          description:
            'Smarter diagnostics, secure health data platforms, and predictive insights that improve clinical and patient outcomes.'
        },
        {
          title: 'Connected Care & Assisted Living Technology',
          description:
            'AI-enabled monitoring, mobile care applications, and secure health records supporting safer, independent living.'
        }
      ]
    },
    {
      icon: <Brain size={36} />,
      title: 'Oil & Gas',
      features: [
        {
          title: 'AI-Driven Drilling Optimization',
          description:
            'Real-time intelligence to reduce non-productive time, improve rate of penetration, and lower drilling risk.'
        },
        {
          title: 'Upstream & Asset Optimization',
          description:
            'Predictive intelligence and digital twins that maximize production, reduce downtime, and enhance asset performance.'
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
            Our Services
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed px-2">
            Enterprise-grade AI capabilities designed for scale, compliance, and measurable impact
          </p>
        </div>

        <div className="w-full md:max-w-7xl md:mx-auto md:bg-gray-50/50 md:dark:bg-gray-800/30 md:rounded-2xl lg:rounded-3xl md:p-8 lg:p-12 space-y-10 md:border border-gray-200/50 dark:border-gray-700/30">

          {/* Strategic AI Solutions */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-logo font-bold text-gray-900 dark:text-white mb-6">
              Strategic AI Solutions
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
              Governance, Trust & Operations
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
              Specialized Sector Intelligence
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

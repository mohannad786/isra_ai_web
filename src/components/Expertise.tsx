import React from 'react';
import { Eye, Brain, Sparkles, Cpu, Zap, Network, Shield } from 'lucide-react';

interface ExpertiseItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ icon, title, description }) => {
  return (
    <div className="group p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-sm hover:shadow-xl transition-all h-full flex flex-col hover:bg-white/90 dark:hover:bg-gray-800/90">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-logo font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      icon: <Eye size={24} />,
      title: 'Vision-Language-Action (VLA)',
      description: 'Advanced models that integrate visual perception, language understanding, and action execution for autonomous robotic systems.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Evolutionary AI Agents',
      description: 'Autonomous AI systems that design and optimize algorithms through evolutionary computation, achieving breakthrough improvements.'
    },
    {
      icon: <Brain size={24} />,
      title: 'Retrieval-Augmented Generation (RAG)',
      description: 'Advanced techniques combining information retrieval with text generation for accurate, context-aware AI responses.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Small Language Models (SLMs)',
      description: 'Efficient, edge-optimized AI models for privacy-preserving, low-latency processing on mobile and IoT devices.'
    },
    {
      icon: <Network size={24} />,
      title: 'Multimodal AI Systems',
      description: 'Unified architectures processing text, images, audio, and video simultaneously for comprehensive AI understanding.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Transformer Diffusion Models',
      description: 'State-of-the-art architectures for high-quality video and image generation with superior temporal consistency.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Contextual AI & Safety',
      description: 'Domain-specific knowledge enhancement with AI safety, alignment, and explainability for trustworthy deployments.'
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-100 dark:bg-rose-900/20 rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-logo font-bold mb-4 text-gray-900 dark:text-white">
            Advanced AI Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We leverage cutting-edge AI techniques and methodologies to deliver innovative, state-of-the-art solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <ExpertiseItem
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
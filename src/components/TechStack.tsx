import React from 'react';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiOpenai, 
  SiHuggingface,
  SiScikitlearn,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiApacheairflow,
  SiMlflow,
  SiGoogle,
  SiLangchain,
  SiAnaconda
} from 'react-icons/si';
import { FaBrain, FaRobot, FaCode } from 'react-icons/fa';

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TechStack: React.FC = () => {
  const techStack: TechItem[] = [
    // Core ML Frameworks
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'Scikit-Learn', icon: SiScikitlearn },
    { name: 'Keras', icon: SiKeras },
    
    // LLM Platforms
    { name: 'OpenAI', icon: SiOpenai },
    { name: 'Gemini', icon: SiGoogle },
    { name: 'Hugging Face', icon: SiHuggingface },
    
    // LLM Frameworks & Tools
    { name: 'LangChain', icon: SiLangchain },
    { name: 'LlamaIndex', icon: FaBrain },
    
    // MLOps & Workflow
    { name: 'MLflow', icon: SiMlflow },
    { name: 'Apache Airflow', icon: SiApacheairflow },
    
    // Data Science Tools
    { name: 'Pandas', icon: SiPandas },
    { name: 'NumPy', icon: SiNumpy },
    { name: 'Jupyter', icon: SiJupyter },
    { name: 'Anaconda', icon: SiAnaconda },
  ];

  return (
    <section className="py-20 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-logo font-bold mb-4 text-gray-900 dark:text-white">
            Our AI Technology Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge AI/ML frameworks to deliver innovative solutions.
          </p>
        </div>

        {/* Tech Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
          {techStack.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative"
              >
                <div
                  className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-400 transition-all cursor-pointer hover:shadow-xl hover:scale-110"
                  title={tech.name}
                >
                  <IconComponent className="text-4xl md:text-5xl text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                  <span className="mt-3 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors text-center">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;


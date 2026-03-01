import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star, Sparkles, Check } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'Custom',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Standard support',
      '1GB storage',
      'API access'
    ]
  },
  {
    name: 'Professional',
    price: 'Custom',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'API access',
      'Custom integrations'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Unlimited storage',
      'API access',
      'Custom integrations',
      'SLA guarantee'
    ]
  }
];

const PricingCard: React.FC<PricingPlan> = ({ name, price, description, features, isPopular, delay = 0 }) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative w-[300px] flex-shrink-0 rounded-2xl overflow-hidden min-h-[580px] ${
      isPopular 
        ? `${theme === 'dark' ? 'bg-gradient-to-b from-white/10 to-purple-900/30' : 'bg-gradient-to-b from-purple-50 to-white'} backdrop-blur-lg border-2 border-purple-500 scale-[1.02]` 
        : 'bg-white dark:bg-gray-800'
    }`}>
      <div className="p-8 transition-opacity duration-300 group-hover:opacity-10">
        
        <h3 className={`text-2xl font-bold mb-2 ${
          isPopular ? (theme === 'dark' ? 'text-white' : 'text-gray-900') : 'text-gray-900 dark:text-white'
        }`}>
          {name}
        </h3>
        <div className="mb-4 flex items-baseline gap-2">
          <span className={`text-4xl font-bold ${
            isPopular ? (theme === 'dark' ? 'text-white' : 'text-gray-900') : 'text-gray-900 dark:text-white'
          }`}>
            {price}
          </span>
        </div>
        <p className={`mb-6 ${
          isPopular ? (theme === 'dark' ? 'text-white/80' : 'text-gray-600') : 'text-gray-600 dark:text-gray-300'
        }`}>
          {description}
        </p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check 
                size={16} 
                className={`mr-2 ${
                  isPopular ? (theme === 'dark' ? 'text-white/80' : 'text-purple-500') : 'text-red-500 dark:text-red-400'
                }`} 
              />
              <span className={
                isPopular ? (theme === 'dark' ? 'text-white/80' : 'text-gray-600') : 'text-gray-600 dark:text-gray-300'
              }>
                {feature}
              </span>
            </li>
          ))}
        </ul>
        {isPopular && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className={`relative px-4 py-1.5 rounded-full text-sm font-semibold flex items-center justify-center gap-1.5 shadow-lg whitespace-nowrap ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              Most Popular
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
          </div>
        )}
      </div>
      
      {/* Hover Form */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-navy-900/95 to-purple-900/95' 
          : 'bg-gradient-to-b from-white/95 to-purple-50/95'
      } backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6`}>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Get Started with {name}
          </h4>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 bg-white/10 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            disabled={status === 'sending'}
          />
          
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 ${
              status === 'sending'
                ? 'bg-gradient-to-r from-purple-600/50 to-pink-600/50 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
            }`}
          >
            {status === 'sending' ? 'Sending...' : 'Get Started'}
          </button>

          {status === 'success' && (
            <p className="text-green-500 dark:text-green-400 text-sm text-center">
              We'll contact you soon!
            </p>
          )}
          
          {status === 'error' && (
            <p className="text-red-500 dark:text-red-400 text-sm text-center">
              Failed to send. Please try again.
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

const ScrollButton: React.FC<{
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}> = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 z-10 
      ${direction === 'left' ? 'left-4' : 'right-4'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}
      p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl 
      text-gray-900 dark:text-white transition-all duration-200`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6" />
    ) : (
      <ChevronRight className="w-6 h-6" />
    )}
  </button>
);

const Pricing: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs with our straightforward pricing options
          </p>
        </div>

        <div className="relative">
          <ScrollButton
            direction="left"
            onClick={() => handleScroll('left')}
            disabled={false}
          />
          
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x snap-mandatory hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {pricingPlans.map((plan, index) => (
              <div key={index} className="snap-center">
                <PricingCard {...plan} />
              </div>
            ))}
          </div>

          <ScrollButton
            direction="right"
            onClick={() => handleScroll('right')}
            disabled={false}
          />
        </div>

        <div className="mt-16 text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Contact us for a tailored package that meets your specific requirements and scales with your business
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white font-medium transition-colors"
          >
            Contact Sales
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
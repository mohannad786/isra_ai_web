import React, { memo, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <img 
                src="/ISRA_AI_copy.png" 
                alt="Isra AI Logo" 
                className={`h-16 md:h-20 transition-all duration-300 ${
                  theme === 'dark' ? 'invert' : ''
                }`}
              />
            </motion.div>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-400 dark:to-rose-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Loader);


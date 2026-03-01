import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Logo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <a href="#home" className="flex items-center">
      <img
        src="/ISRA_AI_copy.png"
        alt="Isra AI Logo"
        className={`h-16 md:h-24 transition-all duration-300 ${theme === 'dark' ? 'invert' : ''
          }`}
      />
    </a>
  );
};

export default Logo;
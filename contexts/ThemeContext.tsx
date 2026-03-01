'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use a stable initial value for both server and first client render
  const [theme, setTheme] = useState<Theme>('light');

  // After mount on the client, read the real preferred / saved theme
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedTheme = window.localStorage.getItem('theme') as Theme | null;
      const prefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

      const initialTheme: Theme = savedTheme || (prefersDark ? 'dark' : 'light');
      setTheme(initialTheme);
    } catch {
      // Ignore errors and keep default light theme
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      // Update localStorage when theme changes
      window.localStorage.setItem('theme', theme);
    } catch {
      // Ignore storage errors (e.g., in private mode)
    }

    // Update document class for global theme styling
    if (typeof document !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
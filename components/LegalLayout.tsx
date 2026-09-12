import React from 'react';
import Link from 'next/link';
import Footer from './Footer';

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, effectiveDate, lastUpdated, children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/ISRA_AI_copy.png"
              alt="Isra AI Logo"
              className="h-12 dark:invert transition-all duration-300"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-logo font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
            Effective Date: {effectiveDate} &nbsp;&bull;&nbsp; Last Updated: {lastUpdated}
          </p>

          <div className="legal-content text-gray-600 dark:text-gray-300 leading-relaxed">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalLayout;

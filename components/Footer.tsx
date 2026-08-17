import React from 'react';
import { ArrowUp, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'How We Build', href: '#methodology' },
      { name: 'Leadership', href: '#leadership' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Khayal — AI Elder Care', href: '#services' },
      { name: 'Awaz — Voice Automation', href: '#services' },
      { name: 'New Industries', href: '#services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
    social: [
      { name: 'LinkedIn', icon: <Linkedin size={16} />, href: '#' },
      { name: 'Twitter', icon: <Twitter size={16} />, href: '#' },
      { name: 'GitHub', icon: <Github size={16} />, href: '#' },
      { name: 'Instagram', icon: <Instagram size={16} />, href: '#' },
    ]
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <a href="#home" className="flex items-center">
                <img 
                  src="/ISRA_AI_copy.png" 
                  alt="Isra AI Logo" 
                  className="h-10 md:h-14 invert transition-all duration-300"
                />
              </a>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              ISRA AI is a multi-industry AI studio. We build and pilot real
              products with real users, starting with Khayal, our elder-care
              platform, and Awaz, our voice automation venture.
            </p>
            <div className="mt-6 flex space-x-4">
              {footerLinks.social.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-logo font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-logo font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-logo font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Isra AI. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
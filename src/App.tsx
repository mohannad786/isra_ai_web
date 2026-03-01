import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Methodology from './components/Methodology';
import Services from './components/Services';
import Stats from './components/Stats';
import TechStack from './components/TechStack';
import Expertise from './components/Expertise';
// import Applications from './components/Applications';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import ParticlesContainer from './components/ParticlesContainer';
import Loader from './components/Loader';

function App() {
  return (
    <ThemeProvider>
      <Loader />
      <div className="min-h-screen relative overflow-hidden transition-colors duration-500 bg-white dark:bg-gray-900">
        <BackgroundAnimation />
        {/* <ParticlesContainer /> */}
        <div className="relative z-10 bg-transparent w-full">
          <Header />
          <main className="w-full overflow-x-hidden" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Hero />
            <About />
            <Services />
            <Methodology />
            <Team />
            {/* <Stats /> */}
            {/* <TechStack /> */}
            {/* <Expertise /> */}
            {/* <Applications /> */}
            {/* <Pricing /> */}
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
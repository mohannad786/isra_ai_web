'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
// import AnimatedSequence from '@/components/AnimatedSequence';
import About from '@/components/About';
import Services from '@/components/Services';
import Methodology from '@/components/Methodology';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <Hero />
            {/* <AnimatedSequence /> */}
            <About />
            <Services />
            <Methodology />
            <Team />
            <Contact />
            <Footer />
        </main>
    );
}

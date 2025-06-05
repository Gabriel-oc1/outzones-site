import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SolutionsSection from './components/SolutionsSection';
import DifferentialsSection from './components/DifferentialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import './orbit-animations.css';

function App() {
  return (
    <div className="App min-h-screen bg-dark text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <ParticlesBackground />
      <AboutSection />
      <SolutionsSection />
      <DifferentialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;

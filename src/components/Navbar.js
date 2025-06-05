import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/20 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          {/* Opção 1: Usando onClick para scroll suave */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-2xl font-display font-medium hover:opacity-80 transition-opacity">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo Outzones" className="h-10 w-10" />
            <div>
              <span className="text-white">OUT</span>
              <span className="text-accent">ZONES</span>
            </div>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre Nós</a>
          <a href="#solutions" className="text-white/80 hover:text-white transition-colors">Soluções</a>
          <a href="#differentials" className="text-white/80 hover:text-white transition-colors">Diferenciais</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contato</a>
        </div>

        <div>
          <a href="#contact" className="btn-primary">Começar Agora</a>
        </div>

        <div className="md:hidden">
          <button className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
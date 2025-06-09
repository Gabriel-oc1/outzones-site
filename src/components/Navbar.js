// Navbar.js - Versão corrigida
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-md py-3' : 'bg-dark/20 backdrop-blur-sm py-4'
      }`}>
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-xl md:text-2xl font-display font-light transition-opacity">
              <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo Outzones" className="h-6 w-6 md:h-7 md:w-7" />
              <div>
                <span className="text-white">out</span>
                <span className="text-accent ml-[2px]">zones</span>
              </div>
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre Nós</a>
            <a href="#solutions" className="text-white/80 hover:text-white transition-colors">Soluções</a>
            <a href="#differentials" className="text-white/80 hover:text-white transition-colors">Diferenciais</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contato</a>
          </div>

          {/* Botão CTA Desktop */}
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary px-4 py-2 text-sm">Fale Conosco</a>
          </div>

          {/* Botão Mobile Menu */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="container-custom pt-4 pb-6 border-t border-white/10 mt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                onClick={handleLinkClick}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Sobre Nós
              </a>
              <a 
                href="#solutions" 
                onClick={handleLinkClick}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Soluções
              </a>
              <a 
                href="#differentials" 
                onClick={handleLinkClick}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Diferenciais
              </a>
              <a 
                href="#contact" 
                onClick={handleLinkClick}
                className="text-white/80 hover:text-white transition-colors py-2"
              >
                Contato
              </a>
              <div className="pt-2">
                <a 
                  href="#contact" 
                  onClick={handleLinkClick}
                  className="btn-primary inline-block px-6 py-3 text-center w-full"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useEffect, useState, useMemo, useCallback } from 'react';

// Constantes para valores mágicos
const PARALLAX_CONFIG = {
  PARTICLES_LIGHT: { factor: -0.3, transition: '0.8s' },
  PARTICLES_STRONG: { factor: -0.5, transition: '0.8s' },
  TEXT_CONTENT: { factor: { x: -2, y: -8 }, transition: '0.6s' },
  VISUAL_CONTENT: { factor: { x: -5, y: -20 }, transition: '0.6s' }
};

const PARTICLES_CONFIG = {
  BLUE_COUNT: 12,
  PURPLE_COUNT: 8,
  BASE_SIZE: 2,
  SIZE_VARIANCE: 4,
  BASE_OPACITY: 0.2,
  OPACITY_VARIANCE: 0.3,
  BASE_ANIMATION_DURATION: 15,
  ANIMATION_VARIANCE: 8
};

const COLORS = {
  BLUE: { r: 30, g: 91, b: 250 },
  PURPLE: { r: 176, g: 30, b: 255 }
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detectar preferência de movimento reduzido
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Throttle do movimento do mouse para melhor performance
  const throttledMouseMove = useCallback((e) => {
    if (prefersReducedMotion) return;
    
    setMousePosition({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5
    });
  }, [prefersReducedMotion]);

  useEffect(() => {
    let timeoutId;
    
    const handleMouseMove = (e) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => throttledMouseMove(e), 16); // ~60fps
    };
    
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [throttledMouseMove, prefersReducedMotion]);

  // Função para gerar propriedades de partícula
  const generateParticleProps = useCallback((index, color, factor) => {
    const size = Math.random() * PARTICLES_CONFIG.SIZE_VARIANCE + PARTICLES_CONFIG.BASE_SIZE;
    const opacity = Math.random() * PARTICLES_CONFIG.OPACITY_VARIANCE + PARTICLES_CONFIG.BASE_OPACITY;
    const animationDuration = Math.random() * PARTICLES_CONFIG.ANIMATION_VARIANCE + PARTICLES_CONFIG.BASE_ANIMATION_DURATION;
    const animationDelay = Math.random() * 5;
    const glowIntensity = Math.random() * 0.3 + 0.1;
    
    return {
      key: index,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity,
        background: `rgba(${color.r + Math.random() * 30}, ${color.g + Math.random() * 30}, ${color.b + Math.random() * 5}, ${glowIntensity})`,
        boxShadow: `0 0 ${Math.random() * 5 + 2}px rgba(${color.r}, ${color.g}, ${color.b}, ${glowIntensity})`,
        animation: prefersReducedMotion ? 'none' : `floatParticle ${animationDuration}s linear infinite`,
        animationDelay: prefersReducedMotion ? '0s' : `${animationDelay}s`,
        transform: prefersReducedMotion ? 'none' : `translate(${mousePosition.x * factor}px, ${mousePosition.y * factor}px)`,
        transition: prefersReducedMotion ? 'none' : `transform ${PARALLAX_CONFIG.PARTICLES_LIGHT.transition} ease-out`
      }
    };
  }, [mousePosition, prefersReducedMotion]);

  // Memoizar partículas para evitar recriação desnecessária
  const particles = useMemo(() => {
    const blueParticles = Array.from({ length: PARTICLES_CONFIG.BLUE_COUNT }, (_, i) =>
      generateParticleProps(i, COLORS.BLUE, PARALLAX_CONFIG.PARTICLES_LIGHT.factor)
    );
    
    const purpleParticles = Array.from({ length: PARTICLES_CONFIG.PURPLE_COUNT }, (_, i) =>
      generateParticleProps(i + PARTICLES_CONFIG.BLUE_COUNT, COLORS.PURPLE, PARALLAX_CONFIG.PARTICLES_STRONG.factor)
    );
    
    return [...blueParticles, ...purpleParticles];
  }, [mousePosition.x, mousePosition.y, generateParticleProps]);

  // Função para aplicar transformação de parallax
  const getParallaxStyle = useCallback((config) => {
    if (prefersReducedMotion) return {};
    
    const { factor, transition } = config;
    const translateX = typeof factor === 'object' ? mousePosition.x * factor.x : mousePosition.x * factor;
    const translateY = typeof factor === 'object' ? mousePosition.y * factor.y : mousePosition.y * factor;
    
    return {
      transform: `translate(${translateX}px, ${translateY}px)`,
      transition: `transform ${transition} ease-out`
    };
  }, [mousePosition, prefersReducedMotion]);

  // Dados dos ícones orbitais
  const orbitalIcons = useMemo(() => [
    {
      delay: '0s',
      position: { top: '0', left: 'calc(50% - 8px)', transformOrigin: 'center 150px' },
      color: 'text-blue-400',
      path: "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
    },
    {
      delay: '-3s',
      position: { bottom: '0', left: 'calc(50% - 8px)', transformOrigin: 'center -150px' },
      color: 'text-purple-400',
      path: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
    },
    {
      delay: '-6s',
      position: { top: 'calc(50% - 8px)', right: '0', transformOrigin: '-150px center' },
      color: 'text-blue-400',
      path: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
    },
    {
      delay: '-9s',
      position: { top: 'calc(50% - 8px)', left: '0', transformOrigin: '150px center' },
      color: 'text-purple-300',
      path: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
    }
  ], []);

  return (
    <section id ="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a23]">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}
        />
      </div>
      
      {/* Partículas animadas otimizadas */}
      <div className="absolute inset-0 z-0">
        {particles.map((particle) => (
          <div 
            key={particle.key}
            className="absolute rounded-full"
            style={particle.style}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de texto */}
          <div 
            className="space-y-8 "
            style={getParallaxStyle(PARALLAX_CONFIG.TEXT_CONTENT)}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
              Transforme seu Negócio com{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent font-normal">
                IA Personalizada
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Soluções de inteligência artificial seguras e acessíveis para pequenas e médias empresas. 
              Automatize processos, impulsione resultados e destaque-se no mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#solutions" 
                className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 ${!prefersReducedMotion ? 'animate-pulse' : ''}`}
              >
                Conheça Nossas Soluções
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-600 text-white font-medium rounded-lg transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10 hover:scale-105"
              >
                Como podemos ajudar?
              </a>
            </div>
          </div>
          
          {/* Elemento visual */}
          <div 
            className="relative"
            style={getParallaxStyle(PARALLAX_CONFIG.VISUAL_CONTENT)}
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              {/* Glows de fundo */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/ blur-3xl ${!prefersReducedMotion ? 'animate-pulse' : ''}`} 
                   style={{ animationDuration: '4s' }} />
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-purple-500/20 blur-3xl ${!prefersReducedMotion ? 'animate-pulse' : ''}`} 
                   style={{ animationDuration: '3s', animationDelay: '1s' }} />
              
              {/* Elemento central */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
                <div className="relative w-full h-full">
                  {/* Ícone central AI */}
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-xl bg-slate-800/80 border border-blue-500/50 flex items-center justify-center backdrop-blur-sm ${!prefersReducedMotion ? 'animate-pulse' : ''}`}
                       style={{ 
                         boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                         animationDuration: '2s'
                       }}>
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      AI
                    </span>
                  </div>
                  
                  {/* Elementos orbitais */}
                  {orbitalIcons.map((icon, index) => (
                    <div 
                      key={index}
                      className="absolute w-16 h-16 rounded-lg bg-slate-800/60 border border-slate-600/50 flex items-center justify-center backdrop-blur-sm"
                      style={{
                        ...icon.position,
                        animation: prefersReducedMotion ? 'none' : `spin 12s linear infinite`,
                        animationDelay: prefersReducedMotion ? '0s' : icon.delay,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-8 w-8 ${icon.color} ${!prefersReducedMotion ? 'animate-pulse' : ''}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d={icon.path} clipRule="evenodd" />
                      </svg>
                    </div>
                  ))}
                  
                  {/* Linhas de conexão */}
                  {!prefersReducedMotion && (
                    <div className="absolute inset-0 z-[-1]">
                      <svg className="w-full h-full" viewBox="0 0 200 200">
                        <line x1="100" y1="100" x2="100" y2="20" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" className="animate-pulse" style={{animationDuration: '3s'}} />
                        <line x1="100" y1="100" x2="100" y2="180" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" className="animate-pulse" style={{animationDuration: '3s', animationDelay: '0.5s'}} />
                        <line x1="100" y1="100" x2="180" y2="100" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" className="animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}} />
                        <line x1="100" y1="100" x2="20" y2="100" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" className="animate-pulse" style={{animationDuration: '3s', animationDelay: '1.5s'}} />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos otimizados */}
      <div className={`absolute bottom-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl ${!prefersReducedMotion ? 'animate-pulse' : ''}`} 
           style={{ animationDuration: '4s' }} />
      <div className={`absolute top-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl ${!prefersReducedMotion ? 'animate-pulse' : ''}`} 
           style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className={`absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl ${!prefersReducedMotion ? 'animate-bounce' : ''}`} 
           style={{ animationDuration: '7s' }} />
      <div className={`absolute top-1/3 left-1/3 w-16 h-16 bg-purple-500/10 rounded-full blur-xl ${!prefersReducedMotion ? 'animate-bounce' : ''}`} 
           style={{ animationDuration: '9s', animationDelay: '1s' }} />

      <style jsx>{`
        @keyframes floatParticle {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(360deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

import React from 'react';

const DifferentialsSection = () => {
  return (
    <section id="differentials" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a23]">
      <div className="grid-lines absolute inset-0 opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Por que Escolher a <span className="gradient-text font-normal">Outzones</span></h2>
            <p className="text-white/70 max-w-xl">
              Nossa abordagem "AI-First" e foco em pequenas e médias empresas nos permite oferecer 
              soluções personalizadas que realmente impulsionam resultados.
            </p>
            
            <div className="space-y-6">
              {/* Diferencial 1 */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Soluções Personalizadas</h3>
                  <p className="text-white/70">
                    Desenvolvemos soluções sob medida para as necessidades específicas do seu negócio, 
                    garantindo máxima eficiência e resultados.
                  </p>
                </div>
              </div>
              
              {/* Diferencial 2 */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Segurança Avançada</h3>
                  <p className="text-white/70">
                    Priorizamos a segurança dos seus dados com protocolos avançados de criptografia 
                    e conformidade com regulamentações de privacidade.
                  </p>
                </div>
              </div>
              
              {/* Diferencial 3 */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-primary-light/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Implementação Rápida</h3>
                  <p className="text-white/70">
                    Nossa metodologia ágil permite implementações rápidas e eficientes, 
                    com resultados visíveis em semanas, não meses.
                  </p>
                </div>
              </div>
              
              {/* Diferencial 4 */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-accent-light/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">Suporte Contínuo</h3>
                  <p className="text-white/70">
                    Oferecemos suporte técnico especializado e atualizações contínuas 
                    para garantir que suas soluções evoluam com seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              {/* Círculo de Eficiência */}
              <div className="relative w-64 h-64 animate-float">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gradient)" strokeWidth="4" strokeDasharray="502.4" strokeDashoffset="75.36" transform="rotate(-90 100 100)" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1E5BFA" />
                        <stop offset="100%" stopColor="#B01EFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold">85%</span>
                    <span className="text-sm text-white/70 uppercase tracking-wider mt-2">Eficiência</span>
                  </div>
                </div>
                
                {/* Indicadores ao redor */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-light/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/10">
                  Automação
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-dark-light/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/10">
                  Produtividade
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-light/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/10">
                  Segurança
                </div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-dark-light/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/10">
                  Escalabilidade
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-accent/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

import React from 'react';

const SolutionsSection = () => {
  return (
    <section id="solutions" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a23]">
      <div className="grid-lines absolute inset-0 opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Nossas <span className="gradient-text font-normal">Soluções de IA</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Desenvolvemos soluções personalizadas de inteligência artificial que automatizam processos, 
            aumentam a eficiência e impulsionam os resultados do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Automação de Processos */}
          <div className="card card-hover group h-full flex flex-col">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Automação de Processos</h3>
            <p className="text-white/70 mb-6 flex-grow">
              Automatize tarefas repetitivas e fluxos de trabalho complexos com IA, 
              liberando sua equipe para focar em atividades estratégicas.
            </p>
            <a href="#contact" className="text-primary hover:text-primary-light transition-colors flex items-center">
              Saiba mais
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Card 2 - Análise Preditiva */}
          <div className="card card-hover group h-full flex flex-col">
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Análise Preditiva</h3>
            <p className="text-white/70 mb-6 flex-grow">
              Utilize dados históricos para prever tendências futuras, 
              identificar oportunidades e antecipar desafios do mercado.
            </p>
            <a href="#contact" className="text-accent hover:text-accent-light transition-colors flex items-center">
              Saiba mais
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Card 3 - Assistentes Virtuais */}
          <div className="card card-hover group h-full flex flex-col">
            <div className="w-14 h-14 rounded-lg bg-primary-light/10 flex items-center justify-center mb-6 group-hover:bg-primary-light/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Assistentes Virtuais</h3>
            <p className="text-white/70 mb-6 flex-grow">
              Implemente assistentes virtuais inteligentes para atendimento ao cliente, 
              suporte técnico e automação de comunicações internas.
            </p>
            <a href="#contact" className="text-primary-light hover:text-primary transition-colors flex items-center">
              Saiba mais
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Card 4 - Segurança Inteligente */}
          <div className="card card-hover group h-full flex flex-col">
            <div className="w-14 h-14 rounded-lg bg-accent-light/10 flex items-center justify-center mb-6 group-hover:bg-accent-light/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Segurança Inteligente</h3>
            <p className="text-white/70 mb-6 flex-grow">
              Proteja seus dados e sistemas com soluções de segurança baseadas em IA, 
              detectando e prevenindo ameaças em tempo real.
            </p>
            <a href="#contact" className="text-accent-light hover:text-accent transition-colors flex items-center">
              Saiba mais
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default SolutionsSection;

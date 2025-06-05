import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a23]">
      <div className="grid-lines absolute inset-0 opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Sobre a <span className="gradient-text font-normal">Outzones</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Fornecemos soluções de IA personalizada e segura para diferentes indústrias, 
            com foco em pequenas e médias empresas que buscam automatizar processos e impulsionar resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Missão */}
          <div className="card card-hover group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Nossa Missão</h3>
            <p className="text-white/70">
              Impulsionar resultados das empresas automatizando processos com IA, 
              tornando tecnologias avançadas acessíveis para negócios de todos os tamanhos.
            </p>
          </div>
          
          {/* Card 2 - Cultura */}
          <div className="card card-hover group">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Nossa Cultura</h3>
            <p className="text-white/70">
              Somos uma empresa "AI-First", consumindo IA em todo processo de desenvolvimento 
              e incentivando a inovação contínua em todas as nossas operações.
            </p>
          </div>
          
          {/* Card 3 - Objetivo */}
          <div className="card card-hover group">
            <div className="w-16 h-16 rounded-full bg-primary-light/10 flex items-center justify-center mb-6 group-hover:bg-primary-light/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Nosso Objetivo</h3>
            <p className="text-white/70">
              Utilizar ferramentas de IA e parcerias estratégicas para maximizar a eficiência, 
              oferecendo recursos de nível empresarial para segmentos de mercado carentes.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-97 h-97 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-81 h-81 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
    </section>
  );
};

export default AboutSection;

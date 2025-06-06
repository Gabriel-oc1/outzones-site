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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">CRM Inteligente</h3>
            <p className="text-white/70 mb-6 flex-grow">
              Nosso sistema de CRM centraliza e organiza todas as interações com leads e clientes. 
              Com isso, você melhora o atendimento, reduz o Custo de Aquisição de Cliente e aumenta o tempo de relacionamento.
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent-light size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Gestão de Dados</h3>
            <p className="text-white/70 mb-6 flex-grow">
              A gestão de dados proprietários permite decisões mais rápidas, precisas e personalizadas. 
              Ao conectar seus canais de atendimento, vendas e marketing, você gera inteligência de negócio e alimenta automações com base em comportamento real.
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

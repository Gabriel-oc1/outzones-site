import React from 'react';

const SolutionsSection = () => {
  return (
    <section id="solutions" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a23]">
      <div className="grid-lines absolute inset-0 opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Transforme dados em <span className="gradient-text font-normal">Inteligência</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A Outzones oferece uma solução completa de captura e transformação de dados para treinar modelos de linguagem (LLMs), 
            tornando a Inteligência Artificial acessível, útil e rentável para pequenas e médias empresas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Dados com Propósito */}
          <div className="card card-hover group h-full flex flex-col">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent-light size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Dados com Propósito</h3>
            <p className="text-white/70 mb-6 flex-grow">
              Captamos interações reais da sua operação – conversas, tickets, registros – e estruturamos essas informações para alimentar modelos de IA personalizados.
              Seus dados ganham novo valor e relevância.
            </p>
            <a href="#contact" className="text-primary hover:text-primary-light transition-colors flex items-center">
              Saiba mais
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Card 2 - Inteligência Conversacional na Prática */}
          <div className="card card-hover group h-full flex flex-col">
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>

            </div>
            <h3 className="text-xl font-medium mb-3">Inteligência Conversacional na Prática</h3>
            <p className="text-white/70 mb-6 flex-grow">
              Transformamos dados brutos em inteligência pronta para ser aplicada em atendimentos, automações e insights operacionais. 
              Reduza ruídos e acelere decisões com base em diálogos reais.
            </p>
            <a href="#contact" className="text-accent hover:text-accent-light transition-colors flex items-center">
              Saiba mais
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Card 3 - IA que Cabe no seu Negócio */}
          <div className="card card-hover group h-full flex flex-col">
            <div className="w-14 h-14 rounded-lg bg-primary-light/10 flex items-center justify-center mb-6 group-hover:bg-primary-light/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary-light size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">IA que Cabe no seu Negócio</h3>
            <p className="text-white/70 mb-6 flex-grow">
              Nossa arquitetura foi desenhada para empresas que precisam de resultados rápidos, com baixo custo de implementação e alta flexibilidade. 
              Você não precisa ser big tech para ter uma IA de alto desempenho.
            </p>
            <a href="#contact" className="text-primary-light hover:text-primary transition-colors flex items-center">
              Saiba mais
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Card 4 - ROI Acelerado com Eficiência */}
          <div className="card card-hover group h-full flex flex-col">
            <div className="w-14 h-14 rounded-lg bg-accent-light/10 flex items-center justify-center mb-6 group-hover:bg-accent-light/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent-light size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">ROI Acelerado com Eficiência</h3>
            <p className="text-white/70 mb-6 flex-grow">
              Ao integrar sua base de conhecimento à nossa plataforma, otimizamos o uso de recursos humanos e tecnológicos. 
              Mais produtividade, menos retrabalho e mais retorno sobre investimento.
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

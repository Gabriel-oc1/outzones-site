import React, { useState } from 'react';

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio dos dados (aqui você integraria com sua API)
    try {
      // Aqui você faria a chamada para sua API
      // await fetch('/api/leads', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simular delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      // Limpar formulário após envio
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Voltar ao estado inicial após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a23]">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/10"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
            Pronto para <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-normal">Transformar seu Negócio</span>?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Comece a usar IA personalizada hoje mesmo e destaque-se da concorrência com soluções 
            que automatizam processos e impulsionam resultados.
          </p>
          
          <div className="bg-slate-900/50 backdrop-blur-md rounded-xl p-8 border border-white/10 max-w-2xl mx-auto">
            {!isSubmitted ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Mensagem (opcional)</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                    placeholder="Conte-nos sobre suas necessidades..."
                  ></textarea>
                </div>
                
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.company}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    'Enviar'
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">Mensagem Enviada!</h3>
                  <p className="text-white/70 mb-4">
                    Obrigado pelo seu interesse! Recebemos suas informações e entraremos em contato em breve.
                  </p>
                  <p className="text-white/50 text-sm">
                    Esta mensagem desaparecerá automaticamente em alguns segundos.
                  </p>
                </div>
                
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Enviar outra mensagem
                </button>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-white/50 text-sm">
                Ou entre em contato diretamente pelo email{' '}
                <a href="mailto:contato@outzones.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  contato@outzones.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-90 h-90 bg-purple-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CtaSection;

import React, { useState, useEffect } from 'react';

const OutzonesEcosystemDiagram = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  const nodes = [
    {
      id: 'real-estate',
      label: 'Real Estate Digital',
      position: { x: 70, y: 15 },
      color: '#1E5BFA',
      description: 'Inventários próprios geram audiência qualificada',
      icon: 'M3 21h18M5 21V7l8-4v18M19 21V9l-6-2M9 9h1m0 4h1m4-4h1m0 4h1'
    },
    {
      id: 'data',
      label: 'Dados',
      position: { x: 70, y: 35 },
      color: '#B01EFF',
      description: 'Dados proprietários reduzem CAC',
      icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2'
    },
    {
      id: 'client',
      label: 'Cliente',
      position: { x: 70, y: 55 },
      color: '#00D4FF',
      description: 'Consumidores qualificados (-CAC +LTV)',
      icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
    },
    {
      id: 'martech',
      label: 'Facilitadora Martech',
      position: { x: 45, y: 70 },
      color: '#FF6B35',
      description: 'Conta hospedada no ecossistema',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      id: 'community',
      label: 'Staage Get Community',
      position: { x: 20, y: 55 },
      color: '#4ECDC4',
      description: 'Capacita agências e empresas',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      id: 'ai',
      label: 'A.I. Agents',
      position: { x: 20, y: 35 },
      color: '#FFE66D',
      description: 'Otimiza tarefas com dados estruturados',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      id: 'agency',
      label: 'Agências',
      position: { x: 20, y: 15 },
      color: '#FF8B94',
      description: 'Melhoram qualidade e atraem empresas',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    }
  ];

  const connections = [
    { from: 0, to: 1, strength: 0.9 },
    { from: 1, to: 2, strength: 0.8 },
    { from: 2, to: 3, strength: 0.85 },
    { from: 3, to: 4, strength: 0.7 },
    { from: 3, to: 5, strength: 0.9 },
    { from: 4, to: 5, strength: 0.8 },
    { from: 5, to: 6, strength: 0.75 },
    { from: 6, to: 0, strength: 0.6 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredNode === null) {
        setActiveNode((prev) => (prev + 1) % nodes.length);
      }
      setAnimationPhase((prev) => (prev + 1) % 360);
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredNode]);

  const getConnectionPath = (from, to) => {
    const fromNode = nodes[from];
    const toNode = nodes[to];
    const x1 = fromNode.position.x;
    const y1 = fromNode.position.y;
    const x2 = toNode.position.x;
    const y2 = toNode.position.y;
    
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const offset = 8;
    
    return `M ${x1} ${y1} Q ${midX + offset} ${midY - offset} ${x2} ${y2}`;
  };

  const currentActive = hoveredNode !== null ? hoveredNode : activeNode;

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-[#0a0a23] via-[#1a1a3a] to-[#0a0a23] rounded-xl overflow-hidden border border-white/5">
      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* SVG principal */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full relative z-10"
        style={{ filter: 'drop-shadow(0 0 15px rgba(30, 91, 250, 0.15))' }}
      >
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E5BFA" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#B01EFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.3" />
          </linearGradient>
          
          {nodes.map((node, index) => (
            <linearGradient key={`gradient-${index}`} id={`nodeGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={node.color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={node.color} stopOpacity="0.05" />
            </linearGradient>
          ))}
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

 <g className="connections">
          {connections.map((connection, index) => {
            const isActive = currentActive === connection.from;
            const fromNode = nodes[connection.from];
            const toNode = nodes[connection.to];
            return (
              <g key={`connection-${index}`}>
                <path
                  d={getConnectionPath(connection.from, connection.to)}
                  stroke="url(#connectionGradient)"
                  strokeWidth={isActive ? "0.8" : "0.3"}
                  fill="none"
                  opacity={isActive ? 0.9 : 0.2}
                  className="transition-all duration-500 ease-in-out"
                  strokeDasharray={isActive ? "0" : "1,2"}
                />
                
                {/* Partícula animada melhorada */}
                {isActive && (
                  <g>
                    <circle
                      r="1.2"
                      fill={fromNode.color}
                      opacity="0.9"
                      filter="url(#glow)"
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path={getConnectionPath(connection.from, connection.to)}
                      />
                      <animate
                        attributeName="r"
                        values="0.8;1.5;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    {/* Rastro da partícula */}
                    <circle
                      r="0.6"
                      fill={fromNode.color}
                      opacity="0.4"
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path={getConnectionPath(connection.from, connection.to)}
                        begin="0.3s"
                      />
                    </circle>
                  </g>
                )}
              </g>
            );
          })}
        </g>

        {/* Nós - renderizados por último para ficar na frente */}
        <g className="nodes">
          {nodes.map((node, index) => {
            const isActive = currentActive === index;
            const isHovered = hoveredNode === index;
            const size = isActive ? 13.5 : 11.25;
            const iconSize = isActive ? 5.625 : 4.5;
            
            return (
              <g key={`node-${index}`}>
                {/* Aura de pulso melhorada */}
                {isActive && (
                  <g>
                    {/* Primeiro anel de pulso */}
                    <rect
                      x={node.position.x - size/2 - 4}
                      y={node.position.y - size/2 - 4}
                      width={size + 8}
                      height={size + 8}
                      rx="3"
                      fill="none"
                      stroke={node.color}
                      strokeWidth="0.4"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="stroke-width"
                        values="0.4;0.8;0.4"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.6;0.2;0.6"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    
                    {/* Segundo anel de pulso */}
                    <rect
                      x={node.position.x - size/2 - 8}
                      y={node.position.y - size/2 - 8}
                      width={size + 16}
                      height={size + 16}
                      rx="4"
                      fill="none"
                      stroke={node.color}
                      strokeWidth="0.2"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.3;0.05;0.3"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="0.5s"
                      />
                    </rect>
                  </g>
                )}
                
                {/* Área de hover invisível maior */}
                <rect
                  x={node.position.x - 18}
                  y={node.position.y - 18}
                  width="36"
                  height="36"
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredNode(index)}
                  onMouseLeave={() => setHoveredNode(null)}
                />
                
                {/* Quadrado principal */}
                <rect
                  x={node.position.x - size/2}
                  y={node.position.y - size/2}
                  width={size}
                  height={size}
                  rx="2.25"
                  fill={`url(#nodeGradient-${index})`}
                  stroke={node.color}
                  strokeWidth={isActive ? "0.6" : "0.4"}
                  className="transition-all duration-300 ease-out pointer-events-none"
                  filter={isActive ? "url(#glow)" : "none"}
                />
                
                {/* Ícone dentro do quadrado */}
                <g 
                  transform={`translate(${node.position.x - iconSize/1.4}, ${node.position.y - iconSize/1.4}) scale(${iconSize/16})`}
                  className="pointer-events-none"
                >
                  <path
                    d={node.icon}
                    stroke={node.color}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={isActive || isHovered ? 1 : 0.8}
                    className="transition-opacity duration-300"
                  />
                </g>
                
                {/* Labels dos nós */}
                <text
                  x={node.position.x}
                  y={node.position.y - 9.2}
                  textAnchor="middle"
                  fontSize="2.2"
                  fill="#ffffff"
                  className="font-semibold pointer-events-none select-none"
                  opacity={isActive || isHovered ? 1 : 0.6}
                >
                  {node.label.split(' ')[0]}
                </text>
                {node.label.split(' ').length > 1 && (
                  <text
                    x={node.position.x}
                    y={node.position.y - 7.2}
                    textAnchor="middle"
                    fontSize="1.8"
                    fill="#ffffff"
                    className="font-light pointer-events-none select-none"
                    opacity={isActive || isHovered ? 0.8 : 0.4}
                  >
                    {node.label.split(' ').slice(1).join(' ')}
                  </text>
                )}
              </g>
            );
          })}
        </g>

        {/* Centro do ecossistema */}
        <g className="ecosystem-center">
          <circle
            cx="45"
            cy="30"
            r="10"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.3"
            strokeDasharray="1,1"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 45 30"
              to="360 45 30"
              dur="30s"
              repeatCount="indefinite"
            />
          </circle>
          
          <text
            x="45"
            y="30"
            textAnchor="middle"
            fontSize="3"
            fill="#ffffff"
            className="font-bold select-none"
          >
            ECOSSISTEMA
          </text>
          <text
            x="45"
            y="34"
            textAnchor="middle"
            fontSize="2.5"
            fill="#B01EFF"
            className="font-bold select-none"
          >
            INTELIGENTE
          </text>
        </g>
      </svg>

      {/* Painel de informação - fixo na parte inferior */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-lg p-4 border border-white/10 z-20">
        <div className="flex items-center gap-3">
          <div 
            className="w-3 h-3 rounded-sm flex-shrink-0 border"
            style={{ backgroundColor: nodes[currentActive].color + '40', borderColor: nodes[currentActive].color }}
          >
            <div 
              className="w-full h-full rounded-sm animate-ping"
              style={{ backgroundColor: nodes[currentActive].color }}
            ></div>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-white truncate">
              {nodes[currentActive].label}
            </h4>
            <p className="text-xs text-white/70 mt-1 line-clamp-2">
              {nodes[currentActive].description}
            </p>
          </div>
        </div>
      </div>

      {/* Métrica de eficiência - canto superior direito */}
      <div className="absolute top-4 right-4 text-right z-20">
        <div className="bg-black/50 backdrop-blur-md rounded-lg p-3 border border-white/10">
          <div className="text-xs text-white/70 uppercase tracking-wider text-center">
            ganha-ganha<br />
            do efeito-rede V4
          </div>
        </div>
      </div>

      {/* Efeitos de fundo decorativos - atrás de tudo */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

const DifferentialsSection = () => {
  return (
    <section id="differentials" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a23]">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Por que Escolher a <span className="bg-gradient-to-r from-[#1E5BFA] to-[#B01EFF] bg-clip-text text-transparent font-normal">Outzones</span>
            </h2>
            <p className="text-white/70 max-w-xl text-lg">
              Nossa abordagem "AI-First" e foco em pequenas e médias empresas nos permite oferecer 
              soluções personalizadas que realmente impulsionam resultados através de um ecossistema inteligente.
            </p>
            
            <div className="space-y-6">
              {/* Diferencial 1 */}
              <div className="flex items-start group hover:bg-white/5 p-4 rounded-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1E5BFA]/20 to-[#1E5BFA]/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E5BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Soluções Personalizadas</h3>
                  <p className="text-white/70">
                    Desenvolvemos soluções sob medida para as necessidades específicas do seu negócio, 
                    garantindo máxima eficiência e resultados mensuráveis.
                  </p>
                </div>
              </div>
              
              {/* Diferencial 2 - Destaque especial */}
              <div className="flex items-start group hover:bg-gradient-to-r hover:from-[#B01EFF]/10 hover:to-transparent p-4 rounded-lg transition-all border border-[#B01EFF]/20">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#B01EFF]/20 to-[#B01EFF]/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#B01EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Ecossistema Inteligente Outzones</h3>
                  <p className="text-white/70 mb-2">
                    A Outzones não entrega apenas ferramentas — construímos um ecossistema onde cada interação gera valor. 
                    Nossos serviços conectam empresas, agências, clientes e inteligência artificial para criar um efeito de rede sustentável.
                  </p>
                  <div className="text-sm text-[#B01EFF] font-medium">
                    → Visualize o ciclo virtuoso no diagrama ao lado
                  </div>
                </div>
              </div>
              
              {/* Diferencial 3 */}
              <div className="flex items-start group hover:bg-white/5 p-4 rounded-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00D4FF]/20 to-[#00D4FF]/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Implementação Rápida</h3>
                  <p className="text-white/70">
                    Nossa metodologia ágil permite implementações rápidas e eficientes, 
                    com resultados visíveis em semanas, não meses.
                  </p>
                </div>
              </div>
              
              {/* Diferencial 4 */}
              <div className="flex items-start group hover:bg-white/5 p-4 rounded-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFE66D]/20 to-[#FFE66D]/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFE66D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">Suporte Contínuo & IA Evoluindo</h3>
                  <p className="text-white/70">
                    Oferecemos suporte técnico especializado com A.I. Agents que aprendem continuamente, 
                    garantindo que suas soluções evoluam automaticamente com seu negócio.
                  </p>
                </div>
              </div>
            </div>

            {/* Call-to-action adicional */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#1E5BFA]/10 to-[#B01EFF]/10 rounded-xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1E5BFA] to-[#B01EFF] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Pronto para revolucionar seu negócio?</h4>
                  <p className="text-white/70 text-sm">Cada elemento do nosso ecossistema trabalha em sinergia para maximizar seus resultados.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <OutzonesEcosystemDiagram />
            
            {/* Indicadores informativos ao redor do diagrama */}
            <div className="absolute -top-4 left-0 right-0 flex justify-between text-xs text-white/50">
              <span>Dados Proprietários</span>
              <span>IA Evoluindo</span>
            </div>
            <div className="absolute -bottom-4 left-0 right-0 flex justify-between text-xs text-white/50">
              <span>Ecossistema Sustentável</span>
              <span>Crescimento Exponencial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
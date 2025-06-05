import React from 'react';
import '../orbit-animations.css';

const ParticlesBackground = () => {
  return (
    <div className="particles absolute inset-0 z-0 overflow-hidden">
      {/* Partículas azuis */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatParticle ${Math.random() * 10 + 30}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.2,
            background: `rgba(${30 + Math.random() * 50}, ${91 + Math.random() * 50}, ${250 + Math.random() * 5}, ${Math.random() * 0.3 + 0.1})`,
            boxShadow: `0 0 ${Math.random() * 5 + 2}px rgba(30, 91, 250, ${Math.random() * 0.3 + 0.1})`
          }}
        ></div>
      ))}
      
      {/* Partículas roxas */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i + 20}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatParticle ${Math.random() * 10 + 30}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.2,
            background: `rgba(${176 + Math.random() * 30}, ${30 + Math.random() * 30}, ${255}, ${Math.random() * 0.3 + 0.1})`,
            boxShadow: `0 0 ${Math.random() * 5 + 2}px rgba(176, 30, 255, ${Math.random() * 0.3 + 0.1})`
          }}
        ></div>
      ))}
    </div>
  );
};

export default ParticlesBackground;

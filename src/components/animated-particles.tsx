import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  type: 'circle' | 'square' | 'triangle' | 'line';
  animationDelay: number;
  animationDuration: number;
}

const AnimatedParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = 25;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          opacity: Math.random() * 0.3 + 0.1,
          type: ['circle', 'square', 'triangle', 'line'][Math.floor(Math.random() * 4)] as Particle['type'],
          animationDelay: Math.random() * 20,
          animationDuration: Math.random() * 15 + 10
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const renderParticle = (particle: Particle) => {
    const baseClasses = "absolute animate-particle-float";
    const style = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: particle.opacity,
      animationDelay: `${particle.animationDelay}s`,
      animationDuration: `${particle.animationDuration}s`
    };

    switch (particle.type) {
      case 'circle':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} rounded-full bg-gradient-to-br from-primary/40 to-primary-glow/60`}
            style={style}
          />
        );
      case 'square':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} bg-gradient-to-br from-accent/30 to-primary/20 rotate-45`}
            style={style}
          />
        );
      case 'triangle':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-transparent border-b-primary/30`}
            style={{
              ...style,
              width: 'auto',
              height: 'auto'
            }}
          />
        );
      case 'line':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} bg-gradient-to-r from-transparent via-primary/20 to-transparent`}
            style={{
              ...style,
              width: `${particle.size * 3}px`,
              height: '1px'
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.5" fill="currentColor" className="text-primary" opacity="0.3"/>
              <path d="M 5 10 L 15 10 M 10 5 L 10 15" stroke="currentColor" strokeWidth="0.3" className="text-primary" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="relative w-full h-full">
        {particles.map(renderParticle)}
      </div>

      {/* Connecting lines animation */}
      <div className="absolute inset-0">
        <svg className="w-full h-full animate-pulse-slow" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          {/* Animated connecting lines */}
          <path
            d="M 10 20 Q 30 10 50 25 T 90 30"
            stroke="url(#line-gradient)"
            strokeWidth="0.2"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M 20 70 Q 40 80 60 65 T 85 60"
            stroke="url(#line-gradient)"
            strokeWidth="0.2"
            fill="none"
            className="animate-draw-line"
            style={{ animationDelay: '2s' }}
          />
          <path
            d="M 5 50 Q 25 40 45 55 T 80 45"
            stroke="url(#line-gradient)"
            strokeWidth="0.2"
            fill="none"
            className="animate-draw-line"
            style={{ animationDelay: '4s' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedParticles;
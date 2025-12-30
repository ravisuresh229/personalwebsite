import React, { useState, useEffect } from 'react';
import { ChevronDown, Code2, Database, Brain, Stethoscope, Zap, Globe, LucideIcon, Github, Mail } from 'lucide-react';

interface FloatingParticleProps {
  delay: number;
  duration?: number;
  size?: number;
}

const FloatingParticle = ({ delay, duration = 25, size = 4 }: FloatingParticleProps) => (
  <div 
    className="absolute rounded-full bg-white/20"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      animation: `floatParticle ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

interface FloatingIconProps {
  Icon: LucideIcon;
  delay: number;
  duration?: number;
  size?: number;
  className?: string;
}

const FloatingIcon = ({ Icon, delay, duration = 30, size = 32, className = "" }: FloatingIconProps) => (
  <div 
    className={`absolute opacity-10 text-white/30 ${className}`}
    style={{
      animation: `floatIcon ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
    }}
  >
    <Icon size={size} />
  </div>
);

interface TypeWriterProps {
  text: string;
  className?: string;
}

const TypeWriter = ({ text, className = "" }: TypeWriterProps) => {
  // Instantly show the text, no animation
  return (
    <span className={className}>{text}</span>
  );
};

const EnhancedHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 border-b border-gray-200">
      <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Logo */}
        <div className="w-24 h-24 bg-gray-900 rounded-lg mx-auto mb-8 flex items-center justify-center text-2xl font-bold text-white">
          RS
        </div>
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight text-gray-900">
          Ravi Suresh
        </h1>
        {/* Tagline */}
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          Building AI solutions that solve real problems
        </p>
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/Resume%2011%2F10.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            View Projects
          </a>
        </div>
        <div className="text-sm text-gray-500">
          Available for opportunities
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection; 
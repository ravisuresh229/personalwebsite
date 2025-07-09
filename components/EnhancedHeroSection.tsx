import React, { useState, useEffect } from 'react';
import { ChevronDown, Code2, Database, Brain, Stethoscope, Zap, Globe } from 'lucide-react';

const FloatingParticle = ({ delay, duration = 25, size = 4 }) => (
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

const FloatingIcon = ({ Icon, delay, duration = 30, size = 32, className = "" }) => (
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

const TypeWriter = ({ text, className = "" }) => {
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

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => (
    <FloatingParticle 
      key={i} 
      delay={i * 0.2} 
      size={Math.random() * 6 + 2}
      duration={20 + Math.random() * 10}
    />
  ));

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        <FloatingIcon Icon={Code2} delay={0} size={40} className="hover:opacity-30 transition-opacity" />
        <FloatingIcon Icon={Database} delay={3} size={36} />
        <FloatingIcon Icon={Brain} delay={6} size={42} />
        <FloatingIcon Icon={Stethoscope} delay={9} size={38} />
        <FloatingIcon Icon={Zap} delay={12} size={34} />
        <FloatingIcon Icon={Globe} delay={15} size={40} />
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
      
      {/* Radial Gradient Behind Avatar */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Enhanced Profile Circle */}
          <div className="relative w-32 h-32 mx-auto mb-8 group">
            {/* Rotating Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-spin-slow"></div>
            
            {/* Main Avatar */}
            <div className="relative w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
              <span className="relative z-10">RS</span>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Enhanced Name with Multiple Gradients */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Ravi Suresh
            </span>
          </h1>

          {/* Animated Tagline with Better Styling */}
          <div className="text-xl md:text-2xl text-gray-200 mb-8 h-16 flex items-center justify-center font-light">
            <TypeWriter 
              text="Bridging Healthcare and AI with modern, user-centric solutions"
              className="max-w-3xl leading-relaxed"
            />
          </div>

          {/* Enhanced Buttons with Better Spacing */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10 font-semibold">View Projects →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            
            <button className="group px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <span className="font-semibold">Download Resume</span>
            </button>
          </div>

          {/* Professional Status Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90">
              ✨ Healthcare AI Developer
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90">
              🏥 Former Medical Student
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90">
              📍 Chicago, IL
            </span>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-bounce hover:animate-pulse cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/60 text-sm">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 text-white/60" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          50% { transform: translateY(-40px) translateX(-5px); opacity: 0.8; }
          75% { transform: translateY(-20px) translateX(15px); opacity: 0.9; }
        }
        
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(-15px) rotate(240deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default EnhancedHeroSection; 
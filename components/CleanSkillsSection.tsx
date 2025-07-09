import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, Database, Brain, Activity, Users, BarChart3,
  Server, Globe, Zap, Shield, Stethoscope, TrendingUp
} from 'lucide-react';

interface SkillCategoryProps {
  category: {
    icon: React.ElementType;
    title: string;
    description: string;
    skills: string[];
    gradient: string;
  };
  index: number;
  isVisible: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, index, isVisible }) => {
  return (
    <div 
      className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative mb-6">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <category.icon className="w-8 h-8" />
        </div>
      </div>

      {/* Title */}
      <h3 className="relative text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
        {category.title}
      </h3>

      {/* Description */}
      <p className="relative text-gray-600 mb-6 leading-relaxed">
        {category.description}
      </p>

      {/* Skills Tags */}
      <div className="relative flex flex-wrap gap-2">
        {category.skills.map((skill: string, skillIndex: number) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 transform hover:scale-105"
            style={{ 
              animationDelay: `${(index * 150) + (skillIndex * 50)}ms`,
              animation: isVisible ? 'fadeInUp 0.6s ease-out both' : 'none'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

interface TechStackCloudProps {
  isVisible: boolean;
}

const TechStackCloud: React.FC<TechStackCloudProps> = ({ isVisible }) => {
  const technologies = [
    { name: 'React', color: 'from-blue-400 to-blue-600' },
    { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
    { name: 'Python', color: 'from-yellow-400 to-blue-500' },
    { name: 'FastAPI', color: 'from-green-400 to-emerald-600' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
    { name: 'Tailwind CSS', color: 'from-cyan-400 to-teal-600' },
    { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-700' },
    { name: 'AWS', color: 'from-orange-400 to-orange-600' },
    { name: 'Scikit-learn', color: 'from-orange-500 to-red-600' },
    { name: 'Streamlit', color: 'from-red-400 to-pink-600' },
  ];

  return (
    <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Technologies I Work With</h3>
        <p className="text-gray-600">Tools and frameworks I use to bring ideas to life</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group cursor-default"
            style={{ 
              animationDelay: `${800 + (index * 100)}ms`,
              animation: isVisible ? 'popIn 0.6s ease-out both' : 'none'
            }}
          >
            <div className={`px-5 py-3 bg-gradient-to-r ${tech.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 hover:-rotate-2`}>
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CleanSkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive, user-friendly interfaces with modern frameworks and clean, maintainable code.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side solutions that power healthcare applications.',
      skills: ['Python', 'FastAPI', 'PostgreSQL', 'AWS'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Developing intelligent systems for healthcare analytics and predictive modeling.',
      skills: ['Scikit-learn', 'TensorFlow', 'Data Analysis', 'Streamlit'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Domain',
      description: 'Deep understanding of clinical workflows and healthcare technology challenges.',
      skills: ['Clinical Knowledge', 'Healthcare Systems', 'Medical Terminology', 'HIPAA'],
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What I Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combining medical insight with modern technology to create solutions that make a difference
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {categories.map((category, index) => (
            <SkillCategory 
              key={category.title}
              category={category}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Tech Stack */}
        <TechStackCloud isVisible={isVisible} />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default CleanSkillsSection; 
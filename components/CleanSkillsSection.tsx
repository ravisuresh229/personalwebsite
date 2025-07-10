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
      className={`group relative bg-gradient-to-br ${category.gradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Optional: Overlay for readability */}
      <div className="absolute inset-0 bg-white/80 rounded-2xl pointer-events-none" />
      {/* Icon */}
      <div className="relative mb-6 z-10">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <category.icon className="w-8 h-8" />
        </div>
      </div>
      {/* Title */}
      <h3 className="relative z-10 text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
        {category.title}
      </h3>
      {/* Description */}
      <p className="relative z-10 text-gray-600 mb-6 leading-relaxed">
        {category.description}
      </p>
      {/* Skills Tags */}
      <div className="relative z-10 flex flex-wrap gap-2">
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
      icon: Brain,
      title: 'AI Solution Development',
      description: 'Building machine learning models and intelligent systems that solve real business problems. From predictive analytics to automated decision-making.',
      skills: ['Random Forest', 'Scikit-learn', 'Predictive Modeling', 'Data Pipeline Design'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Creating complete applications from database to user interface. Focus on performance, user experience, and clean architecture.',
      skills: ['React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'AWS EC2'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Turning complex data into actionable insights. Experience with regulatory requirements and enterprise workflows.',
      skills: ['Data Analysis', 'Compliance', 'Workflow Design'],
      gradient: 'from-red-50 to-pink-50'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Problem Solving',
      description: 'Breaking down complex business challenges into actionable technical solutions. Understanding the "why" before building the "what."',
      skills: ['System Design', 'Process Analysis', 'User Research', 'Strategic Planning'],
      gradient: 'from-green-500 to-teal-600'
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
            Transforming complex challenges into intelligent solutions through strategic problem-solving and cutting-edge technology
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
        <section id="skills" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies I Work With</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Frontend */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-sm">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {/* Frontend Icon */}
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Frontend</h3>
                <div className="space-y-2">
                  <span className="block bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">React</span>
                  <span className="block bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Next.js</span>
                  <span className="block bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">TypeScript</span>
                  <span className="block bg-cyan-50 text-cyan-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Tailwind CSS</span>
                </div>
              </div>
              {/* Backend & APIs */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-sm">
                <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {/* Backend Icon */}
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Backend & APIs</h3>
                <div className="space-y-2">
                  <span className="block bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium text-center">FastAPI</span>
                  <span className="block bg-yellow-50 text-yellow-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Python</span>
                  <span className="block bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Node.js</span>
                  <span className="block bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">PostgreSQL</span>
                </div>
              </div>
              {/* AI & Machine Learning */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-sm">
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {/* AI/ML Icon */}
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI & Machine Learning</h3>
                <div className="space-y-2">
                  <span className="block bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Scikit-learn</span>
                  <span className="block bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium text-center">TensorFlow</span>
                  <span className="block bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Random Forest</span>
                  <span className="block bg-indigo-50 text-indigo-700 px-3 py-2 rounded-lg text-sm font-medium text-center">LLM Integration</span>
                  <span className="block bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Claude API</span>
                </div>
              </div>
              {/* Tools & Deployment */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-sm">
                <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {/* Tools Icon */}
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13V12a1 1 0 011-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Tools & Deployment</h3>
                <div className="space-y-2">
                  <span className="block bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Docker</span>
                  <span className="block bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Vercel</span>
                  <span className="block bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium text-center">AWS</span>
                  <span className="block bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Cursor AI</span>
                </div>
              </div>
            </div>
          </div>
        </section>
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
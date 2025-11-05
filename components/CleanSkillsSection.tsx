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
      skills: ['Ensemble Methods', 'Scikit-learn', 'Predictive Modeling', 'Data Pipeline Design'],
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
      skills: ['Data Analysis', 'Compliance', 'Workflow Design', 'Visualization'],
      gradient: 'from-pink-500 to-red-500'
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
    <section ref={sectionRef} id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-light text-gray-900 mb-4">What I Do</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-20 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Transforming complex challenges into intelligent solutions through strategic problem-solving and cutting-edge technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* AI Solution Development */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">AI Solution Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Building machine learning models and intelligent systems that solve real business problems. From predictive analytics to automated decision-making.</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Ensemble Methods</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Scikit-learn</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Predictive Modeling</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Data Pipeline Design</span>
            </div>
          </div>
          {/* Full-Stack Development */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Full-Stack Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Creating complete applications from database to user interface. Focus on performance, user experience, and clean architecture.</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">React</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Next.js</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Python</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">FastAPI</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">PostgreSQL</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">AWS EC2</span>
            </div>
          </div>
          {/* Data & Analytics */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Data & Analytics</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Turning complex data into actionable insights. Experience with regulatory requirements and enterprise workflows.</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Data Analysis</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Compliance</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Workflow Design</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Visualization</span>
            </div>
          </div>
          {/* Strategic Problem Solving */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Strategic Problem Solving</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">Breaking down complex business challenges into actionable technical solutions. Understanding the "why" before building the "what."</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">System Design</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Process Analysis</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">User Research</span>
              <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">Strategic Planning</span>
            </div>
          </div>
        </div>
      {/* Technologies I Work With Section */}
      <section id="technologies" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Technologies I Work With</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-20 mx-auto mb-8" />
          </div>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Frontend */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">Frontend</h3>
              <div className="space-y-2">
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">React</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Next.js</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">TypeScript</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Tailwind</div>
              </div>
            </div>
            {/* Backend */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">Backend</h3>
              <div className="space-y-2">
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">FastAPI</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Python</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Node.js</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">PostgreSQL</div>
              </div>
            </div>
            {/* Machine Learning */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">Machine Learning</h3>
              <div className="space-y-2">
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Scikit-learn</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">TensorFlow</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Ensemble Methods</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Supervised Learning</div>
              </div>
            </div>
            {/* AI Platforms & APIs */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 01-8 0M12 3v4m0 0a4 4 0 01-4 4H7m5-4a4 4 0 004 4h1m-5-4a4 4 0 00-4 4v1m4-5a4 4 0 004 4v1"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">AI Platforms & APIs</h3>
              <div className="space-y-2">
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">OpenAI GPT-4</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Claude API</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Cursor</div>
              </div>
            </div>
            {/* DevOps & Tools */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">DevOps & Tools</h3>
              <div className="space-y-2">
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Docker</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">AWS</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Git</div>
                <div className="bg-white text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-center border border-gray-200">Vercel</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </section>
  );
};

export default CleanSkillsSection; 
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  level: string;
  proficiency: number; // 0-100
  color: string;
}

interface EnhancedSkillsSectionProps {
  skills: Skill[];
}

const EnhancedSkillsSection: React.FC<EnhancedSkillsSectionProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className={`p-3 rounded-lg ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
              <skill.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {skill.name}
              </h4>
              <p className="text-sm text-gray-600">{skill.level}</p>
            </div>
          </div>
          
          {/* Animated Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Proficiency</span>
              <span className="font-medium text-gray-800">{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`h-full rounded-full ${skill.color.replace('bg-', 'bg-gradient-to-r from-').replace('600', '500 to-600')}`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EnhancedSkillsSection; 
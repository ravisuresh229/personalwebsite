import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ExternalLink, Github, LucideIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
  impact?: string;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

interface EnhancedProjectCardProps {
  project: Project;
  index: number;
}

const EnhancedProjectCard: React.FC<EnhancedProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
        {/* Project Image or Icon */}
        <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden rounded-t-lg flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-48 object-cover rounded-t-lg border border-gray-200 shadow-sm"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-6 bg-white/80 rounded-full shadow-lg">
                <project.icon className="w-12 h-12 text-blue-600" />
              </div>
            </div>
          )}
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 flex items-center justify-center"
          >
            <div className="flex space-x-4">
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-6 h-6 text-white" />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <project.icon className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
              {project.title}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
            {project.description}
          </p>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-sm rounded-full border border-blue-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            {project.impact && (
              <div className="flex items-center space-x-2 text-green-600">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">{project.impact}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedProjectCard; 
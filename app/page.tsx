'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Github, 
  Brain, 
  Code, 
  Database,
  TrendingUp,
  Shield,
  Activity,
  Users,
  Zap
} from 'lucide-react'
import EnhancedHeroSection from '@/components/EnhancedHeroSection'
import EnhancedProjectCard from '@/components/EnhancedProjectCard'
import CleanSkillsSection from '@/components/CleanSkillsSection'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const projects = [
    {
      title: "ReferralGuard",
      description: "AI-powered referral leakage detection platform for Medicare providers. Built with FastAPI, S3, and a Next.js dashboard.",
      icon: Shield,
      tech: ["FastAPI", "Next.js", "AWS S3", "Machine Learning"],
      impact: "Reduced referral leakage by 23% for 50+ providers",
      demoUrl: "https://referralguard-demo.vercel.app",
      githubUrl: "https://github.com/ravisuresh/referralguard"
    },
    {
      title: "AuthorizationIQ",
      description: "ML-powered prior authorization approval predictor. Built with React, Tailwind CSS, and FastAPI backend. Provides real-time approval probability and recommendations for healthcare providers.",
      icon: Brain,
      tech: ["React", "Tailwind CSS", "FastAPI", "Scikit-learn"],
      impact: "Clinical-grade precision for prior authorization predictions",
      demoUrl: "https://authorizationiq.vercel.app",
      githubUrl: "https://github.com/ravisuresh229/authorizationiq"
    },
    {
      title: "Hospital Benchmark Tool",
      description: "Compares hospital performance metrics using public data with interactive dashboards and data visualizations.",
      icon: TrendingUp,
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      impact: "Used by 200+ healthcare administrators",
      demoUrl: "https://hospital-benchmark.vercel.app",
      githubUrl: "https://github.com/ravisuresh/hospital-benchmark"
    }
  ]

  const skills = [
    { name: "Frontend Development", icon: Code, level: "Advanced", proficiency: 90, color: "bg-blue-600" },
    { name: "Backend Development", icon: Database, level: "Advanced", proficiency: 85, color: "bg-green-600" },
    { name: "Machine Learning", icon: Brain, level: "Intermediate", proficiency: 75, color: "bg-purple-600" },
    { name: "Healthcare Systems", icon: Activity, level: "Expert", proficiency: 95, color: "bg-red-600" },
    { name: "Data Analysis", icon: TrendingUp, level: "Advanced", proficiency: 88, color: "bg-indigo-600" },
    { name: "Team Leadership", icon: Users, level: "Intermediate", proficiency: 70, color: "bg-orange-600" }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold gradient-text"
            >
              RS
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>
          <div className="mb-12">
            <CleanSkillsSection />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of the healthcare AI solutions I've built that are making a real impact in the industry.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <EnhancedProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities, whether it's building healthcare AI solutions, 
              consulting on technical projects, or collaborating on innovative ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="mailto:ravi.suresh.ai@gmail.com" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center gap-2">
                <Mail className="w-5 h-5" /> Email Me
              </a>
              <a href="https://linkedin.com/in/ravisuresh1" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-200 transition-all flex items-center gap-2">
                <Linkedin className="w-5 h-5" /> Connect on LinkedIn
              </a>
            </div>
            <div className="text-gray-500">
              <p>Available for freelance work, full-time positions, and consulting opportunities</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-max text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Ravi Suresh</h3>
            <p className="text-gray-400">Health AI Developer & Web Engineer</p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="mailto:ravi.suresh.ai@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/ravisuresh1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/ravisuresh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
          <div className="text-gray-500 text-sm">
            <p>&copy; 2024 Ravi Suresh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 
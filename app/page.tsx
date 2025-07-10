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
import { Navbar1 } from '@/components/ui/navbar-1'

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
      image: "/Screenshot 2025-07-10 at 3.01.45 PM.png",
      tech: ["FastAPI", "Next.js", "AWS S3", "Machine Learning", "AI Analytics", "Predictive Modeling", "Claude Sonnet", "Cursor AI"],
      impact: "Reduced referral leakage by 23% for 50+ providers",
      demoUrl: "https://referralguard.vercel.app",
      githubUrl: "https://github.com/ravisuresh229/referralguard"
    },
    {
      title: "AuthorizationIQ",
      description: "ML-powered prior authorization approval predictor. Built with React, Tailwind CSS, and FastAPI backend. Provides real-time approval probability and recommendations for healthcare providers.",
      icon: Brain,
      image: "/Screenshot 2025-07-10 at 3.02.03 PM.png",
      tech: ["React", "Tailwind CSS", "FastAPI", "Scikit-learn", "Machine Learning", "AI Insights", "Predictive Modeling", "Claude Sonnet", "Cursor AI"],
      impact: "Clinical-grade precision for prior authorization predictions",
      demoUrl: "https://authorizationiq.vercel.app",
      githubUrl: "https://github.com/ravisuresh229/authorizationiq"
    },
    {
      title: "Hospital Benchmark Tool",
      description: "Compares hospital performance metrics using public data with interactive dashboards and data visualizations.",
      icon: TrendingUp,
      tech: ["React", "D3.js", "Python", "PostgreSQL", "Data Visualization", "Claude Sonnet", "Cursor AI"],
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
      <Navbar1 />

      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Simple Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          {/* Main Story - Short & Sweet */}
          <div className="text-center mb-16">
            <p className="text-2xl text-gray-800 leading-relaxed font-light max-w-3xl mx-auto">
              I made the jump from medical school to AI development. Building solutions that combine analytical rigor with creative problem-solving.
            </p>
          </div>
          {/* Visual Journey Cards - Simplified */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Medical Background */}
            <div className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center hover:scale-105 transition-all duration-300">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Medical Icon */}
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Background</h3>
              <p className="text-blue-100 text-sm">Systematic thinking & problem analysis</p>
            </div>
            {/* The Pivot */}
            <div className="group bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white text-center hover:scale-105 transition-all duration-300">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* AI Icon */}
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Development</h3>
              <p className="text-purple-100 text-sm">Building intelligent solutions</p>
            </div>
            {/* Healthcare Focus */}
            <div className="group bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white text-center hover:scale-105 transition-all duration-300">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Healthcare Icon */}
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Healthcare AI</h3>
              <p className="text-green-100 text-sm">Where experience meets innovation</p>
            </div>
          </div>
          {/* Simple Quote */}
          <div className="text-center">
            <blockquote className="text-xl text-gray-600 italic font-light">
              "Building technology that feels inevitable"
            </blockquote>
          </div>
        </div>
      </section>

      {/* What I Do & Technologies I Work With */}
      <CleanSkillsSection />

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
              Here are some of the AI solutions I've built that transform complex challenges into intelligent, actionable systems.
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
              I'm always interested in new opportunities, whether it's building AI solutions that solve real problems, 
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
            <p className="text-gray-400">AI Solution Builder & Strategic Problem Solver</p>
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
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
      tech: ["FastAPI", "Next.js", "AWS S3", "PostgreSQL", "Random Forest", "Claude Sonnet"],
      demoUrl: "https://referralguard.vercel.app",
      githubUrl: "https://github.com/ravisuresh229/referralguard"
    },
    {
      title: "AuthorizationIQ",
      description: "ML-powered prior authorization approval predictor. Built with React, Tailwind CSS, and FastAPI backend. Provides real-time approval probability and recommendations for healthcare providers.",
      icon: Brain,
      image: "/Screenshot 2025-07-10 at 3.02.03 PM.png",
      tech: ["React", "Tailwind CSS", "FastAPI", "Scikit-learn", "Predictive Modeling", "Cursor AI"],
      demoUrl: "https://authorizationiq.vercel.app",
      githubUrl: "https://github.com/ravisuresh229/authorizationiq"
    },
    {
      title: "CareMetrics Pro",
      description: "Advanced Healthcare Analytics Platform for benchmarking and visualizing hospital performance. Features interactive dashboards, PDF export, and real-time data insights.",
      icon: TrendingUp,
      image: "/Screenshot 2025-07-10 at 11.54.26 PM.png",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Node.js", "Healthcare Analytics"],
      demoUrl: "https://caremetricspro.vercel.app",
      githubUrl: "https://github.com/ravisuresh229/caremetricspro"
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
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">About Me</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-20 mx-auto mb-8" />
          </div>
          <div className="max-w-4xl mx-auto">
            {/* Main Story */}
            <div className="text-center mb-16">
              <p className="text-xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
                My background in medicine and technology allows me to bridge the gap between healthcare and innovative digital solutions. <br className="hidden md:block" />Combining analytical thinking with creative problem-solving.
              </p>
            </div>
            {/* Journey Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Medical Background */}
              <div className="card-hover bg-white rounded-xl p-8 text-center border border-gray-200">
                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {/* Medical Icon */}
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Medical Background</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Systematic thinking & problem analysis</p>
              </div>
              {/* AI Development */}
              <div className="card-hover bg-white rounded-xl p-8 text-center border border-gray-200">
                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {/* AI Icon */}
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">AI Development</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Building intelligent solutions</p>
              </div>
              {/* Real-World Focus */}
              <div className="card-hover bg-white rounded-xl p-8 text-center border border-gray-200">
                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {/* Problem Solving Icon */}
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Problem Solving</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Real-world impact focus</p>
              </div>
            </div>
            {/* Quote */}
            <div className="text-center">
              <blockquote className="text-xl text-gray-600 font-light italic">
                "Building technology that feels inevitable"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do & Technologies I Work With */}
      <CleanSkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Featured Projects</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-20 mx-auto mb-8" />
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
              AI solutions that transform complex challenges into intelligent, actionable systems
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <EnhancedProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-light mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Interested in AI solutions, consulting opportunities, or technical collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="mailto:ravikirans723@gmail.com" className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Email Me
            </a>
            <a href="https://linkedin.com/in/ravisuresh1" target="_blank" rel="noopener noreferrer" className="border border-gray-600 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Available for freelance work, full-time positions, and consulting opportunities
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-white text-lg font-medium">Ravi Suresh</h3>
            <p className="text-sm">AI Solutions Developer</p>
          </div>
          <p className="text-xs">
            © 2025 Ravi Suresh. Building AI solutions that make a difference.
          </p>
        </div>
      </footer>
    </main>
  )
} 
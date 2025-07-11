"use client" 

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="bg-gray-900 text-white rounded-md px-3 py-2 font-bold text-lg">RS</div>
        <div className="hidden md:flex space-x-8">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        {/* Removed View Resume button */}
        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center ml-2" onClick={toggleMenu}>
          <Menu className="h-6 w-6 text-gray-900" />
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
            >
              <X className="h-6 w-6 text-gray-900" />
            </button>
            <div className="flex flex-col space-y-6 mt-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-base text-gray-900 font-medium"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              ))}
              <a
                href="/Ravi_Suresh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors mt-4 text-center"
                onClick={toggleMenu}
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}


export { Navbar1 } 
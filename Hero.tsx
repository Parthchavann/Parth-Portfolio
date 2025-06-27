
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Data Engineer', 'LLM Developer', 'Full-Stack Architect'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 bg-clip-text text-transparent">
            👋 Hey, I'm Parth
          </h1>
          
          <div className="text-2xl md:text-4xl font-medium mb-4 h-16 flex items-center justify-center">
            <span className="mr-4">I Build AI-Powered Products That</span>
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-teal-500 font-bold"
            >
              {roles[currentRole] === 'Data Engineer' && 'Learn'}
              {roles[currentRole] === 'LLM Developer' && 'Scale'}
              {roles[currentRole] === 'Full-Stack Architect' && 'Evolve'}
            </motion.span>
          </div>

          <motion.div
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Currently: <span className="font-semibold text-blue-600 dark:text-blue-400">{roles[currentRole]}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Resume
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            <Github className="mr-2 w-5 h-5" />
            See Projects
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 rounded-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="mr-2 w-5 h-5" />
            Let's Chat
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 animate-bounce text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

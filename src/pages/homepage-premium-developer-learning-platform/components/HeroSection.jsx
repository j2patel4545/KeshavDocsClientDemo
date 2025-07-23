import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentCodeSnippet, setCurrentCodeSnippet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const codeSnippets = [
    {
      id: 1,
      language: 'React',
      code: `const Welcome = () => {
  return (
    <div className="hero">
      <h1>Beautiful Code</h1>
      <p>Meets Beautiful Learning</p>
    </div>
  );
};`,
      color: 'from-blue-500 to-cyan-400',
      icon: 'Code2'
    },
    {
      id: 2,
      language: 'Node.js',
      code: `const express = require('express');
const app = express();

app.get('/learn', (req, res) => {
  res.json({ 
    message: 'Master the craft' 
  });
});`,
      color: 'from-green-500 to-emerald-400',
      icon: 'Server'
    },
    {
      id: 3,
      language: 'Next.js',
      code: `export default function Page() {
  return (
    <main>
      <h1>Full-Stack Excellence</h1>
      <p>Where code becomes art</p>
    </main>
  );
}`,
      color: 'from-purple-500 to-pink-400',
      icon: 'Layers'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCodeSnippet((prev) => (prev + 1) % codeSnippets.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSnippet = codeSnippets[currentCodeSnippet];

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-slate-300 to-slate-500 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold dark:text-white text-blue-950 mb-6 leading-tight">
                Master the{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  craft
                </span>
                ,<br />
                not just the{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  code
                </span>
              </h1>
              <p className="text-xl sm:text-2xl dark:text-slate-300 text-slate-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                Where beautiful code meets beautiful learning. Elevate your development journey with 
                KeshavDovs' tech learn experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                variant="primary"
                size="lg"
                iconName="Rocket"
                iconPosition="right"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                onClick={() => console.log('Start Learning Journey')}
              >
                Start Learning Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="border-2 border-slate-400 text-slate-300 hover:bg-slate-800 hover:border-slate-300 px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => console.log('Explore Interactive Demo')}
              >
                JSON APIS to Learn
              </Button>
            </motion.div>

            {/* Technology Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {['React', 'MERN', 'Next.js', 'Node.js', 'Express.js'].map((tech, index) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300 text-sm font-medium hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Animated Code */}
          <div className="flex-1 max-w-lg lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name={currentSnippet.icon} size={16} className="text-slate-400" />
                      <span className="text-slate-400 text-sm font-medium">
                        {currentSnippet.language} 
                      </span>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSnippet.color}`}></div>
                </div>

                {/* Code Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCodeSnippet}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <pre className="text-sm text-slate-300 font-mono leading-relaxed overflow-hidden">
                      <code className="language-javascript bg-zinc-9">
                        {currentSnippet.code}
                      </code>
                    </pre>
                    
                    {/* Syntax Highlighting Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${currentSnippet.color} opacity-5 rounded-lg`}></div>
                  </motion.div>
                </AnimatePresence>

                {/* Code Transformation Effect */}
                <motion.div
                  animate={{ 
                    scale: isAnimating ? [1, 1.02, 1] : 1,
                    opacity: isAnimating ? [1, 0.8, 1] : 1
                  }}
                  transition={{ duration: 0.6 }}
                  className="mt-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700"
                >
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <Icon name="Zap" size={12} className="text-cyan-400" />
                    <span>Transforming into beautiful UI...</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-200"></div>
                      <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-lg"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-slate-400"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
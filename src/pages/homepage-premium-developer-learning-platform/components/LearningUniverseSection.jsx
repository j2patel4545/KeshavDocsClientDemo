import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useTheme } from '../../../context/ThemeContext';

const LearningUniverseSection = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const { theme } = useTheme();

  const technologies = [
    // same array as provided, unchanged
  ];

  return (
    <section className={`py-20 transition-all duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-zinc-950 to-black'
        : 'bg-gradient-to-b from-slate-50 to-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Explore the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Universe
            </span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Dive deep into modern web technologies with our comprehensive curriculum.
            Each path is designed to take you from fundamentals to mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`relative group cursor-pointer transition-all duration-300 ${
                hoveredTech === tech.id ? 'scale-105' : ''
              }`}
            >
              <div className={`p-8 rounded-2xl border-2 ${tech.borderColor} ${tech.bgColor} backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200 dark:hover:shadow-zinc-900`}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center mr-4 shadow-lg`}>
                    <Icon name={tech.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{tech.name}</h3>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{tech.level}</span>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-400">Curriculum Progress</span>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">{tech.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className={`h-2 bg-gradient-to-r ${tech.color} rounded-full`}
                    ></motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-white">{tech.modules}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Modules</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-white">{tech.projects}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zinc-900 dark:text-white">{tech.duration}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Duration</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black group-hover:border-zinc-900 dark:group-hover:border-white transition-all duration-300"
                  onClick={() => console.log(`Explore ${tech.name}`)}
                >
                  Explore {tech.name}
                </Button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredTech === tech.id ? 1 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-5 rounded-2xl pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-white dark:to-slate-200 rounded-2xl p-8 sm:p-12">
            <h3 className="text-3xl font-bold text-white dark:text-zinc-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-zinc-300 dark:text-zinc-700 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have transformed their careers with our comprehensive learning paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/technology-deep-dive-pages">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="left"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold"
                >
                  Explore All Technologies
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                iconName="Users"
                iconPosition="left"
                className="border-2 border-zinc-400 text-zinc-300 dark:text-zinc-700 hover:bg-zinc-700 dark:hover:bg-white hover:border-zinc-300 dark:hover:border-zinc-600 px-8 py-4 text-lg font-semibold"
                onClick={() => console.log('Join Community')}
              >
                Join Community
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningUniverseSection;

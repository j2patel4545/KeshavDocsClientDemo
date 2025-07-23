import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const studyContents = [
  {
    id: 1,
    title: "MERN Stack",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    topics: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "Master full-stack development using MongoDB, Express, React, and Node.js. Build REST APIs, real-world UIs, and scalable apps.",
    codeBefore: `// Client fetching data only
const data = fetch('https://api.example.com/data');`,
    codeAfter: `// Full MERN CRUD API
app.get("/api/data", async (req, res) => {
  const data = await Data.find();
  res.json(data);
});`,
  },
  {
    id: 2,
    title: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    topics: ["JSX", "Hooks", "State & Props", "Component Design"],
    description:
      "Learn how to build modern user interfaces using React. Master reusable components, hooks, and dynamic rendering.",
    codeBefore: `// Static HTML
<div class="card">
  <h2>Hello</h2>
</div>`,
    codeAfter: `// React Component
const Card = ({ title }) => (
  <div className="card">
    <h2>{title}</h2>
  </div>
);`,
  },
  {
    id: 3,
    title: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    topics: ["SSR", "Routing", "API Routes", "Deployment"],
    description:
      "Build SEO-friendly and fast web applications using Next.js. Learn server-side rendering, file-based routing, and API routes.",
    codeBefore: `// Client-only React
<Route path="/about" component={About} />`,
    codeAfter: `// Next.js Page Routing
// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}`,
  },
  {
    id: 4,
    title: "Git & GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    topics: ["Version Control", "Branching", "Pull Requests", "Collaboration"],
    description:
      "Track code history, collaborate with teams, and manage open-source contributions efficiently using Git & GitHub.",
    codeBefore: `// Without Git
FinalProject_v3_last_final_REAL.js`,
    codeAfter: `// With Git & GitHub
$ git init
$ git add .
$ git commit -m "Initial commit"
$ git push origin main`,
  },
  {
    id: 5,
    title: "C Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    topics: ["Pointers", "Memory", "Structures", "File Handling"],
    description:
      "Learn foundational programming with C: memory manipulation, system-level operations, and algorithmic thinking.",
    codeBefore: `// Simple Hello World
#include <stdio.h>
int main() {
  printf("Hello, World");
  return 0;
}`,
    codeAfter: `// Memory Allocation with Pointers
#include <stdlib.h>
int *arr = malloc(5 * sizeof(int));
for(int i = 0; i < 5; i++) arr[i] = i;`,
  },
];


export default function StudyContentSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const current = studyContents[currentIndex];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % studyContents.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Study{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contents
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore the essential subjects we focus on while learning programming and development.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <img src={current.logo} alt={current.title} className="w-16 h-16" />
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-white">{current.title}</h3>
                      <p className="text-slate-400 mt-1">{current.description}</p>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-3 my-6">
                    {current.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Code Comparison */}
                <div>
                  <div className="space-y-6">
                    {/* Before */}
                    <div>
                      <p className="text-red-400 font-semibold mb-2 flex items-center">
                        <Icon name="AlertCircle" size={16} className="mr-2" /> BEFORE
                      </p>
                      <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-4">
                        <pre className="text-sm text-slate-300 font-mono overflow-x-auto whitespace-pre-wrap">
                          <code>{current.codeBefore}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Icon name="ArrowDown" size={20} className="text-white" />
                      </div>
                    </div>

                    {/* After */}
                    <div>
                      <p className="text-green-400 font-semibold mb-2 flex items-center">
                        <Icon name="CheckCircle" size={16} className="mr-2" /> AFTER
                      </p>
                      <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-4">
                        <pre className="text-sm text-slate-300 font-mono overflow-x-auto whitespace-pre-wrap">
                          <code>{current.codeAfter}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              size="lg"
              iconName="ChevronLeft"
              onClick={() => {
                setCurrentIndex((prev) => (prev - 1 + studyContents.length) % studyContents.length);
                setAutoPlay(false);
              }}
              className="text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              Previous
            </Button>

            <div className="flex space-x-3">
              {studyContents.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setAutoPlay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="lg"
              iconName="ChevronRight"
              iconPosition="right"
              onClick={() => {
                setCurrentIndex((prev) => (prev + 1) % studyContents.length);
                setAutoPlay(false);
              }}
              className="text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              Next
            </Button>
          </div>

          {/* Auto Play */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                autoPlay
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'bg-slate-700/50 text-slate-400 border border-slate-600'
              }`}
            >
              <Icon name={autoPlay ? "Pause" : "Play"} size={14} />
              <span>{autoPlay ? 'Pause' : 'Play'} Auto-rotation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

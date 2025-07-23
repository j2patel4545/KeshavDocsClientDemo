import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import MERNIntro from './MERNIntro';

const roadmap = [
  {
    title: 'Prerequisite',
    icon: <FaHtml5 />,
    topics: [
      { name: 'HTML', subtopics: ['Structure', 'Tags', 'Forms', 'Tables', 'Semantic HTML', 'Media Embedding'] },
      { name: 'CSS', subtopics: ['Selectors', 'Box Model', 'Flexbox', 'Grid', 'Positioning', 'Animations', 'Responsive Design'] },
      { name: 'JavaScript', subtopics: ['Variables', 'Data Types', 'Functions', 'ES6+', 'DOM Manipulation', 'Events', 'Loops', 'Conditionals'] },
    ],
  },
  {
    title: 'React.js',
    icon: <FaReact />,
    topics: [
      { name: 'Components', subtopics: ['JSX', 'Functional vs Class', 'Props', 'State', 'Lifecycle'] },
      { name: 'Hooks', subtopics: ['useState', 'useEffect', 'useContext', 'useRef', 'Custom Hooks'] },
      { name: 'Routing', subtopics: ['React Router', 'Link/NavLink', 'Dynamic Routing', 'useParams', 'Nested Routes'] },
      { name: 'Advanced', subtopics: ['Context API', 'Redux Basics', 'Lazy Loading', 'Error Boundaries'] },
    ],
  },
  {
    title: 'Node.js',
    icon: <FaNodeJs />,
    topics: [
      { name: 'Intro', subtopics: ['What is Node?', 'NPM & Packages', 'Event Loop', 'Modules', 'REPL'] },
      { name: 'Core Modules', subtopics: ['File System (fs)', 'Path', 'OS', 'Events'] },
      { name: 'Async', subtopics: ['Callbacks', 'Promises', 'Async/Await'] },
      { name: 'Environment', subtopics: ['Environment Variables', '.env Files'] },
    ],
  },
  {
    title: 'Express.js',
    icon: <FaNodeJs />,
    topics: [
      { name: 'Basics', subtopics: ['What is Express?', 'Middleware', 'Routing', 'Serving Static Files'] },
      { name: 'Routing', subtopics: ['Params', 'Query Strings', 'Route Grouping'] },
      { name: 'API Development', subtopics: ['CRUD Routes', 'Controllers', 'Request & Response Objects'] },
      { name: 'Error Handling', subtopics: ['Custom Middleware', 'Status Codes'] },
    ],
  },
  {
    title: 'MongoDB',
    icon: <FaDatabase />,
    topics: [
      { name: 'Intro', subtopics: ['What is MongoDB?', 'Documents vs Tables', 'Collections', 'Compass GUI'] },
      { name: 'CRUD Operations', subtopics: ['Insert', 'Find', 'Update', 'Delete'] },
      { name: 'Mongoose', subtopics: ['Schemas', 'Models', 'Validation', 'Relationships', 'Populate'] },
      { name: 'Advanced', subtopics: ['Indexes', 'Aggregation', 'Query Optimization'] },
    ],
  },
];

export default function MERNRoadmap() {
  const [expanded, setExpanded] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);

  return (
    <div className="bg-gradient-to-b from-white via-white to-gray-100 dark:from-[#060A16] dark:via-[#060A16] dark:to-gray-800 flex flex-col items-center  ">
      <MERNIntro />
      <div className="flex w-[90%]">
        <div className="min-h-screen w-full text-gray-900 dark:text-white px-6 py-20 font-sans relative overflow-x-hidden">
          <div className="relative flex flex-col items-center space-y-28">
            {roadmap.map((section, i) => (
              <React.Fragment key={i}>
                <div className={`relative flex w-full ${i % 2 === 0 ? 'justify-start pl-10' : 'justify-end pr-10'}`}>
                  <motion.div
                    initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative max-w-md w-full rounded-xl border border-gray-300 dark:border-white/10 shadow-xl dark:shadow-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black p-6"
                  >
                    <div className="absolute -top-6 -left-6 bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-full p-3 text-xl text-gray-900 dark:text-white shadow-md dark:shadow-lg">
                      {section.icon}
                    </div>
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="text-2xl font-semibold mb-2 w-full text-left text-gray-900 dark:text-white drop-shadow-sm"
                    >
                      {section.title}
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Click to explore</p>
                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          {section.topics.map((topic, j) => (
                            <div key={j}>
                              <button
                                onClick={() =>
                                  setActiveTopic(activeTopic === `${i}-${j}` ? null : `${i}-${j}`)
                                }
                                className="text-gray-900 dark:text-white font-medium hover:underline"
                              >
                                {topic.name}{' '}
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">(click to explore)</span>
                              </button>
                              <AnimatePresence>
                                {activeTopic === `${i}-${j}` && (
                                  <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="pl-4 mt-2 text-sm text-gray-700 dark:text-gray-300 list-disc"
                                  >
                                    {topic.subtopics.map((sub, k) => (
                                      <li key={k}>{sub}</li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {i < roadmap.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-800 dark:to-gray-700"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

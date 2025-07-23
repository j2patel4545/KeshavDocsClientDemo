import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TechnologyCard from './components/TechnologyCard';
import InteractivePlayground from './components/InteractivePlayground';
import LearningPathVisualizer from './components/LearningPathVisualizer';
import ProjectShowcase from './components/ProjectShowcase';
import MentorInsights from './components/MentorInsights';
import AdvancedSearchFilter from './components/AdvancedSearchFilter';
import ProgressTracker from './components/ProgressTracker';

const TechnologyDeepDivePages = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [searchFilters, setSearchFilters] = useState({});
  const location = useLocation();

  const technologies = [
    {
      id: 'react',
      name: 'React',
      description: 'Build dynamic user interfaces with the most popular JavaScript library. Master components, hooks, and modern React patterns.',
      icon: 'Atom',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      decorativeIcon: 'Code',
      lessons: 45,
      duration: '8 weeks',
      students: '12.5k',
      difficulty: 'Intermediate',
      difficultyColor: 'bg-warning-100 text-warning-700',
      rating: 5,
      defaultCode: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">React Counter</h2>
      <p className="text-lg mb-4">Count: {count}</p>
      <div className="space-x-2">
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrease
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;`,
      modules: [
        {
          id: 1,
          title: "React Fundamentals",
          description: "JSX, Components, Props, and State",
          duration: "2 weeks",
          lessons: 12,
          completed: true,
          difficulty: "Beginner"
        },
        {
          id: 2,
          title: "Hooks & Modern React",
          description: "useState, useEffect, Custom Hooks",
          duration: "2 weeks",
          lessons: 15,
          completed: true,
          difficulty: "Intermediate"
        },
        {
          id: 3,
          title: "Advanced Patterns",
          description: "Context, Reducers, Performance",
          duration: "2 weeks",
          lessons: 10,
          completed: false,
          difficulty: "Advanced"
        },
        {
          id: 4,
          title: "React Ecosystem",
          description: "Router, Testing, Deployment",
          duration: "2 weeks",
          lessons: 8,
          completed: false,
          difficulty: "Advanced"
        }
      ]
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Master server-side JavaScript development. Build scalable backend applications, APIs, and microservices.',
      icon: 'Server',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
      decorativeIcon: 'Database',
      lessons: 38,
      duration: '6 weeks',
      students: '9.8k',
      difficulty: 'Advanced',
      difficultyColor: 'bg-error-100 text-error-700',
      rating: 5,
      defaultCode: `const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Node.js API!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
      modules: [
        {
          id: 1,
          title: "Node.js Basics",
          description: "Runtime, Modules, File System",
          duration: "1.5 weeks",
          lessons: 10,
          completed: true,
          difficulty: "Beginner"
        },
        {
          id: 2,
          title: "Express Framework",
          description: "Routing, Middleware, APIs",
          duration: "2 weeks",
          lessons: 12,
          completed: false,
          difficulty: "Intermediate"
        },
        {
          id: 3,
          title: "Database Integration",
          description: "MongoDB, PostgreSQL, ORMs",
          duration: "1.5 weeks",
          lessons: 8,
          completed: false,
          difficulty: "Intermediate"
        },
        {
          id: 4,
          title: "Advanced Topics",
          description: "Authentication, Testing, Deployment",
          duration: "1 week",
          lessons: 8,
          completed: false,
          difficulty: "Advanced"
        }
      ]
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      description: 'Build production-ready React applications with server-side rendering, static generation, and full-stack capabilities.',
      icon: 'Layers',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-800',
      gradient: 'bg-gradient-to-br from-gray-700 to-gray-900',
      decorativeIcon: 'Globe',
      lessons: 32,
      duration: '5 weeks',
      students: '7.2k',
      difficulty: 'Advanced',
      difficultyColor: 'bg-error-100 text-error-700',
      rating: 5,
      defaultCode: `import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home({ posts }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Built with Next.js" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to Next.js!
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = [
    { id: 1, title: 'Getting Started', excerpt: 'Learn the basics...' },
    { id: 2, title: 'Advanced Features', excerpt: 'Explore SSR, SSG...' }
  ];

  return { props: { posts } };
}`,
      modules: [
        {
          id: 1,
          title: "Next.js Fundamentals",
          description: "Pages, Routing, Components",
          duration: "1 week",
          lessons: 8,
          completed: false,
          difficulty: "Beginner"
        },
        {
          id: 2,
          title: "Data Fetching",
          description: "SSR, SSG, ISR, Client-side",
          duration: "1.5 weeks",
          lessons: 10,
          completed: false,
          difficulty: "Intermediate"
        },
        {
          id: 3,
          title: "API Routes",
          description: "Backend functionality, Middleware",
          duration: "1 week",
          lessons: 6,
          completed: false,
          difficulty: "Intermediate"
        },
        {
          id: 4,
          title: "Production Deployment",
          description: "Optimization, Vercel, Performance",
          duration: "1.5 weeks",
          lessons: 8,
          completed: false,
          difficulty: "Advanced"
        }
      ]
    },
    {
      id: 'express',
      name: 'Express.js',
      description: 'Create robust web applications and APIs with the most popular Node.js framework. Learn middleware, routing, and best practices.',
      icon: 'Zap',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
      decorativeIcon: 'Settings',
      lessons: 28,
      duration: '4 weeks',
      students: '8.9k',
      difficulty: 'Intermediate',
      difficultyColor: 'bg-warning-100 text-warning-700',
      rating: 4,
      defaultCode: `const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path} - \${new Date().toISOString()}\`);
  next();
});

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: Date.now() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Express server running on port \${PORT}\`);
});`,
      modules: [
        {
          id: 1,
          title: "Express Basics",
          description: "Setup, Routing, Middleware",
          duration: "1 week",
          lessons: 8,
          completed: false,
          difficulty: "Beginner"
        },
        {
          id: 2,
          title: "Advanced Routing",
          description: "Parameters, Query strings, Validation",
          duration: "1 week",
          lessons: 7,
          completed: false,
          difficulty: "Intermediate"
        },
        {
          id: 3,
          title: "Security & Performance",
          description: "Authentication, Rate limiting, Optimization",
          duration: "1 week",
          lessons: 6,
          completed: false,
          difficulty: "Advanced"
        },
        {
          id: 4,
          title: "Testing & Deployment",
          description: "Unit tests, Integration tests, Production",
          duration: "1 week",
          lessons: 7,
          completed: false,
          difficulty: "Advanced"
        }
      ]
    },
    {
      id: 'mern',
      name: 'MERN Stack',
      description: 'Master full-stack development with MongoDB, Express, React, and Node.js. Build complete web applications from scratch.',
      icon: 'Layers3',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
      decorativeIcon: 'Workflow',
      lessons: 72,
      duration: '12 weeks',
      students: '15.3k',
      difficulty: 'Expert',
      difficultyColor: 'bg-secondary-100 text-secondary-700',
      rating: 5,
      defaultCode: `// MERN Stack Application Structure
// Frontend (React)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (userData) => {
    try {
      const response = await axios.post('/api/users', userData);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="app">
      <h1>MERN Stack Application</h1>
      <UserList users={users} />
      <UserForm onSubmit={createUser} />
    </div>
  );
}

// Backend (Express + MongoDB)
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mernapp');

// API Routes
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});`,
      modules: [
        {
          id: 1,
          title: "MERN Foundations",
          description: "Setup, Architecture, Project Structure",
          duration: "2 weeks",
          lessons: 15,
          completed: false,
          difficulty: "Beginner"
        },
        {
          id: 2,
          title: "Backend Development",
          description: "Node.js, Express, MongoDB, APIs",
          duration: "3 weeks",
          lessons: 20,
          completed: false,
          difficulty: "Intermediate"
        },
        {
          id: 3,
          title: "Frontend Integration",
          description: "React, State Management, API Integration",
          duration: "3 weeks",
          lessons: 18,
          completed: false,
          difficulty: "Intermediate"
        },
        {
          id: 4,
          title: "Full-Stack Projects",
          description: "Authentication, Real-time features, Deployment",
          duration: "4 weeks",
          lessons: 19,
          completed: false,
          difficulty: "Expert"
        }
      ]
    }
  ];

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'playground', label: 'Interactive Playground', icon: 'Code' },
    { id: 'learning-path', label: 'Learning Path', icon: 'Map' },
    { id: 'projects', label: 'Projects', icon: 'FolderOpen' },
    { id: 'mentors', label: 'Mentor Insights', icon: 'Users' },
    { id: 'progress', label: 'Progress', icon: 'BarChart3' }
  ];

  useEffect(() => {
    // Set default selected technology
    if (technologies.length > 0 && !selectedTech) {
      setSelectedTech(technologies[0]);
    }
  }, [technologies, selectedTech]);

  const handleFilterChange = (filters) => {
    setSearchFilters(filters);
    console.log('Filters applied:', filters);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-secondary-50 via-background to-accent-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Technology
              <span className="text-gradient block mt-2">Deep Dive</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Master modern web development through immersive, hands-on learning experiences. 
              Each technology features unique visual identities, interactive playgrounds, and expert insights.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600">5</div>
                <div className="text-sm text-text-secondary">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600">200+</div>
                <div className="text-sm text-text-secondary">Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success-600">50+</div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning-600">24/7</div>
                <div className="text-sm text-text-secondary">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AdvancedSearchFilter onFilterChange={handleFilterChange} />
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Choose Your Technology
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Each technology offers a comprehensive learning experience with unique visual identities 
              and specialized curriculum designed by industry experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div key={tech.id} onClick={() => setSelectedTech(tech)}>
                <TechnologyCard technology={tech} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Technology Deep Dive */}
      {selectedTech && (
        <>
          {/* Technology Header */}
          <section className={`py-16 ${selectedTech.gradient} text-white relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Icon name={selectedTech.icon} size={32} className="text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold">{selectedTech.name}</h2>
                </div>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  {selectedTech.description}
                </p>
                
                {/* Section Navigation */}
                <div className="flex flex-wrap justify-center gap-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-white text-text-primary shadow-lg'
                          : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30 backdrop-blur-sm'
                      }`}
                    >
                      <Icon name={section.icon} size={16} />
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Content Sections */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {activeSection === 'overview' && (
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl font-bold text-text-primary mb-6">
                    Master {selectedTech.name} Development
                  </h3>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    Dive deep into {selectedTech.name} with our comprehensive curriculum designed by industry experts. 
                    From fundamentals to advanced concepts, build real-world projects and gain the skills needed 
                    for professional development.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon name="BookOpen" size={24} className="text-secondary-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-text-primary mb-2">Comprehensive Curriculum</h4>
                      <p className="text-text-secondary">
                        Structured learning path from basics to advanced topics with hands-on exercises.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon name="Code" size={24} className="text-accent-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-text-primary mb-2">Interactive Playground</h4>
                      <p className="text-text-secondary">
                        Practice coding in real-time with our interactive code editor and live preview.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-success-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon name="Users" size={24} className="text-success-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-text-primary mb-2">Expert Mentorship</h4>
                      <p className="text-text-secondary">
                        Learn from industry professionals with years of real-world experience.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'playground' && (
                <InteractivePlayground selectedTech={selectedTech} />
              )}

              {activeSection === 'learning-path' && (
                <LearningPathVisualizer selectedTech={selectedTech} />
              )}

              {activeSection === 'projects' && (
                <ProjectShowcase selectedTech={selectedTech} />
              )}

              {activeSection === 'mentors' && (
                <MentorInsights />
              )}

              {activeSection === 'progress' && (
                <ProgressTracker selectedTech={selectedTech} />
              )}
            </div>
          </section>
        </>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary-500 to-accent-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their careers with KeshavDovs. 
            Start with any technology and build your way to full-stack mastery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              iconName="Play"
              className="bg-white text-secondary-600 hover:bg-gray-100"
              onClick={() => console.log('Start free trial')}
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              className="border-white text-white hover:bg-white hover:text-secondary-600"
              onClick={() => console.log('Schedule demo')}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-mono">K</span>
                </div>
                <span className="text-xl font-bold">KeshavDovs</span>
              </div>
              <p className="text-primary-300 mb-4">
                Premium developer learning platform for modern web technologies.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-primary-300">
                <li><a href="#" className="hover:text-white transition-colors">React</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Node.js</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Next.js</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Express.js</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MERN Stack</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-primary-300">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-300">
            <p>&copy; {new Date().getFullYear()} KeshavDovs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechnologyDeepDivePages;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityActivityFeed = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [activities, setActivities] = useState([]);
  const [isLive, setIsLive] = useState(true);

  const mockActivities = {
    discussions: [
      {
        id: 1,
        type: 'discussion',
        user: {
          name: "Alex Chen",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
          level: "Advanced"
        },
        title: "Best practices for React performance optimization?",
        content: "I'm working on a large React app and noticing some performance issues. What are your go-to techniques for optimization?",
        category: "React",
        replies: 12,
        likes: 24,
        timestamp: new Date(Date.now() - 300000), // 5 minutes ago
        tags: ["React", "Performance", "Optimization"]
      },
      {
        id: 2,
        type: 'discussion',
        user: {
          name: "Sarah Rodriguez",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
          level: "Intermediate"
        },
        title: "MongoDB vs PostgreSQL for a new project",
        content: "Starting a new MERN stack project. Should I go with MongoDB or switch to PostgreSQL? What are the trade-offs?",
        category: "Database",
        replies: 8,
        likes: 15,
        timestamp: new Date(Date.now() - 900000), // 15 minutes ago
        tags: ["MongoDB", "PostgreSQL", "Database"]
      },
      {
        id: 3,
        type: 'discussion',
        user: {
          name: "Mike Johnson",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
          level: "Beginner"
        },
        title: "Understanding async/await in Node.js",
        content: "I\'m struggling with async/await concepts. Can someone explain with practical examples?",
        category: "Node.js",
        replies: 18,
        likes: 32,
        timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
        tags: ["Node.js", "JavaScript", "Async"]
      }
    ],
    projects: [
      {
        id: 4,
        type: 'project',
        user: {
          name: "Emma Wilson",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
          level: "Advanced"
        },
        title: "Real-time Chat Application",
        description: "Built a full-stack chat app with React, Node.js, Socket.io, and MongoDB. Features include real-time messaging, file sharing, and user authentication.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        likes: 45,
        views: 128,
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        githubUrl: "https://github.com/emmawilson/chat-app",
        liveUrl: "https://chat-app-demo.com"
      },
      {
        id: 5,
        type: 'project',
        user: {
          name: "David Park",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
          level: "Intermediate"
        },
        title: "E-commerce Dashboard",
        description: "Admin dashboard for e-commerce platform with analytics, inventory management, and order tracking. Built with Next.js and Tailwind CSS.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
        technologies: ["Next.js", "Tailwind", "Chart.js", "Express"],
        likes: 38,
        views: 95,
        timestamp: new Date(Date.now() - 7200000), // 2 hours ago
        githubUrl: "https://github.com/davidpark/ecommerce-dashboard",
        liveUrl: "https://ecommerce-dashboard-demo.com"
      },
      {
        id: 6,
        type: 'project',
        user: {
          name: "Lisa Zhang",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
          level: "Beginner"
        },
        title: "Weather App with Geolocation",
        description: "My first React project! Weather app that uses geolocation API and OpenWeather API to show current weather and 5-day forecast.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=300&h=200&fit=crop",
        technologies: ["React", "CSS3", "Weather API"],
        likes: 22,
        views: 67,
        timestamp: new Date(Date.now() - 10800000), // 3 hours ago
        githubUrl: "https://github.com/lisazhang/weather-app",
        liveUrl: "https://weather-app-demo.com"
      }
    ],
    achievements: [
      {
        id: 7,
        type: 'achievement',
        user: {
          name: "Carlos Martinez",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
          level: "Intermediate"
        },
        achievement: "Completed MERN Stack Mastery",
        description: "Successfully completed all 36 modules and built 12 projects in the MERN Stack curriculum",
        badge: "mern-master",
        timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
        progress: 100,
        nextGoal: "Advanced React Patterns"
      },
      {
        id: 8,
        type: 'achievement',
        user: {
          name: "Jennifer Lee",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
          level: "Advanced"
        },
        achievement: "Code Review Champion",
        description: "Provided helpful code reviews for 50+ community projects",
        badge: "code-reviewer",
        timestamp: new Date(Date.now() - 5400000), // 1.5 hours ago
        progress: 100,
        nextGoal: "Mentor Status"
      }
    ]
  };

  useEffect(() => {
    setActivities(mockActivities[activeTab]);
  }, [activeTab]);

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return timestamp.toLocaleDateString();
  };

  const tabs = [
    { id: 'discussions', label: 'Discussions', icon: 'MessageSquare', count: mockActivities.discussions.length },
    { id: 'projects', label: 'Projects', icon: 'Code2', count: mockActivities.projects.length },
    { id: 'achievements', label: 'Achievements', icon: 'Trophy', count: mockActivities.achievements.length }
  ];

  const renderDiscussion = (item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <Image
          src={item.user.avatar}
          alt={item.user.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-slate-900 truncate">{item.user.name}</h4>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              item.user.level === 'Advanced' ? 'bg-purple-100 text-purple-800' :
              item.user.level === 'Intermediate'? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
            }`}>
              {item.user.level}
            </span>
            <span className="text-slate-500 text-sm">{formatTimeAgo(item.timestamp)}</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2 hover:text-blue-600 cursor-pointer">
            {item.title}
          </h3>
          <p className="text-slate-600 mb-4 line-clamp-2">{item.content}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <Icon name="MessageSquare" size={16} />
                <span>{item.replies}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={16} />
                <span>{item.likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderProject = (item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <Image
          src={item.user.avatar}
          alt={item.user.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-slate-900">{item.user.name}</h4>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              item.user.level === 'Advanced' ? 'bg-purple-100 text-purple-800' :
              item.user.level === 'Intermediate'? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
            }`}>
              {item.user.level}
            </span>
            <span className="text-slate-500 text-sm">{formatTimeAgo(item.timestamp)}</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
          
          <div className="mb-4">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <p className="text-slate-600 mb-4">{item.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={16} />
                <span>{item.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Eye" size={16} />
                <span>{item.views}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                iconName="Github"
                onClick={() => console.log('View GitHub')}
                className="text-slate-600 hover:text-slate-900"
              >
                Code
              </Button>
              <Button
                variant="ghost"
                size="sm"
                iconName="ExternalLink"
                onClick={() => console.log('View Live Demo')}
                className="text-slate-600 hover:text-slate-900"
              >
                Live
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderAchievement = (item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <Image
          src={item.user.avatar}
          alt={item.user.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-slate-900">{item.user.name}</h4>
            <span className="text-slate-500 text-sm">{formatTimeAgo(item.timestamp)}</span>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Icon name="Trophy" size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{item.achievement}</h3>
              <p className="text-slate-600 text-sm">Next goal: {item.nextGoal}</p>
            </div>
          </div>
          <p className="text-slate-600 mb-4">{item.description}</p>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Community{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Activity
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See what our vibrant community is building, discussing, and achieving. 
            Join the conversation and share your journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Live Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-full border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Activity Feed</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 p-1 rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon name={tab.icon} size={18} />
                  <span>{tab.label}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-800' :'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {activities.map((item) => (
                <div key={item.id}>
                  {item.type === 'discussion' && renderDiscussion(item)}
                  {item.type === 'project' && renderProject(item)}
                  {item.type === 'achievement' && renderAchievement(item)}
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              iconName="RefreshCw"
              iconPosition="left"
              className="px-8 py-3 font-semibold"
              onClick={() => console.log('Load more activities')}
            >
              Load More Activity
            </Button>
          </div>

          {/* Join Community CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Connect with fellow developers, share your projects, get help with challenges, 
                and celebrate achievements together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold"
                  onClick={() => console.log('Join Community')}
                >
                  Join Community
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageSquare"
                  iconPosition="left"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 font-semibold"
                  onClick={() => console.log('Start Discussion')}
                >
                  Start Discussion
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityActivityFeed;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MentorInsights = () => {
  const [activeInsight, setActiveInsight] = useState(0);

  const mentorInsights = [
    {
      id: 1,
      mentor: {
        name: "Sarah Chen",
        title: "Senior Full-Stack Engineer at Google",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        experience: "8+ years",
        specialization: "React & Node.js"
      },
      topic: "Modern React Patterns",
      content: `The React ecosystem has evolved tremendously over the past few years. The introduction of hooks fundamentally changed how we think about component state and lifecycle management.\n\nOne pattern I've found particularly powerful in production applications is the compound component pattern combined with context. This allows you to create flexible, reusable components that maintain clean APIs while providing powerful customization options.\n\nAnother crucial aspect is understanding when to use client-side state versus server state. Tools like React Query have revolutionized how we handle server state, reducing boilerplate and improving user experience through intelligent caching and background updates.`,
      keyTakeaways: [
        "Embrace hooks for cleaner, more reusable logic",
        "Use compound components for flexible APIs",
        "Distinguish between client and server state",
        "Leverage React Query for server state management",
        "Focus on component composition over inheritance"
      ],
      tags: ["React", "Hooks", "State Management", "Best Practices"],
      publishedDate: "2024-01-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      mentor: {
        name: "Marcus Rodriguez",
        title: "Tech Lead at Netflix",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        experience: "10+ years",
        specialization: "Node.js & Microservices"
      },
      topic: "Scaling Node.js Applications",
      content: `Scaling Node.js applications requires a deep understanding of the event loop and how to leverage its asynchronous nature effectively. At Netflix, we've learned that the key to successful scaling isn't just about handling more requests—it's about handling them efficiently.\n\nOne of the most important lessons is proper error handling. In a distributed system, failures are inevitable. Your application needs to be resilient and fail gracefully. Implement circuit breakers, proper logging, and health checks from day one.\n\nAnother critical aspect is database optimization. Use connection pooling, implement proper indexing strategies, and consider read replicas for read-heavy workloads. Don't forget about caching—Redis can be your best friend for frequently accessed data.`,
      keyTakeaways: [
        "Master the Node.js event loop fundamentals",
        "Implement robust error handling and circuit breakers",
        "Optimize database connections and queries",
        "Use caching strategies effectively",
        "Monitor performance metrics continuously"
      ],
      tags: ["Node.js", "Scaling", "Performance", "Architecture"],
      publishedDate: "2024-01-10",
      readTime: "7 min read"
    },
    {
      id: 3,
      mentor: {
        name: "Emily Watson",
        title: "Principal Engineer at Stripe",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        experience: "12+ years",
        specialization: "Full-Stack Architecture"
      },
      topic: "Building Production-Ready APIs",
      content: `Building APIs that can handle production traffic requires careful consideration of many factors beyond just functionality. At Stripe, we process millions of API requests daily, and reliability is paramount.\n\nFirst, design your API with versioning in mind from the beginning. Use semantic versioning and maintain backward compatibility. Your API is a contract with your users, and breaking changes should be rare and well-communicated.\n\nSecurity should be built in, not bolted on. Implement proper authentication, authorization, rate limiting, and input validation. Use HTTPS everywhere and consider implementing API keys or OAuth depending on your use case.\n\nDocumentation is crucial—your API is only as good as its documentation. Use tools like OpenAPI/Swagger to maintain up-to-date, interactive documentation.`,
      keyTakeaways: [
        "Design APIs with versioning from the start",
        "Implement comprehensive security measures",
        "Maintain excellent documentation",
        "Use proper HTTP status codes and error messages",
        "Implement rate limiting and monitoring"
      ],
      tags: ["API Design", "Security", "Documentation", "Best Practices"],
      publishedDate: "2024-01-05",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="bg-background rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary-50 to-accent-50 px-8 py-6 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center">
            <Icon name="Users" size={20} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-text-primary">Mentor Insights</h3>
        </div>
        <p className="text-text-secondary">
          Expert commentary on best practices and industry trends from seasoned professionals
        </p>
      </div>

      {/* Mentor Navigation */}
      <div className="px-8 py-4 border-b border-border bg-surface">
        <div className="flex gap-4 overflow-x-auto">
          {mentorInsights.map((insight, index) => (
            <button
              key={insight.id}
              onClick={() => setActiveInsight(index)}
              className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeInsight === index
                  ? 'bg-secondary-500 text-white shadow-lg'
                  : 'bg-background text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
              }`}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={insight.mentor.avatar}
                  alt={insight.mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-medium text-sm">{insight.mentor.name}</div>
                <div className="text-xs opacity-75">{insight.topic}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Insight Content */}
      <div className="p-8">
        {mentorInsights.map((insight, index) => (
          <div
            key={insight.id}
            className={`${activeInsight === index ? 'block' : 'hidden'}`}
          >
            {/* Mentor Profile */}
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={insight.mentor.avatar}
                  alt={insight.mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h4 className="text-xl font-bold text-text-primary mb-1">
                  {insight.mentor.name}
                </h4>
                <p className="text-secondary-600 font-medium mb-2">
                  {insight.mentor.title}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-text-secondary">
                  <div className="flex items-center gap-1">
                    <Icon name="Award" size={16} className="text-accent-500" />
                    <span>{insight.mentor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Code" size={16} className="text-secondary-500" />
                    <span>{insight.mentor.specialization}</span>
                  </div>
                </div>
              </div>

              <div className="text-right text-sm text-text-secondary">
                <div className="flex items-center gap-1 mb-1">
                  <Icon name="Calendar" size={16} />
                  <span>{new Date(insight.publishedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  <span>{insight.readTime}</span>
                </div>
              </div>
            </div>

            {/* Topic & Tags */}
            <div className="mb-6">
              <h5 className="text-2xl font-bold text-text-primary mb-3">
                {insight.topic}
              </h5>
              <div className="flex flex-wrap gap-2">
                {insight.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="prose max-w-none mb-8">
              <div className="text-text-primary leading-relaxed whitespace-pre-line">
                {insight.content}
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-surface rounded-xl p-6 mb-6">
              <h6 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Icon name="Lightbulb" size={18} className="text-warning-500" />
                Key Takeaways
              </h6>
              <ul className="space-y-3">
                {insight.keyTakeaways.map((takeaway, takeawayIndex) => (
                  <li key={takeawayIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-success-600" />
                    </div>
                    <span className="text-text-secondary">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Heart"
                  onClick={() => console.log('Like insight')}
                >
                  Like
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Share"
                  onClick={() => console.log('Share insight')}
                >
                  Share
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Bookmark"
                  onClick={() => console.log('Bookmark insight')}
                >
                  Save
                </Button>
              </div>
              
              <Button
                variant="primary"
                size="sm"
                iconName="MessageCircle"
                onClick={() => console.log('Ask mentor question')}
              >
                Ask Question
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorInsights;
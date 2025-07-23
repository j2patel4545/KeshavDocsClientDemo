import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectShowcase = ({ selectedTech }) => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard. Built using industry best practices and scalable architecture.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      difficulty: "Advanced",
      duration: "8 weeks",
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & checkout process",
        "Payment gateway integration",
        "Order management system",
        "Admin dashboard with analytics"
      ],
      liveDemo: "https://demo.example.com",
      sourceCode: "https://github.com/example/ecommerce",
      learningOutcomes: [
        "Full-stack development workflow",
        "Database design and optimization",
        "API development and integration",
        "State management patterns",
        "Security best practices"
      ]
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard with data visualization, user engagement metrics, and automated reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      difficulty: "Intermediate",
      duration: "6 weeks",
      features: [
        "Real-time data visualization",
        "Interactive charts and graphs",
        "User engagement analytics",
        "Automated report generation",
        "Multi-platform integration",
        "Responsive design"
      ],
      liveDemo: "https://dashboard.example.com",
      sourceCode: "https://github.com/example/dashboard",
      learningOutcomes: [
        "Data visualization techniques",
        "Real-time data handling",
        "Chart library integration",
        "Performance optimization",
        "User experience design"
      ]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with team features, project tracking, and productivity analytics for modern teams.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      difficulty: "Beginner",
      duration: "4 weeks",
      features: [
        "Task creation and management",
        "Team collaboration tools",
        "Project timeline tracking",
        "File attachment support",
        "Notification system",
        "Mobile-responsive interface"
      ],
      liveDemo: "https://tasks.example.com",
      sourceCode: "https://github.com/example/tasks",
      learningOutcomes: [
        "Component-based architecture",
        "State management fundamentals",
        "User interface design",
        "Database relationships",
        "Authentication systems"
      ]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success-100 text-success-700 border-success-200';
      case 'Intermediate': return 'bg-warning-100 text-warning-700 border-warning-200';
      case 'Advanced': return 'bg-error-100 text-error-700 border-error-200';
      default: return 'bg-primary-100 text-primary-700 border-primary-200';
    }
  };

  return (
    <div className="bg-background rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-surface px-8 py-6 border-b border-border">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Project Showcase</h3>
        <p className="text-text-secondary">
          Real-world applications built with {selectedTech?.name || 'modern technologies'}
        </p>
      </div>

      {/* Project Navigation */}
      <div className="px-8 py-4 border-b border-border bg-surface-secondary">
        <div className="flex gap-2 overflow-x-auto">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeProject === index
                  ? 'bg-secondary-500 text-white' :'bg-background text-text-secondary hover:text-text-primary hover:bg-surface'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`${activeProject === index ? 'block' : 'hidden'}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay with Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="flex gap-4">
                    <Button
                      variant="primary"
                      size="sm"
                      iconName="ExternalLink"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      iconName="Github"
                      onClick={() => window.open(project.sourceCode, '_blank')}
                    >
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-2xl font-bold text-text-primary">{project.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h5 className="font-semibold text-text-primary mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Clock" size={16} className="text-warning-500" />
                      <span className="font-medium text-text-primary">Duration</span>
                    </div>
                    <span className="text-text-secondary">{project.duration}</span>
                  </div>
                  <div className="bg-surface rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Code" size={16} className="text-secondary-500" />
                      <span className="font-medium text-text-primary">Complexity</span>
                    </div>
                    <span className="text-text-secondary">{project.difficulty}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    iconName="Play"
                    onClick={() => console.log(`Start building ${project.title}`)}
                  >
                    Start Building
                  </Button>
                  <Button
                    variant="outline"
                    iconName="BookOpen"
                    onClick={() => console.log(`View ${project.title} tutorial`)}
                  >
                    View Tutorial
                  </Button>
                </div>
              </div>
            </div>

            {/* Expandable Sections */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Features */}
              <div className="bg-surface rounded-xl p-6">
                <h5 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Icon name="Star" size={18} className="text-accent-500" />
                  Key Features
                </h5>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-text-secondary">
                      <Icon name="Check" size={16} className="text-success-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Outcomes */}
              <div className="bg-surface rounded-xl p-6">
                <h5 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Icon name="Award" size={18} className="text-secondary-500" />
                  Learning Outcomes
                </h5>
                <ul className="space-y-2">
                  {project.learningOutcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex} className="flex items-start gap-2 text-text-secondary">
                      <Icon name="ArrowRight" size={16} className="text-secondary-500 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
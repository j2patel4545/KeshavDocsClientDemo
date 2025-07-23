import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LearningPathVisualizer = ({ selectedTech }) => {
  const [activeModule, setActiveModule] = useState(0);

  const learningModules = selectedTech?.modules || [
    {
      id: 1,
      title: "Fundamentals",
      description: "Core concepts and basic syntax",
      duration: "2 weeks",
      lessons: 12,
      completed: true,
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Intermediate Concepts",
      description: "Advanced features and patterns",
      duration: "3 weeks",
      lessons: 18,
      completed: true,
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Advanced Topics",
      description: "Complex implementations and optimization",
      duration: "4 weeks",
      lessons: 24,
      completed: false,
      difficulty: "Advanced"
    },
    {
      id: 4,
      title: "Real-world Projects",
      description: "Build production-ready applications",
      duration: "6 weeks",
      lessons: 30,
      completed: false,
      difficulty: "Expert"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success-100 text-success-700 border-success-200';
      case 'Intermediate': return 'bg-warning-100 text-warning-700 border-warning-200';
      case 'Advanced': return 'bg-error-100 text-error-700 border-error-200';
      case 'Expert': return 'bg-secondary-100 text-secondary-700 border-secondary-200';
      default: return 'bg-primary-100 text-primary-700 border-primary-200';
    }
  };

  return (
    <div className="bg-background rounded-2xl border border-border p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Learning Path</h3>
        <p className="text-text-secondary">
          Master {selectedTech?.name || 'this technology'} through our structured curriculum
        </p>
      </div>

      {/* Progress Overview */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-text-secondary">Overall Progress</span>
          <span className="text-sm font-semibold text-secondary-600">
            {Math.round((learningModules.filter(m => m.completed).length / learningModules.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-surface rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-secondary-500 to-accent-500 h-2 rounded-full transition-all duration-500"
            style={{ 
              width: `${(learningModules.filter(m => m.completed).length / learningModules.length) * 100}%` 
            }}
          ></div>
        </div>
      </div>

      {/* Learning Modules */}
      <div className="space-y-4">
        {learningModules.map((module, index) => (
          <div key={module.id} className="relative">
            {/* Connection Line */}
            {index < learningModules.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-16 bg-border"></div>
            )}
            
            <div 
              className={`relative bg-surface border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                activeModule === index 
                  ? 'border-secondary-300 shadow-lg' 
                  : 'border-border hover:border-secondary-200 hover:shadow-md'
              }`}
              onClick={() => setActiveModule(index)}
            >
              {/* Module Icon */}
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  module.completed 
                    ? 'bg-success-500 text-white' 
                    : activeModule === index 
                    ? 'bg-secondary-500 text-white' :'bg-surface-secondary text-text-secondary border-2 border-border'
                }`}>
                  {module.completed ? (
                    <Icon name="Check" size={20} />
                  ) : (
                    <span className="font-bold text-sm">{index + 1}</span>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-text-primary">
                      {module.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary mb-4">
                    {module.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-accent-500" />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="BookOpen" size={16} className="text-secondary-500" />
                      <span>{module.lessons} lessons</span>
                    </div>
                    {module.completed && (
                      <div className="flex items-center gap-2 text-success-600">
                        <Icon name="CheckCircle" size={16} />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {activeModule === index && (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Target" size={16} className="text-secondary-500" />
                        <span className="font-medium text-text-primary">Learning Goals</span>
                      </div>
                      <ul className="text-sm text-text-secondary space-y-1">
                        <li>• Master core concepts</li>
                        <li>• Build practical projects</li>
                        <li>• Apply best practices</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Award" size={16} className="text-accent-500" />
                        <span className="font-medium text-text-primary">Skills Gained</span>
                      </div>
                      <ul className="text-sm text-text-secondary space-y-1">
                        <li>• Technical proficiency</li>
                        <li>• Problem solving</li>
                        <li>• Code optimization</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Zap" size={16} className="text-warning-500" />
                        <span className="font-medium text-text-primary">Prerequisites</span>
                      </div>
                      <ul className="text-sm text-text-secondary space-y-1">
                        <li>• {index === 0 ? 'None required' : `Module ${index} completed`}</li>
                        <li>• Basic programming knowledge</li>
                        <li>• Development environment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPathVisualizer;
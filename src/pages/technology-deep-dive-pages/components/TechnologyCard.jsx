import React from 'react';

import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const TechnologyCard = ({ technology }) => {
  return (
    <div className="group relative bg-background border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${technology.gradient}`}></div>
      
      {/* Technology Icon */}
      <div className="relative z-10 mb-6">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${technology.iconBg} group-hover:scale-110 transition-transform duration-300`}>
          <Icon name={technology.icon} size={32} className={technology.iconColor} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-secondary-600 transition-colors duration-300">
          {technology.name}
        </h3>
        
        <p className="text-text-secondary mb-6 leading-relaxed">
          {technology.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Icon name="BookOpen" size={16} className="text-accent-500" />
            <span className="text-sm text-text-secondary">{technology.lessons} Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={16} className="text-warning-500" />
            <span className="text-sm text-text-secondary">{technology.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Users" size={16} className="text-success-500" />
            <span className="text-sm text-text-secondary">{technology.students}</span>
          </div>
        </div>

        {/* Difficulty Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${technology.difficultyColor}`}>
            {technology.difficulty}
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i}
                name="Star" 
                size={16} 
                className={i < technology.rating ? "text-warning-400 fill-current" : "text-border"} 
              />
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant="primary"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          className="group-hover:bg-secondary-600 transition-colors duration-300"
          onClick={() => console.log(`Start learning ${technology.name}`)}
        >
          Start Learning
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <Icon name={technology.decorativeIcon} size={24} className="text-secondary-300" />
      </div>
    </div>
  );
};

export default TechnologyCard;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProgressTracker = ({ selectedTech }) => {
  const [activeView, setActiveView] = useState('overview');

  const progressData = {
    overview: {
      totalLessons: 84,
      completedLessons: 32,
      totalProjects: 12,
      completedProjects: 5,
      skillLevel: 'Intermediate',
      timeSpent: '47 hours',
      streak: 12,
      certificates: 2
    },
    skills: [
      { name: 'Component Architecture', level: 85, category: 'React' },
      { name: 'State Management', level: 70, category: 'React' },
      { name: 'API Integration', level: 90, category: 'Backend' },
      { name: 'Database Design', level: 65, category: 'Backend' },
      { name: 'Testing', level: 45, category: 'Quality' },
      { name: 'Deployment', level: 80, category: 'DevOps' }
    ],
    achievements: [
      {
        id: 1,
        title: 'First Component',
        description: 'Created your first React component',
        icon: 'Award',
        earned: true,
        earnedDate: '2024-01-15',
        rarity: 'common'
      },
      {
        id: 2,
        title: 'API Master',
        description: 'Successfully integrated 5 different APIs',
        icon: 'Zap',
        earned: true,
        earnedDate: '2024-01-20',
        rarity: 'rare'
      },
      {
        id: 3,
        title: 'Full Stack Hero',
        description: 'Completed a full-stack project',
        icon: 'Star',
        earned: false,
        rarity: 'epic'
      },
      {
        id: 4,
        title: 'Code Streak',
        description: 'Maintained a 30-day coding streak',
        icon: 'Flame',
        earned: false,
        rarity: 'legendary'
      }
    ],
    weeklyActivity: [
      { day: 'Mon', hours: 2.5, lessons: 3 },
      { day: 'Tue', hours: 1.8, lessons: 2 },
      { day: 'Wed', hours: 3.2, lessons: 4 },
      { day: 'Thu', hours: 2.1, lessons: 2 },
      { day: 'Fri', hours: 4.0, lessons: 5 },
      { day: 'Sat', hours: 1.5, lessons: 1 },
      { day: 'Sun', hours: 2.8, lessons: 3 }
    ]
  };

  const getSkillColor = (level) => {
    if (level >= 80) return 'bg-success-500';
    if (level >= 60) return 'bg-warning-500';
    if (level >= 40) return 'bg-accent-500';
    return 'bg-error-500';
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'border-primary-300 bg-primary-50';
      case 'rare': return 'border-accent-300 bg-accent-50';
      case 'epic': return 'border-secondary-300 bg-secondary-50';
      case 'legendary': return 'border-warning-300 bg-warning-50';
      default: return 'border-border bg-surface';
    }
  };

  const views = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'skills', label: 'Skills', icon: 'Target' },
    { id: 'achievements', label: 'Achievements', icon: 'Award' },
    { id: 'activity', label: 'Activity', icon: 'Calendar' }
  ];

  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary-500 to-accent-500 px-8 py-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-1">Progress Dashboard</h3>
            <p className="opacity-90">
              Track your learning journey in {selectedTech?.name || 'Web Development'}
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">
              {Math.round((progressData.overview.completedLessons / progressData.overview.totalLessons) * 100)}%
            </div>
            <div className="text-sm opacity-90">Complete</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-8 py-4 border-b border-border bg-surface">
        <div className="flex gap-2 overflow-x-auto">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeView === view.id
                  ? 'bg-secondary-500 text-white' :'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
              }`}
            >
              <Icon name={view.icon} size={16} />
              {view.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Overview */}
        {activeView === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-surface rounded-xl p-4 text-center">
                <Icon name="BookOpen" size={24} className="text-secondary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary">
                  {progressData.overview.completedLessons}/{progressData.overview.totalLessons}
                </div>
                <div className="text-sm text-text-secondary">Lessons</div>
              </div>
              
              <div className="bg-surface rounded-xl p-4 text-center">
                <Icon name="FolderOpen" size={24} className="text-accent-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary">
                  {progressData.overview.completedProjects}/{progressData.overview.totalProjects}
                </div>
                <div className="text-sm text-text-secondary">Projects</div>
              </div>
              
              <div className="bg-surface rounded-xl p-4 text-center">
                <Icon name="Clock" size={24} className="text-warning-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary">
                  {progressData.overview.timeSpent}
                </div>
                <div className="text-sm text-text-secondary">Time Spent</div>
              </div>
              
              <div className="bg-surface rounded-xl p-4 text-center">
                <Icon name="Flame" size={24} className="text-error-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-text-primary">
                  {progressData.overview.streak}
                </div>
                <div className="text-sm text-text-secondary">Day Streak</div>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-text-primary">Lesson Progress</span>
                  <span className="text-sm text-text-secondary">
                    {progressData.overview.completedLessons} of {progressData.overview.totalLessons}
                  </span>
                </div>
                <div className="w-full bg-surface rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-secondary-500 to-accent-500 h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(progressData.overview.completedLessons / progressData.overview.totalLessons) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-text-primary">Project Progress</span>
                  <span className="text-sm text-text-secondary">
                    {progressData.overview.completedProjects} of {progressData.overview.totalProjects}
                  </span>
                </div>
                <div className="w-full bg-surface rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-accent-500 to-success-500 h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(progressData.overview.completedProjects / progressData.overview.totalProjects) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills */}
        {activeView === 'skills' && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-text-primary mb-2">Skill Assessment</h4>
              <p className="text-text-secondary">Your current proficiency levels across different areas</p>
            </div>
            
            <div className="space-y-4">
              {progressData.skills.map((skill, index) => (
                <div key={index} className="bg-surface rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h5 className="font-semibold text-text-primary">{skill.name}</h5>
                      <span className="text-sm text-text-secondary">{skill.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-text-primary">{skill.level}%</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-surface-secondary rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${getSkillColor(skill.level)}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {activeView === 'achievements' && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-text-primary mb-2">Achievements</h4>
              <p className="text-text-secondary">Unlock badges as you progress through your learning journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {progressData.achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`rounded-xl p-6 border-2 transition-all duration-200 ${
                    achievement.earned 
                      ? `${getRarityColor(achievement.rarity)} shadow-md` 
                      : 'border-border bg-surface opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      achievement.earned ? 'bg-white shadow-sm' : 'bg-surface-secondary'
                    }`}>
                      <Icon 
                        name={achievement.icon} 
                        size={24} 
                        className={achievement.earned ? 'text-secondary-500' : 'text-text-secondary'} 
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h5 className="font-semibold text-text-primary mb-1">
                        {achievement.title}
                      </h5>
                      <p className="text-sm text-text-secondary mb-2">
                        {achievement.description}
                      </p>
                      
                      {achievement.earned && achievement.earnedDate && (
                        <div className="text-xs text-success-600 font-medium">
                          Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                        </div>
                      )}
                      
                      {!achievement.earned && (
                        <div className="text-xs text-text-secondary">
                          Not yet earned
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activity */}
        {activeView === 'activity' && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-text-primary mb-2">Weekly Activity</h4>
              <p className="text-text-secondary">Your learning activity over the past week</p>
            </div>
            
            <div className="bg-surface rounded-xl p-6">
              <div className="flex items-end justify-between gap-2 h-32 mb-4">
                {progressData.weeklyActivity.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-secondary-500 rounded-t-lg transition-all duration-500 hover:bg-secondary-600"
                      style={{ height: `${(day.hours / 4) * 100}%`, minHeight: '4px' }}
                      title={`${day.hours} hours, ${day.lessons} lessons`}
                    ></div>
                    <div className="text-xs text-text-secondary mt-2 font-medium">
                      {day.day}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <div className="text-sm text-text-secondary">
                  Total this week: {progressData.weeklyActivity.reduce((sum, day) => sum + day.hours, 0)} hours
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="px-8 py-4 bg-surface border-t border-border">
        <div className="flex items-center justify-between">
          <div className="text-sm text-text-secondary">
            Keep up the great work! You're making excellent progress.
          </div>
          <Button
            variant="primary"
            size="sm"
            iconName="ArrowRight"
            onClick={() => console.log('Continue learning')}
          >
            Continue Learning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
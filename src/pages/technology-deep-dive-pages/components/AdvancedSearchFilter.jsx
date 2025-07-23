import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const AdvancedSearchFilter = ({ onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    searchQuery: '',
    difficulty: 'all',
    projectType: 'all',
    duration: 'all',
    technology: 'all',
    learningObjective: 'all'
  });

  const filterOptions = {
    difficulty: [
      { value: 'all', label: 'All Levels' },
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced' },
      { value: 'expert', label: 'Expert' }
    ],
    projectType: [
      { value: 'all', label: 'All Types' },
      { value: 'web-app', label: 'Web Application' },
      { value: 'mobile-app', label: 'Mobile App' },
      { value: 'api', label: 'API Development' },
      { value: 'component', label: 'Component Library' },
      { value: 'tool', label: 'Development Tool' }
    ],
    duration: [
      { value: 'all', label: 'Any Duration' },
      { value: 'short', label: '1-2 weeks' },
      { value: 'medium', label: '3-6 weeks' },
      { value: 'long', label: '7+ weeks' }
    ],
    technology: [
      { value: 'all', label: 'All Technologies' },
      { value: 'react', label: 'React' },
      { value: 'nodejs', label: 'Node.js' },
      { value: 'nextjs', label: 'Next.js' },
      { value: 'express', label: 'Express.js' },
      { value: 'mern', label: 'MERN Stack' }
    ],
    learningObjective: [
      { value: 'all', label: 'All Objectives' },
      { value: 'fundamentals', label: 'Learn Fundamentals' },
      { value: 'portfolio', label: 'Build Portfolio' },
      { value: 'career', label: 'Career Preparation' },
      { value: 'skills', label: 'Skill Enhancement' },
      { value: 'certification', label: 'Certification Prep' }
    ]
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      searchQuery: '',
      difficulty: 'all',
      projectType: 'all',
      duration: 'all',
      technology: 'all',
      learningObjective: 'all'
    };
    setFilters(clearedFilters);
    onFilterChange?.(clearedFilters);
  };

  const getActiveFilterCount = () => {
    return Object.entries(filters).filter(([key, value]) => 
      key !== 'searchQuery' && value !== 'all'
    ).length + (filters.searchQuery ? 1 : 0);
  };

  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden">
      {/* Search Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
            />
            <Input
              type="search"
              placeholder="Search courses, projects, tutorials..."
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
              className="pl-10 pr-4 py-3 text-base"
            />
          </div>
          
          <Button
            variant="outline"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-shrink-0"
          >
            Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className={`transition-all duration-300 ease-out ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="p-6 bg-surface">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(filterOptions).map(([filterKey, options]) => (
              <div key={filterKey}>
                <label className="block text-sm font-medium text-text-primary mb-2 capitalize">
                  {filterKey.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <select
                  value={filters[filterKey]}
                  onChange={(e) => handleFilterChange(filterKey, e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Filter Actions */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
            <div className="text-sm text-text-secondary">
              {getActiveFilterCount() > 0 ? (
                `${getActiveFilterCount()} filter${getActiveFilterCount() > 1 ? 's' : ''} applied`
              ) : (
                'No filters applied'
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                disabled={getActiveFilterCount() === 0}
              >
                Clear All
              </Button>
              <Button
                variant="primary"
                size="sm"
                iconName="Search"
                onClick={() => console.log('Apply filters:', filters)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="p-4 bg-surface-secondary border-t border-border">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="Zap" size={16} className="text-accent-500" />
          <span className="text-sm font-medium text-text-primary">Quick Filters</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Beginner Friendly', filters: { difficulty: 'beginner' } },
            { label: 'Portfolio Projects', filters: { learningObjective: 'portfolio' } },
            { label: 'React Focus', filters: { technology: 'react' } },
            { label: 'Quick Wins', filters: { duration: 'short' } },
            { label: 'Full Stack', filters: { technology: 'mern' } }
          ].map((quickFilter, index) => (
            <button
              key={index}
              onClick={() => {
                Object.entries(quickFilter.filters).forEach(([key, value]) => {
                  handleFilterChange(key, value);
                });
              }}
              className="px-3 py-1 bg-background border border-border rounded-full text-sm text-text-secondary hover:text-text-primary hover:border-secondary-300 transition-all duration-200"
            >
              {quickFilter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearchFilter;
import React from 'react';

import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LearningUniverseSection from './components/LearningUniverseSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import SkillAssessmentWidget from './components/SkillAssessmentWidget';
import CommunityActivityFeed from './components/CommunityActivityFeed';
import FooterSection from './components/FooterSection';

const HomepagePremiumDeveloperLearningPlatform = () => {
  return (
    <div className="min-h-screen dark:bg-black bg-white">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Learning Universe Section */}
        {/* <LearningUniverseSection /> */}
         {/* Skill Assessment Widget */}
        <SkillAssessmentWidget />
        
        {/* Success Stories Section */}
        <SuccessStoriesSection />
        
       
        
        {/* Community Activity Feed */}
        <CommunityActivityFeed />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default HomepagePremiumDeveloperLearningPlatform;
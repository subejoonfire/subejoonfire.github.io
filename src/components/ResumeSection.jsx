import React from 'react';
import SkillsSection from './SkillsSection';
import TimelineSection from './TimelineSection';
import KnowledgeSection from './KnowledgeSection';

const ResumeSection = () => {
  return (
    <div className="resume-container">
      <div className="resume-header-container">
        <span className="Re">Re</span>
        <span className="Sume">sume</span>
      </div>
      <div className="resume-content-container">
        <SkillsSection />
        <TimelineSection />
        <KnowledgeSection />
      </div>
    </div>
  );
};

export default ResumeSection;
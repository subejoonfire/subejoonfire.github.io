import React, { useState } from 'react';
import Container from './Container';
import ProfileSidebar from './ProfileSidebar';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import CertificatesSection from './CertificatesSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';

const MainApp = () => {
  const [activeSection, setActiveSection] = useState(0);

  const handleNavigation = (section) => {
    switch (section) {
      case 'home':
        setActiveSection(0);
        break;
      case 'person':
        setActiveSection(1);
        break;
      case 'school':
        setActiveSection(2);
        break;
      case 'certificate':
        setActiveSection(3);
        break;
      case 'portfolio':
        setActiveSection(4);
        break;
      case 'mail':
        setActiveSection(5);
        break;
      default:
        setActiveSection(0);
    }
  };

  const handleSectionSwitch = (direction) => {
    if (direction === 'next') {
      if (activeSection + 1 < 6) {
        setActiveSection(activeSection + 1);
      }
    } else if (direction === 'previous') {
      if (activeSection - 1 >= 0) {
        setActiveSection(activeSection - 1);
      }
    }
  };

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 0:
        return <HomeSection className="home-transition-container" />;
      case 1:
        return <AboutSection className="aboutme-transition-container" />;
      case 2:
        return <ResumeSection className="resume-transition-container" />;
      case 3:
        return <CertificatesSection className="resume-transition-container" />;
      case 4:
        return <PortfolioSection className="resume-transition-container" />;
      case 5:
        return <ContactSection className="contact-transition-container" />;
      default:
        return <HomeSection className="home-transition-container" />;
    }
  };

  return (
    <>
      <Container className="content-container">
        <ProfileSidebar />
        
        <Container className="rounded-5 border border-secondary">
          <div className="navbar-container">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}
              className="material-symbols-outlined home-navbar"
            >
              home
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('person'); }}
              className="material-symbols-outlined aboutme-navbar"
            >
              person
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('school'); }}
              className="material-symbols-outlined resume-navbar"
            >
              school
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('certificate'); }}
              className="material-symbols-outlined lisence-navbar"
            >
              workspace_premium
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('portfolio'); }}
              className="material-symbols-outlined lisence-navbar"
            >
              work
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('mail'); }}
              className="material-symbols-outlined contact-navbar"
            >
              mail
            </a>
          </div>
          
          <div className="profile-container">
            <div className="transition-container">
              {renderCurrentSection()}
            </div>
          </div>
        </Container>
      </Container>
      
      <div className="switchbutton-container">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleSectionSwitch('previous'); }}
          className="material-symbols-outlined backward next-page"
        >
          trending_flat
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleSectionSwitch('next'); }}
          className="material-symbols-outlined previous-page"
        >
          trending_flat
        </a>
      </div>
    </>
  );
};

export default MainApp;
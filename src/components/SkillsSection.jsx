import React from 'react';

const SkillsSection = () => {
  return (
    <div className="coding-skills-container">
      <div className="coding-skills-content-container">
        <div className="skills">
          <div className="header">
            <h1>Design </h1>
            <h1 className="skills-header">Skills</h1>
          </div>
          <div className="skill-container">
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">Web Design</span>
                <span className="percentage">70%</span>
              </div>
              <div className="progress progress-web"></div>
            </div>
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">Logo Design</span>
                <span className="percentage">50%</span>
              </div>
              <div className="progress progress-logo"></div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="header">
            <h1>Coding</h1>
            <h1 className="skills-header">Skills</h1>
          </div>
          <div className="skill-container">
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">C++</span>
                <span className="percentage">65%</span>
              </div>
              <div className="progress progress-cpp"></div>
            </div>
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">Javascript</span>
                <span className="percentage">70%</span>
              </div>
              <div className="progress progress-javascript"></div>
            </div>
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">PHP</span>
                <span className="percentage">90%</span>
              </div>
              <div className="progress progress-php"></div>
            </div>
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">HTML/CSS</span>
                <span className="percentage">90%</span>
              </div>
              <div className="progress progress-htmlcss"></div>
            </div>
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">Python</span>
                <span className="percentage">45%</span>
              </div>
              <div className="progress progress-python"></div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="header">
            <h1>Database</h1>
            <h1 className="skills-header">Skills</h1>
          </div>
          <div className="skill-container">
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">MySQL</span>
                <span className="percentage">85%</span>
              </div>
              <div className="progress progress-mysql"></div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="header">
            <h1>Framework</h1>
            <h1 className="skills-header">Skills</h1>
          </div>
          <div className="skill-container">
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">Laravel</span>
                <span className="percentage">70%</span>
              </div>
              <div className="progress progress-laravel"></div>
            </div>
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">React JS</span>
                <span className="percentage">65%</span>
              </div>
              <div className="progress progress-reactjs"></div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="header">
            <h1>Microsoft Office</h1>
            <h1 className="skills-header">Skills</h1>
          </div>
          <div className="skill-container">
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">Excel</span>
                <span className="percentage">65%</span>
              </div>
              <div className="progress progress-excel"></div>
            </div>
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">Word</span>
                <span className="percentage">60%</span>
              </div>
              <div className="progress progress-word"></div>
            </div>
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">Powerpoint</span>
                <span className="percentage">60%</span>
              </div>
              <div className="progress progress-powerpoint"></div>
            </div>
            <div className="skill-item">
              <div className="header">
                <span className="skill-name">Visio</span>
                <span className="percentage">80%</span>
              </div>
              <div className="progress progress-visio"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;